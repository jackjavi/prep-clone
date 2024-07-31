import fs from "fs/promises";
import { verifyToken } from "../../services/generateToken.mjs";
import path from "path";
import { fileURLToPath } from "url";
import Session from "../../models/Session.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storageDir = path.join(__dirname, "../../storage");
const sessionsFile = path.join(storageDir, "sessions.json");

const checkAuth = async (req, res) => {
  try {
    if (req.cookies.token && req.cookies.user) {
      res.json({
        token: req.cookies.token,
        isAuthenticated: true,
        user: req.cookies.user,
      });
    } else {
      res.json({ isAuthenticated: false });
    }
  } catch (error) {
    console.error("Check auth error:", error);
    res
      .status(500)
      .send({ message: `Internal server error: ${error.message}` });
  }
};

const logout = async (req, res) => {
  const token = req.cookies.token;
  try {
    const decoded = verifyToken(token);
    if (!decoded) {
      return res.status(401).json({ error: "Invalid or expired token" });
    }

    const sessionId = decoded.sessionId;

    // Remove the session from MongoDB
    await Session.findOneAndDelete({ sessionId });

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
