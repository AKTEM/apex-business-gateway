import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { User, Users } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import adenikePhoto from "@/assets/team-adenike.jpg";

type TeamMember = {
  name: string;
  credentials: string;
  role: string;
  preview: string;
  bio: string[];
  photo?: string;
};

const team: TeamMember[] = [
  {
    name: "Temitope Omotayo",
    credentials: "FCA, MBA, MSc.",
    role: "Partner",
    preview:
      "A Fellow of ICAN with 15+ years of leadership in taxation, audit, financial management, and enterprise risk. Former Audit Team Lead at Ernst & Young (EY).",
    bio: [
      "Temitope Omotayo is a Fellow of the Institute of Chartered Accountants of Nigeria and a member of the Chartered Institute of Taxation of Nigeria. He holds a Bachelor's degree with honors in Accounting from Olabisi Onabanjo University, having completed a National Diploma in Accountancy from the Federal Polytechnic Ilaro, Ogun State, as well as a Master of Business Administration and a Master of Science in Accounting (MSc.) from the University of Lagos.",
      "With over fifteen years of progressive leadership experience, Temitope is a seasoned financial expert with deep expertise in Taxation, Accounting, Audit & Assurance, Financial Management, Enterprise Risk Management, Corporate Governance, and Business Advisory.",
      "He started his professional career with the Audit & Advisory Business Services (AABS) of Ernst & Young (EY), where he advanced to the role of Audit Team Lead. During this time, he developed a strong foundation in financial reporting, governance, regulatory compliance, and enterprise-wide control systems.",
      "Temitope has advised and delivered high-impact financial and strategic solutions to a diverse portfolio of leading organizations, including the Federal Inland Revenue Service (FIRS), NNPC, Schlumberger, Heirs Holdings, Tony Elumelu Foundation, ENI Group, MRS Oil & Gas, Niger Delta Exploration and Production Limited, Sterling Bank, China National Oil Corporation (CNOOC), Technip, Desicon Engineering, Nigerite, Western, and International SOS, among others. His experience spans key sectors such as oil and gas, financial services, manufacturing, and investment, SMEs.",
      "His areas of specialization include external audits, finance transformation, tax strategy and compliance, business process re-engineering, systems automation, and enterprise risk management. He is widely recognized for his strategic mindset, strong analytical and systems-thinking capabilities, and his ability to design and implement robust financial frameworks that enhance governance, improve performance, and drive sustainable growth.",
    ],
  },
  {
    name: "John Omoloso",
    credentials: "B.SC, ACA, ACCA",
    role: "Partner",
    preview:
      "Chartered Accountant and Tax, Mobility & Compensation specialist with cross-industry experience across energy, financial services, telecoms, and FMCG. Started his career with Deloitte.",
    bio: [
      "John Omoloso is a Chartered Accountant and accomplished Tax, Mobility, and Compensation professional with extensive cross-industry experience. He is a member of the Institute of Chartered Accountants of Nigeria and holds a Diploma in Business and Accounting from Association of Chartered Certified Accountants. He also earned a Bachelor's degree with honours in Management and Accounting from Obafemi Awolowo University.",
      "John started his professional career with Deloitte, where he developed strong expertise in tax advisory, regulatory compliance, payroll structuring, and employee reward frameworks. Over the course of his career, he has advised clients across diverse sectors including energy, financial services, telecommunications, FMCG, and non-profit organisations, delivering strategic solutions tailored to business objectives.",
      "He is widely recognised for his commercial acumen, technical expertise, and ability to create value through effective tax and people-focused strategies that support sustainable growth and long-term organisational success.",
    ],
  },
  {
    name: "Adenike Oluwafemi",
    credentials: "B.SC, ACA",
    role: "Partner",
    photo: adenikePhoto,
    preview:
      "Finance, tax, and business advisory professional with deep experience in practice management, regulatory compliance, and client service delivery across the Nigerian regulatory landscape.",
    bio: [
      "Adenike Oluwafemi is a seasoned finance, tax, and business advisory professional with extensive experience in practice management, regulatory compliance, and client service delivery. She holds a Bachelor's degree with honours in Accounting from the University of Ilorin and is a certified member of the Institute of Chartered Accountants of Nigeria.",
      "Before her admission as a Partner at Tax Assist Solutions, Adenike began her professional career with Thompson Aiyegunle & Co, where she built strong expertise in audit, accounting, and tax advisory services. She subsequently advanced her career with FIST Professional Services, where she held the role of Practice Manager and played a key role in firm administration, client relationship management, operational efficiency, and business development initiatives.",
      "As a Partner, Adenike provides strategic leadership in client engagement, practice growth, and service excellence. She is recognised for her strong commercial insight, people management skills, and ability to build trusted client relationships while delivering practical solutions in taxation, financial management, and statutory compliance. Her commitment to excellence, governance, and sustainable growth positions her as a valuable advisor to businesses navigating the evolving Nigerian regulatory landscape.",
    ],
  },
];

