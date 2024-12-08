"use server";

import { connectToDatabase } from "@/lib/db";
import { IProfile, Profile } from "@/models/profile";
import { revalidatePath } from "next/cache";
import { imageUpload } from "../cloudinary";

interface ProfileData {
  profilePhoto: string;
  name: string;
  occupation: string;
  whoAmI: string;
  myExperience: string;
  technologiesIUse: string[];
  cv: string;
}

interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
}

// Create Profile
export const createProfile = async (
  formData: FormData
): Promise<ApiResponse> => {
  try {
    await connectToDatabase();

    const name = formData.get("name") as string;

    const occupation = formData.get("occupation") as string;
    const whoAmI = formData.get("whoAmI") as string;
    const myExperience = formData.get("myExperience") as string;
    const technologiesIUse = formData.get("technologiesIUse") as string;
    const cv = formData.get("cv") as string;

    const file = formData.get("file") as File;
    if (!file) {
      throw new Error("Profile photo is required");
    }

    const cloudResponse = await imageUpload(file as File);

    const profile = new Profile({
      profilePhoto: cloudResponse,
      name,
      occupation,
      whoAmI,
      myExperience,
      technologiesIUse,
      cv,
    });

    await profile.save();
    revalidatePath("/admin/profile");
    return { success: true, message: "Profile created successfully" };
  } catch (error: unknown) {
    return {
      success: false,
      error: (error as Error).message || "Failed to create profile",
    };
  }
};

// Update Profile
export async function updateProfile(
  id: string,
  formData: FormData
): Promise<ApiResponse> {
  try {
    await connectToDatabase();

    const name = formData.get("name") as string;
    const occupation = formData.get("occupation") as string;
    const whoAmI = formData.get("whoAmI") as string;
    const myExperience = formData.get("myExperience") as string;
    const technologiesIUse = formData.get("technologiesIUse") as string;
    const cv = formData.get("cv") as string;

    const file = formData.get("file") as File;
    if (!file) {
      throw new Error("Profile photo is required");
    }

    const cloudResponse = await imageUpload(file as File);

    await Profile.findByIdAndUpdate(id, {
      $set: {
        profilePhoto: cloudResponse,
        name,
        occupation,
        whoAmI,
        myExperience,
        technologiesIUse,
        cv,
      },
    });

    return { success: true, message: "Profile updated successfully" };
  } catch (error: unknown) {
    return {
      success: false,
      error: (error as Error).message || "Failed to update profile",
    };
  }
}

// Get Profile
export const getProfile = async (): Promise<
  ApiResponse<ProfileData | null>
> => {
  try {
    await connectToDatabase();
    const profile: IProfile | null = await Profile.findOne();
    return { success: true, data: JSON.parse(JSON.stringify(profile)) };
  } catch (error: unknown) {
    return {
      success: false,
      error: (error as Error).message || "Failed to fetch profile",
    };
  }
};
