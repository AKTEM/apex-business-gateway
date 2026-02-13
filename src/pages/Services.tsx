import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Building, HardHat, Ship, Briefcase,
  Home, MapPin, BarChart3, Megaphone,
  Hammer, PaintBucket, ClipboardList, LandPlot,
  Package, Truck, FileCheck, Globe,
  Handshake, Search, Store, Layers,
} from "lucide-react";

const services = [
  {
    icon: Building,
    title: "Real Estate Investment & Property Sales",
    intro: "We help clients secure profitable property opportunities with confidence.",
    items: [
      { icon: Home, text: "Buying and selling residential and commercial properties" },
      { icon: MapPin, text: "Land acquisition and development" },
      { icon: Megaphone, text: "Property marketing and brokerage services" },
      { icon: BarChart3, text: "Real estate investment advisory" },
    ],
    closing: "Whether you are an investor or a first-time buyer, we provide expert guidance and strategic support.",
  },
  {
    icon: HardHat,
    title: "Construction",
    intro: "We deliver high-quality construction projects on time and within budget.",
    items: [
      { icon: Home, text: "Residential construction" },
      { icon: LandPlot, text: "Commercial building projects" },
      { icon: PaintBucket, text: "Renovations and remodeling" },
      { icon: ClipboardList, text: "Project management" },
      { icon: Hammer, text: "Infrastructure development" },
    ],
    closing: "From planning to execution, we ensure quality, durability, and compliance with industry standards.",
  },
  {
    icon: Ship,
    title: "Import & Export Services",
    intro: "We connect markets globally with efficiency and compliance.",
    items: [
      { icon: Globe, text: "International trade facilitation" },
      { icon: Search, text: "Product sourcing and procurement" },
      { icon: Package, text: "Export of approved goods" },
      { icon: Truck, text: "Logistics coordination" },
    ],
    closing: "We ensure smooth cross-border transactions while maintaining regulatory compliance and operational efficiency.",
  },
  {
    icon: Briefcase,
    title: "General Business Solutions",
    intro: "Our diversified structure allows us to adapt to emerging opportunities across industries.",
    items: [
      { icon: Handshake, text: "Investment partnerships" },
      { icon: FileCheck, text: "Business consulting" },
      { icon: Store, text: "Supply and distribution" },
      { icon: Layers, text: "Multi-sector project development" },
    ],
    closing: "We collaborate with businesses and investors to create structured, profitable ventures.",
  },
];

function ServiceSection({ service, index }: { service: typeof services[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation();
  const isEven = index % 2 === 0;

  return (
    <section className={`py-20 ${isEven ? "bg-background" : "bg-secondary/30"}`} ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}>
          <div className={`transition-all duration-700 ${isVisible ? (isEven ? "animate-slide-in-left" : "animate-slide-in-right") : "opacity-0"} ${!isEven ? "lg:order-2" : ""}`}>
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
              <service.icon className="w-8 h-8 text-accent" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">{service.title}</h2>
            <p className="text-muted-foreground text-lg mb-6">{service.intro}</p>
            <ul className="space-y-4 mb-6">
              {service.items.map((item) => (
                <li key={item.text} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground">{item.text}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground italic">{service.closing}</p>
          </div>

          {/* Decorative illustration */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? (isEven ? "animate-slide-in-right" : "animate-slide-in-left") : "opacity-0"} ${!isEven ? "lg:order-1" : ""}`}>
            <div className="aspect-square max-w-md mx-auto rounded-3xl gradient-card border border-primary-foreground/10 flex items-center justify-center relative overflow-hidden">
              <service.icon className="w-32 h-32 text-accent/30" />
              <div className="absolute top-6 right-6 w-12 h-12 border border-primary-foreground/10 rounded-full animate-float" />
              <div className="absolute bottom-6 left-6 w-8 h-8 border border-accent/20 rounded-lg rotate-45 animate-float-slow" />
              <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-accent/10 rounded-full animate-pulse-glow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-32 h-32 border border-primary-foreground/10 rounded-full animate-float" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <span className="text-sm font-semibold tracking-widest uppercase text-accent mb-4 block">What We Do</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Our <span className="text-accent">Services</span>
          </h1>
          <p className="max-w-2xl mx-auto text-primary-foreground/70 text-lg">
            Multi-sector expertise delivering sustainable value across real estate, construction, global trade, and business solutions.
          </p>
        </div>
      </section>

      {services.map((service, i) => (
        <ServiceSection key={service.title} service={service} index={i} />
      ))}

      <CTABanner />
      <Footer />
    </div>
  );
};

export default Services;
