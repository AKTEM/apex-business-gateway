import { useState } from 'react';
import {
  ArrowRight, ShoppingCart, Plane, FileCheck, Globe,
  Truck, Warehouse, Users, Scale, Container, CheckCircle,
  Phone, Zap, Shield
} from 'lucide-react';
import { useInView } from '../hooks/useInView';

const services = [
  {
    id: 'procurement',
    title: 'Procurement Services',
    description: 'International sourcing, supplier identification, purchase management, and quality verification.',
    icon: ShoppingCart,
    image: 'https://images.pexels.com/photos/3755766/pexels-photo-3755766.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 'freight-forwarding',
    title: 'Freight Forwarding',
    description: 'Air and sea freight on all major international trade lanes.',
    icon: Plane,
    image: 'https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 'regulatory-advisory',
    title: 'Regulatory Advisory',
    description: 'Expert guidance on import/export compliance, customs documentation, and trade regulations.',
    icon: Scale,
    image: 'https://images.pexels.com/photos/4483942/pexels-photo-4483942.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 'customs-clearance',
    title: 'Customs Clearance',
    description: 'Fast, compliant, penalty-free customs clearance at all major Nigerian ports.',
    icon: FileCheck,
    image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 'import-export',
    title: 'Import & Export Management',
    description: 'Full documentation management, duty computation, and regulatory compliance.',
    icon: Globe,
    image: 'https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 'haulage',
    title: 'Haulage Services',
    description: 'Nationwide container and cargo transportation across Nigeria.',
    icon: Truck,
    image: 'https://images.pexels.com/photos/4481326/pexels-photo-4481326.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 'warehousing',
    title: 'Warehousing',
    description: 'Secure, managed storage with inventory tracking and distribution management.',
    icon: Warehouse,
    image: 'https://images.pexels.com/photos/616473/pexels-photo-616473.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 'outsourcing',
    title: 'Outsourcing Services',
    description: 'Embedded logistics and procurement support for dedicated operational capacity.',
    icon: Users,
    image: 'https://images.pexels.com/photos/3755766/pexels-photo-3755766.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

function ServiceCard({
  service,
  index,
  inView,
}: {
  service: (typeof services)[0];
  index: number;
  inView: boolean;
}) {
  const Icon = service.icon;
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative group flex flex-col h-full"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.6s ease ${index * 80}ms, transform 0.6s ease ${index * 80}ms`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden rounded-sm bg-white dark:bg-brand-dark border border-gray-100 dark:border-gray-800 flex flex-col h-full transition-all duration-500"
        style={{
          boxShadow: hovered ? '0 20px 60px rgba(196,30,58,0.15), 0 0 0 1px rgba(196,30,58,0.2)' : '0 4px 24px rgba(0,0,0,0.04)',
          transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        }}
      >
        {/* Top accent bar */}
        <div
          className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-red to-brand-red-light transition-transform duration-500 origin-left z-20"
          style={{ transform: hovered ? 'scaleX(1)' : 'scaleX(0)' }}
        />

        {/* Image header — taller, no white overlay */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-700"
            style={{ transform: hovered ? 'scale(1.08)' : 'scale(1)' }}
          />
          {/* Subtle bottom-only gradient for text readability — no white wash */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* Service number */}
          <div className="absolute top-3 right-3 font-display font-black text-3xl text-white/15 leading-none pointer-events-none">
            {String(index + 1).padStart(2, '0')}
          </div>
        </div>

        {/* Icon badge — fully visible, positioned below image */}
        <div className="relative px-6 -mt-7 z-10">
          <div
            className="w-14 h-14 rounded-sm flex items-center justify-center border-4 border-white dark:border-brand-dark transition-all duration-500"
            style={{
              background: hovered
                ? 'linear-gradient(135deg, #C41E3A, #8B0000)'
                : 'rgba(196,30,58,0.08)',
              boxShadow: hovered ? '0 8px 24px rgba(196,30,58,0.4)' : '0 4px 12px rgba(0,0,0,0.1)',
            }}
          >
            <Icon
              size={24}
              className="transition-colors duration-500 animate-icon-float"
              style={{ color: hovered ? '#ffffff' : '#C41E3A' }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 px-6 pb-6 pt-4">
          <h3
            className="font-display font-bold text-base text-gray-900 dark:text-white mb-3 transition-colors duration-300"
            style={{ color: hovered ? '#C41E3A' : undefined }}
          >
            {service.title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1 mb-6">
            {service.description}
          </p>

          {/* Normal Learn More button */}
          <div className="mt-auto">
            <button
              onClick={() => {
                const el = document.querySelector('#contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-deep text-white font-semibold text-sm px-6 py-3 rounded-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Learn More</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const { ref, inView } = useInView(0.05);
  const { ref: ctaRef, inView: ctaInView } = useInView(0.1);

  return (
    <section
      id="services"
      className="py-20 lg:py-28 bg-white dark:bg-brand-dark transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-red/8 dark:bg-brand-red/15 border border-brand-red/20 rounded-full mb-6">
            <Container size={14} className="text-brand-red" />
            <span className="text-brand-red dark:text-brand-red-light text-xs font-bold uppercase tracking-widest">
              Services Overview
            </span>
          </div>
          <h2 className="section-title text-gray-900 dark:text-white mb-4">
            One Partner. Every Stage.{' '}
            <span className="text-gradient-red">Complete Control.</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            From international sourcing to your warehouse door, Akilina manages every step of the supply chain so you never have to coordinate between multiple vendors for a single consignment.
          </p>
        </div>

        {/* Services Grid — 4 columns with equal height cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} inView={inView} />
          ))}
        </div>

        {/* CTA Section — Professional illustrative design */}
        <div
          ref={ctaRef as React.RefObject<HTMLDivElement>}
          className="mt-20 relative overflow-hidden rounded-sm"
          style={{
            opacity: ctaInView ? 1 : 0,
            transform: ctaInView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          {/* Background image with cinematic overlay */}
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/90 to-brand-black/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-brand-black/30" />
          </div>

          {/* Decorative grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(rgba(196,30,58,1) 1px, transparent 1px), linear-gradient(90deg, rgba(196,30,58,1) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />

          {/* Red accent glow */}
          <div className="absolute top-0 left-0 w-96 h-96 pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(196,30,58,0.12) 0%, transparent 70%)' }}
          />

          <div className="relative px-8 py-12 lg:px-16 lg:py-16">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Left: Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-red/15 border border-brand-red/30 rounded-full mb-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
                  <span className="text-brand-red-light text-xs font-bold uppercase tracking-widest">
                    End-to-End Solutions
                  </span>
                </div>

                <h3 className="font-display font-bold text-2xl lg:text-3xl text-white mb-4 leading-tight">
                  Need a Complete Supply Chain Solution?
                </h3>
                <p className="text-gray-400 leading-relaxed mb-8 max-w-lg">
                  From procurement to last-mile delivery, our integrated approach means one partner, one point of accountability, and zero gaps in your supply chain.
                </p>

                {/* Feature bullets */}
                <div className="space-y-3 mb-8">
                  {[
                    'Single-point accountability for every consignment',
                    'Real-time tracking and proactive communication',
                    'Full regulatory compliance across all Nigerian ports',
                  ].map((item, i) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                      style={{
                        opacity: ctaInView ? 1 : 0,
                        transform: ctaInView ? 'translateX(0)' : 'translateX(-15px)',
                        transition: `opacity 0.5s ease ${200 + i * 100}ms, transform 0.5s ease ${200 + i * 100}ms`,
                      }}
                    >
                      <CheckCircle size={16} className="text-brand-red flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => {
                    const el = document.querySelector('#contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-3 bg-brand-red hover:bg-brand-red-deep text-white font-semibold px-8 py-4 rounded-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 group"
                >
                  <span>Request a Quote</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              {/* Right: Stats & visual elements */}
              <div className="hidden lg:block">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Zap, value: '8+', label: 'Service Lines', desc: 'Full-spectrum logistics' },
                    { icon: Shield, value: '100%', label: 'Compliance Rate', desc: 'Zero penalty record' },
                    { icon: Phone, value: '24/7', label: 'Operations Support', desc: 'Always available' },
                    { icon: Globe, value: '6', label: 'Geo-Political Zones', desc: 'Nationwide coverage' },
                  ].map(({ icon: StatIcon, value, label, desc }, i) => (
                    <div
                      key={label}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-5 hover:border-brand-red/40 transition-all duration-300 group/stat"
                      style={{
                        opacity: ctaInView ? 1 : 0,
                        transform: ctaInView ? 'translateY(0)' : 'translateY(15px)',
                        transition: `opacity 0.5s ease ${300 + i * 100}ms, transform 0.5s ease ${300 + i * 100}ms`,
                      }}
                    >
                      <StatIcon size={16} className="text-brand-red mb-3 group-hover/stat:scale-110 transition-transform" />
                      <div className="font-display font-black text-2xl text-white leading-none mb-1">{value}</div>
                      <div className="text-white/80 text-sm font-semibold mb-0.5">{label}</div>
                      <div className="text-gray-500 text-xs">{desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative corner accents */}
            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-brand-red/30 rounded-tr-sm" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-brand-red/30 rounded-bl-sm" />
          </div>
        </div>
      </div>
    </section>
  );
}
