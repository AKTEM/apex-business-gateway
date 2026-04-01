import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import FloatingIcons from "@/components/FloatingIcons";
import SEOHead from "@/components/SEOHead";

const Services = () => (
  <div className="min-h-screen relative">
    <SEOHead
      title="Our Services"
      description="Explore our full range of professional services: Accounting, IFRS Reporting, Taxation & Tax Management, Management Consultancy, Financial Advisory, and Training & Development."
      path="/services"
      keywords="accounting services Nigeria, IFRS services, tax management, taxation services, management consultancy, financial advisory services, training and development, chartered accountant services"
    />
    <FloatingIcons />
    <Header />
    <ServicesSection />
    <Footer />
  </div>
);

export default Services;
