"use client";

import { deleteSkill } from "@/lib/serverActions/skillActions";
import { ISkill } from "@/models/skill";
import Image from "next/image";

interface Skills extends ISkill {
  _id: string;
}

const SkillList = ({ skills }: { skills: Skills[] }) => {
  return (
    <ul className="flex flex-wrap justify-evenly w-full gap-5">
      {skills &&
        skills?.map((skill) => (
          <li
            key={skill?._id}
            className="py-4 flex justify-between items-center w-60 bg-black p-4 rounded-lg shadow-md hover:bg-black/50 transition-all duration-300"
          >
            <div className="flex items-center gap-2">
              <Image
                src={skill?.image}
                width={30}
                height={30}
                alt={skill?.name}
                loading="lazy"
                className="rounded-md max-w-16 max-h-16"
              />
              <p className="text-sm font-medium text-green-400 uppercase">
                {skill?.name}
              </p>
            </div>
            <button
              className="ml-2 bg-red-100 text-red-600 px-3 py-1 rounded text-xs hover:bg-red-200 hover:text-red-700 transition-all duration-300"
              onClick={() => deleteSkill(skill?._id?.toString())}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

export default SkillList;
