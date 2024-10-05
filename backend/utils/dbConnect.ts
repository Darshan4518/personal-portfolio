import mongoose, { Connection } from "mongoose";

export const connectDB = async () => {
  try {
    const mongooseInstance = await mongoose.connect(process.env.MONGO_URI!);
    console.log("database connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return null;
  }
};
