import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/images/hero-slide-1.png",
    fit: "contain" as const,
    lightBg: false,
    bgOverride: {
      backgroundImage: `url(/images/hero-slide-1-nobg.png), linear-gradient(to bottom, #ffffff 27%, #F58220 27%, #F58220 73%, #ffffff 73%)`,
      backgroundSize: "62% auto, cover",
      backgroundPosition: "calc(100% + 20px) center, center",
      backgroundRepeat: "no-repeat, no-repeat",
    },
    headline: "Precision Engineered",
    highlight: "Knife Gate Valves",
    subheadline: "Superior Quality • Reliable Performance • Built for Tough Applications",
    cta: { label: "Explore Products", href: "/products" },
  },
  {
    id: 2,
    image: "/images/hero-slide-2.png",
    fit: "cover" as const,
    lightBg: false,
    bgOverride: null,
    headline: "State-of-the-Art",
    highlight: "Manufacturing Facility",
    subheadline: "In-House Foundry • CNC Precision Machining • Three Decades of Engineering",
    cta: { label: "About Scanflo", href: "/about" },
  },
  {
    id: 3,
    image: "/images/hero-slide-3.jpg",
    fit: "cover" as const,
    lightBg: false,
    bgOverride: null,
    headline: "Trusted Across",
    highlight: "Global Industries",
    subheadline: "Mining • Power Plants • Wastewater • Chemical • Pulp & Paper",
    cta: { label: "Industries We Serve", href: "/industries" },
  },
];

const SLIDE_DURATION = 5000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goTo = useCallback((index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  }, [current]);

  useEffect(() => {
    const timer = setTimeout(next, SLIDE_DURATION);
    return () => clearTimeout(timer);
  }, [current, next]);

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <section className="relative w-full h-screen overflow-hidden" data-testid="section-hero">
      <AnimatePresence initial={false} custom={direction} mode="sync">
        <motion.div
          key={slides[current].id}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
          data-testid={`slide-${slides[current].id}`}
        >
          <div
            className="absolute inset-0"
            style={
              slides[current].bgOverride ?? {
                backgroundImage: `url(${slides[current].image})`,
                backgroundSize: slides[current].fit,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundColor: "#000",
              }
            }
          />
          {!slides[current].lightBg && (
            <>
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-black/10" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </>
          )}
          {slides[current].lightBg && (
            <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/10 to-transparent" />
          )}
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${slides[current].id}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`max-w-3xl space-y-6 ${slides[current].lightBg ? "text-gray-900" : "text-white"}`}
            >
              <h1 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight">
                {slides[current].headline}
                <br />
                <span className="text-primary">{slides[current].highlight}</span>
              </h1>

              <p className={`text-base md:text-lg font-light tracking-wide max-w-xl ${slides[current].lightBg ? "text-gray-700" : "text-white/75"}`}>
                {slides[current].subheadline}
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link href={slides[current].cta.href} data-testid="btn-slide-cta">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white rounded-none h-14 px-8 text-base font-bold uppercase tracking-wider"
                  >
                    {slides[current].cta.label}
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className={`rounded-none h-14 px-8 text-base font-bold uppercase tracking-wider ${slides[current].lightBg ? "border-gray-800 text-gray-900 hover:bg-gray-900 hover:text-white" : "border-white/70 text-white hover:bg-white hover:text-black"}`}
                    data-testid="btn-download-catalog"
                  >
                    Download Catalogue
                  </Button>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center border border-white/30 bg-black/30 hover:bg-primary hover:border-primary text-white transition-all duration-200"
        data-testid="btn-prev-slide"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center border border-white/30 bg-black/30 hover:bg-primary hover:border-primary text-white transition-all duration-200"
        data-testid="btn-next-slide"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            onClick={() => goTo(i)}
            data-testid={`dot-slide-${i}`}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 rounded-none ${
              i === current
                ? "bg-primary w-8 h-1"
                : "bg-white/40 hover:bg-white/70 w-4 h-1"
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-8 right-4 md:right-8 z-20 text-white/40 text-sm font-mono tracking-widest">
        {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/40"
      >
        <ChevronDown size={28} />
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/40 z-20">
        <motion.div
          key={current}
          className="h-full bg-primary"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
        />
      </div>
    </section>
  );
}
