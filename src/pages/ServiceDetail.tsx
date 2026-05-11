import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingIcons from "@/components/FloatingIcons";
import SEOHead from "@/components/SEOHead";
import {
  Search,
  Ship,
  FileBarChart,
  Scale,
  TrendingUp,
  Landmark,
  ClipboardCheck,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";

import serviceTaxation from "@/assets/service-taxation.jpg";
import serviceRevenueCustoms from "@/assets/service-revenue-customs.webp";
import serviceTaxConsulting from "@/assets/service-tax-consulting.jpeg";
import serviceTaxLitigation from "@/assets/service-tax-litigation.jpeg";
import serviceTaxPlanning from "@/assets/service-tax-planning.jpg";
import serviceTaxPolicyReform from "@/assets/service-tax-policy-reform.webp";
import serviceTransactionTax from "@/assets/service-transaction-tax.webp";

const serviceData: Record<string, {
  title: string;
  icon: typeof Search;
  image: string;
  description: string;
  points: string[];
}> = {
  "tax-audit-investigation": {
    title: "Business Tax Audit & Investigation Support",
    icon: Search,
    image: serviceTaxation,
    description:
      "We provide comprehensive support to businesses facing tax audits and investigations, ensuring you are well prepared, properly represented, and protected throughout the process.",
    points: [
      "Pre-Audit Preparation",
      "Compliance Review",
      "Representation Before Authorities",
      "Documentation Support",
      "Risk Assessment",
      "Negotiation & Settlement",
      "Post-Audit Advisory",
      "Indirect Tax Management",
    ],
  },
  "revenue-customs": {
    title: "Revenue & Customs Administration",
    icon: Ship,
    image: serviceRevenueCustoms,
    description:
      "We help businesses meet revenue and customs obligations efficiently while staying compliant with trade regulations.",
    points: [
      "Revenue Collection Support",
      "Customs Duty Management",
      "Trade Compliance Advisory",
      "Documentation Support",
    ],
  },
  "tax-accounting-reporting": {
    title: "Tax Accounting & Reporting",
    icon: FileBarChart,
    image: serviceTaxConsulting,
    description:
      "Accurate tax accounting and reporting services that integrate seamlessly with your financial statements and regulatory obligations.",
    points: [
      "Tax Provisioning — calculating and recording tax liabilities in financial statements, including deferred taxes",
      "Return Preparation — compiling accurate tax returns (CIT, VAT, WHT, PAYE, etc.) based on financial records",
      "Financial Statement Integration",
      "Regulatory Reporting",
      "Compliance Monitoring",
      "Management Reporting — internal reports on tax exposure, risks, and planning opportunities",
    ],
  },
  "tax-litigation": {
    title: "Tax Litigation Support",
    icon: Scale,
    image: serviceTaxLitigation,
    description:
      "Expert support throughout the tax dispute lifecycle, from initial assessment to appeals and resolution.",
    points: [
      "Case Assessment",
      "Legal Representation",
      "Documentation Support",
      "Dispute Resolution",
      "Expert Testimony",
      "Appeals Management",
    ],
  },
  "tax-planning": {
    title: "Tax Planning",
    icon: TrendingUp,
    image: serviceTaxPlanning,
    description:
      "Strategic tax planning services that help you structure transactions, optimize tax positions, and unlock available incentives.",
    points: [
      "Transaction Structuring — designing business deals to achieve tax efficiency",
      "Tax Incentives Utilization",
      "Income Tax Planning",
      "Indirect Tax Planning",
      "Transfer Pricing Compliance",
      "Capital Gains & Investment Planning",
      "Deferred Tax Management",
    ],
  },
  "tax-policy-reform": {
    title: "Tax Policy Reform",
    icon: Landmark,
    image: serviceTaxPolicyReform,
    description:
      "We support businesses and stakeholders in understanding, responding to, and influencing tax policy reforms.",
    points: [
      "Policy Analysis",
      "Compliance Advisory",
      "Strategic Planning",
      "Training & Awareness",
      "Representation Before Authorities",
      "Documentation Support",
      "Impact Assessment",
      "Advocacy & Consultation",
    ],
  },
  "transaction-tax-due-diligence": {
    title: "Transaction Tax & Due Diligence",
    icon: ClipboardCheck,
    image: serviceTransactionTax,
    description:
      "Tax-focused due diligence and transaction advisory services that help you understand and mitigate tax exposures in deals.",
    points: [
      "Tax Risk Assessment",
      "Transaction Structuring",
      "Compliance Verification",
      "Documentation Review",
      "Tax Liability Quantification",
    ],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? serviceData[slug] : null;

  if (!service) {
    return (
      <div className="min-h-screen relative">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Service Not Found</h1>
          <Link to="/services" className="text-primary hover:underline">Back to Services</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const Icon = service.icon;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "ProfessionalService",
      name: "Tax Assist Solutions",
      url: "https://taxassistsolutions.com",
    },
  };

  return (
    <div className="min-h-screen relative">
      <SEOHead
        title={service.title}
        description={service.description.slice(0, 155)}
        path={`/services/${slug}`}
        keywords={`${service.title}, tax assist solutions, chartered accountants Nigeria, ${service.points.slice(0, 3).join(", ")}`}
        jsonLd={serviceJsonLd}
      />
      <FloatingIcons />
      <Header />

      {/* Hero Banner */}
      <section className="relative h-[50vh] overflow-hidden">
        <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Link to="/services" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-4 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Services
              </Link>
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-xl bg-primary">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">{service.title}</h1>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12">{service.description}</p>

            <h2 className="text-2xl font-bold text-foreground mb-8">What We Offer</h2>
            <div className="grid sm:grid-cols-1 gap-4">
              {service.points.map((point, i) => (
                <motion.div
                  key={i}
                  className="glass-card p-5 flex items-start gap-3 group hover:border-primary/40 transition-all"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  whileHover={{ x: 5 }}
                >
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">{point}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/contact"
                className="bg-primary px-8 py-3 rounded-md font-semibold text-primary-foreground hover:opacity-90 transition-opacity inline-block"
              >
                Get a Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
