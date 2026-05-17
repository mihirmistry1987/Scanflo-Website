import { useState, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import scanfloLogo from "@assets/Scanflo_Logo_1778997253423.png";

const productDropdown = [
  { label: "Uni-Directional Valves", href: "/products/sa-series" },
  { label: "Bi-Directional Valves", href: "/products/sb-series" },
  { label: "Through Going Long Plate Valves", href: "/products/long-plate" },
  { label: "Double Knife Gate Valve", href: "/products/double-knife" },
  { label: "Mining Valves", href: "/products/mining" },
  { label: "Specially Engineered Valves", href: "/products/special" },
];

const aboutDropdown = [
  { label: "Company Profile", href: "/about/company-profile" },
  { label: "Why Choose Scanflo", href: "/about/why-scanflo" },
  { label: "Certifications", href: "/about/certifications" },
];

const designDropdown = [
  { label: "Design & Construction", href: "/design/construction" },
  { label: "Gland Packing", href: "/design/gland-packing" },
  { label: "Actuator Options", href: "/design/actuator-options" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about", dropdown: aboutDropdown },
  { label: "Products", href: "/products", dropdown: productDropdown },
  { label: "Design", href: "/design", dropdown: designDropdown },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileOpenKey, setMobileOpenKey] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [location] = useLocation();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (key: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(key);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-xl shadow-black/40" data-testid="navbar">

      {/* Top utility bar */}
      <div className="bg-[#F58220] hidden md:block">
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-9">
          <span className="text-white/90 text-xs font-medium tracking-wide">
            A Division of Scan Engineering
          </span>
          <div className="flex items-center gap-6">
            <a href="tel:+919825097587" className="flex items-center gap-1.5 text-white/90 hover:text-white text-xs font-medium transition-colors" data-testid="link-phone">
              <Phone size={11} />
              +91 98250 97587
            </a>
            <a href="mailto:info@scanengg.com" className="flex items-center gap-1.5 text-white/90 hover:text-white text-xs font-medium transition-colors" data-testid="link-email">
              <Mail size={11} />
              info@scanengg.com
            </a>
          </div>
        </div>
      </div>

      {/* Main nav bar */}
      <div className="flex items-stretch">

        {/* Logo panel */}
        <Link
          href="/"
          className="flex items-center justify-center bg-black px-6 md:px-10 py-3 shrink-0 cursor-pointer border-r-4 border-[#F58220]"
          data-testid="link-home"
        >
          <img
            src={scanfloLogo}
            alt="Scanflo Valves"
            className="h-14 md:h-16 w-auto object-contain"
            style={{ filter: "invert(1) hue-rotate(180deg)" }}
          />
        </Link>

        {/* Nav links */}
        <div className="flex-1 bg-black flex items-center justify-between px-6 md:px-10 py-3">
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(link.href)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={`flex items-center gap-1 text-sm font-semibold uppercase tracking-widest transition-colors ${
                      location.startsWith(link.href) && link.href !== "/"
                        ? "text-[#F58220]"
                        : "text-white/80 hover:text-[#F58220]"
                    }`}
                    data-testid={`link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${activeDropdown === link.href ? "rotate-180" : ""}`}
                    />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === link.href && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-full left-0 mt-2 w-60 bg-black border border-white/10 shadow-2xl z-50"
                        onMouseEnter={() => handleMouseEnter(link.href)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="h-0.5 w-full bg-[#F58220]" />
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-5 py-3 text-sm text-white/80 hover:text-[#F58220] hover:bg-white/5 transition-colors border-b border-white/5 last:border-0 font-medium"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold uppercase tracking-widest transition-colors ${
                    location === link.href
                      ? "text-[#F58220]"
                      : "text-white/80 hover:text-[#F58220]"
                  }`}
                  data-testid={`link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden md:flex items-center gap-4 ml-auto">
            <div className="w-px h-6 bg-white/20" />
            <Link href="/contact" data-testid="btn-get-quote">
              <Button className="bg-[#F58220] hover:bg-[#F58220]/90 text-white font-bold rounded-none px-7 h-10 text-sm uppercase tracking-wider">
                Get a Quote
              </Button>
            </Link>
          </div>

          <button
            className="md:hidden text-white p-1 ml-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="btn-mobile-menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-black border-t border-[#F58220]/40 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              <div className="text-[#F58220] text-xs font-medium mb-3 pb-3 border-b border-white/10">
                A Division of Scan Engineering
              </div>
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.href}>
                    <button
                      className="w-full flex items-center justify-between text-base font-semibold text-white/80 hover:text-[#F58220] transition-colors py-2.5 border-b border-white/5 uppercase tracking-wider"
                      onClick={() => setMobileOpenKey(mobileOpenKey === link.href ? null : link.href)}
                    >
                      {link.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${mobileOpenKey === link.href ? "rotate-180 text-[#F58220]" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileOpenKey === link.href && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block pl-4 py-2 text-sm text-white/60 hover:text-[#F58220] transition-colors border-b border-white/5"
                              onClick={() => { setIsMobileMenuOpen(false); setMobileOpenKey(null); }}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-base font-semibold text-white/80 hover:text-[#F58220] transition-colors py-2.5 border-b border-white/5 uppercase tracking-wider"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-3">
                <Button className="bg-[#F58220] hover:bg-[#F58220]/90 text-white w-full rounded-none font-bold uppercase tracking-wider">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
