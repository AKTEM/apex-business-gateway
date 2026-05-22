import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import logoImg from '../assets/Akii2.png';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  {
    label: 'Services',
    href: '#services',
    children: [
      { label: 'Logistics', href: '#services' },
      { label: 'Procurement', href: '#services' },
      { label: 'Import & Export', href: '#services' },
      { label: 'Outsourcing', href: '#services' },
    ],
  },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    setServicesOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 dark:bg-brand-dark/95 backdrop-blur-md shadow-lg border-b border-gray-100 dark:border-gray-800/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-2 group transition-all duration-300"
          >
            <img
              src={logoImg}
              alt="Akilina Nigeria Limited"
              className={`h-12 md:h-14 w-auto flex-shrink-0 drop-shadow-md group-hover:drop-shadow-lg group-hover:scale-105 transition-all duration-300 ${
                scrolled ? 'opacity-100' : 'opacity-90 hover:opacity-100'
              }`}
            />
            <div className="flex flex-col leading-none">
              <span
                className={`font-display font-black text-sm transition-colors duration-300 ${
                  scrolled
                    ? 'text-gray-900 dark:text-white'
                    : 'text-white'
                }`}
              >
                Akilina
              </span>
              <span
                className={`font-display font-bold text-[10px] transition-colors duration-300 ${
                  scrolled
                    ? 'text-gray-700 dark:text-gray-300'
                    : 'text-white/90'
                }`}
              >
                Nigeria Limited
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              link.children ? (
                <div key={link.label} className="relative">
                  <button
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    onClick={() => handleNavClick(link.href)}
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-sm transition-all duration-200 group ${
                      scrolled
                        ? 'text-gray-700 dark:text-gray-300 hover:text-brand-red dark:hover:text-brand-red-light'
                        : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {servicesOpen && (
                    <div
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                      className="absolute top-full left-0 mt-1 w-52 bg-white dark:bg-brand-dark-2 rounded-sm shadow-xl border border-gray-100 dark:border-gray-800 py-1 animate-fade-in"
                    >
                      {link.children.map(child => (
                        <button
                          key={child.label}
                          onClick={() => handleNavClick(child.href)}
                          className="w-full text-left px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:text-brand-red dark:hover:text-brand-red-light hover:bg-gray-50 dark:hover:bg-brand-dark-3 hover:pl-6 transition-all duration-200"
                        >
                          {child.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-4 py-2 text-sm font-medium rounded-sm transition-all duration-200 relative group ${
                    scrolled
                      ? 'text-gray-700 dark:text-gray-300 hover:text-brand-red dark:hover:text-brand-red-light'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-red group-hover:w-3/4 transition-all duration-300 rounded-full" />
                </button>
              )
            ))}

            {/* Divider */}
            <div className={`w-px h-5 mx-2 ${scrolled ? 'bg-gray-200 dark:bg-gray-700' : 'bg-white/20'}`} />

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-sm transition-all duration-300 hover:rotate-12 ${
                scrolled
                  ? 'text-gray-600 dark:text-gray-400 hover:text-brand-red dark:hover:text-brand-red-light hover:bg-gray-100 dark:hover:bg-brand-dark-3'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} className="animate-icon-spin-slow" /> : <Moon size={18} className="animate-icon-bounce" />}
            </button>

            {/* CTA */}
            <button
              onClick={() => handleNavClick('#contact')}
              className="ml-2 btn-primary text-sm py-2 group"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-sm transition-all duration-300 hover:rotate-12 ${
                scrolled
                  ? 'text-gray-600 dark:text-gray-400 hover:text-brand-red dark:hover:text-brand-red-light hover:bg-gray-100 dark:hover:bg-brand-dark-3'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} className="animate-icon-spin-slow" /> : <Moon size={18} className="animate-icon-bounce" />}
            </button>
            <button
              onClick={() => setMenuOpen(v => !v)}
              className={`p-2 rounded-sm transition-colors duration-200 ${
                scrolled
                  ? 'text-gray-700 dark:text-gray-300'
                  : 'text-white'
              }`}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white dark:bg-brand-dark-2 border-t border-gray-100 dark:border-gray-800 pb-4 animate-fade-in">
            {navLinks.map(link => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-brand-red dark:hover:text-brand-red-light hover:bg-gray-50 dark:hover:bg-brand-dark-3 hover:pl-6 transition-all duration-200 border-b border-gray-50 dark:border-gray-800/50 last:border-0"
              >
                {link.label}
              </button>
            ))}
            <div className="px-4 pt-3">
              <button
                onClick={() => handleNavClick('#contact')}
                className="w-full btn-primary text-sm justify-center"
              >
                Get a Quote
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
