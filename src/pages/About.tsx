import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Target, Eye, ShieldCheck, Award, Star, Handshake, Users, Briefcase, TrendingUp, Globe } from "lucide-react";

const values = [
  { icon: ShieldCheck, title: "Integrity", desc: "We operate with honesty and transparency in every interaction." },
  { icon: Award, title: "Professionalism", desc: "We uphold high standards in every project we undertake." },
  { icon: Star, title: "Excellence", desc: "We strive for superior quality and performance in all operations." },
  { icon: Target, title: "Accountability", desc: "We take responsibility for our commitments and outcomes." },
  { icon: Handshake, title: "Long-term Partnerships", desc: "We focus on building lasting, mutually beneficial business relationships." },
];

const About = () => {
  const { ref: missionRef, isVisible: missionVisible } = useScrollAnimation();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation();
  const { ref: leaderRef, isVisible: leaderVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-32 h-32 border border-primary-foreground/10 rounded-full animate-float" />
          <div className="absolute bottom-10 left-10 w-20 h-20 border border-accent/20 rotate-45 animate-float-slow" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <span className="text-sm font-semibold tracking-widest uppercase text-accent mb-4 block">About Us</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Building Value. Creating <span className="text-accent">Opportunities.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-primary-foreground/70 text-lg">
            We are a trusted, legally registered company specializing in real estate investment,
            construction, import & export, and diversified business solutions.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Our organization is built on a strong foundation of professional integrity, strategic
            thinking, and long-term value creation. We provide reliable and profitable solutions
            tailored to individuals, businesses, and investors seeking sustainable growth.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            With a diversified structure and multi-sector expertise, we are positioned to adapt
            to emerging opportunities across industries while maintaining transparency, efficiency,
            and accountability in all our operations.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary/50" ref={missionRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className={`p-10 rounded-2xl bg-card border border-border transition-all duration-700 ${missionVisible ? "animate-slide-in-left" : "opacity-0"}`}>
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To create sustainable value through strategic investments, quality construction,
                and efficient global trade operations.
              </p>
            </div>
            <div className={`p-10 rounded-2xl bg-card border border-border transition-all duration-700 delay-200 ${missionVisible ? "animate-slide-in-right" : "opacity-0"}`}>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become a leading multi-sector company recognized for reliability,
                transparency, and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background" ref={valuesRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-700 ${valuesVisible ? "animate-fade-up" : "opacity-0"}`}>
            <span className="text-sm font-semibold tracking-widest uppercase text-accent mb-4 block">Our Foundation</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`p-8 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 group ${
                  valuesVisible ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent transition-colors duration-300">
                  <v.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-navy" ref={leaderRef}>
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className={`text-center mb-12 transition-all duration-700 ${leaderVisible ? "animate-fade-up" : "opacity-0"}`}>
            <span className="text-sm font-semibold tracking-widest uppercase text-accent mb-4 block">Leadership</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">Our Leadership</h2>
          </div>
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 transition-all duration-700 delay-200 ${leaderVisible ? "animate-fade-up" : "opacity-0"}`}>
            {[
              { icon: Briefcase, label: "Business Strategy" },
              { icon: Users, label: "Construction Mgmt" },
              { icon: TrendingUp, label: "Real Estate" },
              { icon: Globe, label: "International Trade" },
            ].map((item) => (
              <div key={item.label} className="text-center p-4">
                <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-accent/10 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <span className="text-primary-foreground/70 text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
          <div className={`text-center transition-all duration-700 delay-400 ${leaderVisible ? "animate-fade-up" : "opacity-0"}`}>
            <p className="text-primary-foreground/60 text-lg leading-relaxed">
              Our leadership team brings together expertise across real estate, construction
              management, international trade, and business strategy. We combine industry
              knowledge with disciplined execution to deliver consistent results.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
