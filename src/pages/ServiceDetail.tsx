import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingIcons from "@/components/FloatingIcons";
import {
  Calculator,
  FileText,
  Building2,
  Briefcase,
  TrendingUp,
  GraduationCap,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";

import serviceAccounting from "@/assets/service-accounting.jpg";
import serviceIrs from "@/assets/IFRS.jpg";
import serviceTaxation from "@/assets/service-taxation.jpg";
import serviceConsultancy from "@/assets/CONSULTING.jpg";
import serviceAdvisory from "@/assets/service-advisory.jpg";
import serviceTraining from "@/assets/service-training.jpg";

const serviceData: Record<string, {
  title: string;
  icon: typeof Calculator;
  image: string;
  description: string;
  points: string[];
}> = {
  accounting: {
    title: "Accounting Services",
    icon: Calculator,
    image: serviceAccounting,
    description:
      "We provide the following accountancy services:",
    points: [
      "Writing up accounting books",
      "Preparing financial reports and schedules required by statutory auditors or Management",
      "Reconciliation of Account balances; e.g. Cash-in-transit account, Unclear Effect account, Imprest Account, Cheques for collection, bad & doubtful debts etc.",
      "Designing, installation and monitoring of accounting systems",
      "Preparation of fixed asset register",
      "Computerization of accounting system",
      "And other related accounting services",
    ],
  },
  ifrs: {
    title: "IFRS Services",
    icon: FileText,
    image: serviceIrs,
    description:
      "Our firm is adequately equipped with highly qualified experienced IFRS professionals to carry out IFRS related assignments. Our IFRS team has been involved in training of clients on IFRS implementation and reporting, conversion of Nigeria GAAP financial statements to IFRS financial statements.",
    points: [
      "IFRS reporting",
      "IFRS training (Introduction, Intermediate and Advanced)",
      "IFRS conversion and implementation",
      "IFRS advisory and consultancy",
    ],
  },
  taxation: {
    title: "Taxation & Tax Services",
    icon: Building2,
    image: serviceTaxation,
    description:
      "We handle both corporate and personal taxation matters. We assist in processing and filing of tax returns and negotiate with the tax authorities on your annual tax computations. We also handle queries that may be raised by the tax authorities. We notify our clients on the tax due dates for payments, submitting and negotiating of returns. Where substantial capital investments or borrowing are proposed, we also provide tax-planning advice in order to arrange your affairs in the most tax effective manner. In addition, we provide individual tax planning service for senior/management staff of our clients.",
    points: [
      "Corporate Income Tax (CIT) Compliance Management — registering, preparing/reviewing returns, filing, payments, responding to queries, objecting to incorrect assessments, filing WHT credit notes",
      "Value Added Tax (VAT) Compliance Management — registration, identifying input/output tax items, checking monthly returns, ensuring prompt submission, making payments",
      "Withholding Tax (WHT) Compliance & Management — identification of transactions, correct rate application, effective remittance process, obtaining credit notes",
      "Personal Income Tax (PIT) Compliance Management — PAYE services including monthly payroll, tax forms, returns, and tax clearance certificates",
      "Expatriate Tax Services — preparation and filing of annual returns, review assessments, assist with payments, obtain tax clearance certificates",
      "Compliance with other State Taxes — Business Premises fee, Development levy, and other state tax computations",
      "Tax Health Check / Due Diligence Exercise — independent review of tax issues, detailed summary of identified exposures, best practices recommendations",
      "Tax Audit Support Services — providing support during audit, reviewing findings, liaising with Revenue, obtaining final clearance",
      "Tax Investigations — similar scope to audit support for less frequent investigations",
      "Procurement of Acceptance Certificates for Fixed Assets — preparing analysis, collating documents, submitting to authorities, obtaining certificates",
      "Strategic Tax Planning — structuring business activities to minimize tax burden, advising on tax-efficient decisions, maximizing incentives and capital allowances",
      "In-House Tax Training — training staff on PAYE, CIT, VAT, Pension Reform, WHT applicability",
      "Comprehensive Tax Bureau Service — structuring activities, advising on business decisions, maximizing tax law advantages",
    ],
  },
  consultancy: {
    title: "Management Consultancy",
    icon: Briefcase,
    image: serviceConsultancy,
    description:
      "Our consultancy unit renders the following consultancy services among others:",
    points: [
      "Analyzing profitability by products/markets",
      "Responsibility accounting, profit planning and budgeting",
      "Project Management",
      "Preparing contract bids and proposals",
      "Advising on capital needs and alternative methods of financing business growth",
      "Feasibility reports / Business Plan",
      "Manpower and personnel audit",
      "Change Management",
    ],
  },
  advisory: {
    title: "Financial Advisory Services",
    icon: TrendingUp,
    image: serviceAdvisory,
    description:
      "We provide a broad range of financial advisory services for both public and private sectors of the economy. Some of these services include the following:",
    points: [
      "Financial projections",
      "Financial planning and control",
      "Profit planning and budgeting",
      "Investment and venture analysis",
      "Working capital management",
      "Consulting on loan and credit applications",
    ],
  },
  training: {
    title: "Training & Development",
    icon: GraduationCap,
    image: serviceTraining,
    description:
      "The most significant resources of an organization is often said to be her human resources. Such claims appear in organization annual report and mission statement. In this connection there is need for training and development of staff so that they can be relevant in this dynamic and hostile business environment. Our training and development unit ensures that staffs are given regular and relevant training on the basis of needs of individuals and categories of staff. We also develop and present training courses specifically tailored towards improving the staff skills. These courses cover a wide range of subjects and the details are available on request.",
    points: [
      "Regular and relevant staff training based on individual and category needs",
      "Custom training courses tailored to improve staff skills",
      "Wide range of subjects covered",
      "Training details available on request",
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

  return (
    <div className="min-h-screen relative">
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
