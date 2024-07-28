import crypto from "crypto";
import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import User from "../../models/User.mjs";
import { generateToken, verifyToken } from "../../services/generateToken.mjs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storageDir = path.join(__dirname, "../../storage");
const sessionsFile = path.join(storageDir, "sessions.json");

const readJSONFile = (filePath) => {
  try {
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath);
      return JSON.parse(data);
    } else {
      return {};
    }
  } catch (error) {
    console.error("Error reading JSON file:", error);
    return {};
  }
};

const writeJSONFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error writing JSON file:", error);
  }
};

const register = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    const verificationToken = crypto.randomBytes(20).toString("hex");

    const user = new User({
      email,
      password,
      name,
      verificationToken,
    });
    await user.save();

    res.status(200).json({
      user,
      message: "Registration successful, please verify your email.",
    });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    {
      /*if (!user.isVerified) {
      return res.status(403).json({ error: "Email not verified" });
    }*/
    }

    const sessionId = uuidv4();
    const token = generateToken({
      userId: user._id.toString(),
      sessionId,
    });

    if (!fs.existsSync(storageDir)) {
      fs.mkdirSync(storageDir);
    }

    const sessions = readJSONFile(sessionsFile);

    sessions[sessionId] = { userId: user._id.toString() };

    writeJSONFile(sessionsFile, sessions);

    const userData = {
      email: user.email,
      id: user._id.toString(),
      name: user.name,
      profilePicture: user.profilePicture,
    };

    req.user = user;

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 43200000, // 12 hours
    });

    res.status(200).json({ message: "Login successful", userData });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export { register, login };
