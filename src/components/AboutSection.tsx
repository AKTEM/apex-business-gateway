import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Target,
  Eye,
  Heart,
  Compass,
  Lightbulb,
  Shield,
  TrendingUp,
  Users,
  Award,
  Lock,
  CheckCircle,
  BarChart3,
  PieChart,
  ArrowUpRight,
  Handshake,
  BookOpen,
  Rocket,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  Zap,
} from "lucide-react";
import aboutPerson from "@/assets/about-person.png";
import missionImg from "@/assets/mission-img.jpg";
import visionImg from "@/assets/vision-img.jpg";
import philosophyImg from "@/assets/philosophy-img.jpg";
import valuesImg from "@/assets/values-img.jpg";

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

const coreValues = [
  { icon: Shield, title: "Integrity", desc: "We behave professionally and with the highest ethical standards." },
  { icon: Award, title: "Excellence", desc: "We deliver the highest quality service in everything we do." },
  { icon: Lock, title: "Confidentiality", desc: "We protect clients' information with strict confidential discipline." },
  { icon: TrendingUp, title: "Innovation", desc: "We are dynamic and innovative, reacting with up-to-date solutions." },
  { icon: Users, title: "Client Focus", desc: "Understanding our clients and their needs is our top priority." },
  { icon: CheckCircle, title: "Quality", desc: "We drive continuous improvement in everything we do." },
];

const approachItems = [
  { text: "We understand our clients business needs, we comprehend their business specific language.", icon: Handshake },
  { text: "Our hands on and personal approach benefits the interests of both clients and staff.", icon: Sparkles },
  { text: "We help our clients explore extraordinary opportunities and sustain growth.", icon: ShieldCheck },
  { text: "Our size and commitment to quality provides the right platform for success.", icon: HeartHandshake },
  { text: "We take pride in helping our clients to succeed", icon: Rocket },
  { text: "We develop the skills and tools needed to do our jobs well", icon: BookOpen },
  { text: "We drive continuous improvement in everything we do", icon: Zap },
];

const stats = [
  { value: "100+", label: "Clients Served", icon: Users },
  { value: "15+", label: "Years Experience", icon: BarChart3 },
  { value: "98%", label: "Client Satisfaction", icon: PieChart },
  { value: "50+", label: "Professionals", icon: Award },
];

