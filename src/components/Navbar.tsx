import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }, [location]);

  const services = [
    { name: 'Real Estate Investment', path: '/services/real-estate' },
    { name: 'Construction', path: '/services/construction' },
    { name: 'Import & Export', path: '/services/import-export' },
    { name: 'Business Solutions', path: '/services/business-solutions' },
  ];

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg py-3' : 'bg-white/90 backdrop-blur-md py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group cursor-pointer">
            <img src="/buildwell-logo.png" alt="BuildWell Africa Logo" className="h-10 md:h-12 w-auto object-contain" />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="relative font-medium transition-all duration-300 group text-[#2A266A] hover:text-[#992828]">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#992828] transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <button onClick={() => scrollToSection('about')} className="relative font-medium transition-all duration-300 group text-[#2A266A] hover:text-[#992828]">
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#992828] transition-all duration-300 group-hover:w-full"></span>
            </button>

            {/* Services Dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="relative font-medium transition-all duration-300 group text-[#2A266A] hover:text-[#992828] flex items-center space-x-1"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#992828] transition-all duration-300 group-hover:w-full"></span>
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-3 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50 animate-fadeIn">
                  <div className="absolute -top-2 left-6 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45"></div>
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-5 py-3 text-[#2A266A] hover:bg-[#992828]/5 hover:text-[#992828] transition-all duration-200 font-medium text-sm"
                    >
                      {service.name}
                    </Link>
                  ))}
                  <div className="border-t border-gray-100 mt-1 pt-1">
                    <button
                      onClick={() => { setServicesOpen(false); scrollToSection('services'); }}
                      className="block w-full text-left px-5 py-3 text-[#992828] hover:bg-[#992828]/5 transition-all duration-200 font-semibold text-sm"
                    >
                      View All Services →
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button onClick={() => scrollToSection('contact')} className="relative font-medium transition-all duration-300 group text-[#2A266A] hover:text-[#992828]">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#992828] transition-all duration-300 group-hover:w-full"></span>
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-[#992828] to-[#c93030] text-white px-6 py-2.5 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#992828]/50"
            >
              Get Started
            </button>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="text-[#2A266A]" /> : <Menu className="text-[#2A266A]" />}
          </button>
        </div>

        {/* Mobile menu overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-0 z-40" onClick={() => setMobileMenuOpen(false)}>
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
            <div
              className="absolute top-0 left-0 h-full w-72 bg-white shadow-2xl animate-slideInLeft p-6 pt-20 space-y-1"
              onClick={(e) => e.stopPropagation()}
            >
              <Link to="/" className="block text-[#2A266A] hover:text-[#992828] font-medium py-3 px-3 rounded-lg hover:bg-gray-50">Home</Link>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left text-[#2A266A] hover:text-[#992828] font-medium py-3 px-3 rounded-lg hover:bg-gray-50">About Us</button>

              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full text-[#2A266A] hover:text-[#992828] font-medium py-3 px-3 rounded-lg hover:bg-gray-50"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileServicesOpen && (
                  <div className="ml-4 space-y-1 mt-1">
                    {services.map((service) => (
                      <Link key={service.path} to={service.path} className="block text-[#2A266A] hover:text-[#992828] font-medium py-2 px-3 rounded-lg hover:bg-gray-50 text-sm">
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-[#2A266A] hover:text-[#992828] font-medium py-3 px-3 rounded-lg hover:bg-gray-50">Contact</button>
              <button onClick={() => scrollToSection('contact')} className="w-full bg-gradient-to-r from-[#992828] to-[#c93030] text-white px-6 py-2.5 rounded-full font-semibold mt-4">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
