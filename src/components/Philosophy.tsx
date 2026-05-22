import { Eye, Target, Zap } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const philosophyItems = [
  {
    icon: Eye,
    label: 'Our Vision',
    title: 'Apex of Excellence',
    body: 'To continually be at the apex of excellent product and service delivery in all our chosen markets.',
  },
  {
    icon: Target,
    label: 'Our Mission',
    title: 'Cost-Effective Solutions',
    body: 'To provide cost-effective and befitting business solutions while remaining the vanguard in the provision of these services, ensuring that the needs of our customers are continually met.',
  },
  {
    icon: Zap,
    label: 'Our Edge',
    title: 'Quality Without Compromise',
    body: 'We provide excellent products and services based on scope, cost, and time without compromising quality — delivering consistent value at every engagement.',
  },
];

export default function Philosophy() {
  const { ref, inView } = useInView(0.1);

  return (
    <section className="py-20 lg:py-28 bg-brand-black dark:bg-brand-black relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.5) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />
      {/* Red gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="red-accent-line" />
            <span className="text-brand-red-light text-xs font-bold uppercase tracking-widest">
              Our Philosophy
            </span>
            <div className="red-accent-line" />
          </div>
          <h2 className="section-title text-white mb-4">
            The Principles That{' '}
            <span className="text-gradient-red">Define Us</span>
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Our philosophy is rooted in a commitment to excellence, guided by clear values
            and a focused mission to serve our clients at the highest level.
          </p>
        </div>

        {/* Cards with icons and numbers */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {philosophyItems.map(({ icon: Icon, label, title, body }, i) => (
            <div
              key={label}
              className={`group relative p-8 rounded-sm border border-gray-800 hover:border-brand-red/50 bg-brand-dark transition-all duration-500 hover:-translate-y-2 hover:shadow-red-glow ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Number accent */}
              <div className="absolute top-6 right-6 font-display font-black text-7xl text-white/[0.03] leading-none select-none">
                0{i + 1}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-sm bg-brand-red/10 border border-brand-red/20 flex items-center justify-center mb-6 group-hover:bg-brand-red/20 transition-colors duration-300 icon-pro">
                <Icon size={24} className="text-brand-red group-hover:text-brand-red-light transition-colors duration-300 animate-icon-float" style={{ animationDelay: `${i * 300}ms` }} />
              </div>

              {/* Eyebrow */}
              <div className="text-xs font-bold uppercase tracking-widest text-brand-red mb-2">
                {label}
              </div>

              <h3 className="font-display font-bold text-xl text-white mb-4">{title}</h3>

              <p className="text-gray-400 text-sm leading-relaxed">{body}</p>

              {/* Bottom accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-red via-brand-red-light to-brand-red scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-sm" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
