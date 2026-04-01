import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingIcons from "@/components/FloatingIcons";
import { Building2, CheckCircle, ArrowLeft } from "lucide-react";
import serviceTaxation from "@/assets/service-taxation.jpg";
import taxFederal from "@/assets/tax-federal.jpg";
import taxState from "@/assets/tax-state.jpg";
import taxSpecial from "@/assets/tax-special.jpg";

const SectionImage = ({ src, alt }: { src: string; alt: string }) => (
  <motion.div
    className="my-8 rounded-xl overflow-hidden shadow-lg"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <img src={src} alt={alt} className="w-full h-48 md:h-64 object-cover" />
  </motion.div>
);

const BulletList = ({ items }: { items: string[] }) => (
  <div className="grid gap-3 my-4">
    {items.map((item, i) => (
      <div key={i} className="flex items-start gap-3">
        <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-1" />
        <p className="text-muted-foreground text-sm leading-relaxed">{item}</p>
      </div>
    ))}
  </div>
);

const SubSection = ({ title, intro, items }: { title: string; intro?: string; items?: string[] }) => (
  <motion.div
    className="glass-card p-6 md:p-8 mb-6"
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
  >
    <h3 className="text-lg font-bold text-foreground mb-3">{title}</h3>
    {intro && <p className="text-muted-foreground text-sm leading-relaxed mb-4">{intro}</p>}
    {items && <BulletList items={items} />}
  </motion.div>
);

