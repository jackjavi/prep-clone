import express from "express";
import passport from "passport";
import GoogleRefreshToken from "../../models/GoogleRefreshToken.mjs";
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

export default router;
