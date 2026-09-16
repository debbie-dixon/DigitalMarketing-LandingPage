import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Header from "./Header";
import Rating from "./Rating";
import image1 from "../assets/Image8.jpeg";
import image2 from "../assets/Image7.jpeg";
import image3 from "../assets/Image9.jpeg";
export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "John Doe",
      role: "CEO, TechCorp",
      content:
        "The communication, bi-weekly reporting, and sheer level of execution are unmatched. They don't just execute ads—they proactively optimize our entire growth strategy.",
      rating: <Rating rating={5} />,
      image: image1,
    },
    {
      name: "Jane Smith",
      role: "Marketing Director, BrandInc",
      content:
        "The communication, bi-weekly reporting, and sheer level of execution are unmatched. They don't just execute ads—they proactively optimize our entire growth strategy.",
      rating: <Rating rating={4} />,
      image: image2,
    },
    {
      name: "Bob Johnson",
      role: "Founder, StartupXYZ",
      content:
        "The communication, bi-weekly reporting, and sheer level of execution are unmatched. They don't just execute ads—they proactively optimize our entire growth strategy.",
      rating: <Rating rating={5} />,
      image: image3,
    },
  ];

  const showPrevious = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1,
    );
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <Header
          text="What Our Clients Say"
          id="gallery"
          color="text-blue-950"
        />
        <p className="text-center text-blue-950 mt-4 mb-4">
          Real results from ambitious brands scaling with our data-driven
          strategies
        </p>
        <div className="max-w-2xl mx-auto">
          <div className="relative flex items-center gap-3" aria-live="polite">
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Show previous testimonial"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-950 text-white transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:ring-offset-2"
            >
              <ChevronLeft size={22} aria-hidden="true" />
            </button>

            <article className="min-h-56 flex-1 rounded-lg bg-white p-6 shadow-md sm:p-8">
              <p className="mb-6 text-gray-600 italic">
                &quot;{activeTestimonial.content}&quot;
              </p>
              <div className="flex items-center">
                <img
                  src={activeTestimonial.image}
                  alt={activeTestimonial.name}
                  className="h-16 w-16 shrink-0 rounded-xl border-2 border-blue-950 object-cover"
                />
                <div className="ml-4">
                  <h3 className="font-bold text-gray-900">
                    {activeTestimonial.name}
                  </h3>
                  <p className="text-blue-600">{activeTestimonial.role}</p>
                  <div>{activeTestimonial.rating}</div>
                </div>
              </div>
            </article>

            <button
              type="button"
              onClick={showNext}
              aria-label="Show next testimonial"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-950 text-white transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:ring-offset-2"
            >
              <ChevronRight size={22} aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show testimonial from ${testimonial.name}`}
                aria-current={index === activeIndex ? "true" : undefined}
                className={`h-2.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-blue-950 focus:ring-offset-2 ${
                  index === activeIndex
                    ? "w-8 bg-blue-950"
                    : "w-2.5 bg-blue-300 hover:bg-blue-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
