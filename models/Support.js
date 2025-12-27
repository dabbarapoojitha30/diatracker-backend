import mongoose from "mongoose";

const supportSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  treatment: String,
  amount: Number,
  status: { type: String, default: "pending" },
  sponsorId: mongoose.Schema.Types.ObjectId
});

export default mongoose.model("Support", supportSchema);
