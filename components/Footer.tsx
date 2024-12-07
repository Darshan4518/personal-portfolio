"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavigationMenu from "./NavigationDailog";

interface Footer {
  title: string;
  description: string;
  href: string;
}

const Footer = () => {
  const footer: Footer[] = [
    {
      title: "Beginning",
      description:
        "Responsibility is to achieve nothing, to experience work often.",
      href: "/home",
    },
    {
      title: "Skills",
      description:
        "Skills are to sharpen the mind, to master the craft endlessly",
      href: "/home/skills",
    },
    {
      title: "Creations",
      description:
        "Creation is to build without limits, to experience effort repeatedly.",
      href: "/home/creations",
    },
    {
      title: "Achievements",
      description: "Development is to innovate without boundaries.",
      href: "/home/achievements",
    },
  ];

  return (
    <footer className="mt-auto w-full p-4 hidden lg:block">
      <div className="flex flex-wrap justify-evenly max-w-6xl mx-auto items-center gap-4 sm:gap-6">
        {footer.map((item) => (
          <Link
            href={item.href}
            key={item.title}
            className="border-l border-red-700 max-w-full sm:max-w-[45%] lg:max-w-[22%] flex-grow"
          >
            <h2 className="bg-red-700 p-1 px-2 text-white font-bold uppercase text-sm">
              {item.title}
            </h2>
            <p className="text-gray-400 p-3 text-xs sm:text-sm">
              {item.description}
            </p>
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;

export const MobileFooter = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <footer className="mt-auto w-full p-4 bg-black lg:hidden">
      <div className="flex gap-4 justify-between items-center">
        <button
          onClick={() => setOpen(true)}
          className="flex-1 uppercase border border-red-500 bg-red-500 text-black p-2 text-base font-semibold rounded transition-all hover:bg-red-600"
          aria-label="Open Navigation Menu"
        >
          Navigation
        </button>

        {/* About Button */}
        <Link href="/home/profile" className="flex-1">
          <button
            className="w-full uppercase border border-red-500 text-red-500 p-2 text-base font-semibold rounded transition-all hover:bg-red-500 hover:text-black"
            aria-label="Go to About Page"
          >
            About
          </button>
        </Link>
      </div>
      {/* Navigation Menu */}
      <NavigationMenu open={open} setOpen={setOpen} />
    </footer>
  );
};
