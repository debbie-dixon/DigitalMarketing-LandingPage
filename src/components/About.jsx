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
        className="w-full flex flex-col md:flex-row justify-between items-center gap-8 px-6 mt-8 mb-8"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2 max-w-lg mx-auto">
          {/* Large Featured Image */}
          <div className="md:col-span-2 md:row-span-2 overflow-hidden rounded-xl shadow-lg">
            <img src={image} alt="Beach" className="object-cover h-full" />
          </div>

          {/* Small Image 1 */}
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img src={image2} alt="Mountains" className="object-cover h-full" />
          </div>

          {/* Small Image 2 */}
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img src={image3} alt="Forest" className="object-cover h-full" />
          </div>
        </div>
        <div className="px-8">
          <h1 className="font-black text-blue-950 text-2xl text-left mb-4">
            Why Choose Us
          </h1>
          <p className="mb-4 text-blue-950">
            We deliver data-backed strategies designed to scale your business
            efficiency
          </p>

          <section className="flex w-full gap-6 text-blue-950  ">
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
