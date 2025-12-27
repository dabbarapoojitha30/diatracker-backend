import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // use env variable
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("MongoDB Error", error.message);
  }
};
