import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String, // patient | sponsor
  age: Number,
  gender: String
});

export default mongoose.model("User", userSchema);