const TaxationDetail = () => {
  return (
    <div className="min-h-screen relative">
      <FloatingIcons />
      <Header />

      {/* Hero Banner */}
      <section className="relative h-[50vh] overflow-hidden">
        <img src={serviceTaxation} alt="Taxation & Tax Services" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Link to="/services" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-4 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Services
              </Link>
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-xl bg-primary">
                  <Building2 className="w-8 h-8 text-primary-foreground" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">Taxation & Tax Services</h1>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We handle both corporate and personal taxation matters. We assist in processing and filing of tax returns and negotiate with the tax authorities on your annual tax computations. We also handle queries that may be raised by the tax authorities. We notify our clients on the tax due dates for payments, submitting and negotiating of returns. Where substantial capital investments or borrowing are proposed, we also provide tax-planning advice in order to arrange your affairs in the most tax effective manner. In addition, we provide individual tax planning service for senior/management staff of our clients.
            </p>

            {/* ===== FEDERAL TAXES ===== */}
            <motion.h2
              className="text-3xl font-bold text-foreground mt-12 mb-6 border-l-4 border-primary pl-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Federal Taxes
            </motion.h2>

            <SectionImage src={taxFederal} alt="Federal tax documents and FIRS forms" />

            <SubSection
              title="(a) Corporate Income Tax (CIT) Compliance Management"
              intro="Our services for Corporate Income Tax Management are as follows:"
              items={[
                "Providing assistance in registering the client for Client Income Tax and obtaining CIT registration certificate from the Revenue",
                "Preparing/Reviewing of annual Tax returns together with the self-assessment forms",
                "Filing the Client's Income Tax (CIT) Returns with FIRS",
                "Making CIT Payments on behalf of the client and processing the issuance of the Revenue official receipts",
                "Responding to FIRS tax queries arising from returns filed by us",
                "Objecting to FIRS incorrect assessments on returns filed by our firm",
                "Filing of withholding tax credit notes with the FIRS",
                "On a periodic bases, make available in the form of a tax guide, latest development in taxation",
                "Liaise with the tax authorities from time to time to resolve any issues raised in respect of the income tax returns filed on behalf of your Bank",
              ]}
            />

            <SubSection
              title="(b) Value Added Tax (VAT) Compliance Management"
              items={[
                "Assist in VAT registration and obtaining VAT registration certificate from the revenue",
                "Ascertaining that all input and output tax items are identified and captured in the monthly VAT returns",
                "Checking the correctness of tax adjustments in the monthly VAT returns",
                "Conducting tests to ensure that input and output VAT agree with relevant underlying balances in audited accounts submitted to the Revenue",
                "Ensuring prompt submission of monthly VAT returns",
                "Making VAT payment on behalf of the client and processing the issuance of Revenue official receipts",
                "Respond and resolve any issues raised in relation to VAT returns filed with the Revenue",
              ]}
            />

            <SubSection
              title="(c) Withholding Tax (WHT) Compliance & Management"
              items={[
                "Identification and capturing all transactions subject to Withholding Tax",
                "Ensuring correct application of prevailing rates",
                "Ensuring that the company's withholding tax administration and remittance process is effective",
                "Negotiating with the relevant tax authorities for a mutual beneficiary repayment period",
                "Obtain a detail schedule of customers that have withheld tax at source on your income",
                "Visit the client to confirm remittance status of the taxes withheld and pick up all available tax credit notes. (We would require that you do us appointment letters for this assignment to enable us circularize the relevant customers identified for this exercise.)",
                "Make necessary WHT payments on behalf of the clients and processing the issuance of the withholding tax credit notes",
                "Process WHT Credit Notes with the Revenue for grant of appropriate credit",
                "Resolution of any issues raised in relation to the WHT filed with the Revenue",
              ]}
            />

            {/* ===== STATE TAXES ===== */}
            <motion.h2
              className="text-3xl font-bold text-foreground mt-16 mb-6 border-l-4 border-secondary pl-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              State Taxes
            </motion.h2>

            <SectionImage src={taxState} alt="State tax payroll and PAYE documents" />

            <SubSection
              title="(a) Personal Income Tax (PIT) Compliance Management"
              intro="We provide a full range of tax advisory services to ensure full compliance while ensuring maximum tax savings for employees. Our services include:"
            />

            <motion.div
              className="glass-card p-6 md:p-8 mb-6"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-base font-bold text-foreground mb-3">Pay-As-You-Earn (PAYE) Services</h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">In connection with the PAYE tax services mentioned above, our work will encompass the following:</p>
              <BulletList items={[
                "Compiling from the information supplied in respect of each employee, the monthly payroll showing the basic salary, the allowances, the gross pay, the tax due, the statutory deductions, and the net amount payable;",
                "Collecting and completion of Income Tax Forms (Form A) on behalf of your employees;",
                "Computing and making of monthly/year returns to the State Board of Internal Revenue;",
                "Obtaining, as and when required, tax clearance certificate for each employee.",
              ]} />
            </motion.div>

            <motion.div
              className="glass-card p-6 md:p-8 mb-6"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-base font-bold text-foreground mb-3">Expatriate Tax Services</h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">In connection with the expatriate tax services, our work will encompass the following:</p>
              <BulletList items={[
                "Preparation and filing of annual tax return for the expatriates",
                "Review assessments, agree them with the Tax authorities and advise on payment.",
                "Assisting with payment of taxes",
                "We will assist the Client with filing an application for tax clearance certificate for Expatriate employees on an annual basis (i.e. e-tcc for expatriates resident in Lagos State) and follow up on obtaining the certificates.",
                "We will deal with other communications relating to the expatriate employees' tax matters addressed to us by the Revenue or passed on to us by the Clients.",
              ]} />
            </motion.div>

            <SubSection
              title="(b) Compliance with other State Taxes"
              intro="Within the state tax structure are other taxes including Business Premises fee and Development levy. Our services in this area are:"
              items={[
                "Preparation of other State taxes computations and submission to State Board of Internal Revenue.",
                "Ensuring full compliance with other State taxes.",
              ]}
            />

            {/* ===== SPECIAL TAXES ===== */}
            <motion.h2
              className="text-3xl font-bold text-foreground mt-16 mb-6 border-l-4 border-primary pl-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Special Taxes
            </motion.h2>

            <SectionImage src={taxSpecial} alt="Tax audit and due diligence documents" />

            <SubSection
              title="(a) Tax Health Check/Due Diligence Exercise"
              intro="FIST can carry out a review of your tax affairs, in order to detect potential problems that may arise in the course of compliance visits. Such a review will afford your company the opportunity to put its house in order ahead of the compliance visit and regularize the tax records in order to minimize surprises. This assignment is directed at conducting an independent review of the tax issues in all its ramifications. The exercise focuses on the extent and level of compliance with respect to Companies' Income Tax (CIT), Value Added Tax (VAT), Withholding Tax (WHT), as well as Employee Statutory Deductions like Pay As You Earn (PAYE) tax. The scope of this service includes:"
              items={[
                "Conducting detailed tax examination/review of the client's operation and its tax affairs for any agreed date/period",
                "Preparation of a detailed summary of all identified tax exposures",
                "Advising on ways to minimise these tax exposures",
                "Recommending future best practices and way forward",
              ]}
            />

            <SubSection
              title="(b) Tax Audit Support Services"
              intro="Tax Audits are conducted by the Revenue authorities where doubts exist as to the accuracy and completeness of accounts and tax returns submitted. Usually tax audits follow a pattern of fact-finding involving request for documents and examination of records as well as interviews and meetings with key officials of the client. The scope of our tax audit support normally includes:"
              items={[
                "Providing support during the audit exercise - our team will usually be available during the tax audit exercise to provide supports and liaise between the Tax Auditors and the client.",
                "Reviewing the tax audit findings - we will review the report of the tax audit with a view to advising the client on what to do",
                "Liaising with the Revenue - we will liaise with the Revenue to ensure that areas of differences or disagreements are sorted out",
                "Obtaining tax audit final clearance - we will follow up with the Revenue until all issues are fully resolved and relevant final additional assessment (if any) issued to the client.",
              ]}
            />

            <SubSection
              title="(c) Tax Investigations"
              intro="The scope and nature of this service is similar in all respect with tax audit support except that it is less frequent."
            />

            <SubSection
              title="(d) Procurement of Acceptance Certificates for Fixed Assets"
              intro="Acceptance Certificate is a document that the FIRS rely on in allowing capital allowances on individual assets of a company costing N 500,000 and above. Under the provisions of the Industrial Inspectorate Act (Cap 180 LFN), a company is required to support fixed assets acquired by it with fixed assets acceptance certificate issued by the Inspectorate Division of the Federal Ministry of Industries. The tax authorities are empowered to withdraw capital allowances claimed on such fixed assets where there are no certificates of acceptance to support them. The scope of this service includes:"
              items={[
                "Preparing analysis of additions to fixed assets - we will prepare relevant analysis of additions to fixed assets that qualify for Acceptance Certificate in the specified formats",
                "Collating relevant documentary evidence of purchase - we will collate relevant title documents and other evidence of purchase",
                "Submitting relevant documents to the authority - we will submit all the necessary documents and forms required to back up the application to the relevant government agency",
                "Supporting the client during verification - we will provide on-the-spot support to the client during verification exercise that may be carried out by the authority in connection with the application",
                "Attending to other post-verification issues - we will respond to issues that may arise after or during the verification exercise",
                "Obtaining Acceptance Certificate - our responsibility will terminate only after collecting the Acceptance Certificate from the authority and submitting same to the client",
              ]}
            />

            <SubSection
              title="(e) Strategic Tax Planning"
              intro="This service involves:"
              items={[
                "Structuring of business activities in such a way to minimise the overall corporate tax burden;",
                "Providing advice on how best to handle a particular business decision in the most tax-efficient way;",
                "Advising the client on effective packaging of its transactions to take the maximum advantages of the tax laws;",
                "Minimizing tax exposure and ensuring that full advantage is taken of all appropriate and relevant incentives and capital allowances claims.",
              ]}
            />

            <SubSection
              title="(f) In-House Tax Training"
              intro="We are available to train your staff in-house on the any area of taxation such Pay-As-You-Earn (PAYE), Companies' Income Tax (CIT), Value Added Tax (VAT), Pension Reform, applicability of Withholding Tax etc."
            />

            <SubSection
              title="(g) Comprehensive Tax Bureau Service"
              intro="This service involves:"
              items={[
                "Structuring of business activities in such a way to minimise the overall corporate tax burden;",
                "Providing advice on how best to handle a particular business decision in the most tax-efficient way;",
                "Advising the client on effective packaging of its transactions to take the maximum advantages of the tax laws;",
                "Minimizing tax exposure and ensuring that full advantage is taken of all appropriate and relevant incentives and capital allowances claims.",
              ]}
            />

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

export default TaxationDetail;
