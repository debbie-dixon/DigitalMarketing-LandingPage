import { useState } from "react";
import DynamicIcons from "./DynamicIcons";
import SideMenu from "./SideMenu";
export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);
  return (
    <>
      <nav className="flex justify-between items-center gap-4 py-4 px-10 sticky top-0 left-0 w-full mx-auto z-50">
        <p className="font-serif italic font-bold text-2xl">Logo</p>
        <div className="hidden md:flex gap-4 font-sans items-center  text-gray-400">
          <a
            href="/"
            className="px-2 py-1 rounded-md hover:border-b-2 hover:text-black transition-all ease-in-out"
          >
            Home
          </a>
          <a
            href="#about"
            className="px-2 py-1 rounded-md hover:border-b-2 hover:text-black transition-all ease-in-out"
          >
            About
          </a>
          <a
            href="#services"
            className="px-2 py-1 rounded-md hover:border-b-2 hover:text-black transition-all ease-in-out"
          >
            Services
          </a>
          <a
            href="#contact"
            className="px-2 py-1 rounded-md hover:border-b-2 hover:text-black transition-all ease-in-out"
          >
            Contact
          </a>
        </div>
        <a
          href="#book"
          className="px-4 py-1 hover:bg-black hover:text-white tracking-wide rounded-full bg-gray-400"
        >
          Book Us
        </a>

        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-tColor p-2 focus:outline-none"
          aria-label="Open Menu"
        >
          <DynamicIcons iconName="menu" />
        </button>
      </nav>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-55 shadow-xl p-6 transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={closeMenu}
          className=" p-2 focus:outline-none flex justify-end mb-8"
          aria-label="Close Menu"
        >
          <DynamicIcons iconName="x" />
        </button>
        <SideMenu closeMenu={closeMenu} />
      </div>
    </>
  );
}
