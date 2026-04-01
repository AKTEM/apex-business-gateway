import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingIcons from "@/components/FloatingIcons";
import SEOHead from "@/components/SEOHead";

const Contact = () => (
  <div className="min-h-screen relative">
    <SEOHead
      title="Contact Us"
      description="Get in touch with Tax Assist Solutions for expert accounting, tax, and financial advisory services. Contact our Chartered Accountants team today."
      path="/contact"
      keywords="contact tax assist solutions, accounting firm contact, chartered accountants phone, tax services inquiry Nigeria"
    />
    <FloatingIcons />
    <Header />
    <ContactSection />
    <Footer />
  </div>
);

export default Contact;
