import { CheckCircle, Zap, Network, Shield, TrendingUp, Award } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const reasons = [
    {
      icon: Shield,
      title: 'Legally Registered & Compliant',
      description:
        'Operating with full regulatory compliance and legal standing across all jurisdictions.',
    },
    {
      icon: TrendingUp,
      title: 'Multi-Sector Expertise',
      description:
        'Proven track record across real estate, construction, trade, and diverse business verticals.',
    },
    {
      icon: Zap,
      title: 'Professional Project Management',
      description:
        'Disciplined execution, transparent timelines, and consistent delivery on all commitments.',
    },
    {
      icon: Network,
      title: 'Transparent Transactions',
      description:
        'Clear communication, documented processes, and complete visibility into all operations.',
    },
    {
      icon: Award,
      title: 'Strong Business Network',
      description:
        'Connected with leading institutions, investors, and industry partners globally.',
    },
    {
      icon: CheckCircle,
      title: 'Client Satisfaction Commitment',
      description:
        'Dedicated support, personalized service, and long-term partnership focus.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-white overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#2A266A]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#992828]/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-20 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-[#992828]/10 border border-[#992828]/30 rounded-full px-5 py-2 mb-6">
            <Award className="w-4 h-4 text-[#992828]" />
            <span className="text-[#2A266A] text-sm font-semibold">
              WHY CHOOSE US
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#2A266A] mb-6">
            Choosing the Right Partner
            <span className="block text-[#992828]">
              Critical to Your Success
            </span>
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            We combine experience, integrity, and strategic execution to deliver
            measurable results. Here's why clients trust us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 delay-${
                index * 100
              } ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="group relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[#992828]/5 to-[#2A266A]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-white border-2 border-gray-100 rounded-2xl p-8 h-full hover:border-[#992828] transition-all duration-300 hover:shadow-xl">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#992828] to-[#c93030] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <reason.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2A266A] mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#2A266A] via-[#3d3585] to-[#2A266A] rounded-2xl p-12 md:p-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            {[
              { number: '1000+', label: 'Successful Projects' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '15+', label: 'Years Experience' },
            ].map((stat, index) => (
              <div key={index} className="py-8">
                <div className="text-4xl md:text-5xl font-bold text-[#ff6b6b] mb-2">
                  {stat.number}
                </div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
