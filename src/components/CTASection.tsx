import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import ctaBg from "@/assets/cta-bg.jpg";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={ctaBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.span
            className="inline-block bg-white/50 text-white px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Ready to Get Started?
          </motion.span>

          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Take Your Business to the{" "}
            <span className="text-primary">Next Level</span>
          </h2>

          <p className="text-muted-foreground text-lg md:text-xl mb-10 leading-relaxed">
            Partner with Tax Assist Solutions and let our team of expert chartered accountants
            transform your financial operations. Get a free consultation today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <a
                href="https://wa.me/2348169005556"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-lg font-semibold text-white flex items-center gap-2 transition-opacity shadow-lg hover:opacity-90"
                style={{ backgroundColor: "#25D366" }}
              >
                <MessageCircle className="w-5 h-5" />
                Send a DM
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
