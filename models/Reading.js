import mongoose from "mongoose";

const readingSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  glucose: Number,
  systolic: Number,
  diastolic: Number,
  heartRate: Number,
  weight: Number,
  date: { type: Date, default: Date.now }
});

export default mongoose.model("Reading", readingSchema);
