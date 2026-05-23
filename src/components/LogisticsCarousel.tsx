import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const carouselImages = [
  {
    image: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'International cargo containers',
  },
  {
    image: 'https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Import and export operations',
  },
  {
    image: 'https://images.pexels.com/photos/8348127/pexels-photo-8348127.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Shipment handling and logistics',
  },
  {
    image: 'https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Global trade and cargo transport',
  },
  {
    image: 'https://images.pexels.com/photos/5632400/pexels-photo-5632400.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Warehouse and distribution center',
  },
  {
    image: 'https://images.pexels.com/photos/1092359/pexels-photo-1092359.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Supply chain management',
  },
];

export default function LogisticsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [, setIsTransitioning] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goToSlide = useCallback((index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 500);
  }, []);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % carouselImages.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + carouselImages.length) % carouselImages.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    if (!autoPlay) return;
    autoPlayRef.current = setInterval(nextSlide, 5000);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [autoPlay, nextSlide]);

  return (
    <section className="relative py-20 lg:py-32 bg-white dark:bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 lg:mb-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-1 w-12 bg-brand-red rounded-full" />
            <span className="text-sm font-semibold tracking-widest uppercase text-brand-red">Logistics Excellence</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-6">
            Our Global Operations
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">
            Managing complex logistics and cargo operations across continents, ensuring seamless supply chain excellence.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative w-full h-96 lg:h-[500px] rounded-lg overflow-hidden group"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          {/* Images */}
          {carouselImages.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ${
                index === currentSlide
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-105'
              }`}
              style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          ))}

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={24} />
          </button>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-10">
            <div
              className="h-full bg-brand-red transition-all duration-300"
              style={{ width: `${((currentSlide + 1) / carouselImages.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'w-8 h-2.5 bg-brand-red'
                  : 'w-2.5 h-2.5 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Image Counter */}
        <div className="flex items-center justify-center gap-2 mt-6 text-sm text-gray-600 dark:text-gray-400">
          <span className="text-brand-red font-semibold">{currentSlide + 1}</span>
          <span>/</span>
          <span>{carouselImages.length}</span>
        </div>
      </div>
    </section>
  );
}
