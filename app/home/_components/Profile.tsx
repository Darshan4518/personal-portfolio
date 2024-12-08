import Image from "next/image";

import body from "@/assets/body.png";
import { getProfile } from "@/lib/serverActions/profileActions";
import { DownloadIcon } from "lucide-react";

const Profile = async () => {
  const { data: profile } = await getProfile();

  return (
    <div className="flex w-full h-full flex-wrap justify-between bg-cover bg-center p-3 gap-6">
      {/* Text Content */}
      <div className="flex-1 p-3 space-y-4 flex flex-col items-center ">
        <h1 className="uppercase text-xl font-bold text-gray-300 flex gap-2">
          <span className=" hidden  lg:block">
            {"<-------------------------------------------"}
          </span>
          <span>Who is Darshan S</span>
        </h1>
        {/* Section 1 */}
        <div className="flex flex-wrap gap-3">
          <p className="max-w-xs text-gray-500">Who am I?</p>
          <p className="max-w-lg text-xs text-slate-300">{profile?.whoAmI}</p>
        </div>

        {/* Section 2 */}
        <div className="flex flex-wrap gap-3">
          <p className="max-w-xs text-gray-500">My Experience</p>
          <p className="max-w-lg text-xs text-slate-300">
            {profile?.myExperience}
          </p>
        </div>

        {/* Section 3 */}
        <div className="flex flex-wrap gap-3">
          <p className="max-w-xs text-gray-500">Technologies I Use</p>
          <p className="max-w-lg text-xs text-slate-300">
            {profile?.technologiesIUse}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <p className="max-w-xs text-gray-500">My Education</p>
          <div className="max-w-lg text-xs text-slate-300 s">
            <div>
              <p>Bachelor of Science in Computer Science</p>
              <p>
                I completed my Bachelor of Science in Computer Science education
                at Rural Degree College, Kanakapura, Karnataka.
                <span className=" text-red-400">2021 - 2024</span>
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <a href={profile?.cv} target="_blank">
            <button className="w-full md:w-auto p-2 mt-2 flex items-center gap-2 text-xs font-bold uppercase text-red-500 border border-red-500 rounded transition-all hover:bg-red-500 hover:text-white ">
              <span>Resume | CV</span>
              <DownloadIcon size={15} />
            </button>
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex justify-center p-3 w-full lg:w-auto">
        <div className="relative p-1">
          <div className="absolute inset-0 z-20 pointer-events-none">
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-600" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-red-600" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-red-600" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-600" />
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
