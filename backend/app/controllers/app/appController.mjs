import fs from "fs/promises";
import { verifyToken } from "../../services/generateToken.mjs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storageDir = path.join(__dirname, "../../storage");
const sessionsFile = path.join(storageDir, "sessions.json");

const checkAuth = (req, res) => {
  res.json({
    token: req.cookies.token,
    isAuthenticated: true,
    user: req.user,
  });
};

const logout = async (req, res) => {
  const token = req.cookies.token;
  try {
    const decoded = verifyToken(token);
    if (!decoded) {
      return res.status(401).json({ error: "Invalid or expired token" });
    }

    const sessionId = decoded.sessionId;
    const storagePath = path.join(__dirname, "../../storage/sessions.json"); // Adjust the path as necessary

    // Read the sessions file
    const sessionsData = await fs.readFile(storagePath, { encoding: "utf-8" });
    let sessions = JSON.parse(sessionsData);

    // Ensure sessions is an object
    if (typeof sessions !== "object" || sessions === null) {
      throw new Error("Invalid sessions format");
    }

    // Remove the session
    delete sessions[sessionId];

    // Write the updated sessions back to the file
    await fs.writeFile(storagePath, JSON.stringify(sessions, null, 2), {
      encoding: "utf-8",
    });

    res.clearCookie("token", {
      httpOnly: true,
      // sameSite: "none",
    });

    res.status(200).send({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Logout error:", error);
    res
      .status(500)
      .send({ message: `Internal server error: ${error.message}` });
  }
};

export { checkAuth, logout };
