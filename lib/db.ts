import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  if (isConnected) {
    console.log("=> Using existing database connection");
    return;
  }

  if (mongoose.connection.readyState === 1) {
    console.log("=> Using already connected database");
    isConnected = true;
    return;
  }

  try {
    const mongoUri: string = process.env.MONGO_URI!;
    if (!mongoUri) {
      throw new Error("MONGODB_URI environment variable is not set.");
    }
    await mongoose.connect(mongoUri);
    isConnected = true;
    console.log("=> Successfully connected to MongoDB");
  } catch (error) {
    console.error("=> Database connection failed:", error);
    throw error;
  }
};
