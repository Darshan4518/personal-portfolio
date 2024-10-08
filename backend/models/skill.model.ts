import mongoose, { Schema, model, models, Document, Model } from "mongoose";

export type SkillType = "frontend" | "backend" | "android" | "others";

export interface ISkill extends Document {
  name: string;
  imageUrl: string;
  type: SkillType;
}

const skillSchema = new Schema<ISkill>(
  {
    name: { type: String, required: true, unique: true },
    imageUrl: { type: String, required: true },
    type: {
      type: String,
      enum: ["frontend", "backend", "android", "others"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

skillSchema.index({ createdAt: 1 });

const Skill: Model<ISkill> =
  models.Skill || model<ISkill>("Skill", skillSchema);

export default Skill;
