import mongoose, { Document, Model, Schema } from "mongoose";

export interface IProfile extends Document {
  profilePhoto: string;
  name: string;
  occupation: string;
  whoAmI: string;
  myExperience: string;
  technologiesIUse: string;
  cv: string;
}

const ProfileSchema = new Schema({
  profilePhoto: { type: String, required: true },
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  whoAmI: { type: String, required: true },
  myExperience: { type: String, required: true },
  technologiesIUse: { type: String, required: true },
  cv: { type: String, required: true },
});

export const Profile: Model<IProfile> =
  mongoose.models.Profile || mongoose.model<IProfile>("Profile", ProfileSchema);
