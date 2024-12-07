import mongoose, { Schema, Document, Model } from "mongoose";

// TypeScript Interface
export interface IAchievement extends Document {
  image: string;
  type: string;
  title: string;
  description: string;
  achievedDate?: Date | null;
  ongoing?: string;
}

// Mongoose Schema
const AchievementSchema: Schema<IAchievement> = new Schema({
  image: { type: String, required: true },
  type: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  achievedDate: { type: Date },
  ongoing: { type: String, default: "off" },
});

// Mongoose Model
export const Achievement: Model<IAchievement> =
  mongoose.models.Achievement ||
  mongoose.model<IAchievement>("Achievement", AchievementSchema);
