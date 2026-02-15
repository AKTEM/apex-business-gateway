import {
  Building2,
  Home,
  Globe,
  Briefcase,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Services() {
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

  const services = [
    {
      icon: Home,
      title: 'Real Estate Investment & Property Sales',
      description:
        'We help clients secure profitable property opportunities with confidence.',
      image:
        'https://images.pexels.com/photos/3970330/pexels-photo-3970330.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: [
        'Residential and commercial property transactions',
        'Land acquisition and development',
        'Property marketing and brokerage',
        'Investment advisory services',
      ],
    },
    {
      icon: Building2,
      title: 'Construction',
      description:
        'We deliver high-quality construction projects on time and within budget.',
      image:
        'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: [
        'Residential construction',
        'Commercial building projects',
        'Renovations and remodeling',
        'Project management and infrastructure',
      ],
    },
    {
      icon: Globe,
      title: 'Import & Export Services',
      description:
        'We connect markets globally with efficiency and regulatory compliance.',
      image:
        'https://images.pexels.com/photos/7974/pexels-photo-7974.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: [
        'International trade facilitation',
        'Product sourcing and procurement',
        'Export of approved goods',
        'Logistics coordination',
      ],
    },
    {
      icon: Briefcase,
      title: 'General Business Solutions',
      description:
        'Our diversified structure allows us to adapt to emerging opportunities.',
      image:
        'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: [
        'Investment partnerships',
        'Business consulting',
        'Supply and distribution',
        'Multi-sector project development',
      ],
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#992828]/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-[#992828]/10 border border-[#992828]/30 rounded-full px-5 py-2 mb-6">
            <Briefcase className="w-4 h-4 text-[#992828]" />
            <span className="text-[#2A266A] text-sm font-semibold">OUR SERVICES</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#2A266A] mb-6">
            Comprehensive Solutions Across
            <span className="block text-[#992828]">Multiple Sectors</span>
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            From real estate to global trade, we provide integrated business
            solutions designed to drive growth and profitability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 delay-${
                index * 150
              } ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full flex flex-col group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2A266A]/50 to-transparent"></div>
                  <div className="absolute top-6 right-6 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <service.icon className="w-8 h-8 text-[#992828]" />
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-[#2A266A] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8 flex-1">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-[#992828] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="inline-flex items-center space-x-2 text-[#992828] font-semibold hover:text-[#c93030] transition-colors group/btn">
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#2A266A] to-[#3d3585] rounded-2xl p-12 md:p-16 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Tailored Solutions for Your Success
          </h3>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Whether you're a first-time investor, established business, or
            international trader, we provide expert guidance and strategic
            support customized to your unique goals.
          </p>
          <button className="bg-white text-[#2A266A] px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-300">
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
