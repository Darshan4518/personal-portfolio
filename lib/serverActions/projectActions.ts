"use server";

import { connectToDatabase } from "@/lib/db";
import { Project, IProject } from "@/models/project";
import { imageUpload } from "../cloudinary";
import { revalidatePath } from "next/cache";
import { ApiResponse } from "../types";

// Define response structure

// Create a new project
export const createProject = async (
  formData: FormData
): Promise<ApiResponse> => {
  try {
    await connectToDatabase();

    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const brief = formData.get("brief") as string;
    const technologies = formData.getAll("technologies") as string[];
    const githubLink = formData.get("githubLink") as string;
    const demoLink = formData.get("demoLink") as string;

    const images = formData.getAll("images") as File[];

    if (images.length === 0) {
      throw new Error("At least one image is required");
    }

    const cloudResponses: string[] = [];

    for (const image of images) {
      if (!(image instanceof File)) {
        throw new Error("Invalid file type");
      }
      const cloudResponse = await imageUpload(image as File);
      cloudResponses.push(cloudResponse as string);
    }

    const project = new Project({
      name,
      description,
      brief,
      technologies,
      githubLink,
      demoLink,
      images: cloudResponses,
    });

    await project.save();

    // Revalidate cache
    revalidatePath("/admin/projects");

    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

// Update an existing project
export const updateProject = async (
  id: string,
  formData: FormData
): Promise<ApiResponse> => {
  try {
    await connectToDatabase();

    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const brief = formData.get("brief") as string;
    const technologies = formData.getAll("technologies") as string[];
    const githubLink = formData.get("githubLink") as string;
    const demoLink = formData.get("demoLink") as string;

    const images = formData.getAll("images") as File[];

    if (images.length === 0) {
      throw new Error("At least one image is required");
    }
    const cloudResponses: string[] = [];

    for (const image of images) {
      if (!(image instanceof File)) {
        throw new Error("Invalid file type");
      }
      const cloudResponse = await imageUpload(image as File);
      cloudResponses.push(cloudResponse as string);
    }

    await Project.findByIdAndUpdate(id, {
      $set: {
        name,
        description,
        brief,
        technologies,
        githubLink,
        demoLink,
        images: cloudResponses,
      },
    });

    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

// Delete a project
export const deleteProject = async (id: string): Promise<ApiResponse> => {
  try {
    await connectToDatabase();

    await Project.findByIdAndDelete(id);

    // Revalidate cache
    revalidatePath("/admin/projects");

    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

// Get projects with pagination
export const getProjects = async (
  page: number = 1,
  limit: number = 6
): Promise<ApiResponse> => {
  try {
    await connectToDatabase();

    const skip = (page - 1) * limit;
    const projects = await Project.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const totalProjects = await Project.countDocuments();

    return {
      success: true,
      data: projects,
    };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

// Get a specific project by ID
export const getProject = async (
  id: string
): Promise<ApiResponse<IProject>> => {
  try {
    await connectToDatabase();

    const project = await Project.findById(id);

    if (!project) {
      throw new Error("Project not found");
    }

    return { success: true, data: project };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

// Get all projects without pagination
export const getAllProjects = async (): Promise<ApiResponse<IProject[]>> => {
  try {
    await connectToDatabase();

    const projects = await Project.find();

    return { success: true, data: projects };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};
