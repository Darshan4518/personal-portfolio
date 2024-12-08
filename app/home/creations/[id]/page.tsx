import React from "react";
import dynamic from "next/dynamic";

const ProjectDetails = dynamic(
  () => import("../../_components/ProjectDetails")
);

type Params = Promise<{ id: string }>;

const ProjectDetailsPage = async ({ params }: { params: Params }) => {
  const { id } = await params;

  return <ProjectDetails id={id} />;
};

export default ProjectDetailsPage;
