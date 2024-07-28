import { google } from "googleapis";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";
import path from "path";

const SCOPES = ["https://www.googleapis.com/auth/calendar.events"];
const TOKEN_PATH = "token.json";

// Load client secrets from a local file.
const credentials = JSON.parse(fs.readFileSync("credentials.json"));

const { client_secret, client_id, redirect_uris } = credentials.installed;
const oAuth2Client = new google.auth.OAuth2(
  client_id,
  client_secret,
  redirect_uris[0]
);

// Check if we have previously stored a token.
if (fs.existsSync(TOKEN_PATH)) {
  const token = fs.readFileSync(TOKEN_PATH);
  oAuth2Client.setCredentials(JSON.parse(token));
} else {
  console.log("Token not found, please run the authorization process.");
}

const calendar = google.calendar({ version: "v3", auth: oAuth2Client });

const createGoogleMeetLink = async (meetingDetails) => {
  const event = {
    summary: meetingDetails.summary,
    description: meetingDetails.description,
    start: {
      dateTime: meetingDetails.startTime,
      timeZone: "America/Los_Angeles",
    },
    end: {
      dateTime: meetingDetails.endTime,
      timeZone: "America/Los_Angeles",
    },
    conferenceData: {
      createRequest: {
        requestId: uuidv4(),
        conferenceSolutionKey: { type: "hangoutsMeet" },
      },
    },
    attendees: meetingDetails.attendees.map((email) => ({ email })),
  };

  const response = await calendar.events.insert({
    calendarId: "primary",
    resource: event,
    conferenceDataVersion: 1,
  });

  return response.data.hangoutLink;
};

export { createGoogleMeetLink };
