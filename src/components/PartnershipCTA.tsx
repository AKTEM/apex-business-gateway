import { Link } from "react-router-dom";
import { TrendingUp, Building, Truck, Globe, Landmark, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const partners = [
  { icon: TrendingUp, label: "Investors" },
  { icon: Building, label: "Property Developers" },
  { icon: Truck, label: "Suppliers" },
  { icon: Globe, label: "International Trade Partners" },
  { icon: Landmark, label: "Government & Private Institutions" },
];

const PartnershipCTA = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="partnership" className="py-24 gradient-cta relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-32 h-32 border border-primary-foreground/10 rounded-full animate-float" />
        <div className="absolute bottom-10 left-20 w-24 h-24 border border-primary-foreground/10 rounded-full animate-float-slow" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        <div className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <span className="text-sm font-semibold tracking-widest uppercase text-primary-foreground/60 mb-4 block">Partner With Us</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Let's Build Profitable Ventures Together
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            We believe in collaborative growth and long-term partnerships built on trust and shared success.
          </p>
        </div>

        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-700 delay-300 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          {partners.map((p) => (
            <div
              key={p.label}
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-sm hover:bg-primary-foreground/20 transition-colors duration-300"
            >
              <p.icon className="w-5 h-5 text-primary-foreground/80" />
              <span className="text-sm font-medium text-primary-foreground">{p.label}</span>
            </div>
          ))}
        </div>

        <div className={`text-center transition-all duration-700 delay-500 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-primary-foreground text-accent hover:bg-primary-foreground/90 text-base px-10 py-6 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Start a Partnership
              <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PartnershipCTA;
