import { useRef, useEffect } from 'react';
import {
  ArrowRight, CheckCircle, Shield, ShieldCheck, Target, Eye, Heart, Zap,
  Award, MapPin, Anchor, Truck, Globe, FileCheck,
  TrendingUp, Building2, Scale, Handshake
} from 'lucide-react';
import { useInView } from '../hooks/useInView';
import logisticsImage from '../assets/transportation-logistics_37416-165.jpeg';

const values = [
  {
    icon: Scale,
    title: 'Accountability',
    description: 'We take full ownership of every consignment from the moment it enters our care. No passing of responsibility. No unexplained delays. You have one point of contact and one company answerable for the outcome.',
  },
  {
    icon: Target,
    title: 'Precision',
    description: 'We build verification, documentation control, and real-time communication into every process so that problems are identified early not after delivery.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We quote transparently, communicate honestly, and report problems immediately. Our clients trust us with consignments of significant value because we have never given them a reason not to.',
  },
  {
    icon: Zap,
    title: 'Urgency',
    description: 'Akilina was built around speed: fast clearance, fast documentation, fast escalation, fast delivery.',
  },
  {
    icon: Handshake,
    title: 'Partnership',
    description: 'We manage relationships. Our clients return to us because we invest in understanding their business not just their cargo.',
  },
];

const credentials = [
  { icon: Building2, text: 'Corporate Affairs Commission (CAC) Registration' },
  { icon: Anchor, text: 'Nigerian Customs Service (NCS) compliance' },
  { icon: FileCheck, text: 'NAFDAC coordination capability for regulated goods importation' },
  { icon: Shield, text: 'SON (Standards Organisation of Nigeria) compliance coordination' },
];

const reachZones = [
  { zone: 'South West', hub: 'Lagos', icon: Anchor },
  { zone: 'South South', hub: 'Port Harcourt', icon: MapPin },
  { zone: 'North Central', hub: 'Abuja', icon: Building2 },
  { zone: 'South East', hub: 'Onitsha', icon: Truck },
  { zone: 'North West', hub: 'Kano', icon: Globe },
  { zone: 'North East', hub: 'Maiduguri', icon: TrendingUp },
];

