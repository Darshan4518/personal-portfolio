import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <div className="text-white relative md:max-h-[74vh] h-auto overflow-hidden bg-black">
      {/* Image Section */}

      <div className="md:absolute top-8 md:top-4  px-4 w-full flex justify-center ">
        <h2 className="text-center max-w-lg text-lg md:text-xl lg:text-xl mx-auto ">
          Gliding through a vast web of interconnected devices and servers,
          bringing joy and playfulness to users worldwide.
        </h2>
      </div>

      <div className=" h-[60vh] md:h-[74vh] lg:h-[80vh]">
        <Image
          src="/whale.png"
          alt="whale"
          className="w-full h-full object-cover"
          width={1200}
          height={1200}
        />
      </div>

      {/* Text Section */}
    </div>
  );
};

export default HomePage;
