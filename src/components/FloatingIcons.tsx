import { motion } from "framer-motion";
import { Calculator, Receipt, FileText, DollarSign, PieChart, BarChart3, Percent, Landmark } from "lucide-react";

const icons = [
  { Icon: Calculator, x: "5%", y: "10%", delay: 0 },
  { Icon: Receipt, x: "90%", y: "15%", delay: 1.2 },
  { Icon: FileText, x: "15%", y: "70%", delay: 0.6 },
  { Icon: DollarSign, x: "80%", y: "60%", delay: 1.8 },
  { Icon: PieChart, x: "50%", y: "85%", delay: 0.3 },
  { Icon: BarChart3, x: "70%", y: "30%", delay: 2.1 },
  { Icon: Percent, x: "30%", y: "40%", delay: 0.9 },
  { Icon: Landmark, x: "60%", y: "10%", delay: 1.5 },
];

const FloatingIcons = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {icons.map(({ Icon, x, y, delay }, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: x, top: y }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.06, 0.12, 0.06],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay,
            ease: "easeInOut",
          }}
        >
          <Icon className="w-8 h-8 md:w-12 md:h-12 text-secondary" />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingIcons;
