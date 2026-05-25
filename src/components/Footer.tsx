import { Mail, MapPin, ArrowUpRight, ChevronRight } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logoImg from '../assets/Akii2.png';
import { services } from '../data/services';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact Us', href: '#contact' },
];


export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (href: string) => {
    if (location.pathname !== '/') {
      navigate(`/${href}`);
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-black text-gray-400">
      {/* Top Border with shimmer */}
      <div className="h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent relative overflow-hidden">
        <div className="absolute inset-0 shimmer-bg" />
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5 group cursor-pointer" onClick={() => handleNavClick('#home')}>
              <img
                src={logoImg}
                alt="Akilina Nigeria Limited"
                className="h-16 w-auto flex-shrink-0 hover:scale-110 transition-transform duration-300 drop-shadow-lg"
              />
              <div className="flex flex-col leading-none">
                <span className="font-display font-medium text-[1.125rem] text-white">
                  Akilina
                </span>
                <span className="font-display font-normal text-[9px] text-gray-300">
                  Nigeria Limited
                </span>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-gray-500 mb-5">
              Delivering professional, reliable, and world-class business solutions
              across Nigeria and beyond. Anchored on professionalism, driven by
              passion for excellence.
            </p>

            <div className="text-xs text-gray-600">
              <span className="text-gray-500 font-medium">RC Number:</span>{' '}
              <span className="text-gray-400">880162</span>
            </div>

            <div className="flex items-center gap-2 mt-4">
              {['L', 'P', 'I&E', 'O'].map((abbr, i) => (
                <span
                  key={i}
                  className="w-8 h-8 bg-brand-dark-2 border border-gray-800 rounded-sm flex items-center justify-center text-[10px] font-bold text-gray-500 hover:border-brand-red/40 hover:text-brand-red-light hover:bg-brand-red/10 hover:shadow-red-glow-sm transition-all duration-300 cursor-default animate-icon-float"
                  style={{ animationDelay: `${i * 200}ms` }}
                >
                  {abbr}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <button
                    onClick={() => handleNavClick(href)}
                    className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-white transition-all duration-200 group"
                  >
                    <ChevronRight
                      size={13}
                      className="text-brand-red opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200"
                    />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-widest mb-5">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map(s => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-white transition-all duration-200 group"
                  >
                    <ChevronRight
                      size={13}
                      className="text-brand-red opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200"
                    />
                    {s.shortTitle}
                  </Link>
                </li>
              ))}

            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-widest mb-5">
              Contact Information
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <MapPin size={16} className="text-brand-red flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200 animate-icon-float" />
                <div>
                  <div className="text-sm text-gray-300 font-medium">Lagos, Nigeria</div>
                  <div className="text-xs text-gray-600 mt-0.5">Head Office</div>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <Mail size={16} className="text-brand-red flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200 animate-icon-float" style={{ animationDelay: '200ms' }} />
                <div>
                  <a
                    href="mailto:info@akilinanigeria.com"
                    className="text-sm text-gray-300 hover:text-white transition-colors duration-200 block"
                  >
                    info@akilinanigeria.com
                  </a>
                  <div className="text-xs text-gray-600 mt-0.5">General Enquiries</div>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <Mail size={16} className="text-brand-red flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200 animate-icon-float" style={{ animationDelay: '400ms' }} />
                <div>
                  <a
                    href="mailto:sales@akilinanigeria.com"
                    className="text-sm text-gray-300 hover:text-white transition-colors duration-200 block"
                  >
                    sales@akilinanigeria.com
                  </a>
                  <div className="text-xs text-gray-600 mt-0.5">Business Development</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={() => handleNavClick('#contact')}
              className="mt-6 flex items-center gap-2 text-sm font-semibold text-brand-red hover:text-brand-red-light transition-colors duration-200 group"
            >
              Get In Touch
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-gray-600 text-center sm:text-left">
              &copy; {new Date().getFullYear()} Akilina Nigeria Limited. All Rights Reserved.
            </p>
            <div className="flex items-center gap-1 text-xs text-gray-700">
              <span>Logistics</span>
              <span className="text-brand-red/60 mx-1">|</span>
              <span>Procurement</span>
              <span className="text-brand-red/60 mx-1">|</span>
              <span>Import & Export</span>
              <span className="text-brand-red/60 mx-1">|</span>
              <span>Outsourcing</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
