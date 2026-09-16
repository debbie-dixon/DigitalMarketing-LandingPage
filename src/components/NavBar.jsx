import { useState } from "react";
import DynamicIcons from "./DynamicIcons";
import SideMenu from "./SideMenu";
export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);
  return (
    <>
      <nav className="sticky left-0 top-0 z-50 flex w-full items-center justify-between gap-4 px-5 py-4 sm:px-8 md:px-10">
        <p className="font-serif text-xl font-bold italic text-blue-950 sm:text-2xl">
          Logo
        </p>
        <div className="hidden md:flex gap-4 font-sans items-center  text-white text-sm tracking-wide">
          <a
            href="/"
            className="px-2 py-1 rounded-md hover:border-b-2 hover:text-blue-950 transition-all ease-in-out font-bold"
          >
            Home
          </a>
          <a
            href="#about"
            className="px-2 py-1 rounded-md hover:border-b-2 hover:text-blue-950 transition-all ease-in-out font-bold"
          >
            Why Choose Us
          </a>
          <a
            href="#services"
            className="px-2 py-1 rounded-md hover:border-b-2 hover:text-blue-950 transition-all ease-in-out font-bold"
          >
            Services
          </a>
          <a
            href="#contact"
            className="px-2 py-1 rounded-md hover:border-b-2 hover:text-blue-950 transition-all ease-in-out font-bold"
          >
            Contact Us
          </a>
        </div>
        <a
          href="#book"
          className="px-5 py-2 hidden md:flex text-white font-semibold hover:bg-blue-900 tracking-wide text-sm rounded-full bg-blue-950 transition ease-in-out"
        >
          Work With Us
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
