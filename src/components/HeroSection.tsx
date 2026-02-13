import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary-foreground/10 rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-20 h-20 border-2 border-accent/20 rotate-45 animate-float-slow" />
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-accent/10 rounded-lg rotate-12 animate-float" />
        <div className="absolute top-1/3 right-1/3 w-40 h-40 border border-primary-foreground/5 rounded-full animate-spin-slow" />
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-primary-foreground/10 rounded-full animate-float-slow" />
        <div className="absolute top-60 left-1/3 w-6 h-6 bg-accent/20 rounded-full animate-pulse-glow" />
        <div className="absolute bottom-40 right-1/4 w-8 h-8 bg-primary-foreground/5 rounded-full animate-pulse-glow" style={{ animationDelay: "1s" }} />
        {/* Large decorative circle */}
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] border border-primary-foreground/5 rounded-full" />
        <div className="absolute -top-20 -right-20 w-[300px] h-[300px] border border-accent/10 rounded-full" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 text-center lg:px-8">
        <div className={`transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground/80 tracking-wide">Buildwell Africa</span>
          </div>
        </div>

        <h1
          className={`font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 transition-all duration-1000 delay-200 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Building Value.
          <br />
          <span className="text-accent">Creating Opportunities.</span>
          <br />
          Delivering Excellence.
        </h1>

        <p
          className={`max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/70 mb-10 font-light leading-relaxed transition-all duration-1000 delay-400 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          A diversified investment and development company providing real estate,
          construction, global trade, and business solutions — delivering
          sustainable value and long-term profitability.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Link to="/services">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-red-accent-light text-base px-8 py-6 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 hover:scale-105"
            >
              Explore Our Services
              <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 text-base px-8 py-6 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById("partnership")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Handshake className="w-5 h-5 mr-1" />
            Partner With Us
          </Button>
        </div>

        {/* Scroll indicator */}
        <div
          className={`mt-16 transition-all duration-1000 delay-700 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full mx-auto flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