const StatCard = ({ stat, index }: { stat: typeof stats[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      className="glass-card p-5 text-center group hover:border-secondary/50 transition-all duration-500"
      initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
      animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
      >
        <stat.icon className="w-7 h-7 text-secondary mx-auto mb-2 group-hover:text-primary transition-colors" />
      </motion.div>
      <motion.div
        className="text-3xl font-bold text-foreground mb-1"
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.5 + index * 0.15, type: "spring", stiffness: 200 }}
      >
        {stat.value}
      </motion.div>
      <motion.div
        className="text-muted-foreground text-sm"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.7 + index * 0.15 }}
      >
        {stat.label}
      </motion.div>
    </motion.div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4">
        {/* Hero About: Text + Stats LEFT, Image RIGHT */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <AnimatedCard>
            <div>
              <span className="text-primary font-semibold uppercase tracking-widest text-sm">Who We Are</span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6">
                About Tax Assist Solutions
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Tax Assist Solutions is a firm of young and dynamic Chartered Accountants focused on providing Accounting, Financial and advisory services to companies in various sectors of the economy. We leverage on our smart approach to delivering quality services as our clients appreciate our professional competence and ability to understand and satisfy the needs of all stakeholders.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <StatCard key={stat.label} stat={stat} index={i} />
                ))}
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.2}>
            <div className="flex justify-center lg:justify-end">
              <img
                src={aboutPerson}
                alt="Tax professional with charts"
                className="max-h-[550px] w-auto object-contain drop-shadow-2xl"
              />
            </div>
          </AnimatedCard>
        </div>

        {/* Mission & Vision - with images */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <AnimatedCard delay={0.15}>
            <motion.div
              className="glass-card h-full relative overflow-hidden group"
              whileHover={{ scale: 1.01 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img src={missionImg} alt="Our Mission" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-background/50" />
                <div className="absolute top-4 left-4 p-3 rounded-xl bg-primary">
                  <Target className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To continuously add value to our clients to be highly competitive within the industry they operate.
                </p>
              </div>
              <ArrowUpRight className="absolute bottom-4 right-4 w-6 h-6 text-primary/30 group-hover:text-primary transition-colors" />
            </motion.div>
          </AnimatedCard>

          <AnimatedCard delay={0.2}>
            <motion.div
              className="glass-card h-full relative overflow-hidden group"
              whileHover={{ scale: 1.01 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img src={visionImg} alt="Our Vision" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-background/50" />
                <div className="absolute top-4 left-4 p-3 rounded-xl bg-secondary">
                  <Eye className="w-6 h-6 text-secondary-foreground" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To be the leading indigenous Accounting Services firm in Africa and beyond.
                </p>
              </div>
              <ArrowUpRight className="absolute bottom-4 right-4 w-6 h-6 text-secondary/30 group-hover:text-secondary transition-colors" />
            </motion.div>
          </AnimatedCard>
        </div>

        {/* Philosophy - with image */}
        <AnimatedCard delay={0.25}>
          <div className="glass-card mb-20 relative overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-full overflow-hidden">
                <img src={philosophyImg} alt="Our Philosophy" className="w-full h-full object-cover max-h-full" />
                <div className="absolute inset-0 bg-background/30" />
                <div className="absolute top-4 left-4 p-3 rounded-xl bg-primary">
                  <Lightbulb className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              <div className="p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Our Philosophy</h3>
                <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                  The objective of the firm is to render the highest quality service to our clients. We are dynamic and innovative; hence we react spontaneously with up-to-date information to our clients' needs.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  A major characteristic of the firm lies in the nature of our relationship with the clients. Partners and professional staff particularly place emphasis on maintaining independence and objectivity while building a cardinal understanding of clients' problems.
                </p>
              </div>
            </div>
          </div>
        </AnimatedCard>

        {/* Core Values - with background image */}
        <div className="relative mb-20">
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <img src={valuesImg} alt="" className="w-full h-full object-cover opacity-[0.06]" />
          </div>
          <AnimatedCard delay={0.1}>
            <div className="text-center mb-12 relative z-10">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Heart className="w-6 h-6 text-primary" />
                <span className="text-primary font-semibold uppercase tracking-widest text-sm">What Drives Us</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">Core Values</h3>
            </div>
          </AnimatedCard>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {coreValues.map((val, i) => (
              <AnimatedCard key={val.title} delay={0.1 + i * 0.08}>
                <motion.div
                  className="glass-card p-6 group hover:border-secondary/40 transition-all duration-500 h-full"
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className="p-3 rounded-lg bg-secondary/10 inline-block mb-4 group-hover:bg-secondary/20 transition-colors">
                    <val.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">{val.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{val.desc}</p>
                </motion.div>
              </AnimatedCard>
            ))}
          </div>
        </div>

        {/* Our Approach */}
        <AnimatedCard delay={0.1}>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Compass className="w-6 h-6 text-secondary" />
              <span className="text-secondary font-semibold uppercase tracking-widest text-sm">How We Work</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">Our Approach</h3>
          </div>
        </AnimatedCard>

        <div className="grid md:grid-cols-2 gap-4">
          {approachItems.map((item, i) => (
            <AnimatedCard key={i} delay={0.1 + i * 0.06}>
              <motion.div
                className="flex items-start gap-4 glass-card p-5 group hover:border-secondary/40 transition-all"
                whileHover={{ x: 5 }}
              >
                <div className="mt-1 p-2.5 rounded-xl bg-secondary/15 shrink-0 group-hover:bg-secondary/25 transition-colors">
                  <item.icon className="w-5 h-5 text-secondary" />
                </div>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors">{item.text}</p>
              </motion.div>
            </AnimatedCard>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
