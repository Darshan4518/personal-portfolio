import { useQuery } from "@tanstack/react-query";
import { BorderBeam } from "./ui/border-beam";
import axios from "axios";
import { forwardRef, useRef } from "react";
import { gsap } from "gsap";
import { Loader } from "lucide-react";

interface Skill {
  name: string;
  imageUrl: string;
  type: string;
}

export default function SkillsBox() {
  const fetchSkills = async () => {
    const response = await axios.get(
      `https://personal-portfolio-jzsa.onrender.com/api/v1/skills/all`
    );
    return response.data.skills;
  };

  const { isPending, data: skills } = useQuery({
    queryKey: ["skills"],
    queryFn: fetchSkills,
  });

  const skillCategoryRefs = useRef<(HTMLDivElement | null)[]>([]);

  if (isPending) {
    return (
      <div className="text-white h-full w-full flex justify-center items-center">
        <Loader className=" animate-spin size-10" />
      </div>
    );
  }

  const groupedSkills: Record<string, Skill[]> = skills.reduce(
    (acc: Record<string, Skill[]>, skill: Skill) => {
      if (!acc[skill.type]) {
        acc[skill.type] = [];
      }
      acc[skill.type].push(skill);
      return acc;
    },
    {} as Record<string, Skill[]>
  );

  const orderedCategories = ["frontend", "backend", "android", "others"];

  return (
    <div className="text-white py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-4">Skills</h2>
        <p className="text-center text-gray-400 mb-12">
          Here are some of my skills on which I have been working for the past 2
          years.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {orderedCategories.map(
            (category, index) =>
              groupedSkills[category] && (
                <SkillCategory
                  key={category}
                  title={category}
                  skills={groupedSkills[category]}
                  ref={(el) => (skillCategoryRefs.current[index] = el)}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
}

const SkillCategory = forwardRef<HTMLDivElement, SkillCategoryProps>(
  ({ title, skills }, ref) => {
    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
      gsap.to(e.currentTarget, {
        scale: 1.05,
        rotation: 3,
        skewX: 5,
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.5)",
        border: "2px solid rgba(255, 255, 255, 0.5)",

        duration: 0.3,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
      gsap.to(e.currentTarget, {
        scale: 1,
        rotation: 0,
        skewX: 0,
        boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
        border: "none",
        backgroundColor: "transparent",
        duration: 0.3,
        ease: "power3.out",
      });
    };

    return (
      <div
        className="relative rounded-lg p-6  overflow-hidden transition-all duration-300"
        ref={ref}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h3 className="text-2xl font-semibold mb-4 text-center text-white">
          {title === "frontend"
            ? "Frontend Skills"
            : title === "backend"
            ? "Backend Skills"
            : title === "android"
            ? "Android Development"
            : "Others"}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center space-x-2 rounded-full px-3 py-2 hover:bg-gray-800 transition duration-200"
            >
              <img
                src={skill.imageUrl}
                alt={skill.name}
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <span className="text-sm text-white">{skill.name}</span>
            </div>
          ))}
        </div>
        <BorderBeam size={400} duration={12} delay={9} />
      </div>
    );
  }
);

SkillCategory.displayName = "SkillCategory";
