import express from "express";
import Reading from "../models/Reading.js";

const router = express.Router();

router.post("/", async (req, res) => {
  await Reading.create(req.body);
  res.json({ message: "Saved" });
});

router.get("/:id", async (req, res) => {
  const data = await Reading.find({ userId: req.params.id }).sort({ date: -1 });
  res.json(data);
});

export default router;
