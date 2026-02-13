import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const bgClass = scrolled || !isHome
    ? "bg-navy shadow-lg shadow-navy-dark/20"
    : "bg-transparent";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bgClass}`}>
      <div className="container mx-auto flex items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-accent-foreground font-display font-bold text-xl transition-transform duration-300 group-hover:scale-110">
            B
          </div>
          <span className="text-primary-foreground font-display text-xl font-bold tracking-tight">
            Buildwell <span className="text-accent">Africa</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-accent ${
                location.pathname === link.href
                  ? "text-accent"
                  : "text-primary-foreground/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
          {isHome && (
            <button
              onClick={() => scrollToSection("partnership")}
              className="text-sm font-medium tracking-wide text-primary-foreground/80 transition-colors duration-300 hover:text-accent"
            >
              Partnership
            </button>
          )}
          <Link to="/contact">
            <Button className="bg-accent text-accent-foreground hover:bg-red-accent-light font-semibold px-6 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/30">
              <Phone className="w-4 h-4 mr-1" />
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-navy border-navy-dark w-[300px]">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col gap-6 mt-12">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className={`text-lg font-medium transition-colors duration-300 hover:text-accent ${
                    location.pathname === link.href
                      ? "text-accent"
                      : "text-primary-foreground/80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setOpen(false)}>
                <Button className="bg-accent text-accent-foreground hover:bg-red-accent-light w-full mt-4 rounded-full">
                  <Phone className="w-4 h-4 mr-1" />
                  Contact Us
                </Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
