"use client";
import React from "react";
import dynamic from "next/dynamic";

const Projects = dynamic(() => import("../_components/Projects"));

const Creations = () => {
  return <Projects />;
};

export default Creations;
