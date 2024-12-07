"use server";

import { ProfileSchema } from "@/lib/schemas";
import { connectToDatabase } from "@/lib/db";
import { IProfile, Profile } from "@/models/profile";
import { revalidatePath } from "next/cache";
import cloudinary from "../cloudinary";

export const createProfile = async (formData: FormData): Promise<any> => {
  try {
    await connectToDatabase();
    const validatedFields = ProfileSchema.parse({
      name: formData.get("name") as string,
      occupation: formData.get("occupation") as string,
      whoAmI: formData.get("whoAmI") as string,
      myExperience: formData.get("myExperience") as string,
      technologiesIUse: formData.get("technologiesIUse") as string,
    });

    const file = formData.get("file") as File;
    if (!file) {
      throw new Error("Profile photo is required");
    }

    const imageBuffer = await file.arrayBuffer();
    const imageBase64 = Buffer.from(imageBuffer).toString("base64");
    const imageDataUrl = `data:${file.type};base64,${imageBase64}`;

    const cloudResponse = await cloudinary.uploader
      .upload(imageDataUrl)
      .catch((err) => {
        throw new Error(`Cloudinary upload failed: ${err.message}`);
      });

    const prodile = new Profile({
      profilePhoto: cloudResponse.secure_url,
      name: validatedFields.name,
      occupation: validatedFields.occupation,
      whoAmI: validatedFields.whoAmI,
      myExperience: validatedFields.myExperience,
      technologiesIUse: validatedFields.technologiesIUse,
    });
    await prodile.save();
    revalidatePath("/admin/profile");
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

export async function updateProfile(id: string, formData: FormData) {
  try {
    await connectToDatabase();
    const validatedFields = ProfileSchema.parse({
      profilePhoto: formData.get("profilePhoto"),
      name: formData.get("name"),
      occupation: formData.get("occupation"),
      whoAmI: formData.get("whoAmI"),
      myExperience: formData.get("myExperience"),
      technologiesIUse: formData.getAll("technologiesIUse"),
    });

    await Profile.findByIdAndUpdate(id, validatedFields);
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export const getProfile = async () => {
  try {
    await connectToDatabase();
    const profile: IProfile | null = await Profile.findOne();
    return { success: true, data: JSON.parse(JSON.stringify(profile)) };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};
