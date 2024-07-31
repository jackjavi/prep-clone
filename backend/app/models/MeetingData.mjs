import mongoose from "mongoose";

const meetingSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  visibility: {
    novice: { type: Boolean, default: false },
    advanced: { type: Boolean, default: false },
    pro: { type: Boolean, default: false },
  },
  meetingLanguage: {
    type: String,
    required: true,
  },
  remarks: {
    type: String,
    default: "",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  meetingLink: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const MeetingData = mongoose.model("MeetingData", meetingSchema);

export default MeetingData;
