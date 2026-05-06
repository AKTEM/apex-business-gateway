import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import AboutSection from "@/components/AboutSection";
import MeetTheTeam from "@/components/MeetTheTeam";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingIcons from "@/components/FloatingIcons";
import AnimatedBackground from "@/components/AnimatedBackground";
import SEOHead from "@/components/SEOHead";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Tax Assist Solutions",
  description:
    "Expert Accounting, Tax Management, Financial Advisory, IFRS, Management Consultancy, Audit and Training Services by dynamic Chartered Accountants.",
  url: "https://taxassistsolutions.com",
  logo: "https://taxassistsolutions.com/og-image.jpg",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: "English",
  },
  sameAs: [],
  serviceArea: {
    "@type": "Country",
    name: "Nigeria",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Professional Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Accounting Services" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "IFRS Services" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Taxation & Tax Services" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Management Consultancy" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Financial Advisory Services" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Training & Development" } },
    ],
  },
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <SEOHead
        title="Tax Assist Solutions | Expert Tax & Accounting Services"
        description="Tax Assist Solutions — Nigeria's trusted Chartered Accountants offering Accounting, Tax Management, IFRS, Financial Advisory, Management Consultancy and Training services for businesses across all sectors."
        path="/"
        keywords="chartered accountants Nigeria, tax services, accounting firm, IFRS services, financial advisory, tax management, management consultancy, audit services, tax planning, corporate tax, VAT compliance, PAYE services"
        jsonLd={organizationJsonLd}
      />
      <AnimatedBackground />
      <FloatingIcons />
      <Header />
      <HeroCarousel />
      <AboutSection />
      <MeetTheTeam />
      <ServicesSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
