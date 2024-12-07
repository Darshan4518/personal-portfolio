import React from "react";
import dynamic from "next/dynamic";
const Skills = dynamic(() => import("../_components/Skills"));
const SkillsPage = () => {
  return <Skills />;
};

export default SkillsPage;
