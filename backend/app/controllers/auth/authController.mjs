import crypto from "crypto";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import User from "../../models/User.mjs";
import Session from "../../models/Session.mjs";
import { generateToken } from "../../services/generateToken.mjs";

const register = async (req, res) => {
  const {
    email,
    password,
    name,
    role,
    city,
    institute,
    internshipOrStudent,
    field,
    interestedInConsulting,
  } = req.body;

  try {
    const verificationToken = crypto.randomBytes(20).toString("hex");

    const user = new User({
      email,
      password,
      name,
      role,
      city,
      institute,
      internshipOrStudent,
      field,
      interestedInConsulting,
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

    const sessionId = uuidv4();
    const token = generateToken({
      userId: user._id.toString(),
      sessionId,
    });

    const session = new Session({
      sessionId,
      userId: user._id,
    });
    await session.save();

    const userData = {
      email: user.email,
      id: user._id.toString(),
      name: user.name,
    };

    res.cookie("user", JSON.stringify(userData), {
      maxAge: 43200000, // 12 hours
    });

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
