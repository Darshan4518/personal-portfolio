import { Router } from "express";
import {
  createSkill,
  deleteSkillById,
  getAllAdminSkill,
  getAllSkill,
  getSkillById,
  updateSkillById,
} from "../controllers/skill.controller";
import { upload } from "../utils/multer";

const router = Router();

// Define routes
router.get("/admin/all", getAllAdminSkill);
router.get("/all", getAllSkill);

router.post("/create", upload.single("imageUrl"), createSkill);
router.get("/:id", getSkillById);
router.put("/update/:id", upload.single("imageUrl"), updateSkillById);
router.delete("/delete/:id", deleteSkillById);

export default router;
