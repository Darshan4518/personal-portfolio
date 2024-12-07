"use client";

import { deleteAchievement } from "@/lib/serverActions/achievementActions";
import { IAchievement } from "@/models/achievement";
import Image from "next/image";

interface Achievements extends IAchievement {
  _id: string;
}

const AchievementList = ({
  achievements,
}: {
  achievements: Achievements[];
}) => {
  return (
    <ul className="flex flex-wrap items-center gap-6 justify-evenly w-full">
      {achievements?.map((achievement: Achievements) => (
        <li
          key={achievement?._id}
          className="max-w-sm w-full md:w-1/3 bg-black border border-green-500 rounded-lg p-4 shadow-lg hover:shadow-green-500 transition-shadow duration-300"
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div>
                <Image
                  src={achievement?.image}
                  alt={achievement?.title}
                  width={60}
                  height={60}
                  className="rounded-full border border-green-500"
                />
                <p className="text-xs text-green-400 text-center mt-2">
                  {achievement?.type}
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-green-300">
                  {achievement?.title}
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  {achievement?.description}
                </p>
                {achievement?.ongoing === "on" && (
                  <p className="text-xs text-green-500 mt-1">- Ongoing</p>
                )}
              </div>
            </div>

            <button
              className="ml-2 bg-red-500 text-white px-3 py-1 rounded text-xs hover:bg-red-600 transition-colors duration-300"
              onClick={() => deleteAchievement(achievement?._id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default AchievementList;
