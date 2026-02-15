import { Heart, Eye, Shield, Award, Users, Target, TrendingUp, Zap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function AboutUs() {
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

  const coreValues = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We operate with honesty and transparency in all dealings.',
    },
    {
      icon: Award,
      title: 'Professionalism',
      description: 'We uphold high standards in every project and commitment.',
    },
    {
      icon: TrendingUp,
      title: 'Excellence',
      description: 'We strive for superior quality and outstanding performance.',
    },
    {
      icon: Users,
      title: 'Accountability',
      description: 'We take full responsibility for our commitments and results.',
    },
    {
      icon: Zap,
      title: 'Long-term Partnerships',
      description: 'We focus on building lasting, mutually beneficial relationships.',
    },
    {
      icon: Target,
      title: 'Sustainable Growth',
      description: 'We create value that endures and benefits all stakeholders.',
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-24 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#992828]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2A266A]/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="inline-flex items-center space-x-2 bg-[#2A266A]/10 border border-[#2A266A]/30 rounded-full px-5 py-2 mb-6">
              <Heart className="w-4 h-4 text-[#992828]" />
              <span className="text-[#2A266A] text-sm font-semibold">ABOUT US</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-[#2A266A] mb-6">
              Building Value. Creating Opportunities.
              <span className="block text-[#992828]">Delivering Excellence.</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl">
              We are a trusted, legally registered company specializing in real estate investment, construction, import & export, and diversified business solutions. Our organization is built on a strong foundation of professional integrity, strategic thinking, and long-term value creation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div
            className={`transform transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <div className="bg-gradient-to-br from-[#2A266A] to-[#3d3585] rounded-2xl p-10 text-white shadow-2xl">
              <Eye className="w-12 h-12 text-[#992828] mb-4" />
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg leading-relaxed">
                To become a leading multi-sector company recognized for reliability, transparency, and innovation. We aspire to be the trusted partner of choice for investors, businesses, and stakeholders seeking sustainable and profitable growth.
              </p>
            </div>
          </div>

          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="bg-gradient-to-br from-[#992828] to-[#c93030] rounded-2xl p-10 text-white shadow-2xl">
              <Target className="w-12 h-12 text-white mb-4" />
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg leading-relaxed">
                To create sustainable value through strategic investments, quality construction, and efficient global trade operations. We are committed to delivering reliable, profitable solutions tailored to individuals, businesses, and investors.
              </p>
            </div>
          </div>
        </div>

        <div
          className={`mb-20 transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h3 className="text-4xl font-bold text-[#2A266A] mb-12 text-center">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className={`group transform transition-all duration-700 delay-${
                  index * 100
                } ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
              >
                <div className="bg-white border-2 border-gray-100 rounded-xl p-8 h-full hover:border-[#992828] hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#992828] to-[#c93030] rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#2A266A] mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              image:
                'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
              alt: 'Professional workspace',
            },
            {
              image:
                'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
              alt: 'Team collaboration',
            },
            {
              image:
                'https://images.pexels.com/photos/3926961/pexels-photo-3926961.jpeg?auto=compress&cs=tinysrgb&w=600',
              alt: 'Business planning',
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 delay-${
                500 + index * 100
              } ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow group">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A266A]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#2A266A] to-[#3d3585] rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Multi-Sector Expertise</h3>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            With a diversified structure and multi-sector expertise, we are positioned to adapt to emerging opportunities across industries while maintaining transparency, efficiency, and accountability in all our operations. Our collaborative approach ensures we deliver measurable, sustainable results.
          </p>
        </div>
      </div>
    </section>
  );
}
