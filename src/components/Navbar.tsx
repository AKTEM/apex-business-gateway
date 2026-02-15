import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  scrolled: boolean;
}

export default function Navbar({ scrolled }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-lg shadow-lg py-4 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <img
              src="/BUILD-LOGO.png"
              alt="BuildWell Africa Logo"
              className="h-12 w-auto object-contain"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {['Solutions', 'Features', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative font-medium transition-all duration-300 group text-[#2A266A] hover:text-[#992828]"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#992828] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button className="bg-gradient-to-r from-[#992828] to-[#c93030] text-white px-6 py-2.5 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#992828]/50">
              Get Started
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="text-[#2A266A]" />
            ) : (
              <Menu className="text-[#2A266A]" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-fadeIn">
            {['Solutions', 'Features', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-[#2A266A] hover:text-[#992828] font-medium transition-colors duration-300 py-2"
              >
                {item}
              </a>
            ))}
            <button className="w-full bg-gradient-to-r from-[#992828] to-[#c93030] text-white px-6 py-2.5 rounded-full font-semibold">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
