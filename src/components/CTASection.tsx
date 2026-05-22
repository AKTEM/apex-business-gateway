import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 lg:py-32 bg-white dark:bg-brand-dark relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Left Column - Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-12 bg-brand-red rounded-full" />
              <span className="text-sm font-semibold tracking-widest uppercase text-brand-red">Get Started Today</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-8 leading-tight">
              Ready to Transform Your Logistics?
            </h2>

            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
              Join hundreds of businesses that trust Akilina for their logistics, procurement, and outsourcing needs. Our proven track record of excellence ensures your supply chain is in expert hands.
            </p>

            {/* CTA Button */}
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white font-bold text-lg px-10 py-4 rounded transition-all duration-300 shadow-lg hover:shadow-red-glow group"
            >
              <span>Contact Our Team</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}
