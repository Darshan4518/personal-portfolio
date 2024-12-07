import React from "react";
import dynamic from "next/dynamic";
const Profile = dynamic(() => import("../_components/Profile"));
const ProfilePage = () => {
  return <Profile />;
};

export default ProfilePage;
