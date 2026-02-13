import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const contactInfo = [
  { icon: MapPin, label: "Office Address", value: "[Insert Office Address]" },
  { icon: Phone, label: "Phone", value: "[Insert Phone Number]" },
  { icon: Mail, label: "Email", value: "[Insert Email Address]" },
  { icon: Clock, label: "Business Hours", value: "Monday – Friday | 9:00 AM – 5:00 PM" },
];

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-32 h-32 border border-primary-foreground/10 rounded-full animate-float" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <span className="text-sm font-semibold tracking-widest uppercase text-accent mb-4 block">Get In Touch</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Contact <span className="text-accent">Us</span>
          </h1>
          <p className="max-w-2xl mx-auto text-primary-foreground/70 text-lg">
            Ready to work with us? We look forward to discussing how we can support your goals.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background" ref={ref}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <div className={`lg:col-span-3 transition-all duration-700 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
              <div className="p-8 md:p-10 rounded-2xl bg-card border border-border">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">Send us a message</h2>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="+1 (555) 000-0000" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="How can we help?" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Tell us about your project or inquiry..." rows={5} />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-red-accent-light rounded-full px-10 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-accent/30"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className={`lg:col-span-2 transition-all duration-700 delay-200 ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:border-accent/30 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <info.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm mb-1">{info.label}</p>
                      <p className="text-muted-foreground text-sm">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="mt-8 rounded-2xl bg-navy h-64 flex items-center justify-center border border-primary-foreground/10 overflow-hidden">
                <div className="text-center">
                  <MapPin className="w-10 h-10 text-accent/40 mx-auto mb-2" />
                  <p className="text-primary-foreground/40 text-sm">Map Location</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
