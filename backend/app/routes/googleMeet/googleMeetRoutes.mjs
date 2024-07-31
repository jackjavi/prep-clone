import express from "express";
import passport from "passport";
import mongoose from "mongoose";
import GoogleRefreshToken from "../../models/GoogleRefreshToken.mjs";
import MeetingData from "../../models/MeetingData.mjs";
import Meeting from "google-meet-api";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

const clientID = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

router.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

router.get("/gmeet", async (req, res) => {
  const token = await GoogleRefreshToken.find({});
  Meeting.meet({
    clientId: clientID,
    clientSecret: clientSecret,
    refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
    date: "2024-12-12",
    time: "10:59",
    summary: "summary",
    location: "location",
    description: "description",
    checking: 0,
  })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.post("/api/google/gmeet", async (req, res) => {
  const date = req.body.date.slice(0, 10);
  const time = req.body.time;
  const summary = req.body.summary || "Mock Interview";
  const location = req.body.location || "Online";
  const description = req.body.description || "Mock Interview";
  const checking = req.body.checking || 0;
  const userId = new mongoose.Types.ObjectId(req.body.userID);
  const visibility = req.body.visibility;
  const meetingLanguage = req.body.meetingLanguage;
  const remarks = req.body.remarks || "";

  Meeting.meet({
    clientId: clientID,
    clientSecret: clientSecret,
    refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
    date: date,
    time: time,
    summary: summary,
    location: location,
    description: description,
    checking: checking,
  })
    .then((response) => {
      const meetingLink = response;
      const meetingData = new MeetingData({
        date,
        time,
        visibility,
        meetingLanguage,
        remarks,
        userId,
        meetingLink,
        summary,
        description,
      });
      meetingData.save();
      res.status(200).json("Meeting scheduled successfully");
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.get(
  "/auth/callback",
  passport.authenticate("google", { failureRedirect: "/gmeet" })
);

router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "https://www.googleapis.com/auth/calendar"],
    accessType: "offline",
    prompt: "consent",
  })
);

router.get("/api/google/meetings", async (req, res) => {
  const meetings = await MeetingData.find({});
  res.status(200).json(meetings);
});

export default router;
