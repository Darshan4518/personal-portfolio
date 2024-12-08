import React from "react";
import ProjectForm from "./projectForm";
import ProjectList from "./projectList";
import { getAllProjects } from "@/lib/serverActions/projectActions";
import { IProject } from "@/models/project";

export interface IProjectsList extends IProject {
  _id: string;
}

const Projects = async () => {
  const { data: projects } = await getAllProjects();

  return (
    <div className="p-3 h-full w-full text-green-400">
      {/* Main Title */}
      <h1 className="text-4xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-lime-500 animate-pulse">
        Manage Projects
      </h1>

      <div className="mt-2">
        <div className="flex justify-between items-center mx-5">
          <h2 className="text-2xl font-semibold text-green-300">
            Existing Projects
          </h2>
          <ProjectForm />
        </div>

        <ProjectList projects={(projects as IProjectsList[]) ?? []} />
      </div>
    </div>
  );
};

export default Projects;
