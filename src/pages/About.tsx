import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import MeetTheTeam from "@/components/MeetTheTeam";
import Footer from "@/components/Footer";
import FloatingIcons from "@/components/FloatingIcons";
import SEOHead from "@/components/SEOHead";

const About = () => (
  <div className="min-h-screen relative">
    <SEOHead
      title="About Us"
      description="Learn about Tax Assist Solutions — a firm of young and dynamic Chartered Accountants providing expert accounting, financial advisory, and tax management services across Nigeria's key economic sectors."
      path="/about"
      keywords="about tax assist solutions, chartered accountants Nigeria, accounting firm profile, professional accountants, financial experts"
    />
    <FloatingIcons />
    <Header />
    <AboutSection />
    <MeetTheTeam />
    <Footer />
  </div>
);

export default About;
