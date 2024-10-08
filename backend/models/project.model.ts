import { Schema, model, models, Document, Model } from "mongoose";

export interface IProject extends Document {
  projectName: string;
  description: string;
  techStack: string;
  livePreviewLink: string;
  codeLink: string;
  imageUrl: string;
  type: "website" | "app";
  createdAt?: Date;
  updatedAt?: Date;
}

const projectSchema = new Schema<IProject>(
  {
    projectName: { type: String, required: true },
    description: { type: String, required: true },
    techStack: { type: String, required: true },
    livePreviewLink: { type: String, required: true },
    codeLink: { type: String, required: true },
    imageUrl: { type: String, required: true },
    type: { type: String, enum: ["website", "app"], required: true },
  },
  { timestamps: true }
);

projectSchema.index({ createdAt: 1 });

const Project: Model<IProject> =
  models.Project || model<IProject>("Project", projectSchema);

export default Project;
