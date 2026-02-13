import { Target, ShieldCheck, MessageSquare, Cog, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  { icon: Target, title: "Strategic Planning", desc: "Comprehensive market analysis and strategic roadmaps for every initiative." },
  { icon: ShieldCheck, title: "Risk Assessment", desc: "Thorough risk evaluation and mitigation strategies to protect investments." },
  { icon: MessageSquare, title: "Transparent Communication", desc: "Open, honest dialogue with all stakeholders throughout the process." },
  { icon: Cog, title: "Structured Execution", desc: "Disciplined project management ensuring timely, quality delivery." },
  { icon: TrendingUp, title: "Long-Term Value", desc: "Optimizing outcomes for sustainable growth and lasting profitability." },
];

const OurApproach = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 border border-primary-foreground rounded-full" />
        <div className="absolute bottom-10 right-10 w-60 h-60 border border-primary-foreground rounded-full" />
      </div>

      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <span className="text-sm font-semibold tracking-widest uppercase text-accent mb-4 block">Our Process</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Our Approach to <span className="text-accent">Business</span>
          </h2>
          <p className="text-primary-foreground/60 text-lg">
            A structured, disciplined methodology that delivers consistent results across all our operations.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className={`relative text-center group transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
                style={{ animationDelay: `${i * 200}ms` }}
              >
                <div className="relative z-10 w-20 h-20 mx-auto mb-6 rounded-2xl gradient-card border border-primary-foreground/10 flex items-center justify-center group-hover:border-accent/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-accent/20 group-hover:scale-110">
                  <step.icon className="w-9 h-9 text-accent" />
                </div>
                <div className="absolute top-9 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent hidden lg:block z-20 mt-12" />
                <h3 className="font-display text-lg font-semibold text-primary-foreground mb-2">{step.title}</h3>
                <p className="text-primary-foreground/50 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
