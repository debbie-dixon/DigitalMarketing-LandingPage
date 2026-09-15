import image from "../assets/Image5.jpg";
import Button from "./Button";
import NavBar from "./NavBar";

export default function Hero() {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="bg-cover bg-center h-screen w-full relative"
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-gray-600/70 via-gray-600/60 to-transparent z-0 pointer-events-none" />

      {/* Content wrapper with z-index to stay above the gradient */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        <NavBar />

        <section
          id="home"
          className="w-full flex flex-col md:flex-row gap-8 pt-24 pb-16"
        >
          <div className="flex flex-col items-start px-10 max-w-2xl">
            <h1 className="font-sans font-bold text-4xl md:text-5xl text-white text-start leading-tight">
              Scale Your Brand{" "}
              <span className="block mt-1">
                With <span className="text-blue-950">Data-Driven</span>{" "}
                Marketing
              </span>
            </h1>
            <p className="font-sans text-white text-lg mt-4 font-medium">
              We help businesses grow their online presence <br /> and drive
              results through strategic marketing solutions.
            </p>
            <div className="mt-6">
              <Button
                text="Explore Our Services"
                hover="hover:bg-blue-900 transition"
                rounded="rounded-full"
                bgColor="bg-blue-950"
                textColor="text-white"
                font="font-semibold"
                link="#gallery"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