const PortraitPlaceholder = ({ photo, name, large = false }: { photo?: string; name: string; large?: boolean }) => (
  <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-border/60 bg-muted/30">
    {photo ? (
      <img src={photo} alt={name} className="h-full w-full object-cover" />
    ) : (
      <>
        <div
          className="absolute inset-0 opacity-20"
          style={{ background: "var(--gradient-red-blue)" }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-muted-foreground">
          <User className={large ? "h-20 w-20" : "h-14 w-14"} strokeWidth={1.25} />
          <span className="text-xs uppercase tracking-widest">Photo coming soon</span>
        </div>
      </>
    )}
  </div>
);

const TeamCard = ({ member, index, onOpen }: { member: TeamMember; index: number; onOpen: () => void }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className="glass-card p-6 flex flex-col h-full hover:border-secondary/50 transition-colors"
    >
      <PortraitPlaceholder photo={member.photo} name={member.name} />
      <div className="mt-5 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
        <p className="text-sm text-muted-foreground mt-0.5">{member.credentials}</p>
        <span
          className="inline-block mt-3 self-start text-xs font-semibold uppercase tracking-widest text-primary-foreground px-3 py-1 rounded-full"
          style={{ background: "var(--gradient-red-blue)" }}
        >
          {member.role}
        </span>
        <p className="text-muted-foreground leading-relaxed mt-4 flex-1">{member.preview}</p>
        <Button
          variant="outline"
          className="mt-5 w-full border-secondary/40 hover:bg-secondary/10"
          onClick={onOpen}
        >
          Read full profile
        </Button>
      </div>
    </motion.div>
  );
};

const MeetTheTeam = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-50px" });
  const active = activeIndex !== null ? team[activeIndex] : null;

  return (
    <section id="team" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <Users className="w-6 h-6 text-primary" />
            <span className="text-primary font-semibold uppercase tracking-widest text-sm">
              Our Leadership
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Meet the Team</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Experienced partners leading Tax Assist Solutions with deep expertise across taxation, audit, and advisory.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {team.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} onOpen={() => setActiveIndex(i)} />
          ))}
        </div>
      </div>

      <Dialog open={active !== null} onOpenChange={(open) => !open && setActiveIndex(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-card border-border">
          {active && (
            <>
              <DialogHeader>
                <div className="grid sm:grid-cols-[180px_1fr] gap-6 items-start">
                  <div className="w-full sm:w-[180px]">
                    <PortraitPlaceholder photo={active.photo} name={active.name} large />
                  </div>
                  <div className="text-left">
                    <DialogTitle className="text-2xl md:text-3xl font-bold text-foreground">
                      {active.name}
                    </DialogTitle>
                    <DialogDescription className="text-muted-foreground mt-1">
                      {active.credentials}
                    </DialogDescription>
                    <span
                      className="inline-block mt-3 text-xs font-semibold uppercase tracking-widest text-primary-foreground px-3 py-1 rounded-full"
                      style={{ background: "var(--gradient-red-blue)" }}
                    >
                      {active.role}
                    </span>
                  </div>
                </div>
              </DialogHeader>
              <div className="mt-6 space-y-4">
                {active.bio.map((para, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default MeetTheTeam;
