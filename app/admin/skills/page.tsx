import dynamic from "next/dynamic";

const Skills = dynamic(() => import("../_components/Skills"));

const AdminSkills = async () => {
  return <Skills />;
};

export default AdminSkills;
