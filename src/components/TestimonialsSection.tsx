import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import testimonialsBg from "@/assets/testimonials-bg.jpg";

const AnimatedCard = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const testimonials = [
  {
    name: "Adebayo Ogunlesi",
    role: "CEO, Sterling Industries",
    text: "Tax Assist Solutions transformed our financial operations. Their expert tax planning saved us significantly and their team's dedication is unmatched. Highly recommended for any business looking for professional accounting services.",
    stars: 5,
  },
  {
    name: "Ngozi Adekunle",
    role: "CFO, GreenField Corp",
    text: "Working with Tax Assist Solutions has been a game-changer. Their proactive approach to tax management and financial advisory has helped us navigate complex regulatory environments with confidence.",
    stars: 5,
  },
  {
    name: "Samuel Mensah",
    role: "Managing Director, Apex Holdings",
    text: "The professionalism and expertise of the Tax Assist team is outstanding. They understand our business inside out and provide tailored solutions that truly add value. A trusted partner for over 5 years.",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % testimonials.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-20 md:py-28 relative">
      <div className="absolute inset-0">
        <img src={testimonialsBg} alt="" className="w-full h-full object-cover opacity-[0.05]" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedCard>
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold uppercase tracking-widest text-sm">Client Stories</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              What Our <span className="text-secondary">Clients Say</span>
            </h2>
          </div>
        </AnimatedCard>

        <AnimatedCard delay={0.2}>
          <div className="max-w-4xl mx-auto relative">
            <div className="glass-card p-8 md:p-12 text-center relative">
              <Quote className="w-12 h-12 text-primary/20 mx-auto mb-6" />
              
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: testimonials[current].stars }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/90 text-lg md:text-xl leading-relaxed mb-8 italic">
                  "{testimonials[current].text}"
                </p>
                <div>
                  <p className="text-foreground font-bold text-lg">{testimonials[current].name}</p>
                  <p className="text-muted-foreground">{testimonials[current].role}</p>
                </div>
              </motion.div>

              <div className="flex justify-center gap-3 mt-8">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      i === current ? "bg-secondary w-7" : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={() => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-2 rounded-full bg-card border border-border hover:border-primary transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={() => setCurrent((p) => (p + 1) % testimonials.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-2 rounded-full bg-card border border-border hover:border-primary transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
};

export default TestimonialsSection;
