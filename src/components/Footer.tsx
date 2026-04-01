import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/footer-logo.png";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Contact", path: "/contact" },
];

const serviceLinks = [
  { label: "Accounting Services", path: "/services/accounting" },
  { label: "IFRS Services", path: "/services/ifrs" },
  { label: "Tax Management", path: "/services/taxation" },
  { label: "Financial Advisory", path: "/services/advisory" },
  { label: "Training & Development", path: "/services/training" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <img src={logo} alt="Tax Assist Solutions" className="h-12 mb-4" />
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Tax Assist Solutions is a firm of young and dynamic Chartered Accountants focused on providing Accounting, Financial and advisory services to companies in various sectors of the economy.
            </p>
          </div>
          <div>
            <h4 className="text-foreground font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-foreground font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Tax Assist Solutions. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors text-muted-foreground"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
