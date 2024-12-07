import { getProfile } from "@/lib/serverActions/profileActions";
import React from "react";
import ProfileForm from "./ProfileForm";
import Image from "next/image";
import body from "@/assets/body.png";

const Profile = async () => {
  const { data: profile } = await getProfile();

  return (
    <div className="flex w-full h-full flex-wrap justify-between bg-cover bg-center p-6 gap-6">
      {/* Text Content */}
      <div className="flex-1 p-6 space-y-6 text-green-300">
        <h1 className="uppercase text-2xl font-bold flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-lime-500">
          <span className="hidden lg:block">
            {"<-------------------------------------------"}
          </span>
          <span>Who is {profile?.name}</span>
        </h1>

        {/* Section 1 */}
        <div className="flex flex-wrap gap-3">
          <p className="max-w-xs text-gray-400">Who am I?</p>
          <p className="max-w-lg text-green-200">{profile?.whoAmI}</p>
        </div>

        {/* Section 2 */}
        <div className="flex flex-wrap gap-3">
          <p className="max-w-xs text-gray-400">My Experience</p>
          <p className="max-w-lg text-green-200">{profile?.myExperience}</p>
        </div>

        {/* Section 3 */}
        <div className="flex flex-wrap gap-3">
          <p className="max-w-xs text-gray-400">Technologies I Use</p>
          <p className="max-w-lg text-green-200">{profile?.technologiesIUse}</p>
        </div>

        <ProfileForm />
      </div>

      {/* Image Section */}
      <div className="flex justify-center p-6 w-full lg:w-auto">
        <div className="relative max-h-[65vh] rounded-lg overflow-hidden shadow-lg bg-black bg-opacity-50">
          <div className="absolute inset-0 z-20 pointer-events-none">
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-green-600" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-green-600" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-green-600" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-green-600" />
          </div>
          <Image
            src={body}
            alt="body"
            className="h-auto max-h-[65vh] max-w-[80%] lg:max-w-[16vw] mx-auto"
            height={800}
            width={800}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
