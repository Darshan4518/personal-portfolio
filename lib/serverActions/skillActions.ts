"use server";

import { connectToDatabase } from "@/lib/db";
import { imageUpload } from "../cloudinary";
import { Skill, ISkill } from "@/models/skill";
import { revalidatePath } from "next/cache";
import { ApiResponse } from "../types";

// Define response structure

// Create a new skill
export const createSkill = async (formData: FormData): Promise<ApiResponse> => {
  try {
    await connectToDatabase();

    const name = formData.get("name") as string;
    const image = formData.get("image") as File;
    const type = formData.get("type") as string;
    const pinned = formData.get("pinned") as string;

    // Validate required fields
    if (!name || !image || !type) {
      throw new Error("All fields are required");
    }

    const cloudResponse = await imageUpload(image as File);

    // Create and save the skill
    const skill = new Skill({
      name,
      image: cloudResponse,
      pinned,
      type,
    });

    await skill.save();

    // Revalidate cache
    revalidatePath("/admin/skills");

    return { success: true, data: { message: "Skill created successfully" } };
  } catch (error: any) {
    console.error("Error creating skill:", error.message);
    return { success: false, error: error.message };
  }
};

// Update an existing skill
export const updateSkill = async (
  id: string,
  formData: FormData
): Promise<ApiResponse> => {
  try {
    await connectToDatabase();

    const name = formData.get("name") as string;
    const type = formData.get("type") as string;
    const pinned = formData.get("pinned") as string;
    const image = formData.get("image") as File | null;

    // Handle image update
    const cloudResponse = await imageUpload(image as File);

    await Skill.findByIdAndUpdate(id, {
      name,
      type,
      pinned,
      image: cloudResponse,
    });

    // Revalidate cache
    revalidatePath("/admin/skills");

    return { success: true, data: { message: "Skill updated successfully" } };
  } catch (error: any) {
    console.error("Error updating skill:", error.message);
    return { success: false, error: error.message };
  }
};

// Delete a skill
export const deleteSkill = async (id: string): Promise<ApiResponse> => {
  try {
    await connectToDatabase();

    await Skill.findByIdAndDelete(id);

    // Revalidate cache
    revalidatePath("/admin/skills");

    return { success: true, data: { message: "Skill deleted successfully" } };
  } catch (error: any) {
    console.error("Error deleting skill:", error.message);
    return { success: false, error: error.message };
  }
};

// Get all skills
export const getSkills = async (): Promise<ApiResponse<ISkill[]>> => {
  try {
    await connectToDatabase();

    const skills = await Skill.find();

    return { success: true, data: skills };
  } catch (error: any) {
    console.error("Error fetching skills:", error.message);
    return { success: false, error: error.message };
  }
};
