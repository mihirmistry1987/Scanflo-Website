import { motion } from "framer-motion";
import { Link } from "wouter";
import { Check, ArrowLeft } from "lucide-react";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import { Button } from "@/components/ui/button";

const materials = [
  { part: "Body", mat: "Cast Iron CI / Ductile Iron / WCB" },
  { part: "Gate/Disc", mat: "SS304 / SS316" },
  { part: "Seat", mat: "NBR / EPDM / PTFE / Metal" },
  { part: "Gland Packing", mat: "PTFE / Graphite" },
  { part: "Stem", mat: "SS304 / SS316" },
];

const actuationOptions = [
  "Manual Handwheel",
  "Pneumatic Cylinder",
  "Electric Motorized",
  "Hydraulic Actuator",
  "Bevel Gearbox",
  "Chainwheel",
];

export default function DesignConstruction() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-background min-h-screen pt-24"
    >
      <Navbar />

      {/* Page header */}
      <div className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4 md:px-8">
          <Link href="/design" className="inline-flex items-center text-white/60 hover:text-primary font-medium mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Design
          </Link>
          <div className="flex items-center gap-4 mb-3">
            <span className="bg-primary text-white text-sm font-bold px-4 py-1 uppercase tracking-widest">Design</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">Design &amp; Construction</h1>
          <p className="text-white/60 mt-3 text-lg max-w-xl">
            A detailed look at the anatomy, materials, and engineering behind every Scanflo Knife Gate Valve.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-16 space-y-20">

        {/* Exploded diagram + specs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            {/* Material Construction */}
            <div>
              <h2 className="text-2xl font-black text-secondary uppercase tracking-tight mb-6 border-b border-border pb-4">
                Material Construction
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="text-left px-5 py-3 font-bold uppercase tracking-wider">Part</th>
                      <th className="text-left px-5 py-3 font-bold uppercase tracking-wider">Material</th>
                    </tr>
                  </thead>
                  <tbody>
                    {materials.map((item, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-muted/30" : "bg-white"}>
                        <td className="px-5 py-3 font-semibold text-secondary border-b border-border">{item.part}</td>
                        <td className="px-5 py-3 text-muted-foreground border-b border-border">{item.mat}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Operating Parameters */}
            <div>
              <h2 className="text-2xl font-black text-secondary uppercase tracking-tight mb-6 border-b border-border pb-4">
                Operating Parameters
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-muted/40 border border-border p-5">
                  <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Temperature Range</p>
                  <p className="text-2xl font-black text-secondary">-10°C to +150°C</p>
                </div>
                <div className="bg-muted/40 border border-border p-5">
                  <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Pressure Rating</p>
                  <p className="text-2xl font-black text-secondary">PN10 / PN16</p>
                </div>
                <div className="bg-muted/40 border border-border p-5">
                  <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Size Range</p>
                  <p className="text-2xl font-black text-secondary">2″ – 28″ NB</p>
                </div>
                <div className="bg-muted/40 border border-border p-5">
                  <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">End Connection</p>
                  <p className="text-2xl font-black text-secondary">Wafer / Lug</p>
                </div>
              </div>
            </div>

            {/* Actuation Options */}
            <div>
              <h2 className="text-2xl font-black text-secondary uppercase tracking-tight mb-6 border-b border-border pb-4">
                Actuation Options
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {actuationOptions.map((opt) => (
                  <div key={opt} className="flex items-center gap-2 text-sm font-medium text-secondary">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    {opt}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-muted/20 border border-border p-8 flex items-center justify-center"
          >
            <img
              src="/images/technical-spec.png"
              alt="Knife Gate Valve Exploded Diagram"
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-secondary text-white p-12 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-2xl font-black mb-2">Need a custom specification?</h3>
            <p className="text-white/70">Our team can engineer valves to your exact process and material requirements.</p>
          </div>
          <Link href="/contact" className="shrink-0">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none px-10 font-bold h-14 text-base">
              Contact Our Engineers
            </Button>
          </Link>
        </motion.div>

      </div>
      <Footer />
    </motion.div>
  );
}
