import mongoose, { Document, Model, Schema } from "mongoose";

export interface IProject extends Document {
  name: string;
  images: string[];
  description: string;
  brief: string;
  technologies: string[];
  githubLink: string;
  demoLink: string;
}

const ProjectSchema: Schema<IProject> = new mongoose.Schema(
  {
    name: { type: String, required: true },
    images: { type: [String], default: [] },
    description: { type: String, required: true },
    brief: { type: String, required: true },
    technologies: { type: [String], default: [] },
    githubLink: { type: String, required: true },
    demoLink: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Project: Model<IProject> =
  mongoose.models.Project || mongoose.model<IProject>("Project", ProjectSchema);
