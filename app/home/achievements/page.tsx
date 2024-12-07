import React from "react";
import dynamic from "next/dynamic";
const Achievements = dynamic(() => import("../_components/Achivements"));
const AchievementPage = () => {
  return <Achievements />;
};

export default AchievementPage;
