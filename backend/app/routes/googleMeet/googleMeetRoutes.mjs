import express from "express";
import passport from "passport";
import mongoose from "mongoose";
import GoogleRefreshToken from "../../models/GoogleRefreshToken.mjs";
import MeetingData from "../../models/MeetingData.mjs";
import Meeting from "google-meet-api";
import sendEmail from "../../services/SendEmail.mjs";
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
    refreshToken: token[0].googleRefreshToken,
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
  const userName = req.body.userName;
  const userEmail = req.body.userEmail;
  const visibility = req.body.visibility;
  const meetingLanguage = req.body.meetingLanguage;
  const remarks = req.body.remarks || "";
  const token = await GoogleRefreshToken.find({});

  Meeting.meet({
    clientId: clientID,
    clientSecret: clientSecret,
    refreshToken: token[0].googleRefreshToken,
    date: date,
    time: time,
    summary: summary,
    location: location,
    description: description,
    checking: checking,
  })
    .then((response) => {
      const meetingLink = response;
      const timeArray = time.split(":");
      const hours = parseInt(timeArray[0], 10);
      const minutes = parseInt(timeArray[1], 10);
      const totalMinutes = hours * 60 + minutes + 90;

      const endHours = Math.floor(totalMinutes / 60) % 24;
      const endMinutes = totalMinutes % 60;

      const paddedStartHours = String(hours).padStart(2, "0");
      const paddedStartMinutes = String(minutes).padStart(2, "0");
      const paddedEndHours = String(endHours).padStart(2, "0");
      const paddedEndMinutes = String(endMinutes).padStart(2, "0");

      const newTime = `${paddedStartHours}:${paddedStartMinutes} - ${paddedEndHours}:${paddedEndMinutes}`;

      const meetingData = new MeetingData({
        date,
        time: newTime,
        visibility,
        meetingLanguage,
        remarks,
        userId,
        userName,
        meetingLink,
        summary,
        description,
      });
      meetingData.save();
      const to = userEmail;
      const subject = "Meeting Scheduled";
      const text = `You have a meeting scheduled on ${date} at ${time}. The meeting link is ${meetingLink}`;
      sendEmail({ to, subject, text });
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
    scope: [
      "profile",
      "https://www.googleapis.com/auth/calendar",
      "email",
      "https://www.googleapis.com/auth/calendar.events",
      "https://www.googleapis.com/auth/calendar.events.readonly",
    ],
    accessType: "offline",
    prompt: "consent",
  })
);

router.get("/api/google/meetings", async (req, res) => {
  const meetings = await MeetingData.find({});
  res.status(200).json(meetings);
});

router.put("/api/google/accept-meeting", async (req, res) => {
  try {
    const meetingId = new mongoose.Types.ObjectId(req.body.meetingId);
    const user2Id = new mongoose.Types.ObjectId(req.body.user2Id);
    const user2Email = req.body.user2Email;
    const meeting = await MeetingData.findById(meetingId);
    meeting.user2Id = user2Id;
    meeting.user2Email = user2Email;
    meeting.save();
    const to = user2Email;
    const subject = "Meeting Scheduled";
    const text = `You have a meeting scheduled on ${meeting.date} at ${meeting.time}. The meeting link is ${meeting.meetingLink}`;
    sendEmail({ to, subject, text });
    res.status(200).json("Meeting scheduled successfully");
  } catch (error) {
    console.error("Error accepting invitation:", error);
    res.status(500).json(error);
  }
});

export default router;
