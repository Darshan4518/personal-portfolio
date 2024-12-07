import React from "react";
import dynamic from "next/dynamic";

const ProjectDetails = dynamic(
  () => import("../../_components/ProjectDetails")
);

const ProjectDetailsPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return <ProjectDetails id={id} />;
};

export default ProjectDetailsPage;
