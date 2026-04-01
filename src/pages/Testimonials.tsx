import Header from "@/components/Header";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import FloatingIcons from "@/components/FloatingIcons";
import SEOHead from "@/components/SEOHead";

const Testimonials = () => (
  <div className="min-h-screen relative">
    <SEOHead
      title="Client Testimonials"
      description="See what our clients say about Tax Assist Solutions. Trusted by businesses across Nigeria for expert accounting, tax, and financial advisory services."
      path="/testimonials"
      keywords="tax assist solutions reviews, client testimonials, accounting firm reviews Nigeria, trusted chartered accountants"
    />
    <FloatingIcons />
    <Header />
    <TestimonialsSection />
    <Footer />
  </div>
);

export default Testimonials;
