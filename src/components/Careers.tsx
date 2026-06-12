import { Briefcase, BookOpen, Users, TrendingUp } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const benefits = [
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    desc: 'A culture centered around growth, professional development, and expanding your capabilities.',
  },
  {
    icon: Users,
    title: 'Diverse & Inclusive',
    desc: 'We actively mentor talented individuals from diverse cultures, backgrounds, and experiences.',
  },
  {
    icon: TrendingUp,
    title: 'Career Growth',
    desc: 'Structured pathways to advance your career in a company at the apex of its industries.',
  },
  {
    icon: Briefcase,
    title: 'Impactful Work',
    desc: 'Contribute to solutions that drive business growth across Nigeria and international markets.',
  },
];

export default function Careers() {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      id="careers"
      className="py-20 lg:py-28 bg-gray-50 dark:bg-brand-dark-2 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* Content */}
          <div
            ref={ref as React.RefObject<HTMLDivElement>}
            className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="red-accent-line" />
              <span className="text-brand-red dark:text-brand-red-light text-xs font-bold uppercase tracking-widest">
                Careers
              </span>
            </div>
            <h2 className="section-title text-gray-900 dark:text-white mb-6">
              Join Our{' '}
              <span className="text-gradient-red">Growing Team</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              At Akilina Nigeria Limited, we believe that a highly skilled workforce operating
              within a conducive work environment that promotes and rewards continuous learning
              will facilitate the achievement of business goals.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
              We are always on the lookout for driven, passionate professionals who share our
              values of integrity, excellence, and innovation. If that sounds like you, we'd
              love to hear from you.
            </p>

            {/* Benefits with animated icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={title}
                  className="flex items-start gap-3 p-4 bg-white dark:bg-brand-dark rounded-sm border border-gray-100 dark:border-gray-800 hover:border-brand-red/30 card-hover"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateY(0)' : 'translateY(15px)',
                    transition: `opacity 0.5s ease ${i * 100 + 200}ms, transform 0.5s ease ${i * 100 + 200}ms`,
                  }}
                >
                  <div className="w-9 h-9 bg-brand-red/10 rounded-sm flex items-center justify-center flex-shrink-0 group-hover:bg-brand-red transition-all duration-300 icon-pro">
                    <Icon size={16} className="text-brand-red animate-icon-float" style={{ animationDelay: `${i * 250}ms` }} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-gray-900 dark:text-white mb-1">
                      {title}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                      {desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vacancies Panel */}
          <div
            className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            <div className="bg-white dark:bg-brand-dark rounded-sm border border-gray-100 dark:border-gray-800 overflow-hidden shadow-lg dark:shadow-dark-lg img-corner-borders">
              {/* Panel Header */}
              <div className="bg-brand-black p-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <img loading="lazy" decoding="async"
                    src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative flex items-center gap-3 mb-1">
                  <Briefcase size={20} className="text-brand-red animate-icon-bounce" />
                  <span className="font-display font-bold text-lg text-white">
                    Current Openings
                  </span>
                </div>
                <p className="relative text-gray-400 text-sm">Active job vacancies at Akilina</p>
              </div>

              {/* No Vacancies State */}
              <div className="p-10 text-center">
                <div className="w-16 h-16 bg-gray-100 dark:bg-brand-dark-2 rounded-full flex items-center justify-center mx-auto mb-4 animate-icon-pulse">
                  <Briefcase size={28} className="text-gray-400" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  No Vacancies Available
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 max-w-xs mx-auto">
                  There are currently no open positions. Check back later or send us your
                  resume for future opportunities.
                </p>

                <a
                  href="mailto:info@akilinanigeria.com?subject=Career%20Inquiry%20%E2%80%93%20Akilina%20Nigeria%20Limited"
                  className="inline-flex items-center gap-2 btn-primary text-sm group"
                >
                  Send Your Resume
                </a>
              </div>

              {/* Panel Footer */}
              <div className="border-t border-gray-100 dark:border-gray-800 p-5 bg-gray-50 dark:bg-brand-dark-2">
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  Stay connected - follow us for updates on new openings
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
