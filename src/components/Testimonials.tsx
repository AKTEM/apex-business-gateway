import { useState, useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  position: string;
  image: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Chukwu Okonkwo',
    company: 'GlobalTrade Solutions',
    position: 'Chief Operations Officer',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
    content: 'Akilina transformed our logistics operations. Their professionalism and attention to detail have consistently exceeded our expectations, ensuring timely deliveries across all geopolitical zones.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Amara Nwankwo',
    company: 'TriumphExport Ltd',
    position: 'Managing Director',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    content: 'Outstanding procurement services. The team demonstrated exceptional commitment to quality and timeliness. They have become our trusted partner for all import and export requirements.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emeka Obi',
    company: 'PremiumCargo Nigeria',
    position: 'Supply Chain Manager',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    content: 'Excellence in every transaction. Their outsourcing solutions streamlined our operations and reduced costs significantly. Highly recommended for any logistics needs.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Zainab Adeyemi',
    company: 'EastWest Commodities',
    position: 'Procurement Head',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
    content: 'Professional, reliable, and results-oriented. Akilina\'s team went above and beyond to ensure our supply chain remained uninterrupted. Exceptional service delivery.',
    rating: 5,
  },
];

interface TestimonialCardProps {
  testimonial: Testimonial;
  isActive: boolean;
  index: number;
}

function TestimonialCard({ testimonial, isActive, index }: TestimonialCardProps) {
  return (
    <div
      className={`absolute inset-0 transition-all duration-1000 px-4 sm:px-0 ${
        isActive
          ? 'opacity-100 translate-x-0'
          : index < testimonials.findIndex(t => t.id === testimonials[0].id)
          ? 'opacity-0 -translate-x-full'
          : 'opacity-0 translate-x-full'
      }`}
      style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
    >
      <div className="h-full bg-white dark:bg-brand-dark-2 rounded-lg shadow-lg p-4 sm:p-8 lg:p-12 border border-gray-100 dark:border-gray-800 flex flex-col justify-between">
        {/* Quote Icon */}
        <div className="mb-4">
          <Quote size={32} className="text-brand-red/30" />
        </div>

        {/* Rating */}
        <div className="flex gap-1 mb-4">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} size={16} className="fill-brand-red text-brand-red" />
          ))}
        </div>

        {/* Content */}
        <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-8 flex-1">
          "{testimonial.content}"
        </p>

        {/* Author Info */}
        <div className="flex items-center gap-2 sm:gap-4 pt-3 sm:pt-6 border-t border-gray-200 dark:border-gray-700">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-10 sm:w-16 h-10 sm:h-16 rounded-full object-cover flex-shrink-0"
          />
          <div className="min-w-0 flex-1">
            <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">{testimonial.name}</p>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{testimonial.position}</p>
            <p className="text-xs text-brand-red font-semibold">{testimonial.company}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!autoPlay) return;
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 6000);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [autoPlay]);

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-gray-50 dark:bg-brand-dark-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 lg:mb-24 text-center">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 flex-wrap">
            <div className="h-1 w-8 sm:w-12 bg-brand-red rounded-full" />
            <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-brand-red whitespace-nowrap">Client Success Stories</span>
            <div className="h-1 w-8 sm:w-12 bg-brand-red rounded-full" />
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Trusted by leading organizations across Nigeria. Delivering excellence in logistics and procurement services.
          </p>
        </div>

        {/* Testimonial Container */}
        <div
          className="relative h-96 sm:h-96 lg:h-[440px] rounded-lg overflow-visible"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          {/* Testimonial Cards */}
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              isActive={index === currentIndex}
              index={index}
            />
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8 sm:mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-8 h-2 bg-brand-red'
                  : 'w-2 h-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Testimonial Counter */}
        <div className="text-center mt-4 sm:mt-6">
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            <span className="text-brand-red font-semibold">{currentIndex + 1}</span>
            {' '}/{' '}
            <span>{testimonials.length}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
