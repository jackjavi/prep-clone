import authRoutes from "./auth/authRoutes.mjs";
import appRoutes from "./app/appRoutes.mjs";
import googleMeet from "./google/googleMeet.mjs";

const routes = (app) => {
  app.use("/api/auth", authRoutes);
  app.use("/api/app", appRoutes);
  app.use("/api/google", googleMeet);
};

export default routes;
