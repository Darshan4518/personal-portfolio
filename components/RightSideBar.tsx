import Image from "next/image";
import React from "react";
import reward1 from "@/assets/reward1.png";
import reward2 from "@/assets/reward2.png";
import MusicController from "./MusicController";

const RightSideBar = () => {
  return (
    <div className=" max-w-[14vw]">
      <div className=" border-l border-red-700 ">
        <h2 className=" bg-redprimary p-0.5 px-2 text-white font-bold uppercase text-sm ">
          Active Quest
        </h2>
        <h3 className="  bg-red-800/10 p-2 px-2 text-white font-bold uppercase text-xs">
          the nextjs skill-up line
        </h3>
        <div className="  p-2">
          <p className=" uppercase text-sm text-white">Quest name</p>
          <p className=" text-lg text-red-500 uppercase">nextjs website</p>
        </div>
        <div className="  p-2">
          <p className=" uppercase text-sm text-white">goal</p>
          <p className=" text-xs text-gray-400 uppercase">
            Develop a feature-rich web and mobile application with user
            authentication, real-time data syncing, and push notifications.
            Implement complex UI elements like dynamic forms, interactive
            charts, and media galleries. Ensure seamless cross-platform
            functionality between web and mobile apps.
          </p>
        </div>
        <div className="  p-2">
          <p className=" uppercase text-sm text-white">rewards</p>
          <div className=" flex gap-4 ">
            <Image src={reward1} alt=" reward" className=" w-12 h-12" />
            <Image src={reward2} alt=" reward" className=" w-12 h-12" />
          </div>
        </div>
      </div>
      <MusicController />
    </div>
  );
};

export default RightSideBar;
