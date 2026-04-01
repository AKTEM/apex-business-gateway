import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const services = [
  { label: "Accounting Services", path: "/services/accounting" },
  { label: "IFRS Services", path: "/services/ifrs" },
  { label: "Taxation & Tax Services", path: "/services/taxation" },
  { label: "Management Consultancy", path: "/services/consultancy" },
  { label: "Financial Advisory", path: "/services/advisory" },
  { label: "Training & Development", path: "/services/training" },
];

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services", hasDropdown: true },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-header shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link to="/">
          <img src={logo} alt="Tax Assist Solutions" className="h-12 md:h-16 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.label} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={`text-nav-text font-medium text-sm uppercase tracking-wider hover:text-primary transition-colors duration-300 flex items-center gap-1 ${
                    location.pathname.startsWith("/services") ? "text-primary" : ""
                  }`}
                >
                  {link.label}
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-header rounded-lg shadow-xl border border-border/20 overflow-hidden z-50"
                    >
                      <Link
                        to="/services"
                        className="block px-4 py-3 text-sm font-semibold text-nav-text hover:bg-primary/10 hover:text-primary transition-colors border-b border-border/10"
                      >
                        All Services
                      </Link>
                      {services.map((s) => (
                        <Link
                          key={s.path}
                          to={s.path}
                          className="block px-4 py-3 text-sm text-nav-text hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.path}
                className={`text-nav-text font-medium text-sm uppercase tracking-wider hover:text-primary transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                  location.pathname === link.path ? "text-primary after:scale-x-100" : ""
                }`}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            to="/contact"
            className="bg-secondary px-5 py-2 rounded-md text-sm font-semibold text-secondary-foreground hover:opacity-90 transition-opacity"
          >
            Schedule Appointment
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-header-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-header overflow-hidden border-t border-border/20"
          >
            <div className="flex flex-col items-center gap-4 py-6">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.label} className="flex flex-col items-center">
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="text-nav-text font-medium text-sm uppercase tracking-wider hover:text-primary transition-colors flex items-center gap-1"
                    >
                      {link.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="flex flex-col items-center gap-2 mt-2 overflow-hidden"
                        >
                          <Link to="/services" className="text-nav-text text-xs hover:text-primary transition-colors font-semibold">
                            All Services
                          </Link>
                          {services.map((s) => (
                            <Link key={s.path} to={s.path} className="text-nav-text text-xs hover:text-primary transition-colors">
                              {s.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    to={link.path}
                    className="text-nav-text font-medium text-sm uppercase tracking-wider hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Link
                to="/contact"
                className="bg-secondary px-6 py-2 rounded-md text-sm font-semibold text-secondary-foreground"
              >
                Schedule Appointment
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
