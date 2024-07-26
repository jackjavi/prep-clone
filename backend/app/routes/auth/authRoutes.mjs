import express from "express";
import { register } from "../../controllers/auth/authController.mjs";

const authRoutes = express.Router();

authRoutes.post("/register", register);

export default authRoutes;
