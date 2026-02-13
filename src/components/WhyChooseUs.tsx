import { ShieldCheck, Award, ClipboardCheck, Eye, Network, Heart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const reasons = [
  { icon: ShieldCheck, title: "Legally Registered & Compliant", desc: "Fully registered and operating within all legal and regulatory frameworks." },
  { icon: Award, title: "Multi-Sector Expertise", desc: "Deep knowledge across real estate, construction, trade, and business solutions." },
  { icon: ClipboardCheck, title: "Professional Project Management", desc: "Disciplined execution with quality assurance at every stage." },
  { icon: Eye, title: "Transparent Transactions", desc: "Clear, honest dealings with full visibility into every process." },
  { icon: Network, title: "Strong Business Network", desc: "Extensive connections with investors, developers, and institutions." },
  { icon: Heart, title: "Client Satisfaction", desc: "Unwavering commitment to exceeding client expectations." },
];

const WhyChooseUs = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-secondary/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <span className="text-sm font-semibold tracking-widest uppercase text-accent mb-4 block">Why Us</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Choose <span className="text-accent">Buildwell Africa</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Choosing the right partner is critical to your success. Here's why clients trust us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className={`p-6 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all duration-500 hover:shadow-lg hover:shadow-accent/5 group ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent transition-colors duration-300">
                <reason.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{reason.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-muted-foreground text-lg font-medium italic">
            We combine experience, integrity, and strategic execution to deliver measurable results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
