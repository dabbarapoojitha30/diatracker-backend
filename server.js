// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import connectDB from "./config/db.js";        // MongoDB connection
import authRoutes from "./routes/authRoutes.js";
import readingRoutes from "./routes/readingRoutes.js"; // <- match file name exactly
import supportRoutes from "./routes/supportRoutes.js";

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/readings", readingRoutes);   // <- same variable as imported
app.use("/api/support", supportRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("DiaTracker Backend Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