export default function About() {
  const { ref: storyRef, inView: storyInView } = useInView(0.1);
  const { ref: imgRef, inView: imgInView } = useInView(0.1);
  const { ref: vmRef, inView: vmInView } = useInView(0.1);
  const { ref: valuesRef, inView: valuesInView } = useInView(0.05);
  const { ref: credRef, inView: credInView } = useInView(0.1);
  const { ref: reachRef, inView: reachInView } = useInView(0.1);
  const storyImgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!storyImgRef.current) return;
      const rect = storyImgRef.current.getBoundingClientRect();
      storyImgRef.current.style.transform = `translateY(${-rect.top * 0.08}px)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const scrollToServices = () => {
    const el = document.querySelector('#services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="bg-white dark:bg-brand-dark transition-colors duration-300">

      {/* ════════════════════════════════════════════
          SECTION 1: OUR STORY - Diagonal Split Layout
          ════════════════════════════════════════════ */}
      <div className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(196,30,58,0.06) 0%, transparent 70%)' }}
        />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(196,30,58,0.04) 0%, transparent 70%)' }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
            {/* Left: Image with creative frame */}
            <div
              ref={imgRef as React.RefObject<HTMLDivElement>}
              className={`relative transition-all duration-700 ${imgInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
            >
              <div className="relative rounded-sm overflow-hidden shadow-2xl img-corner-borders">
                <div ref={storyImgRef}>
                  <img
                    src={logisticsImage}
                    alt="Logistics operations"
                    className="w-full h-80 lg:h-[520px] object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent" />

                {/* Overlay stats bar */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { v: '10+', l: 'Years' },
                      { v: '6', l: 'Geo-Zones' },
                      { v: '500+', l: 'Clients' },
                    ].map((s, i) => (
                      <div
                        key={s.l}
                        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-sm px-3 py-2.5 text-center"
                        style={{
                          opacity: imgInView ? 1 : 0,
                          transform: imgInView ? 'translateY(0)' : 'translateY(20px)',
                          transition: `opacity 0.5s ease ${400 + i * 100}ms, transform 0.5s ease ${400 + i * 100}ms`,
                        }}
                      >
                        <div className="font-display font-black text-white text-lg leading-none">{s.v}</div>
                        <div className="text-white/60 text-[10px] mt-1 uppercase tracking-widest">{s.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating side card */}
              <div
                className="absolute -right-4 lg:-right-8 top-1/2 -translate-y-1/2 bg-white dark:bg-brand-dark border border-gray-200 dark:border-gray-800 rounded-sm shadow-xl p-4 z-10 hidden lg:block"
                style={{
                  opacity: imgInView ? 1 : 0,
                  transform: imgInView ? 'translateY(-50%) translateX(0)' : 'translateY(-50%) translateX(20px)',
                  transition: 'opacity 0.6s ease 600ms, transform 0.6s ease 600ms',
                }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-brand-red/10 rounded-sm flex items-center justify-center">
                    <Award size={16} className="text-brand-red" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm text-gray-900 dark:text-white">CAC Reg.</div>
                    <div className="text-[10px] text-gray-400">RC 880162</div>
                  </div>
                </div>
                <div className="w-full h-px bg-gray-100 dark:bg-gray-800 my-2" />
                <div className="flex items-center gap-2">
                  <CheckCircle size={12} className="text-brand-red" />
                  <span className="text-[10px] text-gray-500">Fully Compliant</span>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div
              ref={storyRef as React.RefObject<HTMLDivElement>}
              className={`transition-all duration-700 delay-200 ${storyInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-red/8 dark:bg-brand-red/15 border border-brand-red/20 rounded-full mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
                <span className="text-brand-red dark:text-brand-red-light text-xs font-bold uppercase tracking-widest">
                  About Us
                </span>
              </div>

              <h2 className="section-title text-gray-900 dark:text-white mb-6">
                Our <span className="text-gradient-red">Story</span>
              </h2>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Akilina Nigeria Limited is an indigenous procurement and logistics company registered under the Companies and Allied Matters Act with the Nigerian Corporate Affairs Commission. From our base in Lagos, we have built a full-service operation spanning logistics, procurement, import and export, freight forwarding, haulage, and barging services.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                We were founded on a clear understanding of what was missing in Nigeria's logistics landscape: a company that could serve enterprise clients with the rigour and accountability that complex trade demands without losing the local knowledge, port relationships, and agility that Nigerian operations require. With a presence across Nigeria's six geo-political zones, we have strategically positioned ourselves to serve clients at any location, under any operating condition. Every consignment we handle represents not just a delivery obligation but a business commitment and we treat it accordingly.
              </p>

              {/* 3D CTA Button */}
              <button
                onClick={scrollToServices}
                className="btn-3d group relative overflow-hidden font-semibold text-white px-8 py-4 rounded-sm transition-all duration-300 inline-flex items-center gap-3"
                style={{
                  background: 'linear-gradient(180deg, #D42040 0%, #C41E3A 40%, #A01830 100%)',
                  boxShadow: '0 6px 0 #6B0012, 0 8px 20px rgba(196,30,58,0.5)',
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
                <span>Explore Our Services</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════
          SECTION 2: VISION / MISSION / ACCOUNTABILITY - Staggered Cards
          ════════════════════════════════════════════ */}
      <div className="relative py-20 lg:py-28 bg-gray-50 dark:bg-brand-dark-2 overflow-hidden transition-colors duration-300">
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(196,30,58,1) 1px, transparent 1px), linear-gradient(90deg, rgba(196,30,58,1) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={vmRef as React.RefObject<HTMLDivElement>}
            className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${vmInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-red/8 dark:bg-brand-red/15 border border-brand-red/20 rounded-full mb-6">
              <Eye size={14} className="text-brand-red" />
              <span className="text-brand-red dark:text-brand-red-light text-xs font-bold uppercase tracking-widest">
                Vision & Mission
              </span>
            </div>
            <h2 className="section-title text-gray-900 dark:text-white">
              Where We Are <span className="text-gradient-red">Going</span>
            </h2>
          </div>

          {/* Staggered 3-card layout with different heights */}
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {/* Vision - tallest card */}
            <div
              className="relative group"
              style={{
                opacity: vmInView ? 1 : 0,
                transform: vmInView ? 'translateY(0)' : 'translateY(40px)',
                transition: 'opacity 0.7s ease 0ms, transform 0.7s ease 0ms',
              }}
            >
              <div className="relative overflow-hidden rounded-sm bg-white dark:bg-brand-dark border border-gray-100 dark:border-gray-800 p-8 h-full transition-all duration-500 hover:shadow-xl hover:border-brand-red/30">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-red to-brand-red-light scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

                <div className="w-14 h-14 rounded-sm bg-brand-red/8 flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:shadow-red-glow-sm transition-all duration-500">
                  <Eye size={24} className="text-brand-red group-hover:text-white transition-colors duration-500 animate-icon-float" />
                </div>

                <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-4 group-hover:text-brand-red transition-colors duration-300">
                  Our Vision
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  To be the benchmark for procurement and logistics excellence in Nigeria - the first choice supply chain partner for Nigerian and international enterprise clients.
                </p>

                <div className="absolute bottom-4 right-4 font-display font-black text-6xl text-brand-red/[0.03] leading-none pointer-events-none">
                  01
                </div>
              </div>
            </div>

            {/* Mission - medium card */}
            <div
              className="relative group md:mt-8"
              style={{
                opacity: vmInView ? 1 : 0,
                transform: vmInView ? 'translateY(0)' : 'translateY(40px)',
                transition: 'opacity 0.7s ease 150ms, transform 0.7s ease 150ms',
              }}
            >
              <div className="relative overflow-hidden rounded-sm bg-white dark:bg-brand-dark border border-gray-100 dark:border-gray-800 h-full transition-all duration-500 hover:shadow-xl hover:border-brand-red/30">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-red to-brand-red-light scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

                <div className="p-8">
                  <div className="w-14 h-14 rounded-sm bg-brand-red/8 flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:shadow-red-glow-sm transition-all duration-500">
                    <Target size={24} className="text-brand-red group-hover:text-white transition-colors duration-500 animate-icon-float" />
                  </div>

                  <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-4 group-hover:text-brand-red transition-colors duration-300">
                    Our Mission
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    To provide high-standard logistics and procurement solutions that serve as the vanguard of enterprise supply chain support in Nigeria - ensuring that the operational needs of our clients are not just met, but consistently exceeded.
                  </p>
                </div>

                <div className="absolute bottom-4 right-4 font-display font-black text-6xl text-brand-red/[0.03] leading-none pointer-events-none">
                  02
                </div>
              </div>
            </div>

            {/* Accountability - offset red card */}
            <div
              className="relative group md:mt-16"
              style={{
                opacity: vmInView ? 1 : 0,
                transform: vmInView ? 'translateY(0)' : 'translateY(40px)',
                transition: 'opacity 0.7s ease 300ms, transform 0.7s ease 300ms',
              }}
            >
              <div className="relative overflow-hidden rounded-sm bg-gradient-to-br from-brand-red to-brand-red-deep p-8 h-full text-white transition-all duration-500 hover:shadow-red-glow-lg">
                <div className="w-14 h-14 rounded-sm bg-white/15 flex items-center justify-center mb-6 group-hover:bg-white/25 transition-all duration-500">
                  <ShieldCheck size={24} className="text-white animate-icon-float" />
                </div>

                <h3 className="font-display font-bold text-xl mb-4">
                  Built on Accountability. Grown on Trust.
                </h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  Akilina Nigeria Limited is a procurement and logistics company built for Nigerian enterprise - combining local market mastery with the operational standards that global trade demands.
                </p>

                <div className="absolute top-4 right-4 w-6 h-6 border-r border-t border-white/20" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-l border-b border-white/20" />
                <div className="absolute bottom-4 right-4 font-display font-black text-6xl text-white/[0.06] leading-none pointer-events-none">
                  03
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════
          SECTION 3: CORE VALUES - Pyramid Layout
          ════════════════════════════════════════════ */}
      <div className="relative py-20 lg:py-28 bg-white dark:bg-brand-dark overflow-hidden transition-colors duration-300">
        <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(196,30,58,0.06) 0%, transparent 70%)' }}
        />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(196,30,58,0.04) 0%, transparent 70%)' }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={valuesRef as React.RefObject<HTMLDivElement>}
            className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${valuesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-red/8 dark:bg-brand-red/15 border border-brand-red/20 rounded-full mb-6">
              <Heart size={14} className="text-brand-red" />
              <span className="text-brand-red dark:text-brand-red-light text-xs font-bold uppercase tracking-widest">
                Core Values
              </span>
            </div>
            <h3 className="section-title text-gray-900 dark:text-white">
              Our <span className="text-gradient-red">Values</span>
            </h3>
          </div>

          {/* Pyramid: 2-1-2 arrangement */}
          <div className="max-w-4xl mx-auto">
            {/* Top row: 2 cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {values.slice(0, 2).map((value, i) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className="relative group"
                    style={{
                      opacity: valuesInView ? 1 : 0,
                      transform: valuesInView ? 'translateY(0)' : 'translateY(30px)',
                      transition: `opacity 0.6s ease ${i * 100}ms, transform 0.6s ease ${i * 100}ms`,
                    }}
                  >
                    <div className="relative overflow-hidden rounded-sm bg-gray-50 dark:bg-brand-dark-2 border border-gray-100 dark:border-gray-800 p-7 h-full transition-all duration-500 hover:shadow-xl hover:border-brand-red/30">
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-red to-brand-red-light scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

                      <div className="flex items-start gap-5">
                        <div className="relative flex-shrink-0">
                          <div className="w-12 h-12 rounded-sm bg-brand-red/8 flex items-center justify-center group-hover:bg-brand-red group-hover:shadow-red-glow-sm transition-all duration-500">
                            <Icon size={22} className="text-brand-red group-hover:text-white transition-colors duration-500 animate-icon-float" />
                          </div>
                          <div className="absolute inset-0 rounded-sm border border-brand-red/20 group-hover:scale-125 group-hover:opacity-0 transition-all duration-500" />
                        </div>

                        <div className="flex-1">
                          <h4 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-brand-red transition-colors duration-300">
                            {value.title}
                          </h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Center row: 1 featured card */}
            <div
              className="mb-6"
              style={{
                opacity: valuesInView ? 1 : 0,
                transform: valuesInView ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
                transition: 'opacity 0.6s ease 200ms, transform 0.6s ease 200ms',
              }}
            >
              <div className="relative overflow-hidden rounded-sm bg-gradient-to-r from-brand-red to-brand-red-deep p-8 text-white transition-all duration-500 hover:shadow-red-glow-lg max-w-2xl mx-auto">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-sm bg-white/15 flex items-center justify-center flex-shrink-0">
                    <Shield size={26} className="text-white animate-icon-float" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xl mb-2">Integrity</h4>
                    <p className="text-sm text-white/80 leading-relaxed">
                      We quote transparently, communicate honestly, and report problems immediately. Our clients trust us with consignments of significant value because we have never given them a reason not to.
                    </p>
                  </div>
                </div>
                <div className="absolute top-3 right-3 w-6 h-6 border-r border-t border-white/20" />
                <div className="absolute bottom-3 left-3 w-6 h-6 border-l border-b border-white/20" />
              </div>
            </div>

            {/* Bottom row: 2 cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {values.slice(3, 5).map((value, i) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className="relative group"
                    style={{
                      opacity: valuesInView ? 1 : 0,
                      transform: valuesInView ? 'translateY(0)' : 'translateY(30px)',
                      transition: `opacity 0.6s ease ${300 + i * 100}ms, transform 0.6s ease ${300 + i * 100}ms`,
                    }}
                  >
                    <div className="relative overflow-hidden rounded-sm bg-gray-50 dark:bg-brand-dark-2 border border-gray-100 dark:border-gray-800 p-7 h-full transition-all duration-500 hover:shadow-xl hover:border-brand-red/30">
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-red to-brand-red-light scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

                      <div className="flex items-start gap-5">
                        <div className="relative flex-shrink-0">
                          <div className="w-12 h-12 rounded-sm bg-brand-red/8 flex items-center justify-center group-hover:bg-brand-red group-hover:shadow-red-glow-sm transition-all duration-500">
                            <Icon size={22} className="text-brand-red group-hover:text-white transition-colors duration-500 animate-icon-float" />
                          </div>
                          <div className="absolute inset-0 rounded-sm border border-brand-red/20 group-hover:scale-125 group-hover:opacity-0 transition-all duration-500" />
                        </div>

                        <div className="flex-1">
                          <h4 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-brand-red transition-colors duration-300">
                            {value.title}
                          </h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════
          SECTION 4: CREDENTIALS & REACH - Split with Image Grid
          ════════════════════════════════════════════ */}
      <div className="relative py-20 lg:py-28 bg-gray-50 dark:bg-brand-dark-2 overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* LEFT: Credentials */}
            <div
              ref={credRef as React.RefObject<HTMLDivElement>}
              className={`transition-all duration-700 ${credInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-red/8 dark:bg-brand-red/15 border border-brand-red/20 rounded-full mb-6">
                <Award size={14} className="text-brand-red" />
                <span className="text-brand-red dark:text-brand-red-light text-xs font-bold uppercase tracking-widest">
                  Our Credentials
                </span>
              </div>

              <h3 className="font-display font-bold text-3xl text-gray-900 dark:text-white mb-4">
                Licensed & <span className="text-gradient-red">Compliant</span>
              </h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
                Akilina Nigeria Limited operates in full compliance with all applicable Nigerian trade and logistics regulations.
              </p>

              <div className="space-y-4">
                {credentials.map((cred, i) => {
                  const Icon = cred.icon;
                  return (
                    <div
                      key={cred.text}
                      className="group relative overflow-hidden rounded-sm bg-white dark:bg-brand-dark border border-gray-100 dark:border-gray-800 p-5 transition-all duration-500 hover:shadow-lg hover:border-brand-red/30"
                      style={{
                        opacity: credInView ? 1 : 0,
                        transform: credInView ? 'translateX(0)' : 'translateX(-20px)',
                        transition: `opacity 0.5s ease ${i * 100}ms, transform 0.5s ease ${i * 100}ms`,
                      }}
                    >
                      <div className="absolute top-0 left-0 bottom-0 w-0.5 bg-brand-red scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500" />

                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-sm bg-brand-red/8 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-red transition-all duration-500">
                          <Icon size={18} className="text-brand-red group-hover:text-white transition-colors duration-500 animate-icon-float" />
                        </div>
                        <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">{cred.text}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT: Our Reach with image mosaic */}
            <div
              ref={reachRef as React.RefObject<HTMLDivElement>}
              className={`transition-all duration-700 ${reachInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-red/8 dark:bg-brand-red/15 border border-brand-red/20 rounded-full mb-6">
                <MapPin size={14} className="text-brand-red" />
                <span className="text-brand-red dark:text-brand-red-light text-xs font-bold uppercase tracking-widest">
                  Our Reach
                </span>
              </div>

              <h3 className="font-display font-bold text-3xl text-gray-900 dark:text-white mb-4">
                Nationwide <span className="text-gradient-red">Coverage</span>
              </h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
                Akilina operates wherever your supply chain demands - from the Lagos port complex at Apapa and Tin Can Island to Onne in Rivers State, from Abuja to Port Harcourt, and across Nigeria's major inland commercial destinations.
              </p>

              {/* Image mosaic */}
              <div className="grid grid-cols-3 gap-2 mb-8">
                <div className="row-span-2 relative rounded-sm overflow-hidden group" style={{ minHeight: '180px' }}>
                  <img
                    src="https://i.pinimg.com/736x/96/e5/f8/96e5f8db92e2962cd7745c3f49cdabb6.jpg"
                    alt="Port operations"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-brand-black/30 group-hover:bg-brand-black/10 transition-colors duration-300" />
                  <div className="absolute bottom-2 left-2 bg-brand-red/90 px-2 py-0.5 rounded-full">
                    <span className="text-white text-[9px] font-bold uppercase tracking-widest">Apapa</span>
                  </div>
                </div>
                <div className="relative rounded-sm overflow-hidden group" style={{ minHeight: '86px' }}>
                  <img
                    src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/blogs/2147492600/images/1d54fc-16cd-168-276c-56156c675f6_Clearing_and_Forwarding_Courses.jpg"
                    alt="Freight"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-brand-black/30 group-hover:bg-brand-black/10 transition-colors duration-300" />
                </div>
                <div className="relative rounded-sm overflow-hidden group" style={{ minHeight: '86px' }}>
                  <img
                    src="https://cdn.vanguardngr.com/wp-content/uploads/2020/07/NPA-port-1000x600-1.jpg"
                    alt="Cargo"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-brand-black/30 group-hover:bg-brand-black/10 transition-colors duration-300" />
                </div>
                <div className="col-span-2 relative rounded-sm overflow-hidden group" style={{ minHeight: '86px' }}>
                  <img
                    src="https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Air freight"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-brand-black/30 group-hover:bg-brand-black/10 transition-colors duration-300" />
                  <div className="absolute bottom-2 right-2 bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full">
                    <span className="text-white text-[9px] font-bold uppercase tracking-widest">6 Zones</span>
                  </div>
                </div>
              </div>

              {/* Zone grid */}
              <div className="grid grid-cols-3 gap-3">
                {reachZones.map((zone, i) => {
                  const Icon = zone.icon;
                  return (
                    <div
                      key={zone.zone}
                      className="group relative overflow-hidden rounded-sm bg-white dark:bg-brand-dark border border-gray-100 dark:border-gray-800 p-3 text-center transition-all duration-500 hover:shadow-md hover:border-brand-red/30"
                      style={{
                        opacity: reachInView ? 1 : 0,
                        transform: reachInView ? 'translateY(0)' : 'translateY(15px)',
                        transition: `opacity 0.4s ease ${200 + i * 80}ms, transform 0.4s ease ${200 + i * 80}ms`,
                      }}
                    >
                      <Icon size={14} className="text-brand-red mx-auto mb-1.5 animate-icon-float" />
                      <div className="font-display font-bold text-xs text-gray-900 dark:text-white">{zone.hub}</div>
                      <div className="text-[10px] text-gray-400 mt-0.5">{zone.zone}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
