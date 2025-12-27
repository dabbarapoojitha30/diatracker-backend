// readingRoutes.js
import express from "express";

const router = express.Router();

// Example route: GET /api/readings
router.get("/", (req, res) => {
  res.json({ message: "Readings route working" });
});

// Example route: POST /api/readings
router.post("/", (req, res) => {
  const { value, date } = req.body;
  // Normally, you would save to DB here
  res.json({ message: "Reading saved", value, date });
});

export default router;
