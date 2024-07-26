import authRoutes from "./auth/authRoutes.mjs";

const routes = (app) => {
  app.use("/api/auth", authRoutes);
};

export default routes;
