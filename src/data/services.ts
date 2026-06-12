import {
  ShoppingCart, Plane, FileCheck, Globe, Truck, Warehouse, Users, Scale, PackageSearch,
  type LucideIcon,
} from 'lucide-react';

export type ServiceCTA = { label: string; href: string };

export type ServiceData = {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  cardDescription: string;
  icon: LucideIcon;
  heroImage: string;
  cardImage: string;
  intro: string[];
  sections: { heading: string; body?: string; bullets?: string[] }[];
  ctas: ServiceCTA[];
};

const contact = '/#contact';

export const services: ServiceData[] = [
  {
    slug: 'procurement',
    title: 'Procurement Services',
    shortTitle: 'Procurement',
    tagline: 'The Right Goods. The Right Source. On Your Timeline.',
    cardDescription:
      'Global sourcing, vendor management, and supply chain optimisation',
    icon: ShoppingCart,
    heroImage:
      'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=1600',
    cardImage:
      'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=800',
    intro: [
      "Akilina's procurement services give Nigerian enterprises access to a managed global sourcing capability - reducing vendor risk, controlling costs, and protecting quality at every stage of the purchase cycle.",
      "Our procurement service is built around prevention. We manage the full procurement cycle from identifying and verifying suppliers, through purchase order execution and pre-shipment quality verification, to import documentation preparation and freight coordination. By the time your cargo reaches the Nigerian border, every document is correct, every classification is accurate, and every duty liability has been calculated in advance.",
    ],
    sections: [
      {
        heading: 'What Our Procurement Service Covers',
        bullets: [
          'Supplier identification and background verification locally and across Asia, Europe, and the Americas',
          'Local and international procurement of office furniture, equipment, chemicals, additives, stationery, and industrial appliances',
          'Pharmaceutical product procurement - APIs, finished dosage forms, medical equipment, and consumables, with full NAFDAC coordination',
          'Purchase order preparation, review, and vendor communication management',
          'Pre-shipment inspection coordination and quality assurance reporting',
          'HS Code classification and import duty pre-computation',
          'Form M application and pre-shipment inspection scheduling with NAFDAC, SON, and other regulatory agencies where required',
          'Cargo consolidation for cost-efficient container utilisation',
          'Import documentation preparation: commercial invoice review, packing list verification, bill of lading coordination',
        ],
      },
      {
        heading: 'OEM Representation & Market Entry Support',
        body:
          "Akilina provides representation and market entry support for Original Equipment Manufacturers (OEMs) and international companies seeking to establish a commercial or operational presence in Nigeria. We act as your in-market representative, handling procurement logistics, regulatory liaison, and operational groundwork, giving your company a reliable soft landing into the Nigerian market. This service is designed for:",
        bullets: [
          'OEMs supplying Nigerian manufacturers, energy companies, or government agencies',
          'International suppliers seeking local procurement and distribution representation',
          'Foreign companies requiring regulatory navigation (NAFDAC, SON, DPR) for product entry',
          'Businesses testing the Nigerian market before committing to a permanent local entity',
        ],
      },
      {
        heading: 'Industries We Source For',
        body:
          'We procure for energy companies sourcing equipment and additives, pharmaceutical companies importing APIs and medical products, manufacturing plants sourcing raw materials, technology firms importing hardware and appliances, FMCG companies importing packaging components, oil and gas operators sourcing spare parts, and trading companies operating across multiple commodity categories.',
      },
    ],
    ctas: [
      { label: 'Request a Procurement Consultation', href: contact },
      { label: 'Contact Our Team', href: contact },
    ],
  },
  {
    slug: 'freight-forwarding',
    title: 'Freight Forwarding',
    shortTitle: 'Freight Forwarding',
    tagline: 'Your Cargo. Our Route. Every Destination.',
    cardDescription: 'Air and sea freight across international trade corridors.',
    icon: Plane,
    heroImage:
      'https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage:
      'https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg?auto=compress&cs=tinysrgb&w=800',
    intro: [
      'Air and sea freight on all major international trade lanes',
    ],
    sections: [
      {
        heading: 'Air and sea freight Forwarding',
        body:
          'We manage:',
        bullets: [
          'Bookings',
          'Documentation',
          'Cargo tracking',
          'Coordination with shipping lines and airlines on your behalf',
         
        ],
      },
      
    ],
    ctas: [
      { label: 'Get a Freight Quote', href: contact },
      { label: 'Contact Our Freight Desk', href: contact },
    ],
  },
  {
    slug: 'regulatory-advisory',
    title: 'Regulatory Advisory',
    shortTitle: 'Regulatory Advisory',
    tagline: 'Navigate Nigeria’s Trade Environment with Confidence.',
    cardDescription:
      'Expert guidance on import/export compliance, customs documentation, trade regulations, and operational requirements',
    icon: Scale,
    heroImage:
      'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1600',
    cardImage:
      'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800',
    intro: [
      "Expert guidance on import/export compliance, customs documentation, trade regulations, and operational requirements. Our Regulatory Advisory service helps businesses navigate Nigeria's complex trade environment",
    ],
    sections: [
      {
        heading: 'Areas We Cover',
        bullets: [
          'HS Code classification and tariff compliance',
          'Form M and PAAR processes',
          'Agency pre-clearance coordination (NAFDAC, SON, NMDPRA, NESREA)',
          'Export compliance documentation',
          'Pre-shipment document audits that prevent Customs holds before they occur',
          'Regulatory mapping and market entry compliance support for OEMs and international suppliers entering Nigeria',
        ],
      },
    ],
    ctas: [
      { label: 'Request Regulatory Advisory', href: contact },
      { label: 'Speak to a Compliance Expert', href: contact },
    ],
  },
  {
    slug: 'customs-clearance',
    title: 'Customs Clearance',
    shortTitle: 'Customs Clearance',
    tagline: 'Clear. Compliant. On Schedule.',
    cardDescription:
      'Fast, compliant clearance at all Nigerian ports of entry',
    icon: FileCheck,
    heroImage:
      'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage:
      'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800',
    intro: [
      'Akilina Nigeria Limited operates with deep port experience - clearing consignments accurately, compliantly, and on schedule across all major Nigerian ports of entry.',
      'Our Customs team has processed consignments across all dutiable categories: general merchandise, industrial machinery, raw materials, finished goods, chemicals and additives, regulated items, and project cargo.',
    ],
    sections: [
      {
        heading: 'Ports & Border Points We Operate',
        bullets: [
          'Apapa Container Terminal - Lagos',
          'Tin Can Island Port - Lagos',
          'PTML (Port & Terminal Multiservices Limited) - Lagos',
          'Onne Oil & Gas Free Zone - Rivers State',
          'Seme Border - Lagos / Benin Republic',
          'Murtala Muhammed Airport - Air Cargo Clearance',
          'Nnamdi Azikiwe Airport - Abuja',
        ],
      },
      {
        heading: 'Compliance Assurance',
        body:
          'Every consignment Akilina clears is processed in full compliance with the Nigeria Customs Service Act, the Common External Tariff (CET), the ECOWAS Trade Liberalisation Scheme (ETLS) where applicable, and all relevant agency pre-clearance requirements. We do not process consignments through channels that expose our clients to regulatory liability.',
      },
    ],
    ctas: [
      { label: 'Request Customs Clearance Support', href: contact },
      { label: 'Contact Our Clearance Team', href: contact },
    ],
  },
  {
    slug: 'import-export',
    title: 'Import & Export Management',
    shortTitle: 'Import & Export',
    tagline: 'Import Without Stress. Export Without Barriers.',
    cardDescription:
      'Documentation, duty management, and regulatory compliance',
    icon: Globe,
    heroImage:
      'https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage:
      'https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=800',
    intro: [
      'Akilina Nigeria Limited manages the full regulatory lifecycle of every import and export transaction - documentation, duty management, agency coordination, and compliance - so your trade flows without interruption.',
    ],
    sections: [
      {
        heading: 'Import Management',
        body:
          'Importing into Nigeria requires coordinated engagement with multiple agencies and systems:',
        bullets: [
          'The Central Bank of Nigeria for Form M processing',
          'The Nigeria Customs Service for clearance',
          'NAFDAC for regulated goods',
          'SON for standardised products, and post-clearance verification.',
          'Akilina manages these processes simultaneously.',
        ],
      },
      {
        heading: 'Export Management',
        body:
          'Akilina manages export documentation comprehensively - ensuring your export cargo meets the documentary requirements of both Nigerian authorities and receiving-country Customs. We have direct export experience with Nigerian commodities including charcoal, Lithium, Titanium, spices, and cashew nuts, managing the full documentation and logistics chain from origin to international delivery.',
      },
    ],
    ctas: [
      { label: 'Discuss Your Import Requirements', href: contact },
      { label: 'Export Enquiry - Contact Us', href: contact },
    ],
  },
  {
    slug: 'haulage',
    title: 'Haulage Services',
    shortTitle: 'Haulage',
    tagline: 'Port to Factory. On Time. Every Time.',
    cardDescription: 'Nationwide inland transportation and container delivery',
    icon: Truck,
    heroImage:
      'https://images.pexels.com/photos/4481326/pexels-photo-4481326.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage:
      'https://images.pexels.com/photos/4481326/pexels-photo-4481326.jpeg?auto=compress&cs=tinysrgb&w=800',
    intro: [
      'Akilina brings deep knowledge of Lagos roads and routes, built through direct operational experience in the transport and haulage sector. We run documented procedures, driver briefings, and route coordination to ensure every container that moves under our management is accounted for at every stage of the journey.',
      "From container release at the port to delivery at your facility - Akilina's haulage service manages every kilometre of the journey with documented procedures, driver accountability, and real-time cargo updates.",
    ],
    sections: [
      {
        heading: 'Haulage Capabilities',
        bullets: [
          '20ft and 40ft standard container transport - port to factory or warehouse',
          'Flatbed haulage for project cargo, structural steel, and oversized equipment',
          'Lowbed haulage for heavy machinery, generators, and industrial plant',
          'Bonded haulage - transporting goods under Customs seal to bonded warehouses',
          'Barging services - waterway cargo movement where applicable',
          'Interstate distribution - Lagos, Abuja, Port Harcourt, Kano, Onitsha, Aba, and all major commercial destinations',
          'Night convoy coordination for time-critical cargo, with security escort where required',
        ],
      },
    ],
    ctas: [
      { label: 'Request a Haulage Quote', href: contact },
      { label: 'Contact Our Transport Desk', href: contact },
    ],
  },
  {
    slug: 'warehousing',
    title: 'Warehousing',
    shortTitle: 'Warehousing',
    tagline: 'Secure Storage. Tracked Inventory. Reliable Dispatch.',
    cardDescription:
      'Secure storage, inventory management, and distribution logistics',
    icon: Warehouse,
    heroImage:
      'https://images.pexels.com/photos/4481942/pexels-photo-4481942.jpeg?auto=compress&cs=tinysrgb&w=1600',
    cardImage:
      'https://images.pexels.com/photos/4481942/pexels-photo-4481942.jpeg?auto=compress&cs=tinysrgb&w=800',
    intro: [
      'Secure, managed storage with:',
    ],
    sections: [
      {
        heading: 'Warehousing Capabilities',
        bullets: [
          'Inventory tracking',
          'Distribution management',
          'Documented receipt',
          'Dispatch processes',
        ],
      },
    ],
    ctas: [
      { label: 'Request Warehousing Support', href: contact },
      { label: 'Speak to Our Warehousing Team', href: contact },
    ],
  },
  {
    slug: 'outsourcing',
    title: 'Outsourcing Services',
    shortTitle: 'Outsourcing',
    tagline: 'Your Logistics Department. Without the Headcount.',
    cardDescription:
      'Embedded logistics support for organisations requiring dedicated operational capacity',
    icon: Users,
    heroImage:
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage:
      'https://img.magnific.com/free-photo/firm-handshake_1098-16548.jpg?semt=ais_hybrid&w=740&q=80',
    intro: [
      "Akilina's outsourcing service embeds experienced logistics and procurement professionals within your operation - giving you the capability of a fully staffed supply chain team.",
      'Building an in-house logistics and procurement team is expensive. A Customs clearance expert, a procurement manager, a haulage coordinator, and a documentation specialist - each with the market experience to perform at enterprise level - represents a significant payroll commitment for a function that is not your core business.',
      'Our outsourcing service gives you exactly this capability - deployed as needed, scaled as required, and managed by us so you benefit from senior logistics expertise without the recruitment, training, and retention overhead.',
    ],
    sections: [
      {
        heading: 'What Outsourcing with Akilina Includes',
        bullets: [
          'Dedicated account management - a named Akilina professional responsible for your logistics operations',
          'Embedded operational support - our team works within your systems and processes',
          'Customs clearance management for all your imports and exports',
          'Freight booking, tracking, and vendor relationship management on your behalf',
          'Procurement coordination - supplier communication, purchase order tracking, delivery confirmation',
          'Monthly operational reporting - KPI-driven logistics performance reports for management review',
          'Escalation management - senior Akilina leadership engagement when operational issues arise',
        ],
      },
      {
        heading: 'Who This Service Is Designed For',
        body:
          'This includes: Energy companies managing equipment importation; FMCG companies expanding their distribution footprint without adding logistics headcount; manufacturers whose procurement team handles trade but lacks customs expertise; government agencies procuring internationally under competitive tender; and growing trading companies that need enterprise-grade logistics management without enterprise-level internal costs.',
      },
    ],
    ctas: [
      { label: 'Enquire About Outsourcing', href: contact },
      { label: 'Request a Service Scope Discussion', href: contact },
    ],
  },
  {
    slug: 'logistics',
    title: 'Logistics Services',
    shortTitle: 'Logistics',
    tagline: 'Logistics That Moves at the Speed of Your Business.',
    cardDescription:
      'Integrated port-to-warehouse logistics with one team owning the full outcome.',
    icon: PackageSearch,
    heroImage:
      'https://images.pexels.com/photos/1267325/pexels-photo-1267325.jpeg?auto=compress&cs=tinysrgb&w=1920',
    cardImage:
      'https://img.freepik.com/premium-photo/transportation-logistics_37416-165.jpg?semt=ais_hybrid&w=740&q=80',
    intro: [
      'Akilina manages the full physical movement of your goods from arrival at port through inland transportation to warehouse receipt with the operational controls that keep your production lines running and your customers satisfied.',
      "Akilina's logistics service is integrated by design. We manage the transition between every stage from Customs clearance hands off to haulage, haulage hands off to warehousing, warehousing coordinates outbound distribution. One team. One communication channel. One company that owns the outcome.",
      'Our services are customised per specific client application. We apply proven project management, process accountability, and operational discipline to deliver logistical solutions that complete your supply chain within scope, time, and budget.',
    ],
    sections: [
      {
        heading: 'Our Logistics Capabilities',
        bullets: [
          'Port operations management - Customs liaison, cargo examination coordination, container handling oversight',
          'Inland transportation - Standard, flatbed, lowbed, and specialist vehicle options for all cargo types',
          'Warehouse reception - Documented receipt, condition verification, and inventory recording on arrival',
          'Inventory management - Real-time stock tracking, FIFO management, and periodic stock reconciliation',
          'Last-mile distribution - Delivery to retail networks, production facilities, or client locations',
          'Barging services - Waterway cargo movement where applicable',
          'Reverse logistics - Return cargo management and re-export coordination',
        ],
      },
    ],
    ctas: [
      { label: 'Request a Logistics Quotation', href: contact },
      { label: 'Speak to Our Operations Team', href: contact },
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);
