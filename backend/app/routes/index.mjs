import authRoutes from "./auth/authRoutes.mjs";
import appRoutes from "./app/appRoutes.mjs";

const routes = (app) => {
  app.use("/api/auth", authRoutes);
  app.use("/api/app", appRoutes);
};

export default routes;
