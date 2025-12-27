import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { email } = req.body;
  const exists = await User.findOne({ email });
  if (exists) return res.status(400).json({ error: "Email already exists" });
  await User.create(req.body);
  res.json({ message: "Registered" });
});

router.post("/login", async (req, res) => {
  const { email, password, role } = req.body;
  const user = await User.findOne({ email, password, role });
  if (!user) return res.status(400).json({ error: "Invalid credentials" });
  res.json({ user });
});

export default router;
