import { Request, Response } from "express";
import Skill from "../models/skill.model";
import { uploadImageOnCloudinary } from "../utils/uploadImageOnCloudinary";

// GET all skills
export const getAllAdminSkill = async (req: Request, res: Response) => {
  try {
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = parseInt(req.query.skip as string) || 0;

    // Fetch skills with pagination
    const skills = await Skill.find({})
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(skip);

    // Get total count for pagination info
    const totalSkills = await Skill.countDocuments({});

    res.json({
      success: true,
      skills,
      pagination: {
        totalSkills,
        currentPage: Math.floor(skip / limit) + 1,
        totalPages: Math.ceil(totalSkills / limit),
      },
    });
  } catch (error: any) {
    res.status(400).json({ success: false, error: error.message });
  }
};
export const getAllSkill = async (req: Request, res: Response) => {
  try {
    const skills = await Skill.find({}).sort({ createdAt: -1 });

    res.json({
      success: true,
      skills,
    });
  } catch (error: any) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// POST a new skill
export const createSkill = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { name, type } = req.body;

    const isExist = await Skill.findOne({ name });
    if (isExist) {
      return res
        .status(400)
        .json({ success: false, error: "Skill already exist" });
    }

    const file = req.file;
    if (!file) {
      return res
        .status(400)
        .json({ success: false, error: "Please upload an image" });
    }
    // Upload image to Cloudinary
    const imageUrl = await uploadImageOnCloudinary(file as Express.Multer.File);

    // Create the new skill with the uploaded image URL
    const newSkill = new Skill({
      name,
      imageUrl: imageUrl,
      type,
    });

    await newSkill.save();

    res.status(201).json({
      success: true,
      data: newSkill,
      message: "skill craeted successfully",
    });
  } catch (error: any) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// GET a skill by ID
export const getSkillById = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { id } = req.params;
    const skill = await Skill.findById(id);

    if (!skill) {
      return res.status(404).json({ success: false, error: "Skill not found" });
    }
    res.status(200).json({ success: true, data: skill });
  } catch (error: any) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// PUT - Update a skill by ID
export const updateSkillById = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { id } = req.params;
    const { name, type, imageUrl } = req.body;

    // Check if a new image URL is provided and upload to Cloudinary

    let updatedImageUrl = imageUrl;
    const file = req.file;
    if (file) {
      updatedImageUrl = await uploadImageOnCloudinary(
        file as Express.Multer.File
      );
    }

    const updatedSkill = await Skill.findByIdAndUpdate(
      id,
      {
        $set: { name, imageUrl: updatedImageUrl, type },
      },
      { new: true }
    );

    if (!updatedSkill) {
      return res.status(404).json({ success: false, error: "Skill not found" });
    }

    res.json({ success: true, data: updatedSkill });
  } catch (error: any) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// DELETE a skill by ID
export const deleteSkillById = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { id } = req.params;
    const deletedSkill = await Skill.findByIdAndDelete(id);

    if (!deletedSkill) {
      return res.status(404).json({ success: false, error: "Skill not found" });
    }

    res.json({ success: true, data: deletedSkill });
  } catch (error: any) {
    res.status(400).json({ success: false, error: error.message });
  }
};
