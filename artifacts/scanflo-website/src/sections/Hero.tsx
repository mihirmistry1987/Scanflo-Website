import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-secondary overflow-hidden pt-20" data-testid="section-hero">
      {/* Background SVG Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="flow" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0,50 Q25,0 50,50 T100,50" fill="none" stroke="#F58220" strokeWidth="1" className="animate-pulse" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#flow)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">
              Precision Engineered <br />
              <span className="text-primary">Knife Gate Valves</span>
            </h1>
            <p className="text-xl md:text-2xl text-accent font-light tracking-wide">
              Superior Quality • Reliable Performance • Built for Tough Applications
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/products" data-testid="btn-explore-products">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none h-14 px-8 text-lg font-bold">
                  Explore Products
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-secondary hover:bg-white rounded-none h-14 px-8 text-lg font-bold" data-testid="btn-download-catalog">
                Download Catalogue
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
            <img
              src="/images/hero-valve.png"
              alt="Scanflo Knife Gate Valve"
              className="relative z-10 w-full max-w-lg mx-auto drop-shadow-2xl"
              data-testid="img-hero-product"
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
