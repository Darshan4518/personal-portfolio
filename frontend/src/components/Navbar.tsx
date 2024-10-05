import { useState } from "react";
import { RainbowButton } from "./ui/rainbow-button";
import { MenuIcon, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 max-w-7xl mx-auto p-3 text-white font-bold text-lg z-50 bg-black">
      <nav className="flex items-center justify-between">
        <div>
          <h3>
            <span className="text-purple-500">{"<"}</span> <span>Darshan</span>{" "}
            <span className="text-purple-500">{"/>"}</span>
          </h3>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-x-4">
          <li>
            <a className="hover:text-purple-500" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-purple-500" href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a className="hover:text-purple-500" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="hover:text-purple-500" href="#education">
              Education
            </a>
          </li>
        </ul>

        <a href="https://github.com/Darshan4518" target="_blank">
          <RainbowButton>Github Profile</RainbowButton>
        </a>

        {/* Mobile Menu Icon */}
        <div className="md:hidden cursor-pointer z-50" onClick={toggleMenu}>
          {isOpen ? <X size={30} /> : <MenuIcon size={30} />}
        </div>

        {/* Mobile Navigation (Dropdown) */}
        {isOpen && (
          <ul className="absolute top-full left-0 w-full bg-black text-center p-6 space-y-4 text-white md:hidden">
            <li>
              <a
                className="hover:text-purple-500"
                href="#home"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="hover:text-purple-500"
                href="#skills"
                onClick={() => setIsOpen(false)}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                className="hover:text-purple-500"
                href="#projects"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="hover:text-purple-500"
                href="#education"
                onClick={() => setIsOpen(false)}
              >
                Education
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
