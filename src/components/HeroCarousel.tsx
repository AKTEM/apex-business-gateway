import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/TAX.png";

const slides = [
  {
    image: hero1,
    title: "Future Proof Your Business",
    subtitle: "We employ a smart approach to delivering quality services to our clients.",
  },
  {
    image: hero2,
    title: "Advisory Services",
    subtitle: "Working with you to bring your desired aim.",
  },
  {
    image: hero3,
    title: "Tax Services",
    subtitle: "An accurate and clean approach for your business.",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="home" className="relative h-[85vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/70" />
        </motion.div>
      </AnimatePresence>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.span
                className="inline-block bg-white/50 border border-white/80 px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-white mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                Tax Assist Solutions
              </motion.span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
                {slides[current].title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                {slides[current].subtitle}
              </p>
              <div className="flex items-center justify-center gap-4">
                <Link
                  to="/services"
                  className="bg-primary px-8 py-3 rounded-md font-semibold text-primary-foreground hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
                >
                  Our Services
                </Link>
                <Link
                  to="/contact"
                  className="border border-foreground/30 px-8 py-3 rounded-md font-semibold text-foreground hover:bg-foreground/10 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-2 md:left-6 bottom-20 md:bottom-8 p-2 rounded-full bg-background/40 backdrop-blur-sm text-foreground hover:bg-primary/80 transition-colors z-10"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-2 md:right-6 bottom-20 md:bottom-8 p-2 rounded-full bg-background/40 backdrop-blur-sm text-foreground hover:bg-primary/80 transition-colors z-10"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? "bg-primary w-8" : "bg-foreground/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
