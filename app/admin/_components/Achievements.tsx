import { getAchievements } from "@/lib/serverActions/achievementActions";
import React from "react";
import AchievementForm from "./AchievementForm";
import AchievementList from "./AchievementList";
import { IAchievement } from "@/models/achievement";

export interface IAchievementList extends IAchievement {
  _id: string;
}
const Achievements = async () => {
  const { data: achievements } = await getAchievements();

  return (
    <div className="p-3 h-full w-full bg-black text-green-500">
      {/* Header */}
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold tracking-wide animate-pulse">
          Manage Achievements
        </h1>
        <AchievementForm />
      </div>

      {/* Existing Achievements Section */}
      <div className="mt-3">
        <h2 className="text-2xl font-semibold mb-4">Existing Achievements</h2>
        <div className="p-4 bg-black bg-opacity-75">
          {/* Pass a default value if achievements is undefined */}
          <AchievementList
            achievements={(achievements as IAchievementList[]) ?? []}
          />
        </div>
      </div>
    </div>
  );
};

export default Achievements;
