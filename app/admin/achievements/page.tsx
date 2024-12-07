import dynamic from "next/dynamic";
const Achievements = dynamic(() => import("../_components/Achievements"));
const AdminAchievements = async () => {
  return <Achievements />;
};

export default AdminAchievements;
