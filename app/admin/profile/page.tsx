import dynamic from "next/dynamic";
const Profile = dynamic(() => import("../_components/Profile"));

const AdminProfile = async () => {
  return <Profile />;
};

export default AdminProfile;
