"use server";

import { AchievementSchema } from "@/lib/schemas";
import { connectToDatabase } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { Achievement } from "@/models/achievement";
import cloudinary from "../cloudinary";

export const createAchievement = async (formData: FormData): Promise<any> => {
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

    const imageBuffer = await image.arrayBuffer();
    const imageBase64 = Buffer.from(imageBuffer).toString("base64");
    const imageDataUrl = `data:${image.type};base64,${imageBase64}`;

    const cloudResponse = await cloudinary.uploader.upload(imageDataUrl);

    const achievement = new Achievement({
      image: cloudResponse.secure_url,
      type,
      title,
      description,
      ...(achievedDate && { achievedDate }),
      ongoing,
    });

    await achievement.save();

    revalidatePath("/admin/achievements");
    return { success: true };
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export async function updateAchievement(id: string, formData: FormData) {
  try {
    await connectToDatabase();
    const validatedFields = AchievementSchema.parse({
      image: formData.get("image"),
      type: formData.get("type"),
      title: formData.get("title"),
      description: formData.get("description"),
      achievedDate: new Date(formData.get("achievedDate") as string),
      ongoing: formData.get("ongoing") === "true",
    });

    await Achievement.findByIdAndUpdate(id, validatedFields);
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function deleteAchievement(id: string) {
  try {
    await connectToDatabase();
    await Achievement.findByIdAndDelete(id);
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function getAchievements() {
  try {
    await connectToDatabase();
    const achievements = await Achievement.find().sort({ ongoing: 1 });
    return { success: true, data: JSON.parse(JSON.stringify(achievements)) };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
