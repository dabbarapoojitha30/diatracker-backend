import { connectDB } from "./config/db.js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import supportRoutes from "./routes/supportRoutes.js";
import readingRoutes from "./routes/readingRoutes.js";

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// ✅ ROOT TEST ROUTE (THIS FIXES YOUR ERROR)
app.get("/", (req, res) => {
  res.send("DiaTracker Backend is Running");
});

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/support", supportRoutes);
app.use("/api/readings", readingRoutes);

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
