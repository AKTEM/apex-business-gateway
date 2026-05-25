import { useRef, useEffect, useState } from 'react';
import { Shield, GitMerge, Radio, Brain, Zap, ArrowRight, Package, Globe, CheckCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const reasons = [
  {
    icon: Shield,
    title: 'Licensed & Compliant',
    description: 'Fully registered under the Nigerian Corporate Affairs Commission (CAC). Operationally compliant with Nigerian Customs Service (NCS), NAFDAC, SON, and all applicable trade regulatory requirements.',
    accent: '#C41E3A',
    stat: 'CAC Reg.',
    statSub: 'RC 880162',
    floatDelay: '0s',
  },
  {
    icon: GitMerge,
    title: 'End-to-End Capability',
    description: 'We manage the entire supply chain journey from international procurement and freight to customs clearance, haulage, and final delivery. One partner. Complete accountability.',
    accent: '#C41E3A',
    stat: '8+',
    statSub: 'Service Lines',
    floatDelay: '0.4s',
  },
  {
    icon: Radio,
    title: 'Enterprise-Grade Communication',
    description: 'Dedicated account managers, real-time shipment updates, and proactive issue resolution. You always know where your cargo is and what is happening with it.',
    accent: '#C41E3A',
    stat: '24/7',
    statSub: 'Updates',
    floatDelay: '0.8s',
  },
  {
    icon: Brain,
    title: 'Nigerian Market Intelligence',
    description: "Years of operating within Nigeria's logistics environment gives us the port relationships, customs knowledge, and inland route expertise that international firms cannot replicate.",
    accent: '#C41E3A',
    stat: '6',
    statSub: 'Geo-Zones',
    floatDelay: '1.2s',
  },
  {
    icon: Zap,
    title: 'Speed When It Matters',
    description: 'We understand that missed delivery windows cost money. Our team is built around urgency — not just procedures.',
    accent: '#C41E3A',
    stat: '100%',
    statSub: 'Committed',
    floatDelay: '1.6s',
  },
];

function AnimatedOrb({ delay, size, x, y }: { delay: string; size: number; x: string; y: string }) {
  return (
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        background: 'radial-gradient(circle, rgba(196,30,58,0.15) 0%, transparent 70%)',
        animation: `float 6s ease-in-out infinite`,
        animationDelay: delay,
      }}
    />
  );
}

