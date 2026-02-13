import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CompanyOverview from "@/components/CompanyOverview";
import OurApproach from "@/components/OurApproach";
import ServicesPreview from "@/components/ServicesPreview";
import WhyChooseUs from "@/components/WhyChooseUs";
import PartnershipCTA from "@/components/PartnershipCTA";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CompanyOverview />
      <OurApproach />
      <ServicesPreview />
      <WhyChooseUs />
      <PartnershipCTA />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Index;
