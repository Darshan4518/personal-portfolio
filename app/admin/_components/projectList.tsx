"use client";

import { deleteProject } from "@/lib/serverActions/projectActions";
import { IProject } from "@/models/project";

interface Projects extends IProject {
  _id: string;
}

const ProjectList = ({ projects }: { projects: Projects[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {projects?.map((project) => (
        <div
          key={project?._id}
          className="bg-black/50 p-4 rounded-lg hover:bg-green-900/10 transition duration-300 ease-in-out"
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="text-lg font-bold text-green-400">{project.name}</p>
              <p className="text-sm text-green-300">{project.brief}</p>
            </div>
            <button
              className="ml-2 bg-red-600 text-white px-2 py-1 rounded text-xs hover:bg-red-800 transition duration-300 ease-in-out"
              onClick={() => deleteProject(project?._id)}
            >
              Delete
            </button>
          </div>

          <div className="mt-3 flex space-x-3">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-green-400 hover:text-green-200 underline transition duration-300 ease-in-out"
            >
              GitHub
            </a>
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-green-400 hover:text-green-200 underline transition duration-300 ease-in-out"
            >
              Demo
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
