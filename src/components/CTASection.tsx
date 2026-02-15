import { ArrowRight, Zap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function CTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#2A266A] via-[#3d3585] to-[#2A266A] -z-10"></div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-[#992828] rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-[#c93030] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/30 rounded-full px-5 py-2 mb-8">
            <Zap className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-semibold">
              Take Action Today
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Ready to Invest, Build,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b6b] to-[#ffa8a8]">
              or Expand Your Business?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Partner with a company committed to excellence, transparency, and
            long-term growth.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group bg-white text-[#2A266A] px-10 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
              <span>Contact Us Today</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#2A266A] transition-all duration-300">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
