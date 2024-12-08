"use client";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      setLocalTime(new Date().toLocaleTimeString());
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-[6vh] flex justify-between items-center px-5 mx-auto w-full">
      <div className="flex gap-2 items-end">
        <h2 className="text-xl text-[#7DFF68] font-semibold ">82</h2>
        <span className="uppercase text-sm text-gray-300">Level</span>
      </div>
      <div>
        <p className="text-xl text-green-400 uppercase">
          Local Time: {localTime}
        </p>
      </div>
    </div>
  );
};

export default Navbar;
