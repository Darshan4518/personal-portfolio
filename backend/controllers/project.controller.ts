import { Request, Response } from "express";
import Project from "../models/project.model";
import cloudinary from "../utils/cloudinaryConfig";
import { uploadImageOnCloudinary } from "../utils/uploadImageOnCloudinary";

// GET all projects
export const getAllProjects = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const limit = parseInt(req.query.limit as string) || 6;
    const skip = parseInt(req.query.skip as string) || 0;

    // Fetch projects with pagination
    const projects = await Project.find({})
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(skip);

    // Get total count for pagination info
    const totalProjects = await Project.countDocuments({});

    return res.status(200).json({
      success: true,
      projects,
      pagination: {
        totalProjects,
        currentPage: Math.floor(skip / limit) + 1,
        totalPages: Math.ceil(totalProjects / limit),
      },
    });
  } catch (error: any) {
    return res.status(400).json({ success: false, error: error.message });
  }
};

// GET a project by ID
export const getProjectById = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { id } = req.params;

  try {
    const project = await Project.findById(id);
    if (!project) {
      return res
        .status(404)
        .json({ success: false, error: "Project not found" });
    }
    return res.status(200).json({ success: true, project });
  } catch (error: any) {
    return res.status(400).json({ success: false, error: error.message });
  }
};

// POST a new project

export const createProject = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const {
      projectName,
      description,
      techStack,
      livePreviewLink,
      codeLink,
      type,
    } = req.body;

    const file = req.file;

    if (!file) {
      return res
        .status(400)
        .json({ success: false, error: "No file uploaded" });
    }
    // Upload the image to Cloudinary

    const imageUrl = await uploadImageOnCloudinary(file as Express.Multer.File);

    // Create a new project document
    const newProject = Project.create({
      projectName,
      description,
      techStack,
      livePreviewLink,
      codeLink,
      imageUrl,
      type,
    });

    return res.status(201).json({ success: true, data: newProject });
  } catch (error: any) {
    console.error("Error creating project:", error);
    return res.status(500).json({
      success: false,
      error: error.message || "Internal Server Error",
    });
  }
};

// PUT - Update a project by ID

export const updateProjectById = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { id } = req.params;

  try {
    const {
      projectName,
      description,
      techStack,
      livePreviewLink,
      codeLink,
      image,
      type,
    } = req.body;

    // Update image if provided
    let updatedImageUrl = image;
    if (image) {
      const uploadResult = await cloudinary.uploader.upload(image, {
        folder: "projects",
      });
      updatedImageUrl = uploadResult.secure_url;
    }

    // Update the project details
    const updatedProject = await Project.findByIdAndUpdate(
      id,
      {
        projectName,
        description,
        techStack,
        livePreviewLink,
        codeLink,
        imageUrl: updatedImageUrl,
        type,
      },
      { new: true, runValidators: true }
    );

    if (!updatedProject) {
      return res.status(404).json({
        success: false,
        error: "Project not found",
      });
    }

    return res.status(200).json({ success: true, data: updatedProject });
  } catch (error: any) {
    console.error("Error updating project:", error); // Log the error for debugging
    return res.status(400).json({
      success: false,
      error: error.message || "Internal Server Error",
    });
  }
};

// DELETE a project by ID
export const deleteProjectById = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { id } = req.params;

  try {
    const deletedProject = await Project.findByIdAndDelete(id);
    if (!deletedProject) {
      return res
        .status(404)
        .json({ success: false, error: "Project not found" });
    }

    return res.status(200).json({ success: true, data: deletedProject });
  } catch (error: any) {
    return res.status(400).json({ success: false, error: error.message });
  }
};
