import image from "../assets/Image4.jpg";
import image2 from "../assets/Image3.jpg";
import image3 from "../assets/Image6.jpg";
import DynamicIcons from "./DynamicIcons";
import Header from "./Header";

export default function About() {
  return (
    <>
      <section
        id="about"
        className="mt-8 mb-8 flex w-full flex-col items-center gap-8 px-5 sm:px-6 md:flex-row md:justify-between"
      >
        <div className="grid w-full max-w-lg grid-cols-2 gap-3 sm:gap-4 md:mx-auto md:grid-cols-3 md:grid-rows-2">
          {/* Large Featured Image */}
          <div className="col-span-2 overflow-hidden rounded-xl shadow-lg md:col-span-2 md:row-span-2">
            <img
              src={image}
              alt="Beach"
              className="h-40 w-full object-cover sm:h-52 md:h-full"
            />
          </div>

          {/* Small Image 1 */}
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img
              src={image2}
              alt="Mountains"
              className="h-24 w-full object-cover sm:h-32 md:h-full"
            />
          </div>

          {/* Small Image 2 */}
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img
              src={image3}
              alt="Forest"
              className="h-24 w-full object-cover sm:h-32 md:h-full"
            />
          </div>
        </div>
        <div className="w-full max-w-xl px-2 sm:px-8">
          <h1 className="font-black text-blue-950 text-2xl text-left mb-4">
            Why Choose Us
          </h1>
          <p className="mb-4 text-blue-950">
            We deliver data-backed strategies designed to scale your business
            efficiency
          </p>

          <section className="grid w-full gap-6 text-blue-950 sm:grid-cols-3">
            <div className="flex flex-col items-start">
              <DynamicIcons iconName="users" />
              <p className="text-sm ">
                <span className="font-bold">Expert Team:</span> <br />
                Skilled professionals dedicated to your success.
              </p>
            </div>

            <div className="flex flex-col items-start">
              <DynamicIcons iconName="chart-no-axes-combined" />
              <p className="text-sm">
                <span className="font-bold">Advanced Analytics:</span> <br />
                In-depth insights to drive business growth.
              </p>
            </div>

            <div className="flex flex-col items-start">
              <DynamicIcons iconName="circle-dollar-sign" />
              <p className="text-sm">
                <span className="font-bold">Cost-Effective Solutions:</span>{" "}
                <br />
                Maximize ROI with our efficient approaches.
              </p>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
