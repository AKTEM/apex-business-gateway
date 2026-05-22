import { useRef, useState } from 'react';
import { Zap, FlaskConical, Pill, Cpu, TrendingUp, ChevronLeft, ChevronRight, type LucideIcon } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface Sector {
  icon: LucideIcon;
  title: string;
  description: string;
}

const sectors: Sector[] = [
  { icon: Zap, title: 'Energy & Renewables', description: 'Solar, power generation, and clean energy operators.' },
  { icon: FlaskConical, title: 'Chemicals & Additives', description: 'Industrial chemicals, specialty additives, and raw material supply.' },
  { icon: Pill, title: 'Pharmaceuticals', description: 'Regulated pharma importation with NAFDAC-coordinated clearance.' },
  { icon: Cpu, title: 'Technology & Equipment', description: 'Hardware procurement, appliances, and industrial equipment.' },
  { icon: TrendingUp, title: 'Investment & Trading', description: 'International commodity and trading firms.' },
];

interface ClientLogo {
  monogram: string;
  name: string;
  tag: string;
}

const logos: ClientLogo[] = [
  { monogram: 'NV', name: 'NovaVolt', tag: 'Energy' },
  { monogram: 'CX', name: 'ChemXel', tag: 'Chemicals' },
  { monogram: 'MP', name: 'MediPharm', tag: 'Pharma' },
  { monogram: 'TC', name: 'TechCore', tag: 'Technology' },
  { monogram: 'AT', name: 'Apex Trading', tag: 'Investment' },
];

function LogoCard({ logo }: { logo: ClientLogo }) {
  return (
    <div className="group/logo shrink-0 w-56 sm:w-64 mx-3 sm:mx-4">
      <div className="h-28 sm:h-32 flex items-center gap-4 px-6 rounded-xl bg-white dark:bg-brand-dark-2 border border-gray-200 dark:border-gray-800 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:border-brand-red/50">
        <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-brand-red to-brand-red-deep flex items-center justify-center text-white font-display font-black text-lg shadow-md grayscale opacity-70 transition-all duration-500 group-hover/logo:grayscale-0 group-hover/logo:opacity-100">
          {logo.monogram}
        </div>
        <div className="min-w-0">
          <p className="font-display font-bold text-gray-900 dark:text-white truncate">{logo.name}</p>
          <p className="text-xs uppercase tracking-widest text-brand-red font-semibold">{logo.tag}</p>
        </div>
      </div>
    </div>
  );
}

export default function ClientsServed() {
  const { ref, inView } = useInView(0.1);
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [offset, setOffset] = useState(0);

  const nudge = (direction: 1 | -1) => {
    setPaused(true);
    setOffset(prev => prev - direction * 240);
  };

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="clients"
      className="relative py-20 lg:py-28 bg-gray-50 dark:bg-brand-dark-3 overflow-hidden"
    >
      {/* Decorative blur orbs */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-brand-red/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-brand-red/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`mb-14 lg:mb-20 text-center ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-1 w-10 bg-brand-red rounded-full" />
            <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-brand-red">
              Trusted Partners
            </span>
            <div className="h-1 w-10 bg-brand-red rounded-full" />
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-6">
            Clients We Have Served
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Akilina has delivered logistics, procurement, and clearance excellence across a diverse range of industries.
          </p>
        </div>

        {/* Sector cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-16 lg:mb-20">
          {sectors.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className={`group relative bg-white dark:bg-brand-dark-2 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:border-brand-red/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                  inView ? 'animate-fade-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 mb-5 rounded-xl bg-gradient-to-br from-brand-red to-brand-red-deep flex items-center justify-center text-white shadow-lg shadow-brand-red/20 group-hover:animate-icon-pulse">
                  <Icon size={26} />
                </div>
                <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-2 leading-tight">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{s.description}</p>
                <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-brand-red to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </div>
            );
          })}
        </div>

        {/* Logo Carousel */}
        <div className="relative">
          <div className="flex items-center justify-between mb-6 px-1">
            <h3 className="font-display font-bold text-lg sm:text-xl text-gray-900 dark:text-white">
              Partners across sectors
            </h3>
            <div className="flex items-center gap-2">
              <button
                onClick={() => nudge(-1)}
                aria-label="Previous logos"
                className="w-10 h-10 rounded-full bg-white dark:bg-brand-dark-2 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-brand-red hover:text-white hover:border-brand-red transition-all duration-300 flex items-center justify-center shadow-sm"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => nudge(1)}
                aria-label="Next logos"
                className="w-10 h-10 rounded-full bg-white dark:bg-brand-dark-2 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-brand-red hover:text-white hover:border-brand-red transition-all duration-300 flex items-center justify-center shadow-sm"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div
            className="relative overflow-hidden py-4"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            style={{
              maskImage:
                'linear-gradient(to right, transparent 0, black 6%, black 94%, transparent 100%)',
              WebkitMaskImage:
                'linear-gradient(to right, transparent 0, black 6%, black 94%, transparent 100%)',
            }}
          >
            <div
              ref={trackRef}
              className="flex w-max animate-marquee"
              style={{
                animationPlayState: paused ? 'paused' : 'running',
                transform: `translateX(${offset}px)`,
                transition: paused ? 'transform 600ms cubic-bezier(0.22, 1, 0.36, 1)' : undefined,
              }}
            >
              {[...logos, ...logos, ...logos].map((logo, i) => (
                <LogoCard key={`${logo.name}-${i}`} logo={logo} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
