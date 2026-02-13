import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CTABanner = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        <div
          className={`rounded-3xl bg-navy p-12 md:p-16 text-center relative overflow-hidden transition-all duration-700 ${isVisible ? "animate-scale-in" : "opacity-0"}`}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-5 left-10 w-20 h-20 border border-primary-foreground/10 rounded-full" />
            <div className="absolute bottom-5 right-10 w-16 h-16 border border-accent/20 rounded-full" />
          </div>
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Ready to invest, build, or<br />expand your business?
            </h2>
            <p className="text-primary-foreground/60 text-lg mb-8 max-w-xl mx-auto">
              Partner with a company committed to excellence and long-term growth.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-red-accent-light text-base px-10 py-6 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 hover:scale-105"
              >
                Contact Us Today
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
