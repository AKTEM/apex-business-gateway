import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import contactBg from "@/assets/contact-bg.jpg";

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

const contactInfo = [
  { icon: MapPin, label: "Office Address", value: "14 Ogunkoya Street, Ikosi Ketu, Lagos" },
  { icon: Phone, label: "Phone", value: "0816 900 5556" },
  { icon: Mail, label: "Email", value: "info@taxassistsolutions.com" },
  { icon: Clock, label: "Working Hours", value: "Mon - Fri: 8AM - 5PM" },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="absolute inset-0">
        <img src={contactBg} alt="" className="w-full h-full object-cover opacity-[0.06]" />
      </div>
      <div className="absolute inset-0 bg-card/50" />
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedCard>
          <div className="text-center mb-16">
            <span className="text-primary font-semibold uppercase tracking-widest text-sm">Get In Touch</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              Contact <span className="text-primary">Us</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Ready to optimize your financial strategy? Reach out and let our experts guide you.
            </p>
          </div>
        </AnimatedCard>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto items-stretch">
          {/* Contact Info - Left */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((item, i) => (
              <AnimatedCard key={item.label} delay={0.1 + i * 0.08}>
                <motion.div
                  className="glass-card p-5 flex items-center gap-4 group hover:border-primary/40 transition-all"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">{item.label}</p>
                    <p className="text-foreground font-medium">{item.value}</p>
                  </div>
                </motion.div>
              </AnimatedCard>
            ))}
          </div>

          {/* Form - Right */}
          <div className="lg:col-span-3">
            <AnimatedCard delay={0.2}>
              <div className="glass-card p-8 h-full border border-border/30 rounded-2xl">
                <form onSubmit={handleSubmit} className="flex flex-col h-full gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-foreground text-sm font-bold block mb-2">Full Name</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-card/80 border border-border/50 rounded-lg px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                        placeholder="Joel"
                      />
                    </div>
                    <div>
                      <label className="text-foreground text-sm font-bold block mb-2">Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-card/80 border border-border/50 rounded-lg px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-foreground text-sm font-bold block mb-2">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-card/80 border border-border/50 rounded-lg px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-foreground text-sm font-bold block mb-2">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-card/80 border border-border/50 rounded-lg px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none min-h-[220px] h-full"
                      placeholder="Tell us about your needs..."
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="bg-primary px-8 py-4 rounded-lg font-semibold text-primary-foreground flex items-center gap-2 hover:opacity-90 transition-opacity w-full justify-center text-base"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </motion.button>
                </form>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
