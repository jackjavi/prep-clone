import authRoutes from "./auth/authRoutes.mjs";
import appRoutes from "./app/appRoutes.mjs";
import googleMeetRoutes from "./googleMeet/googleMeetRoutes.mjs";

const routes = (app) => {
  app.use("/api/auth", authRoutes);
  app.use("/api/app", appRoutes);
  app.use("/", googleMeetRoutes);
};

export default routes;
