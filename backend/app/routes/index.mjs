import authRoutes from "./auth/authRoutes.mjs";
import appRoutes from "./app/appRoutes.mjs";
import { createGoogleMeetLink } from "../services/googleMeetService.mjs";

const routes = (app) => {
  app.use("/api/auth", authRoutes);
  app.use("/api/app", appRoutes);
  app.get("/api/googleMeet", createGoogleMeetLink);
};

export default routes;
