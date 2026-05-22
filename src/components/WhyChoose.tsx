import {
  Award,
  Globe,
  MapPin,
  Users,
  HeartHandshake,
  Clock,
  TrendingDown,
  Star,
  ArrowRight,
} from 'lucide-react';
import { useInView } from '../hooks/useInView';

const reasons = [
  {
    icon: Award,
    title: 'Professional & Reliable',
    desc: 'Service delivery that is consistent, dependable, and held to the highest professional standards.',
  },
  {
    icon: Globe,
    title: 'Strong International Partnerships',
    desc: 'Strategic global alliances that extend our reach and capabilities across international markets.',
  },
  {
    icon: MapPin,
    title: 'Nationwide Operational Presence',
    desc: 'Represented across all six geo-political zones of Nigeria for seamless service delivery.',
  },
  {
    icon: Users,
    title: 'Experienced Team',
    desc: 'Seasoned logistics and procurement professionals with deep industry knowledge and hands-on expertise.',
  },
  {
    icon: HeartHandshake,
    title: 'Customer-Focused Philosophy',
    desc: 'Every employee is trained to treat customers with courtesy, give a listening ear, and attend promptly.',
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    desc: 'We deliver on time without compromising quality — every project completed within scope, time, and budget.',
  },
  {
    icon: TrendingDown,
    title: 'Cost-Effective Solutions',
    desc: 'We help clients achieve more for less by eliminating excess clearance fees and optimizing procurement.',
  },
  {
    icon: Star,
    title: 'Excellence-Driven',
    desc: 'An organization that strives to be at the apex of all chosen markets through relentless pursuit of quality.',
  },
];

export default function WhyChoose() {
  const { ref, inView } = useInView(0.05);
  const { ref: ctaRef, inView: ctaInView } = useInView(0.1);

  return (
    <section
      id="why-us"
      className="py-20 lg:py-28 relative overflow-hidden bg-brand-black dark:bg-brand-black transition-colors duration-300"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black/95 to-brand-black" />
      </div>

      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(rgba(196,30,58,1) 1px, transparent 1px), linear-gradient(90deg, rgba(196,30,58,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`grid lg:grid-cols-2 gap-10 items-end mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="red-accent-line" />
              <span className="text-brand-red-light text-xs font-bold uppercase tracking-widest">
                Why Choose Akilina
              </span>
            </div>
            <h2 className="section-title text-white">
              The Akilina{' '}
              <span className="text-gradient-red">Advantage</span>
            </h2>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Eight compelling reasons why Nigeria's top businesses trust Akilina Nigeria
            Limited to handle their most critical logistics and procurement needs.
          </p>
        </div>

        {/* Grid with animated icons */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {reasons.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={`group p-6 rounded-sm border border-gray-800/60 bg-white/[0.03] hover:bg-brand-red/5 hover:border-brand-red/40 card-hover transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="w-10 h-10 rounded-sm bg-brand-red/10 flex items-center justify-center mb-4 group-hover:bg-brand-red group-hover:shadow-red-glow-sm transition-all duration-300 icon-pro">
                <Icon
                  size={18}
                  className="text-brand-red group-hover:text-white transition-colors duration-300 animate-icon-float"
                  style={{ animationDelay: `${i * 200}ms` }}
                />
              </div>
              <h3 className="font-semibold text-white text-sm mb-2 leading-snug">{title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner with image */}
        <div
          ref={ctaRef as React.RefObject<HTMLDivElement>}
          className={`mt-16 relative rounded-sm border border-brand-red/30 overflow-hidden transition-all duration-700 delay-500 ${
            ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1280"
              alt=""
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/90 to-brand-black/70" />
          </div>

          <div className="relative p-8 lg:p-12 bg-gradient-to-r from-brand-red/10 via-brand-red/5 to-transparent">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="font-display font-bold text-2xl text-white mb-2">
                  Ready to Experience the Difference?
                </h3>
                <p className="text-gray-400 max-w-xl">
                  Join hundreds of businesses across Nigeria who trust Akilina for their
                  logistics, procurement, and outsourcing needs.
                </p>
              </div>
              <button
                onClick={() => {
                  const el = document.querySelector('#contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary whitespace-nowrap flex-shrink-0 group"
              >
                Start a Conversation
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>

            {/* Decorative corner accents */}
            <div className="absolute top-3 right-3 w-8 h-8 border-r-2 border-t-2 border-brand-red/40 rounded-tr-sm" />
            <div className="absolute bottom-3 left-3 w-8 h-8 border-l-2 border-b-2 border-brand-red/40 rounded-bl-sm" />
          </div>
        </div>
      </div>
    </section>
  );
}
