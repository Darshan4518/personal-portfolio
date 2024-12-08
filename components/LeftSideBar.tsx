import profileImage from "@/assets/profile.png";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "./ContactForm";
import { getProfile } from "@/lib/serverActions/profileActions";
import { DownloadIcon } from "lucide-react";

const LeftSidebar = async () => {
  const { data: profile } = await getProfile();

  return (
    <aside className="flex lg:flex-col lg:justify-start justify-evenly flex-wrap gap-3 items-center lg:items-start text-white p-4 rounded-lg shadow-md w-full lg:w-auto">
      {/* Profile Image */}
      <Link href={"/home/profile"}>
        <div className=" relative mb-5 p-2">
          <Image
            src={profile?.profilePhoto || profileImage}
            alt="User Avatar"
            width={100}
            height={100}
            className="w-20 h-20 object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 z-20 pointer-events-none">
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-red-600" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-red-600" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-red-600" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-red-600" />
          </div>
        </div>
      </Link>

      {/* Name Section */}
      <div className="text-center lg:text-left mb-4">
        <p className="uppercase text-sm text-gray-400">Name</p>
        <p className="text-lg text-red-500 uppercase font-bold">
          {profile?.name}
        </p>
      </div>

      {/* Occupation Section */}
      <div className="text-center lg:text-left mb-4">
        <p className="uppercase text-sm text-gray-400">Occupation :</p>
        <p className="text-sm text-red-500 uppercase">{profile?.occupation}</p>
      </div>

      {/* Social Section */}
      <div className="text-center lg:text-left w-full sm:w-auto">
        <p className="uppercase text-sm text-gray-400">Social :</p>
        <ContactForm />
      </div>
      <div className="text-center lg:text-left w-full sm:w-auto">
        <p className="uppercase text-sm text-gray-400">CV :</p>
        <a href={profile?.cv} target="_blank">
          <button className="w-full md:w-auto p-2 mt-2 flex items-center gap-2 text-xs font-bold uppercase text-red-500 border border-red-500 rounded transition-all hover:bg-red-500 hover:text-white">
            <span>Resume | CV</span>
            <DownloadIcon size={15} />
          </button>
        </a>
      </div>
    </aside>
  );
};

export default LeftSidebar;
