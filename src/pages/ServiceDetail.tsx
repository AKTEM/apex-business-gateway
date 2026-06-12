import { useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, CheckCircle2, Sparkles, Phone, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { services, getServiceBySlug } from '../data/services';
import { useInView } from '../hooks/useInView';

function CTAButton({ label, href, primary }: { label: string; href: string; primary?: boolean }) {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold px-7 py-3.5 rounded-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 group';
  const cls = primary
    ? `${base} bg-brand-red hover:bg-brand-red-deep text-white`
    : `${base} bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white`;
  return (
    <a href={href} className={cls}>
      <span>{label}</span>
      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
    </a>
  );
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = slug ? getServiceBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [slug]);

  const { ref: introRef, inView: introInView } = useInView(0.1);
  const { ref: sectionsRef, inView: sectionsInView } = useInView(0.05);

  if (!service) return <Navigate to="/" replace />;

  const Icon = service.icon;
  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <div className="bg-white dark:bg-brand-dark transition-colors duration-300 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden pt-28 lg:pt-36 pb-20 lg:pb-28">
          {/* Background image */}
          <div className="absolute inset-0">
            <img loading="lazy" decoding="async"
              src={service.heroImage}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/85 to-brand-black/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/40" />
          </div>

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(196,30,58,1) 1px, transparent 1px), linear-gradient(90deg, rgba(196,30,58,1) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />
          <div
            className="absolute top-0 right-0 w-[480px] h-[480px] pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(196,30,58,0.18) 0%, transparent 70%)' }}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-1.5 text-xs font-medium text-white/60 mb-8">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={12} />
              <Link to="/#services" className="hover:text-white transition-colors">Services</Link>
              <ChevronRight size={12} />
              <span className="text-white">{service.shortTitle}</span>
            </nav>

            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-red/20 border border-brand-red/30 rounded-full mb-6 backdrop-blur-sm animate-badge-slide">
                  <Sparkles size={14} className="text-brand-red-light" />
                  <span className="text-brand-red-light text-xs font-bold uppercase tracking-widest">
                    Akilina Service
                  </span>
                </div>

                <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] mb-5 animate-fade-up">
                  {service.title}
                </h1>
                <p className="text-xl lg:text-2xl text-brand-red-light font-display font-semibold mb-8 animate-fade-up" style={{ animationDelay: '120ms' }}>
                  {service.tagline}
                </p>

                <div className="flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: '240ms' }}>
                  {service.ctas.map((c, i) => (
                    <CTAButton key={c.label} {...c} primary={i === 0} />
                  ))}
                </div>
              </div>

              {/* Icon visual */}
              <div className="lg:col-span-4 hidden lg:flex justify-end">
                <div className="relative">
                  <div className="absolute inset-0 bg-brand-red/30 blur-3xl rounded-full" />
                  <div
                    className="relative w-48 h-48 rounded-sm flex items-center justify-center border border-white/10 backdrop-blur-sm"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(196,30,58,0.95), rgba(139,0,0,0.95))',
                      boxShadow: '0 20px 60px rgba(196,30,58,0.4)',
                    }}
                  >
                    <Icon size={72} className="text-white animate-icon-float" />
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-12 h-12 border-r-2 border-b-2 border-brand-red rounded-br-sm" />
                  <div className="absolute -top-3 -left-3 w-12 h-12 border-l-2 border-t-2 border-brand-red rounded-tl-sm" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section
          ref={introRef as React.RefObject<HTMLDivElement>}
          className="py-16 lg:py-24 bg-white dark:bg-brand-dark"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="space-y-6"
              style={{
                opacity: introInView ? 1 : 0,
                transform: introInView ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.7s ease, transform 0.7s ease',
              }}
            >
              {service.intro.map((p, i) => (
                <p
                  key={i}
                  className={`leading-relaxed text-gray-700 dark:text-gray-300 ${
                    i === 0 ? 'text-xl lg:text-2xl font-display font-medium text-gray-900 dark:text-white' : 'text-base lg:text-lg'
                  }`}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* SECTIONS */}
        <section
          ref={sectionsRef as React.RefObject<HTMLDivElement>}
          className="pb-20 lg:pb-28 bg-gray-50 dark:bg-brand-dark-2 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-96 h-96 pointer-events-none opacity-50"
            style={{ background: 'radial-gradient(circle, rgba(196,30,58,0.08) 0%, transparent 70%)' }}
          />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-24">
            <div className="space-y-10">
              {service.sections.map((sec, idx) => (
                <div
                  key={sec.heading}
                  className="relative bg-white dark:bg-brand-dark rounded-sm border border-gray-100 dark:border-gray-800 p-8 lg:p-12 shadow-sm hover:shadow-xl transition-all duration-500"
                  style={{
                    opacity: sectionsInView ? 1 : 0,
                    transform: sectionsInView ? 'translateY(0)' : 'translateY(24px)',
                    transition: `opacity 0.6s ease ${idx * 100}ms, transform 0.6s ease ${idx * 100}ms`,
                  }}
                >
                  <div className="absolute top-0 left-0 w-1 h-16 bg-gradient-to-b from-brand-red to-brand-red-deep rounded-r-sm" />

                  <div className="flex items-center gap-3 mb-5">
                    <span className="font-display font-black text-brand-red text-sm tracking-widest">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-brand-red/40 to-transparent max-w-[80px]" />
                  </div>

                  <h2 className="font-display font-bold text-2xl lg:text-3xl text-gray-900 dark:text-white mb-5">
                    {sec.heading}
                  </h2>

                  {sec.body && (
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base lg:text-lg mb-6">
                      {sec.body}
                    </p>
                  )}

                  {sec.bullets && (
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {sec.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-3 p-3 rounded-sm bg-gray-50 dark:bg-brand-dark-3 border border-transparent hover:border-brand-red/30 transition-colors"
                        >
                          <CheckCircle2 size={18} className="text-brand-red mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="relative overflow-hidden bg-brand-black">
          <div className="absolute inset-0">
            <img loading="lazy" decoding="async" src={service.heroImage} alt="" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/95 to-brand-black/70" />
          </div>
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(196,30,58,1) 1px, transparent 1px), linear-gradient(90deg, rgba(196,30,58,1) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-red/15 border border-brand-red/30 rounded-full mb-6">
              <Phone size={14} className="text-brand-red-light" />
              <span className="text-brand-red-light text-xs font-bold uppercase tracking-widest">
                Let's Talk
              </span>
            </div>
            <h3 className="font-display font-bold text-3xl lg:text-4xl text-white mb-4">
              Ready to move forward with {service.shortTitle}?
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
              Our team is ready to scope your requirement and deliver a tailored solution backed by Akilina's full operational capability.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {service.ctas.map((c, i) => (
                <CTAButton key={c.label} {...c} primary={i === 0} />
              ))}
            </div>
          </div>
        </section>

        {/* OTHER SERVICES */}
        <section className="py-16 lg:py-20 bg-white dark:bg-brand-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
              <div>
                <span className="text-brand-red text-xs font-bold uppercase tracking-widest">Continue Exploring</span>
                <h3 className="font-display font-bold text-2xl lg:text-3xl text-gray-900 dark:text-white mt-1">
                  Other Akilina Services
                </h3>
              </div>
              <Link
                to="/#services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-red hover:text-brand-red-deep transition-colors group"
              >
                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                Back to all services
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {otherServices.map((s) => {
                const SIcon = s.icon;
                return (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className="group relative bg-gray-50 dark:bg-brand-dark-2 border border-gray-100 dark:border-gray-800 rounded-sm p-5 hover:border-brand-red/40 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                  >
                    <div
                      className="w-11 h-11 rounded-sm flex items-center justify-center mb-4"
                      style={{ background: 'linear-gradient(135deg, #C41E3A, #8B0000)' }}
                    >
                      <SIcon size={20} className="text-white" />
                    </div>
                    <h4 className="font-display font-bold text-sm text-gray-900 dark:text-white mb-1.5 group-hover:text-brand-red transition-colors">
                      {s.shortTitle}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">
                      {s.cardDescription}
                    </p>
                    <ArrowRight size={14} className="text-brand-red mt-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
