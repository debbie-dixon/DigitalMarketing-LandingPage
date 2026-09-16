import image from "../assets/Image5.jpg";
import Button from "./Button";
import NavBar from "./NavBar";

export default function Hero() {
  return (
    <div className="relative min-h-170 w-full overflow-hidden sm:min-h-screen">
      <link rel="preload" as="image" href={image} fetchPriority="high" />
      <img
        src={image}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-gray-600/70 via-gray-600/60 to-transparent z-0 pointer-events-none" />

      {/* Content wrapper with z-index to stay above the gradient */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        <NavBar />

        <section
          id="home"
          className="animate-fade-up flex w-full flex-col gap-8 px-5 pb-14 pt-20 sm:px-8 md:flex-row md:px-10 md:pb-16 md:pt-24"
        >
          <div className="flex max-w-2xl flex-col items-start">
            <h1 className="text-start font-sans text-4xl font-bold leading-tight text-white sm:text-5xl">
              Scale Your Brand{" "}
              <span className="mt-1 block">
                With <span className="text-blue-950">Data-Driven</span>{" "}
                Marketing
              </span>
            </h1>
            <p className="mt-4 max-w-xl font-sans text-base font-medium leading-relaxed text-white sm:text-lg">
              We help businesses grow their online presence and drive results
              through strategic marketing solutions.
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
