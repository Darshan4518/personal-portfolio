import { getSkills } from "@/lib/serverActions/skillActions";
import { ISkill } from "@/models/skill";
import Image from "next/image";
import React from "react";

interface Skill extends ISkill {
  _id: string;
}

const Skills = async () => {
  const { data } = await getSkills();
  const skills: Skill[] = JSON.parse(JSON.stringify(data));

  return (
    <div className=" p-5 w-full h-full">
      <h1 className=" uppercase my-2 text-lg text-center font-bold">Skills</h1>
      <ul className=" flex flex-wrap justify-evenly w-full gap-4 ">
        {skills &&
          skills?.map((skill) => (
            <li
              key={skill?._id}
              className=" flex py-4 items-center sm:w-40 w-10"
            >
              <div className=" flex items-center gap-4">
                <Image
                  src={skill?.image}
                  width={30}
                  height={30}
                  alt={skill?.name}
                  loading="lazy"
                  className="rounded-md max-w-16 max-h-16"
                />
                <p className="text-sm font-medium text-gray-200 uppercase hidden sm:block">
                  {skill?.name}
                </p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Skills;
