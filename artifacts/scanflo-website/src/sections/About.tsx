import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ end, label, suffix = "" }: { end: parseInt, label: string, suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <div ref={ref} className="text-center p-6 border border-border bg-card">
      <div className="text-4xl font-black text-secondary mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
        {label}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section className="py-24 bg-white" data-testid="section-about">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase">About Scanflo</h2>
            <h3 className="text-4xl font-black text-secondary tracking-tight">
              Three Decades of Engineering Excellence
            </h3>
            <div className="w-20 h-1 bg-primary" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Scanflo Valves is a premium industrial manufacturer specializing in high-performance Knife Gate Valves. As a wholly owned subsidiary of Scan Engineering, based in Vapi, Gujarat, India, we bring unmatched expertise to fluid control solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With an in-house foundry and state-of-the-art CNC machining capabilities, we maintain strict control over every stage of manufacturing. Our buyers demand precision and reliability in the most punishing industrial environments, and we deliver globally.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img
              src="/images/about-factory.png"
              alt="Scanflo Factory Floor"
              className="w-full h-auto shadow-2xl rounded-none"
              data-testid="img-factory"
            />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary -z-10" />
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
          <Counter end={30} suffix="+" label="Years Experience" />
          <Counter end={500} suffix="+" label="Global Clients" />
          <Counter end={7} label="Product Series" />
          <div className="text-center p-6 border border-border bg-card flex flex-col justify-center">
            <div className="text-3xl md:text-4xl font-black text-secondary mb-2">ISO 9001</div>
            <div className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">Certified</div>
          </div>
        </div>
      </div>
    </section>
  );
}
