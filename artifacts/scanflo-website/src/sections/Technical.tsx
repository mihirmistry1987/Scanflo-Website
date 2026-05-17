import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Technical() {
  return (
    <section className="py-24 bg-white overflow-hidden" data-testid="section-technical">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Technical Specifications</h2>
            <h3 className="text-4xl font-black text-secondary tracking-tight mb-8">
              Engineered Anatomy
            </h3>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-bold text-secondary mb-4 border-b pb-2">Material Construction</h4>
                <ul className="space-y-3">
                  {[
                    { part: "Body", mat: "Cast Iron CI / Ductile Iron / WCB" },
                    { part: "Gate/Disc", mat: "SS304 / SS316" },
                    { part: "Seat", mat: "NBR / EPDM / PTFE / Metal" },
                    { part: "Gland Packing", mat: "PTFE / Graphite" },
                    { part: "Stem", mat: "SS304 / SS316" },
                  ].map((item, idx) => (
                    <li key={idx} className="flex justify-between text-sm">
                      <span className="font-semibold text-muted-foreground">{item.part}</span>
                      <span className="text-secondary font-medium">{item.mat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold text-secondary mb-4 border-b pb-2">Operating Parameters</h4>
                <div className="flex justify-between items-center bg-muted/50 p-4 rounded-sm">
                  <span className="font-semibold text-muted-foreground">Standard Temp Range</span>
                  <span className="text-xl font-black text-primary">-10°C to +150°C</span>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-secondary mb-4 border-b pb-2">Actuation Options</h4>
                <div className="grid grid-cols-2 gap-3 text-sm font-medium text-secondary">
                  <div className="flex items-center"><Check className="w-4 h-4 text-primary mr-2"/> Manual Handwheel</div>
                  <div className="flex items-center"><Check className="w-4 h-4 text-primary mr-2"/> Pneumatic Cylinder</div>
                  <div className="flex items-center"><Check className="w-4 h-4 text-primary mr-2"/> Electric Motorized</div>
                  <div className="flex items-center"><Check className="w-4 h-4 text-primary mr-2"/> Hydraulic Actuator</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[600px] bg-secondary rounded-xl p-8 flex items-center justify-center"
          >
            {/* SVG Diagram Placeholder */}
            <svg viewBox="0 0 400 600" className="w-full h-full max-w-sm" stroke="currentColor" fill="none">
              <path d="M150 100 L250 100 L250 150 L150 150 Z" className="text-accent stroke-2" fill="#1F2D6B" />
              <path d="M180 150 L220 150 L220 400 L180 400 Z" className="text-primary stroke-2" fill="none" />
              <path d="M100 350 L300 350 L300 450 L100 450 Z" className="text-accent stroke-2" fill="#1F2D6B" />
              <circle cx="200" cy="400" r="40" className="text-primary stroke-2" />
              
              {/* Callouts */}
              <g className="text-white font-sans text-xs">
                <line x1="250" y1="125" x2="320" y2="125" className="stroke-white/50" />
                <text x="330" y="130" fill="currentColor">Actuator Mount</text>
                
                <line x1="220" y1="250" x2="320" y2="250" className="stroke-white/50" />
                <text x="330" y="255" fill="currentColor">Stem</text>
                
                <line x1="300" y1="400" x2="320" y2="400" className="stroke-white/50" />
                <text x="330" y="405" fill="currentColor">Body</text>
                
                <line x1="240" y1="400" x2="280" y2="300" className="stroke-white/50" />
                <text x="285" y="295" fill="currentColor">Gate</text>
              </g>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
