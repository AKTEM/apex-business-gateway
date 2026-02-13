import { Link } from "react-router-dom";
import { Building, HardHat, Ship, Briefcase, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Building,
    title: "Real Estate Investment",
    desc: "Secure profitable property opportunities with expert guidance — from land acquisition to property sales and investment advisory.",
    color: "from-accent/20 to-accent/5",
  },
  {
    icon: HardHat,
    title: "Construction",
    desc: "High-quality residential and commercial construction projects delivered on time and within budget with industry compliance.",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Ship,
    title: "Import & Export",
    desc: "Connecting markets globally with efficient international trade facilitation, product sourcing, and logistics coordination.",
    color: "from-accent/20 to-accent/5",
  },
  {
    icon: Briefcase,
    title: "Business Solutions",
    desc: "Investment partnerships, business consulting, supply & distribution, and multi-sector project development.",
    color: "from-primary/20 to-primary/5",
  },
];

const ServicesPreview = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-background relative" id="services-preview">
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <span className="text-sm font-semibold tracking-widest uppercase text-accent mb-4 block">What We Do</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Multi-sector expertise delivering sustainable value across real estate, construction, global trade, and business solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <Link
              to="/services"
              key={service.title}
              className={`group relative p-8 rounded-2xl border border-border bg-card hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/5 hover:-translate-y-2 overflow-hidden ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                  <service.icon className="w-8 h-8 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{service.desc}</p>
                <div className="flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