function ReasonCard({
  reason,
  index,
  inView,
}: {
  reason: (typeof reasons)[0];
  index: number;
  inView: boolean;
}) {
  const Icon = reason.icon;
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative group"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
        transition: `opacity 0.7s cubic-bezier(0.25,0.46,0.45,0.94) ${index * 100}ms, transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94) ${index * 100}ms`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="relative overflow-hidden rounded-sm bg-white dark:bg-brand-dark border border-gray-100 dark:border-gray-800/80 h-full transition-all duration-500"
        style={{
          boxShadow: hovered
            ? '0 20px 60px rgba(196,30,58,0.18), 0 0 0 1px rgba(196,30,58,0.3)'
            : '0 4px 24px rgba(0,0,0,0.06)',
          transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-red via-brand-red-light to-brand-red transition-all duration-500"
          style={{ transform: hovered ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: 'left' }}
        />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top left, rgba(196,30,58,0.05) 0%, transparent 60%)' }}
        />

        <div className="p-7 flex flex-col h-full">
          <div className="flex items-start justify-between mb-5">
            <div className="relative">
              <div
                className="w-14 h-14 rounded-sm flex items-center justify-center transition-all duration-500"
                style={{
                  background: hovered ? 'linear-gradient(135deg, #C41E3A, #8B0000)' : 'rgba(196,30,58,0.08)',
                  boxShadow: hovered ? '0 8px 24px rgba(196,30,58,0.35)' : 'none',
                }}
              >
                <Icon
                  size={24}
                  className="transition-all duration-500"
                  style={{
                    color: hovered ? '#ffffff' : '#C41E3A',
                    animation: `iconFloat 3s ease-in-out infinite`,
                    animationDelay: reason.floatDelay,
                    transform: hovered ? 'scale(1.1)' : 'scale(1)',
                  }}
                />
              </div>
              <div
                className="absolute inset-0 rounded-sm border border-brand-red/30 transition-all duration-500"
                style={{ transform: hovered ? 'scale(1.4)' : 'scale(1)', opacity: hovered ? 0 : 1 }}
              />
            </div>

            <div className="text-right">
              <div className="font-display font-black text-xl transition-colors duration-300" style={{ color: hovered ? '#C41E3A' : '#1a1a1a' }}>
                <span className="dark:text-white group-hover:text-brand-red transition-colors duration-300">
                  {reason.stat}
                </span>
              </div>
              <div className="text-[10px] text-gray-400 uppercase tracking-widest font-medium">
                {reason.statSub}
              </div>
            </div>
          </div>

          <div
            className="absolute bottom-4 right-5 font-display font-black text-6xl pointer-events-none transition-opacity duration-300"
            style={{ color: 'rgba(196,30,58,0.04)', opacity: hovered ? 0.08 : 0.03, lineHeight: 1 }}
          >
            {String(index + 1).padStart(2, '0')}
          </div>

          <h3 className="font-display font-bold text-base text-gray-900 dark:text-white mb-3 leading-snug group-hover:text-brand-red transition-colors duration-300">
            {reason.title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1">
            {reason.description}
          </p>

          <div
            className="mt-5 flex items-center gap-2 text-xs font-bold text-brand-red uppercase tracking-widest transition-all duration-300"
            style={{ opacity: hovered ? 1 : 0, transform: hovered ? 'translateX(0)' : 'translateX(-8px)' }}
          >
            <div className="w-4 h-0.5 bg-brand-red rounded-full" />
            Akilina Standard
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WhyChooseAkilina() {
  const { ref, inView } = useInView(0.05);
  const { ref: cardsRef, inView: cardsInView } = useInView(0.05);
  const { ref: ctaRef, inView: ctaInView } = useInView(0.1);
  const bgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current) return;
      const rect = bgRef.current.getBoundingClientRect();
      bgRef.current.style.transform = `translateY(${-rect.top * 0.15}px)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    const el = document.querySelector('#services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* WHY CHOOSE SECTION */}
      <section className="relative py-24 lg:py-32 bg-gray-50 dark:bg-brand-dark-2 overflow-hidden transition-colors duration-300">
        <AnimatedOrb delay="0s" size={500} x="-10%" y="-20%" />
        <AnimatedOrb delay="2s" size={400} x="60%" y="50%" />
        <AnimatedOrb delay="4s" size={300} x="80%" y="-10%" />

        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(196,30,58,1) 1px, transparent 1px), linear-gradient(90deg, rgba(196,30,58,1) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div
            ref={ref as React.RefObject<HTMLDivElement>}
            className={`max-w-3xl mx-auto text-center mb-20 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-red/8 dark:bg-brand-red/15 border border-brand-red/20 rounded-full mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
              <span className="text-brand-red dark:text-brand-red-light text-xs font-bold uppercase tracking-widest">
                Why Choose Akilina
              </span>
            </div>
            <h2 className="section-title text-gray-900 dark:text-white mb-5">
              Why Leading Organisations{' '}
              <span className="text-gradient-red">Choose Akilina</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-base max-w-xl mx-auto">
              Five pillars that make Akilina Nigeria's benchmark for enterprise logistics and procurement excellence.
            </p>
          </div>

          {/* Asymmetric layout: 2 left, featured center, 2 right */}
          <div
            ref={cardsRef as React.RefObject<HTMLDivElement>}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 items-stretch"
          >
            {/* Left pair */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
              <ReasonCard reason={reasons[0]} index={0} inView={cardsInView} />
              <ReasonCard reason={reasons[1]} index={1} inView={cardsInView} />
            </div>

            {/* Center featured card */}
            <div
              className="lg:col-span-1"
              style={{
                opacity: cardsInView ? 1 : 0,
                transform: cardsInView ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
                transition: 'opacity 0.8s cubic-bezier(0.25,0.46,0.45,0.94) 200ms, transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94) 200ms',
              }}
            >
              <div className="relative rounded-sm overflow-hidden h-full min-h-[340px] group">
                <img
                  src="https://img.freepik.com/premium-photo/logistics-import-export-cargo-transportation-industry-concept-delivery-cargo-trucks-driving_1149930-2336.jpg?semt=ais_hybrid&w=740&q=80"
                  alt="Logistics operations"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-brand-black/20" />
                <div className="absolute inset-0 bg-brand-red/10 mix-blend-multiply" />

                <div className="relative h-full flex flex-col justify-between p-7">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
                    <span className="text-white/70 text-[10px] uppercase tracking-widest font-bold">Since 2014</span>
                  </div>

                  <div>
                    <div className="font-display font-black text-5xl text-white mb-1 leading-none">10<span className="text-brand-red">+</span></div>
                    <div className="text-white/80 text-sm font-medium mb-3">Years of Excellence</div>
                    <div className="w-8 h-0.5 bg-brand-red mb-4" />
                    <p className="text-white/60 text-xs leading-relaxed">
                      A decade of building Nigeria's most trusted logistics & procurement operation.
                    </p>

                    <div className="grid grid-cols-2 gap-2 mt-5">
                      {[{ v: '500+', l: 'Clients' }, { v: '6', l: 'Zones' }].map(s => (
                        <div key={s.l} className="bg-white/10 backdrop-blur-sm rounded-sm p-2.5 text-center">
                          <div className="font-display font-black text-white text-sm">{s.v}</div>
                          <div className="text-white/50 text-[10px]">{s.l}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute top-3 right-3 w-6 h-6 border-r border-t border-brand-red/60" />
                <div className="absolute bottom-3 left-3 w-6 h-6 border-l border-b border-brand-red/60" />
              </div>
            </div>

            {/* Right pair */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
              <ReasonCard reason={reasons[2]} index={2} inView={cardsInView} />
              <ReasonCard reason={reasons[3]} index={3} inView={cardsInView} />
            </div>
          </div>

          {/* Fifth card — "Speed When It Matters" with special animations */}
          <div
            className="mt-5"
            style={{
              opacity: cardsInView ? 1 : 0,
              transform: cardsInView ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.7s ease 500ms, transform 0.7s ease 500ms',
            }}
          >
            <div className="relative overflow-hidden rounded-sm bg-white dark:bg-brand-dark border border-gray-100 dark:border-gray-800 group hover:border-brand-red/40 transition-all duration-500 animate-glow-breathe"
              style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at left, rgba(196,30,58,0.04) 0%, transparent 60%)' }}
              />
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-red via-brand-red-light to-brand-red scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-7">
                {/* Icon with pulse ring */}
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-sm bg-brand-red/8 group-hover:bg-gradient-to-br group-hover:from-brand-red group-hover:to-brand-red-deep flex items-center justify-center transition-all duration-500">
                    <Zap
                      size={28}
                      className="text-brand-red group-hover:text-white transition-colors duration-500"
                      style={{ animation: 'iconFloat 3s ease-in-out infinite', animationDelay: '1.6s' }}
                    />
                  </div>
                  {/* Animated pulse ring */}
                  <div className="absolute inset-0 rounded-sm border-2 border-brand-red/40 animate-icon-pulse-ring pointer-events-none" />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    {/* Pop-out animated title */}
                    <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white group-hover:text-brand-red transition-colors duration-300 animate-pop-out">
                      Speed When It Matters
                    </h3>
                  </div>
                  {/* Slow readable scrolling description */}
                  <div className="overflow-hidden relative">
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl animate-marquee-slow whitespace-nowrap">
                      We understand that missed delivery windows cost money. Our team is built around urgency — not just procedures.
                    </p>
                  </div>
                  {/* Flashing "100% Committed" badge below text */}
                  <span className="inline-block mt-2 px-2 py-0.5 bg-brand-red/10 text-brand-red text-[10px] font-bold uppercase tracking-widest rounded-full animate-flash">
                    100% Committed
                  </span>
                </div>

                {/* Right stats — flashing attention-grabbers */}
                <div className="flex-shrink-0 flex gap-4">
                  <div className="text-center px-4 py-3 bg-gray-50 dark:bg-brand-dark-2 rounded-sm border border-gray-100 dark:border-gray-800 animate-flash">
                    <div className="font-display font-black text-sm text-brand-red">Fast</div>
                    <div className="text-[10px] text-gray-400 mt-0.5">Clearance</div>
                  </div>
                  <div className="text-center px-4 py-3 bg-gray-50 dark:bg-brand-dark-2 rounded-sm border border-gray-100 dark:border-gray-800 animate-flash" style={{ animationDelay: '0.75s' }}>
                    <div className="font-display font-black text-sm text-brand-red">Zero</div>
                    <div className="text-[10px] text-gray-400 mt-0.5">Missed SLAs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        ref={ctaRef as React.RefObject<HTMLDivElement>}
        className="relative overflow-hidden bg-brand-black"
        style={{ minHeight: '600px' }}
      >
        <div className="absolute inset-0">
          <img
            ref={bgRef}
            src="https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt=""
            className="w-full h-full object-cover scale-110 will-change-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/85 to-brand-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-brand-black/40" />
          <div className="absolute inset-0 bg-brand-red/5 mix-blend-screen" />
        </div>

        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(196,30,58,1) 1px, transparent 1px), linear-gradient(90deg, rgba(196,30,58,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(196,30,58,0.12) 0%, transparent 70%)', animation: 'float 8s ease-in-out infinite' }}
        />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(196,30,58,0.08) 0%, transparent 70%)', animation: 'float 6s ease-in-out infinite', animationDelay: '-3s' }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT: Main CTA content */}
            <div
              className={`transition-all duration-800 ${ctaInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
              style={{ transitionDuration: '900ms' }}
            >
              <div className="flex items-center gap-3 mb-7">
                <div className="flex items-center gap-1.5 px-4 py-1.5 bg-brand-red/15 border border-brand-red/30 rounded-full">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
                  <span className="text-brand-red-light text-xs font-bold uppercase tracking-widest">
                    The Akilina Guarantee
                  </span>
                </div>
              </div>

              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.1] mb-6">
                When Your Supply Chain{' '}
                <span className="text-gradient-red">Cannot Afford</span>{' '}
                to Fail
              </h2>

              <div className="space-y-3 mb-10">
                {[
                  'When the shipment is time-critical',
                  'When the cargo is high-value',
                  'When the regulatory process is complex',
                  'When your business depends on delivery',
                ].map((item, i) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                    style={{
                      opacity: ctaInView ? 1 : 0,
                      transform: ctaInView ? 'translateX(0)' : 'translateX(-20px)',
                      transition: `opacity 0.5s ease ${300 + i * 100}ms, transform 0.5s ease ${300 + i * 100}ms`,
                    }}
                  >
                    <CheckCircle size={16} className="text-brand-red flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <p
                className="text-brand-red-light font-semibold text-lg mb-10 leading-relaxed"
                style={{ opacity: ctaInView ? 1 : 0, transition: 'opacity 0.7s ease 700ms' }}
              >
                If that sounds like your business — we should talk.
              </p>

              {/* 3D CTA Buttons */}
              <div
                className="flex flex-col sm:flex-row gap-4"
                style={{
                  opacity: ctaInView ? 1 : 0,
                  transform: ctaInView ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.6s ease 800ms, transform 0.6s ease 800ms',
                }}
              >
                {/* Primary 3D button */}
                <button
                  onClick={scrollToContact}
                  className="btn-3d group relative overflow-hidden font-semibold text-white px-8 py-4 rounded-sm transition-all duration-300 flex items-center justify-center gap-3"
                  style={{
                    background: 'linear-gradient(180deg, #D42040 0%, #C41E3A 40%, #A01830 100%)',
                    boxShadow: '0 6px 0 #6B0012, 0 8px 20px rgba(196,30,58,0.5)',
                    transform: 'translateY(0)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(3px)';
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 3px 0 #6B0012, 0 5px 12px rgba(196,30,58,0.4)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 6px 0 #6B0012, 0 8px 20px rgba(196,30,58,0.5)';
                  }}
                >
                  <span className="relative z-10">Request a Quote</span>
                  <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>

                {/* Secondary 3D button */}
                <button
                  onClick={scrollToServices}
                  className="btn-3d group relative overflow-hidden font-semibold text-white px-8 py-4 rounded-sm transition-all duration-300 flex items-center justify-center gap-3"
                  style={{
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 100%)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    boxShadow: '0 6px 0 rgba(0,0,0,0.4), 0 8px 20px rgba(0,0,0,0.3)',
                    backdropFilter: 'blur(8px)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(3px)';
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 3px 0 rgba(0,0,0,0.4), 0 5px 12px rgba(0,0,0,0.3)';
                    (e.currentTarget as HTMLButtonElement).style.background = 'linear-gradient(180deg, rgba(196,30,58,0.2) 0%, rgba(196,30,58,0.1) 100%)';
                    (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(196,30,58,0.5)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 6px 0 rgba(0,0,0,0.4), 0 8px 20px rgba(0,0,0,0.3)';
                    (e.currentTarget as HTMLButtonElement).style.background = 'linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 100%)';
                    (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.2)';
                  }}
                >
                  <span>Explore Services</span>
                  <Globe size={16} className="group-hover:animate-spin transition-all duration-300" style={{ animationDuration: '2s' }} />
                </button>

                {/* Tertiary outlined */}
                <button
                  onClick={scrollToContact}
                  className="btn-3d group relative font-semibold px-8 py-4 rounded-sm flex items-center justify-center gap-3 transition-all duration-300"
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(196,30,58,0.4)',
                    boxShadow: '0 6px 0 rgba(139,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)',
                    color: 'rgba(229,62,62,1)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(3px)';
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 3px 0 rgba(139,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)';
                    (e.currentTarget as HTMLButtonElement).style.background = 'rgba(196,30,58,0.08)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 6px 0 rgba(139,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)';
                    (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                  }}
                >
                  <Package size={16} />
                  <span>Contact Our Team</span>
                </button>
              </div>
            </div>

            {/* RIGHT: Image grid mosaic */}
            <div
              className={`hidden lg:block transition-all duration-900 ${ctaInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
              style={{ transitionDuration: '900ms', transitionDelay: '200ms' }}
            >
              <div className="grid grid-cols-2 gap-3 relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-brand-red/50 z-10" />
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-brand-red/50 z-10" />

                <div className="row-span-2 relative rounded-sm overflow-hidden group" style={{ height: '320px' }}>
                  <img
                    src="https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Container port"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
                    <span className="text-white/80 text-[10px] font-bold uppercase tracking-widest">Container Port</span>
                  </div>
                </div>

                <div className="relative rounded-sm overflow-hidden group" style={{ height: '152px' }}>
                  <img
                    src="https://images.pexels.com/photos/4483942/pexels-photo-4483942.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Freight operations"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-brand-black/30 group-hover:bg-brand-black/10 transition-colors duration-300" />
                </div>

                <div className="relative rounded-sm overflow-hidden group" style={{ height: '152px' }}>
                  <img
                    src="https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Cargo plane"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-brand-black/30 group-hover:bg-brand-black/10 transition-colors duration-300" />
                  <div className="absolute top-2 right-2 bg-brand-red/90 px-2 py-0.5 rounded-full">
                    <span className="text-white text-[9px] font-bold uppercase tracking-widest">Air Freight</span>
                  </div>
                </div>
              </div>

              {/* Stat strip below grid */}
              <div className="grid grid-cols-3 gap-3 mt-3">
                {[
                  { icon: Package, value: '500+', label: 'Consignments' },
                  { icon: Globe, value: 'Global', label: 'Trade Lanes' },
                  { icon: Zap, value: '100%', label: 'On-Time Rate' },
                ].map(({ icon: Icon, value, label }, i) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm px-3 py-3 hover:border-brand-red/40 transition-all duration-300"
                    style={{
                      opacity: ctaInView ? 1 : 0,
                      transform: ctaInView ? 'translateY(0)' : 'translateY(15px)',
                      transition: `opacity 0.5s ease ${600 + i * 100}ms, transform 0.5s ease ${600 + i * 100}ms`,
                    }}
                  >
                    <Icon size={14} className="text-brand-red flex-shrink-0" />
                    <div>
                      <div className="font-display font-black text-white text-sm leading-none">{value}</div>
                      <div className="text-gray-500 text-[10px] mt-0.5">{label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red/40 to-transparent" />
      </section>
    </>
  );
}
