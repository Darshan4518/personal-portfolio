"use client";

import React, { useCallback, useEffect, useState } from "react";
import { ProjectCard } from "@/components/3D-Card";
import Link from "next/link";
import { IProject } from "@/models/project";
import { getProjects } from "@/lib/serverActions/projectActions";

export interface IProjects extends IProject {
  _id: string;
}

const ITEMS_PER_PAGE = 6;

const Projects = () => {
  const [page, setPage] = useState<number>(1);
  const [projects, setProjects] = useState<IProjects[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        const { data } = await getProjects(page, ITEMS_PER_PAGE);
        console.log(data);

        setProjects((prev) => {
          const ids = new Set(prev.map((project) => project._id));
          const uniqueProjects = data.filter(
            (project: IProjects) => !ids.has(project._id)
          );
          return [...prev, ...uniqueProjects];
        });

        setHasMore(data.length === ITEMS_PER_PAGE);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProjects();
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="p-2 h-full w-full z-50 overflow-y-auto xl:max-h-[73vh]">
      <h1 className="text-lg my-1 text-center uppercase font-bold">
        Creations
      </h1>

      <div className="flex flex-wrap gap-2 justify-evenly">
        {projects.map((project: IProjects) => (
          <Link href={`/home/creations/${project._id}`} key={project._id}>
            <ProjectCard project={project} />
          </Link>
        ))}
      </div>

      {isLoading && <div className="text-center mt-4">Loading projects...</div>}

      {!isLoading && hasMore && (
        <div className="my-2 w-full flex justify-center">
          <button
            className="border border-redprimary p-1 px-3 uppercase"
            onClick={handleLoadMore}
          >
            Load more
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
