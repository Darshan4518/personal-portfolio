import express from "express";
import {
  createProject,
  deleteProjectById,
  getAllProjects,
  getProjectById,
  updateProjectById,
} from "../controllers/project.controller";
import { upload } from "../utils/multer";

const router = express.Router();

// Define routes
router.get("/", getAllProjects);
router.get("/:id", getProjectById);
router.post("/upload", upload.single("image"), createProject);
router.put("/:id", upload.single("image"), updateProjectById);
router.delete("/:id", deleteProjectById);

export default router;
