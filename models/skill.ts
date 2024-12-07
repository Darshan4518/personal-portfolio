import mongoose, { Document, Schema, Model } from "mongoose";

export interface ISkill extends Document {
  name: string;
  image: string;
  type: "frontend" | "backend" | "android" | "others";
  pinned: string;
}

const SkillSchema = new Schema<ISkill>({
  name: { type: String, required: true },
  image: { type: String, required: true },
  type: {
    type: String,
    required: true,
    enum: ["frontend", "backend", "android", "others"],
  },
  pinned: {
    type: String,
    default: "off",
  },
});

export const Skill: Model<ISkill> =
  mongoose.models.Skill || mongoose.model<ISkill>("Skill", SkillSchema);
