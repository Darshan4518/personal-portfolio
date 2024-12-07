"use server";

import { ProjectSchema } from "@/lib/schemas";
import { connectToDatabase } from "@/lib/db";
import { Project } from "@/models/project";
import cloudinary from "../cloudinary";
import { revalidatePath } from "next/cache";

export const createProject = async (formData: FormData): Promise<any> => {
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

    const cloudResponses = [];

    for (const image of images) {
      if (!(image instanceof File)) {
        throw new Error("Invalid file type");
      }

      const imageBuffer = await image.arrayBuffer();
      const imageBase64 = Buffer.from(imageBuffer).toString("base64");
      const imageDataUrl = `data:${image.type};base64,${imageBase64}`;

      // Upload the image to Cloudinary
      const cloudResponse = await cloudinary.uploader.upload(imageDataUrl);
      cloudResponses.push(cloudResponse.secure_url);
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
    revalidatePath("/admin/projects");
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

export async function updateProject(id: string, formData: FormData) {
  try {
    await connectToDatabase();
    const validatedFields = ProjectSchema.parse({
      name: formData.get("name"),
      images: formData.getAll("images"),
      description: formData.get("description"),
      brief: formData.get("brief"),
      technologies: formData.getAll("technologies"),
      githubLink: formData.get("githubLink"),
      demoLink: formData.get("demoLink"),
    });

    await Project.findByIdAndUpdate(id, validatedFields);
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export const deleteProject = async (id: string) => {
  try {
    await connectToDatabase();
    await Project.findByIdAndDelete(id);
    revalidatePath("/admin/projects");
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

export const getProjects = async (page: number = 1, limit: number = 6) => {
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
      data: JSON.parse(JSON.stringify(projects)),
      meta: {
        totalProjects,
        totalPages: Math.ceil(totalProjects / limit),
        currentPage: page,
      },
    };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

export const getProject = async (id: string) => {
  try {
    await connectToDatabase();
    const projects = await Project.findById(id);
    return { success: true, data: projects };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

export const getAllProjects = async () => {
  try {
    await connectToDatabase();
    const projects = await Project.find();
    return { success: true, data: JSON.parse(JSON.stringify(projects)) };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};
