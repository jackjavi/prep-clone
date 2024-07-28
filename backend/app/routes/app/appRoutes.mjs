import express from "express";
import { checkAuth, logout } from "../../controllers/app/appController.mjs";
import authenticate from "../../middlewares/authenticate.mjs";

const router = express.Router();

router.get("/checkAuth", authenticate, checkAuth);
router.post("/logout", authenticate, logout);

export default router;
