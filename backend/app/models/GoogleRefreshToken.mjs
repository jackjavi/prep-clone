import mongoose from "mongoose";

const googleRefreshTokenSchema = new mongoose.Schema(
  {
    googleRefreshToken: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const GoogleRefreshToken = mongoose.model(
  "GoogleRefreshToken",
  googleRefreshTokenSchema
);

export default GoogleRefreshToken;
