import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { IProjects } from "@/app/home/_components/Projects";

export function ProjectCard({ project }: { project: IProjects }) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="border border-red-600 bg-black/30 backdrop-blur-md backdrop-brightness-90 relative group/card shadow-md hover:shadow-lg hover:shadow-red-500/[0.4] w-full max-w-sm sm:max-w-[40vw] lg:max-w-[25vw] xl:max-w-[20vw]  h-80 rounded-xl p-4 transition-all">
        <CardItem translateZ="50" className="w-full">
          <Image
            src={project?.images[0]}
            height="500"
            width="500"
            className="h-40 w-full object-cover rounded-lg group-hover/card:scale-105 transition-transform"
            alt="thumbnail"
          />
        </CardItem>

        {/* Game Title and Description */}
        <CardItem className="w-full my-4">
          <div>
            <h2 className="text-sm font-extrabold uppercase text-red-600">
              {project?.name}
            </h2>
            <p className="text-xs uppercase text-gray-400 line-clamp-3">
              {project?.brief}
            </p>
          </div>
        </CardItem>

        {/* Call to Action */}
        <CardItem className="w-full">
          <div className="flex justify-end">
            <button className="text-white px-4 py-1 rounded-lg border border-red-600 transition-colors hover:bg-red-600 hover:text-black">
              ViewLive
            </button>
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
