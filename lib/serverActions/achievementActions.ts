"use server";

import { connectToDatabase } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { Achievement, IAchievement } from "@/models/achievement";
import { imageUpload } from "../cloudinary";

interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
}

export const createAchievement = async (
  formData: FormData
): Promise<ApiResponse> => {
  try {
    await connectToDatabase();

    const type = formData.get("type") as string;
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const ongoing = formData.get("ongoing") as string;

    const achievedDateRaw = formData.get("achievedDate");
    const achievedDate = achievedDateRaw
      ? new Date(achievedDateRaw as string)
      : undefined;

    const image = formData.get("image") as File;

    if (!image) {
      throw new Error("Image is required");
    }

    const cloudResponse = await imageUpload(image as File);

    const achievement = new Achievement({
      image: cloudResponse,
      type,
      title,
      description,
      ...(achievedDate && { achievedDate }),
      ongoing,
    });

    await achievement.save();

    revalidatePath("/admin/achievements");
    return { success: true };
  } catch (error: unknown) {
    return {
      success: false,
      error: (error as Error)?.message || "An unknown error occurred",
    };
  }
};

// Update Achievement
export async function updateAchievement(
  id: string,
  formData: FormData
): Promise<ApiResponse> {
  try {
    await connectToDatabase();

    const type = formData.get("type") as string;
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const ongoing = formData.get("ongoing") as string;

    const achievedDateRaw = formData.get("achievedDate");
    const achievedDate = achievedDateRaw
      ? new Date(achievedDateRaw as string)
      : undefined;

    const image = formData.get("image") as File;

    if (!image) {
      throw new Error("Image is required");
    }

    const cloudResponse = await imageUpload(image as File);
    await Achievement.updateOne(
      { _id: id },
      {
        $set: {
          type,
          title,
          description,
          ongoing,
          image: cloudResponse,
          achievedDate,
        },
      }
    );

    return { success: true };
  } catch (error: unknown) {
    return {
      success: false,
      error: (error as Error)?.message || "An unknown error occurred",
    };
  }
}

// Delete Achievement
export async function deleteAchievement(id: string): Promise<ApiResponse> {
  try {
    await connectToDatabase();
    await Achievement.findByIdAndDelete(id);
    return { success: true };
  } catch (error: unknown) {
    return {
      success: false,
      error: (error as Error)?.message || "An unknown error occurred",
    };
  }
}

// Get Achievements
export async function getAchievements(): Promise<ApiResponse<IAchievement[]>> {
  try {
    await connectToDatabase();
    const achievements = await Achievement.find().sort({ ongoing: 1 });
    return { success: true, data: JSON.parse(JSON.stringify(achievements)) };
  } catch (error: unknown) {
    return {
      success: false,
      error: (error as Error)?.message || "An unknown error occurred",
    };
  }
}
