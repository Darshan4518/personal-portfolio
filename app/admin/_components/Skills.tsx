import { getSkills } from "@/lib/serverActions/skillActions";
import React from "react";
import SkillForm from "./skillForm";
import SkillList from "./skillList";

const Skills = async () => {
  const { data: skills } = await getSkills();
  return (
    <div className="p-3 h-full w-full bg-black text-green-400">
      <h1 className="text-xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-300">
        Manage Skills
      </h1>
      <div className="mt-2">
        <div className="flex justify-between items-center max-w-6xl mb-4 mx-auto">
          <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-300">
            Existing Skills
          </h2>
          <SkillForm />
        </div>

        <SkillList skills={skills} />
      </div>
    </div>
  );
};

export default Skills;
