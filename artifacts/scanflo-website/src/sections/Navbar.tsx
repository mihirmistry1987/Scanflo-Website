import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import scanfloLogo from "@assets/Scanflo_Logo_1778997253423.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-xl shadow-black/40" data-testid="navbar">

      {/* Top utility bar — orange */}
      <div className="bg-[#F58220] hidden md:block">
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-9">
          <span className="text-white/90 text-xs font-medium tracking-wide">
            A Division of Scan Engineering — Vapi, Gujarat, India
          </span>
          <div className="flex items-center gap-6">
            <a href="tel:+912606000000" className="flex items-center gap-1.5 text-white/90 hover:text-white text-xs font-medium transition-colors" data-testid="link-phone">
              <Phone size={11} />
              +91-260-600-0000
            </a>
            <a href="mailto:info@scanflo.com" className="flex items-center gap-1.5 text-white/90 hover:text-white text-xs font-medium transition-colors" data-testid="link-email">
              <Mail size={11} />
              info@scanflo.com
            </a>
          </div>
        </div>
      </div>

      {/* Main nav bar — split panel */}
      <div className="flex items-stretch">

        {/* Logo container — white panel */}
        <Link
          href="/"
          className="flex items-center justify-center bg-white px-6 md:px-10 py-3 shrink-0 cursor-pointer border-r-4 border-[#F58220]"
          data-testid="link-home"
        >
          <img
            src={scanfloLogo}
            alt="Scanflo Valves"
            className="h-16 md:h-20 w-auto object-contain"
          />
        </Link>

        {/* Nav links container — black panel */}
        <div className="flex-1 bg-black flex items-center justify-between px-6 md:px-10 py-3">
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold uppercase tracking-widest transition-colors ${
                  location === link.href
                    ? "text-[#F58220]"
                    : "text-white/80 hover:text-[#F58220]"
                }`}
                data-testid={`link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}
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
              {/* Orange utility line on mobile */}
              <div className="text-[#F58220] text-xs font-medium mb-3 pb-3 border-b border-white/10">
                A Division of Scan Engineering
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-semibold text-white/80 hover:text-[#F58220] transition-colors py-2.5 border-b border-white/5 uppercase tracking-wider"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
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
