import { z } from "zod";

export const ProfileSchema = z.object({
  name: z.string().min(1),
  occupation: z.string(),
  whoAmI: z.string(),
  myExperience: z.string(),
  technologiesIUse: z.string(),
});
export const SkillSchema = z.object({
  name: z.string().min(1),
  image: z.string().url(),
  isPinned: z.boolean(),
});

export const ProjectSchema = z.object({
  name: z.string().min(1),
  images: z.array(z.string().url()).min(1),
  description: z.string().min(10),
  brief: z.string().min(5),
  technologies: z.array(z.string()).min(1),
  githubLink: z.string().url(),
  demoLink: z.string().url(),
});

export const AchievementSchema = z.object({
  type: z.string().min(1),
  title: z.string().min(1),
  description: z.string(),
  achievedDate: z.date(),
  ongoing: z.string(),
});
