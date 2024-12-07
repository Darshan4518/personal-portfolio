import { Code2, ExternalLink } from "lucide-react";
import { ProjectButton } from "@/components/Project-button";
import { getProject } from "@/lib/serverActions/projectActions";
import Image from "next/image";
import Link from "next/link";

export default async function ProjectDetails({ id }: { id: string }) {
  const { data: project } = await getProject(id);

  return (
    <div className="bg-black text-white font-mono z-50 w-full h-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-3">
            <section className=" p-4 rounded-lg ">
              <Image
                src={project?.images[0]!}
                width={200}
                height={200}
                alt={project?.name!}
                className=" rounded-sm mx-auto"
              />
            </section>
            <section className=" p-4 rounded-lg ">
              <p className="text-xs text-gray-400 mb-2">PROJECT NAME</p>
              <h2 className="text-red-500 text-sm font-bold">
                {project?.name}
              </h2>
            </section>

            <section className=" p-2">
              <p className="text-xs text-gray-400 mb-2">BRIEF</p>
              <p className="text-red-500 text-xs">{project?.brief}</p>
            </section>

            <section className=" p-2 ">
              <div className="text-sm mb-2 text-gray-400">TECHNOLOGIES</div>
              <div className="flex flex-wrap gap-2 text-xs">
                {project?.technologies[0]
                  ?.split(",")
                  ?.map((tech: string, ind: number) => (
                    <span key={ind}>{tech}</span>
                  ))}
              </div>
            </section>

            <section className=" py-3">
              <a href={project?.githubLink} target="_blank">
                <ProjectButton className="  flex items-center ">
                  <Code2 className="w-4 h-4 mr-2" />
                  View Code
                </ProjectButton>
              </a>
            </section>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-8 space-y-2">
            <section className="border border-red-900/20 p-6 rounded-lg backdrop-blur-sm bg-black/50">
              <h3 className="text-lg text-red-500 mb-4">ABOUT THE PROJECT</h3>
              <div className="space-y-4 text-sm text-gray-300">
                <p className=" text-xs">
                  {project?.description?.split(".").slice(0, 2).join(".") + "."}
                </p>
                <p className=" text-xs">
                  {project?.description
                    ?.split(".")
                    .slice(2, 4)
                    .join(".")
                    .trim()}
                </p>
                <p className=" text-xs">
                  {project?.description?.split(".").slice(4).join(".").trim()}
                </p>
              </div>
            </section>
            <div className="flex flex-col sm:flex-row justify-between gap-4 py-3">
              <a href={project?.demoLink} target="_blank">
                <ProjectButton className="flex-1 flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  VIEW PROJECT DEMO
                </ProjectButton>
              </a>
              <Link href={"/home/creations"}>
                <ProjectButton variant="secondary" className="flex-1">
                  BACK TO ALL PROJECTS
                </ProjectButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
