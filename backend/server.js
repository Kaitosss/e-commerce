import "dotenv/config";
import express from "express";
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./config/db.js";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port : " + PORT);
  connectDB();
});
