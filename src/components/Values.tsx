import { Shield, Star, Lightbulb, BookOpen, Globe, Heart } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    body: 'Our foremost standard of conduct. Our word is our bond — we uphold transparency and honesty in every engagement.',
  },
  {
    icon: Star,
    title: 'Excellence',
    body: 'Nothing else satisfies but excellence. Being the best at what we do is not an option — it is our obligation.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    body: 'Keeps us at the apex of development and strategy in all our chosen markets, driving continuous improvement.',
  },
  {
    icon: BookOpen,
    title: 'Learning',
    body: 'At the center of our culture is continuous learning — growing our knowledge to better serve our clients.',
  },
  {
    icon: Globe,
    title: 'Diversity',
    body: 'We actively recruit, develop, and mentor talented individuals from diverse cultures and backgrounds.',
  },
  {
    icon: Heart,
    title: 'Citizenship',
    body: 'Our commitment to the communities in which we work and live goes beyond business — it is a calling.',
  },
];

export default function Values() {
  const { ref, inView } = useInView(0.1);

  return (
    <section className="py-20 lg:py-28 bg-gray-50 dark:bg-brand-dark-2 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`max-w-2xl mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="red-accent-line" />
            <span className="text-brand-red dark:text-brand-red-light text-xs font-bold uppercase tracking-widest">
              Our Values
            </span>
          </div>
          <h2 className="section-title text-gray-900 dark:text-white mb-4">
            What We Stand For
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
            Our core values are the foundation of everything we do — guiding every decision,
            every interaction, and every service we deliver.
          </p>
        </div>

        {/* Values Grid with animated icons */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {values.map(({ icon: Icon, title, body }, i) => (
            <div
              key={title}
              className={`group p-7 bg-white dark:bg-brand-dark rounded-sm border border-gray-100 dark:border-gray-800 hover:border-brand-red/30 dark:hover:border-brand-red/30 card-hover transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Icon container with professional animation */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-sm bg-brand-red/8 dark:bg-brand-red/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-red group-hover:shadow-red-glow-sm transition-all duration-300 icon-pro relative">
                  <Icon
                    size={20}
                    className="text-brand-red group-hover:text-white transition-colors duration-300 animate-icon-float"
                    style={{ animationDelay: `${i * 200}ms` }}
                  />
                  {/* Ripple effect on hover */}
                  <div className="absolute inset-0 rounded-sm bg-brand-red/20 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{body}</p>
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="mt-4 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-brand-red to-brand-red-light transition-all duration-500 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
