import express from "express";
import cookieParser from "cookie-parser";
import GoogleRefreshToken from "./models/GoogleRefreshToken.mjs";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

import cors from "cors";
app.use(cors());
app.use(cookieParser());
import connectDatabase from "./utils/database.mjs";
import appRoutes from "./routes/index.mjs";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

const clientID = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
const callback_URL = process.env.GOOGLE_CALLBACK_URL;

app.use(express.static("public"));
app.set("view engine", "ejs");

appRoutes(app);

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

passport.use(
  new GoogleStrategy(
    {
      clientID: clientID,
      clientSecret: clientSecret,
      callbackURL: callback_URL,
    },
    async function (accessToken, refreshToken, profile, cb) {
      console.log("refreshToken:", refreshToken);
      try {
        await GoogleRefreshToken.deleteMany();

        const googleRefreshToken = new GoogleRefreshToken({
          googleRefreshToken: refreshToken,
        });
        await googleRefreshToken.save();

        return cb();
      } catch (error) {
        console.error("Error handling refresh token:", error);
        return cb(error);
      }
    }
  )
);

const PORT = process.env.PORT || 5555;
app.listen(PORT, () => {
  connectDatabase();
  console.log(`Server listening on port ${PORT}`);
});

export default app;
