import image from "../assets/Image5.jpg";
import Button from "./Button";
import NavBar from "./NavBar";

export default function Hero() {
  return (
    <div className="relative min-h-[85vh] w-full overflow-hidden sm:min-h-screen flex flex-col justify-between">
      <link rel="preload" as="image" href={image} fetchPriority="high" />
      <img
        src={image}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
      />

      {/* Adaptive Overlay: Solid dark backdrop on Mobile | Gradient fade on Desktop */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-slate-950/70 md:bg-linear-to-r md:from-slate-950/85 md:via-slate-950/50 md:to-transparent" />

      {/* Content wrapper with z-index to stay above the gradient */}
      <div className="relative z-10 flex min-h-screen flex-col justify-between">
        <NavBar />

        <section
          id="home"
          className="animate-fade-up flex w-full flex-col gap-8 px-5 pb-16 pt-24 sm:px-8 md:flex-row md:px-12 md:pb-20 lg:px-16 "
        >
          <div className="flex max-w-xl flex-col items-start">
            <h1 className="text-start font-sans text-3xl font-bold leading-tight text-white sm:text-5xl md:leading-tight">
              Scale Your Brand{" "}
              <span className="mt-1 block">
                With{" "}
                <span className="text-blue-300 font-extrabold">
                  Data-Driven
                </span>{" "}
                Marketing
              </span>
            </h1>
            <p className="mt-4 max-w-lg font-sans text-sm font-normal leading-relaxed text-slate-200 sm:text-base md:text-lg">
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
                link="#services"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
