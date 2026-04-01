import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

const faqs = [
  {
    q: "What services does Tax Assist Solutions offer?",
    a: "We offer a comprehensive range of services including Accounting, IFRS Services, Taxation & Tax Planning, Management Consultancy, Financial Advisory, and Training & Development programs tailored for businesses across various sectors.",
  },
  {
    q: "How can Tax Assist Solutions help my business with tax planning?",
    a: "Our team of experienced chartered accountants develops strategic tax plans that optimize your tax position while ensuring full compliance with regulatory requirements. We analyze your business structure and recommend the most tax-efficient strategies.",
  },
  {
    q: "Do you work with small businesses or only large corporations?",
    a: "We work with businesses of all sizes — from startups and small enterprises to large corporations. Our services are tailored to meet the unique needs and budget of each client, regardless of their company size.",
  },
  {
    q: "What industries do you specialize in?",
    a: "We serve clients across various sectors of the economy including oil & gas, telecommunications, manufacturing, banking & finance, real estate, hospitality, and technology industries.",
  },
  {
    q: "How do I get started with Tax Assist Solutions?",
    a: "Getting started is simple. Reach out through our contact form, email, or phone. We'll schedule an initial consultation to understand your needs and propose a tailored solution for your business.",
  },
  {
    q: "Are your services available outside Nigeria?",
    a: "Yes, while our headquarters is in Lagos, Nigeria, we serve clients across Africa and beyond. Our vision is to be the leading indigenous Accounting Services firm in Africa and internationally.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedCard>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-3">
              <HelpCircle className="w-6 h-6 text-secondary" />
              <span className="text-secondary font-semibold uppercase tracking-widest text-sm">
                Common Questions
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              Frequently Asked <span className="text-secondary">Questions</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Find answers to the most common questions about our services and how we can help your business.
            </p>
          </div>
        </AnimatedCard>

        <AnimatedCard delay={0.2}>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="glass-card px-6 border-none rounded-xl overflow-hidden"
                >
                  <AccordionTrigger className="text-foreground text-left font-semibold hover:no-underline hover:text-primary py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
};

export default FAQSection;
