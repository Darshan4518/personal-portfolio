"use server";

import { SkillSchema } from "@/lib/schemas";
import { connectToDatabase } from "@/lib/db";
import cloudinary from "../cloudinary";
import { Skill } from "@/models/skill";
import { revalidatePath } from "next/cache";

export const createSkill = async (formData: FormData): Promise<any> => {
  try {
    const name = formData.get("name")?.toString();
    const image = formData.get("image") as File;
    const type = formData.get("type")?.toString();
    const pinned = formData.get("pinned")?.toString();

    if (!name || !image || !type) {
      throw new Error("All fields are required");
    }

    const imageBuffer = await image.arrayBuffer();
    const imageBase64 = Buffer.from(imageBuffer).toString("base64");
    const imageDataUrl = `data:${image.type};base64,${imageBase64}`;

    const cloudResponse = await cloudinary.uploader.upload(imageDataUrl);

    const skill = new Skill({
      name,
      image: cloudResponse.secure_url,
      pinned,
      type,
    });

    await skill.save();
    revalidatePath("/admin/skills");
    return { success: true };
  } catch (error: any) {
    return { success: false, error };
  }
};

export async function updateSkill(id: string, formData: FormData) {
  try {
    await connectToDatabase();
    const validatedFields = SkillSchema.parse({
      name: formData.get("name"),
      image: formData.get("image"),
      isPinned: formData.get("isPinned") === "true",
    });

    await Skill.findByIdAndUpdate(id, validatedFields);
    revalidatePath("/admin/skills");
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export const deleteSkill = async (id: string) => {
  try {
    await connectToDatabase();
    await Skill.findByIdAndDelete(id);
    revalidatePath("/admin/skills");
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

export const getSkills = async () => {
  try {
    await connectToDatabase();
    const skills = await Skill.find();
    return { success: true, data: JSON.parse(JSON.stringify(skills)) };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};
