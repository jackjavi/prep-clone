import express from "express";
import { createGoogleMeetLink } from "../../services/googleMeetService.mjs";

const router = express.Router();

router.get("/googleMeet", createGoogleMeetLink);

export default router;
