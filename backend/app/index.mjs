import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

import cors from "cors";
app.use(cors());
app.use(cookieParser());
import connectDatabase from "./utils/database.mjs";
import appRoutes from "./routes/index.mjs";

app.use(express.static("public"));
app.set("view engine", "ejs");

appRoutes(app);

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

const PORT = process.env.PORT || 5555;
app.listen(PORT, () => {
  connectDatabase();
  console.log(`Server listening on port ${PORT}`);
});

export default app;
