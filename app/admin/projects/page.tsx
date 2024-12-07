import dynamic from "next/dynamic";

const Projects = dynamic(() => import("../_components/Projects"));
const AdminProjects = async () => {
  return <Projects />;
};

export default AdminProjects;
