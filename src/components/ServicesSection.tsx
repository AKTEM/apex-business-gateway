import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import servicesBg from "@/assets/services-bg.jpg";
import serviceAccounting from "@/assets/service-accounting.jpg";
import serviceIrs from "@/assets/IFRS.jpg";
import serviceTaxation from "@/assets/service-taxation.jpg";
import serviceConsultancy from "@/assets/CONSULTING.jpg";
import serviceAdvisory from "@/assets/service-advisory.jpg";
import serviceTraining from "@/assets/service-training.jpg";
import {
  Calculator,
  FileText,
  Building2,
  Briefcase,
  GraduationCap,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

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

const services = [
  {
    icon: Calculator,
    title: "Accounting Services",
    desc: "We provide comprehensive accountancy services including writing up accounting books, preparing financial reports, reconciliation of account balances, and designing accounting systems.",
    color: "primary" as const,
    image: serviceAccounting,
    slug: "accounting",
  },
  {
    icon: FileText,
    title: "IFRS Services",
    desc: "Our firm is adequately equipped with highly qualified experienced IFRS professionals to carry out IFRS related assignments including reporting, training, conversion and advisory.",
    color: "secondary" as const,
    image: serviceIrs,
    slug: "ifrs",
  },
  {
    icon: Building2,
    title: "Taxation & Tax Services",
    desc: "We handle both corporate and personal taxation matters, assist in processing and filing of tax returns, and negotiate with tax authorities on your annual tax computations.",
    color: "primary" as const,
    image: serviceTaxation,
    slug: "taxation",
  },
  {
    icon: Briefcase,
    title: "Management Consultancy",
    desc: "Our consultancy unit renders services including profitability analysis, responsibility accounting, project management, feasibility reports, and change management.",
    color: "secondary" as const,
    image: serviceConsultancy,
    slug: "consultancy",
  },
  {
    icon: TrendingUp,
    title: "Financial Advisory Services",
    desc: "We provide a broad range of financial advisory services including financial projections, planning and control, profit planning, investment analysis, and working capital management.",
    color: "primary" as const,
    image: serviceAdvisory,
    slug: "advisory",
  },
  {
    icon: GraduationCap,
    title: "Training & Development",
    desc: "We develop and present training courses specifically tailored towards improving staff skills, covering a wide range of subjects for individuals and categories of staff.",
    color: "secondary" as const,
    image: serviceTraining,
    slug: "training",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28 relative">
      <div className="absolute inset-0">
        <img src={servicesBg} alt="" className="w-full h-full object-cover opacity-[0.07]" />
      </div>
      <div className="absolute inset-0 bg-card/80" />
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedCard>
          <div className="text-center mb-16">
            <span className="text-primary font-semibold uppercase tracking-widest text-sm">What We Offer</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We are passionate and dedicated to providing comprehensive financial services tailored to your business needs.
            </p>
          </div>
        </AnimatedCard>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <AnimatedCard key={service.title} delay={0.1 + i * 0.08}>
              <motion.div
                className="glass-card h-full group cursor-pointer relative overflow-hidden flex flex-col"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden flex-shrink-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-background/40" />
                  <div className={`absolute top-4 left-4 p-3 rounded-xl ${service.color === "primary" ? "bg-primary" : "bg-secondary"}`}>
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className={`absolute top-48 left-0 w-full h-0.5 ${service.color === "primary" ? "bg-primary" : "bg-secondary"} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4 flex-1">{service.desc}</p>
                  
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 bg-secondary px-5 py-2 rounded-lg text-secondary-foreground font-medium text-sm hover:opacity-90 transition-opacity mt-auto self-start"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
