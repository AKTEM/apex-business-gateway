import { ArrowRight, Play, TrendingUp, Zap, Target } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white pt-20 md:pt-0">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-[#992828] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-[#2A266A] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            className={`transform transition-all duration-700 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <div className="inline-flex items-center space-x-2 bg-[#992828]/10 border border-[#992828]/30 rounded-full px-5 py-2 mb-8">
              <Zap className="w-4 h-4 text-[#992828]" />
              <span className="text-[#992828] text-sm font-semibold">
                Trusted Investment Partner
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#2A266A] mb-6 leading-tight">
              <span className={`inline-block transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                Building value, creating
              </span>
              <span className={`block text-[#992828] transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>opportunities</span>
            </h1>

            <p className={`text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-lg transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              and delivering excellence across every venture
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
              <button className="group bg-gradient-to-r from-[#992828] to-[#c93030] text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#992828]/50">
                <span>Start Partnership</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group bg-white border-2 border-[#2A266A] text-[#2A266A] px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 hover:bg-[#2A266A] hover:text-white transition-all duration-300">
                <Play className="w-5 h-5" />
                <span>Learn More</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {[
                { icon: TrendingUp, label: 'Multi-Sector', sublabel: 'Expertise' },
                { icon: Target, label: '100%', sublabel: 'Transparency' },
                { icon: Zap, label: 'Proven', sublabel: 'Track Record' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`transform transition-all duration-500 delay-${index * 100} ${
                    isVisible
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-10 opacity-0'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-[#992828]/10 rounded-lg flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-[#992828]" />
                    </div>
                    <div>
                      <div className="font-bold text-[#2A266A]">{stat.label}</div>
                      <div className="text-sm text-gray-600">{stat.sublabel}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`transform transition-all duration-700 delay-100 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/HERO.png"
                  alt="BuildWell Africa - Professional business solutions"
                  className="w-full h-[500px] object-contain bg-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
