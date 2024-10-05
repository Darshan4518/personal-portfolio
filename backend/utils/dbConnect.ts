import mongoose, { Connection } from "mongoose";

export const connectDB = async () => {
  try {
    const mongooseInstance = await mongoose.connect(process.env.MONGO_URI!);
  } catch (error) {
    return null;
  }
};
