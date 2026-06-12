import { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight, ChevronDown, Globe, Package, Truck, Users } from 'lucide-react';
import image1 from '../assets/2151468882_Large.webp';
import image2 from '../assets/2151989541.webp';
import image3 from '../assets/bernd-dittrich-Xk1IfNnEhRA-unsplash.webp';

const slides = [
  {
    image: image1,
    kenBurns: 'ken-burns-1',
  },
  {
    image: image2,
    kenBurns: 'ken-burns-2',
  },
  {
    image: image3,
    kenBurns: 'ken-burns-3',
  },
];

const services = [
  { icon: Truck, label: 'Logistics Solutions' },
  { icon: Package, label: 'Procurement' },
  { icon: Globe, label: 'Import & Export' },
  { icon: Users, label: 'Outsourcing' },
];

const stats = [
  { value: 6, label: 'Geo-Political Zones', suffix: '+' },
  { value: 10, label: 'Years Experience', suffix: '+' },
  { value: 500, label: 'Clients Served', suffix: '+' },
  { value: 100, label: 'Project Success', suffix: '%' },
];

function AnimatedCounter({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span>
      {count}
      <span className="text-brand-red">{suffix}</span>
    </span>
  );
}

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [statsInView, setStatsInView] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const SLIDE_DURATION = 6000;

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 600);
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, SLIDE_DURATION);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [nextSlide]);

  useEffect(() => {
    setProgress(0);
    progressRef.current = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 0;
        return prev + (100 / (SLIDE_DURATION / 50));
      });
    }, 50);
    return () => {
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [currentSlide]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsInView(true);
      },
      { threshold: 0.3 }
    );
    const el = statsRef.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

  const scrollToNext = () => {
    const el = document.querySelector('#about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    const el = document.querySelector('#services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* Carousel Background */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[1200ms] ${
              index === currentSlide
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-105'
            }`}
            style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
          >
            <img
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
              {...(index === 0 ? { fetchPriority: 'high' as any } : {})}
              src={slide.image}
              alt=""
              className={`w-full h-full object-cover ${index === currentSlide ? slide.kenBurns : ''}`}
            />

          </div>
        ))}

        {/* Multi-layered overlay */}
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-brand-red/10 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 3px)',
          }}
        />

        {/* Carousel progress bar at bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-20 flex gap-1 px-4 pb-1">
          {slides.map((_, index) => (
            <div key={index} className="flex-1 h-0.5 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full carousel-progress rounded-full"
                style={{
                  width: index === currentSlide ? `${progress}%` : '0%',
                  transition: index === currentSlide ? 'none' : 'width 0.3s ease',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 right-[15%] w-64 h-64 rounded-full border border-brand-red/20 animate-float opacity-30 hidden xl:block" />
      <div
        className="absolute top-1/3 right-[20%] w-40 h-40 rounded-full border border-brand-red/15 animate-float opacity-20 hidden xl:block"
        style={{ animationDelay: '-3s' }}
      />

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-28 lg:py-0">
          <div className="max-w-3xl">

            {/* Main Headline */}
            <h1
              className="font-display font-black text-white leading-[1.1] mb-6 animate-fade-up"
              style={{ animationDelay: '150ms', animationFillMode: 'both' }}
            >
              <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
                Your Supply Chain.
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-gradient-red">
                Our Responsibility.
              </span>
            </h1>

            {/* Subheading */}
            <p
              className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-2xl mb-8 leading-relaxed animate-fade-up"
              style={{ animationDelay: '250ms', animationFillMode: 'both' }}
            >
              From international procurement to last-mile delivery, Akilina Nigeria Limited moves your business forward with precision, accountability, and the operational depth enterprise clients demand.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-up w-full sm:w-auto"
              style={{ animationDelay: '350ms', animationFillMode: 'both' }}
            >
              <button
                onClick={scrollToContact}
                className="w-full sm:w-auto bg-brand-red hover:bg-brand-red-dark text-white font-semibold text-lg lg:text-xl px-12 lg:px-16 py-4 lg:py-5 flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-red-glow group overflow-hidden relative"
              >
                <span>Request a Quote</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={scrollToServices}
                className="w-full sm:w-auto border-2 border-white hover:border-brand-red hover:bg-brand-red/10 text-white font-semibold text-lg lg:text-xl px-12 lg:px-16 py-4 lg:py-5 transition-all duration-300 hover:shadow-lg"
              >
                Explore Our Services
              </button>
            </div>

            {/* Service Pills - moved directly below CTA buttons */}
            <div
              className="flex flex-wrap gap-2 mt-6 animate-badge-slide"
              style={{ animationDelay: '450ms', animationFillMode: 'both' }}
            >
              {services.map(({ icon: Icon, label }, i) => (
                <div
                  key={label}
                  className="flex items-center gap-2 glass-light rounded-full px-4 py-2 text-xs font-medium text-white/85 hover:text-white hover:border-brand-red/50 transition-all duration-200 cursor-default"
                  style={{
                    animationDelay: `${800 + i * 150}ms`,
                    animationFillMode: 'both',
                  }}
                >
                  <span className="animate-icon-float" style={{ animationDelay: `${i * 300}ms` }}>
                    <Icon size={12} className="text-brand-red-light flex-shrink-0" />
                  </span>
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar with Animated Counters */}
      <div ref={statsRef} className="relative z-10 border-t border-white/10 mt-0">
        <div className="bg-black/50 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
              {stats.map(({ value, label, suffix }, i) => (
                <div
                  key={label}
                  className="px-6 py-5 text-center group"
                  style={{
                    opacity: statsInView ? 1 : 0,
                    transform: statsInView ? 'translateY(0)' : 'translateY(15px)',
                    transition: `opacity 0.6s ease ${i * 150}ms, transform 0.6s ease ${i * 150}ms`,
                  }}
                >
                  <div className="font-display font-black text-2xl lg:text-3xl text-white">
                    <AnimatedCounter target={value} suffix={suffix} inView={statsInView} />
                  </div>
                  <div className="text-xs text-gray-400 mt-0.5 tracking-wide">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-28 md:bottom-24 right-8 z-10 flex flex-col items-center gap-1 text-white/40 hover:text-white/70 transition-colors duration-200 group hidden md:flex"
      >
        <span className="text-[10px] tracking-widest uppercase rotate-90 origin-center mb-2">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </button>

      {/* Vertical accent line */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3 z-10">
        <div className="w-px h-24 bg-gradient-to-b from-transparent to-brand-red/60" />
        <div className="w-1.5 h-1.5 rounded-full bg-brand-red" />
        <div className="w-px h-24 bg-gradient-to-b from-brand-red/60 to-transparent" />
      </div>

      {/* Slide indicators (dots) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-500 rounded-full ${
              index === currentSlide
                ? 'w-8 h-1.5 bg-brand-red'
                : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
