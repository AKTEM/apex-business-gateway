import { Star, Quote } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechCorp',
      image:
        'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      content:
        'Elevate transformed our business operations completely. The ROI we achieved in just 3 months exceeded all our expectations. Truly remarkable!',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Founder, StartupHub',
      image:
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      content:
        'The level of innovation and support is unmatched. Our productivity increased by 200% and customer satisfaction is at an all-time high.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Director, GlobalTech',
      image:
        'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      content:
        'Outstanding platform with incredible features. The team is responsive and the results speak for themselves. Best decision we made this year.',
      rating: 5,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-white"
      id="testimonials"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-[#2A266A]/10 rounded-full px-4 py-2 mb-4">
            <Star className="w-4 h-4 text-[#2A266A]" />
            <span className="text-[#2A266A] text-sm font-semibold">
              TESTIMONIALS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2A266A] mb-4">
            Loved by Businesses Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what our clients have to say about their transformative experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
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
              <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#992828]/20 h-full group">
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#992828] to-[#c93030] rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-500">
                  <Quote className="w-8 h-8 text-white" />
                </div>

                <div className="pt-8">
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-[#992828] text-[#992828]"
                      />
                    ))}
                  </div>

                  <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-[#992828]/20"
                    />
                    <div>
                      <div className="font-bold text-[#2A266A] text-lg">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
