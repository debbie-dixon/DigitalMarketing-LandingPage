export default function SideMenu({ closeMenu }) {
  return (
    <>
      <div className="flex flex-col gap-5  z-999">
        <a
          href="#home"
          onClick={closeMenu}
          className=" active:text-black text-blue-950 hover:rounded-none  hover:border-b-2 hover:border-blue-950 mx-auto px-4 py-2  rounded-md transition-colors"
        >
          Home
        </a>
        <a
          href="#services"
          onClick={closeMenu}
          className=" active:text-black text-blue-950 hover:rounded-none  hover:border-b-2 hover:border-blue-950 mx-auto px-4 py-2  rounded-md transition-colors"
        >
          Services
        </a>
        <a
          href="#contact"
          onClick={closeMenu}
          className="  text-blue-950 hover:rounded-none  hover:border-b-2 hover:border-blue-950 mx-auto px-4 py-2 rounded-md transition-colors"
        >
          Contact Us
        </a>
        <a
          href="#book"
          onClick={closeMenu}
          className=" text-center bg-blue-950 text-white px-6 py-2.5 rounded-md font-medium tracking-wide transition hover:bg-blue-900"
        >
          Work With Us
        </a>
      </div>
    </>
  );
}
