import { useState } from "react";
import { useEffect } from "react";
import { ArrowUp } from "lucide-react";
import "./App.css";
import Booking from "./components/Booking";
import Hero from "./components/Hero";
import Offers from "./components/Offers";
import Footer from "./components/Footer";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    // If a hash exists in the URL on refresh
    if (window.location.hash) {
      // Replaces the URL with just the base path (e.g., clears the '#about')
      window.history.replaceState(null, "", window.location.pathname);

      // Instantly reset view to top of page
      window.scrollTo(0, 0);
    }

    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <main>
        <Hero />
        <Offers />
        <About />
        <Services />
        <Testimonials />
        <Booking />
        <Contact />
      </main>

      <Footer />

      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          title="Back to top"
          className="fixed bottom-5 right-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full bg-blue-950 text-white shadow-lg transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:ring-offset-2 sm:bottom-7 sm:right-7"
        >
          <ArrowUp size={20} aria-hidden="true" />
        </button>
      )}
    </>
  );
}

export default App;
