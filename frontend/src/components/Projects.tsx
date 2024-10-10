import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

import { Badge } from "./ui/badge";
import { Loader } from "lucide-react";
import ProjectDetailPage from "./ProjectDailog";
import { Button } from "./ui/button";

const Projects = () => {
  const [limit, setLimit] = useState<number>(6);

  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [open, setOpen] = useState<boolean>(false);

  const fetchProjects = async () => {
    const response = await axios.get(
      `https://personal-portfolio-jzsa.onrender.com/api/v1/projects?limit=${limit}`
    );
    return response.data.projects;
  };

  const { isLoading, data, isFetching, isError } = useQuery({
    queryKey: ["projects", limit],
    queryFn: () => fetchProjects(),
    placeholderData: keepPreviousData,
    staleTime: 600000,
  });

  //     setProjects((prevProjects) => {
  //       const existingIds = new Set(prevProjects.map((project) => project._id));
  //       const newProjects = data.filter(
  //         (project: any) => !existingIds.has(project._id)
  //       );
  //       return [...prevProjects, ...newProjects];
  //     });
  //   }
  // }, [data]);

  const handleNextPagination = () => {
    setLimit((prev) => prev + 4);
  };

  if (isLoading) {
    return (
      <div className="h-full w-full flex justify-center items-center">
        <Loader className="animate-spin h-10 w-10" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="h-full w-full flex justify-center items-center">
        <p className="text-red-500">
          Failed to load projects. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4" id="projects">
      <h1 className="text-center text-4xl my-3 text-gray-200 font-bold">
        Projects
      </h1>
      <h4 className="text-center text-base mb-6 text-gray-200 font-bold">
        I have worked on a wide range of projects. From web apps to android
        apps. Here are some of my projects.
      </h4>
      {/* 
    

      {/* Display filtered projects */}
      <div className="w-full flex flex-wrap items-center justify-center gap-4 md:gap-6">
        {data.length > 0 ? (
          data.map((project: any) => (
            <div
              key={project?._id}
              className="w-full sm:w-1/2 md:w-[30%] cursor-pointer bg-gray-800 p-3 rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() => {
                setSelectedProject(project);
                setOpen(true);
              }}
            >
              <img
                src={project?.imageUrl}
                alt={project?.projectName}
                className="w-full h-60 object-contain rounded-lg"
                loading="lazy"
              />
              <div className="flex flex-wrap items-center gap-3 my-4">
                {project?.techStack
                  ?.split(",")
                  ?.map((tech: string, index: number) => (
                    <Badge key={index} className="text-purple-500 bg-gray-900">
                      {tech.trim()}
                    </Badge>
                  ))}
              </div>
              <h2 className="text-lg md:text-xl text-gray-300 font-bold my-2">
                {project.projectName}
              </h2>
              <h2 className="text-sm md:text-base text-gray-400 text-balance font-bold my-2 line-clamp-3">
                {project?.description}
              </h2>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No projects found</p>
        )}
      </div>

      <div className="flex justify-center my-6">
        <Button onClick={handleNextPagination} disabled={isFetching}>
          {isFetching ? (
            <Loader className="animate-spin h-4 w-4" />
          ) : (
            "Load More"
          )}
        </Button>
      </div>
      <ProjectDetailPage
        selectedProject={selectedProject}
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
};

export default Projects;
