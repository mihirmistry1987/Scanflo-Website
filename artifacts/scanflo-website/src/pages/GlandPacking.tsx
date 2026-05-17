import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Thermometer, ShieldCheck, Wrench, RotateCcw } from "lucide-react";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import { Button } from "@/components/ui/button";

const packingTypes = [
  { type: "Pure PTFE", maxF: "500°F", maxC: "260°C", note: "Standard, chemical-resistant general-purpose packing" },
  { type: "PTFE Impregnated Synthetic Fiber", maxF: "450°F", maxC: "232°C", note: "Enhanced mechanical strength with PTFE lubricity" },
  { type: "PTFE w/ Buna-N Quad Seal", maxF: "194°F", maxC: "90°C", note: "Ideal for water, oils, and general service fluids" },
  { type: "PTFE w/ Viton® Quad Seal", maxF: "392°F", maxC: "200°C", note: "Superior chemical and high-temperature resistance" },
  { type: "PTFE w/ EPDM Quad Seal", maxF: "248°F", maxC: "120°C", note: "Excellent for steam, hot water, and outdoor service" },
  { type: "PTFE w/ Copper Wiper", maxF: "500°F", maxC: "260°C", note: "Copper wiper removes debris for clean gate operation" },
  { type: "Graphite", maxF: "1202°F", maxC: "650°C", note: "Extreme-temperature service — ideal for steam and fire-safe applications" },
];

const highlights = [
  {
    icon: ShieldCheck,
    title: "Zero Atmospheric Discharge",
    desc: "The specially designed PTFE seal creates a tight barrier between the body and the knife gate, preventing any leakage to the atmosphere.",
  },
  {
    icon: Thermometer,
    title: "Wide Temperature Range",
    desc: "Packing options cover service temperatures from ambient up to 650°C (1202°F), suitable for cryogenic through high-temperature processes.",
  },
  {
    icon: Wrench,
    title: "Easy Access & Replacement",
    desc: "The packing is located in an easily accessible position and can be replaced without dismantling the valve from the pipeline — minimising downtime.",
  },
  {
    icon: RotateCcw,
    title: "Greased for Smooth Operation",
    desc: "Factory-applied greased packing assists valve operation during opening and closing, reducing actuation force and extending seal life.",
  },
];

export default function GlandPacking() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-background min-h-screen pt-24"
    >
      <Navbar />

      {/* Page header */}
      <div className="bg-secondary text-white py-14">
        <div className="container mx-auto px-4 md:px-8">
          <Link href="/design" className="inline-flex items-center text-white/60 hover:text-primary font-medium mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Design
          </Link>
          <div className="flex items-center gap-4 mb-3">
            <span className="bg-primary text-white text-sm font-bold px-4 py-1 uppercase tracking-widest">Design</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">Gland Packing</h1>
          <p className="text-white/60 mt-3 text-lg max-w-xl">
            A detailed overview of Scanflo's packing system — designed for zero leakage, easy maintenance, and a wide range of process temperatures.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-16 space-y-20">

        {/* Intro + valve image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Overview</p>
            <h2 className="text-3xl font-black text-secondary tracking-tight mb-6">
              Engineered for Zero Leakage
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              Standard packing in Scanflo Valves consists of a specially designed PTFE seal which provides tightness between the body and the knife gate, preventing any type of discharge to the atmosphere. It also has greased packing to help valve operation during the opening and closing functions.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mt-4">
              The packing is located in an easily accessible place, and can be replaced without dismantling the valve from the pipeline — significantly reducing maintenance downtime and total cost of ownership.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-muted/20 border border-border p-6 flex items-center justify-center"
          >
            <img
              src="/images/gland-packing-valve.png"
              alt="Scanflo Gland Packing Cross-Section"
              className="w-full max-w-sm object-contain"
            />
          </motion.div>
        </div>

        {/* 4 highlight cards */}
        <div>
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Key Benefits</p>
            <h2 className="text-3xl font-black text-secondary tracking-tight">Why Our Packing System Stands Out</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="border border-border p-7 bg-white hover:shadow-lg transition-shadow group"
                >
                  <div className="bg-primary/10 p-3 w-fit mb-5 group-hover:bg-primary transition-colors">
                    <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-black text-secondary text-base mb-2">{h.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{h.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Temperature range table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6 border-b border-border pb-4 flex items-center gap-3">
            <Thermometer className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-black text-secondary uppercase tracking-tight">
              Maximum Temperature Range by Packing Type
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left px-6 py-3 font-bold uppercase tracking-wider">Packing Type</th>
                  <th className="text-center px-6 py-3 font-bold uppercase tracking-wider">Max Temp (°F)</th>
                  <th className="text-center px-6 py-3 font-bold uppercase tracking-wider">Max Temp (°C)</th>
                  <th className="text-left px-6 py-3 font-bold uppercase tracking-wider hidden md:table-cell">Application Note</th>
                </tr>
              </thead>
              <tbody>
                {packingTypes.map((row, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.06 }}
                    className={i % 2 === 0 ? "bg-muted/30" : "bg-white"}
                  >
                    <td className="px-6 py-4 font-semibold text-secondary border-b border-border">{row.type}</td>
                    <td className="px-6 py-4 text-center font-black text-primary border-b border-border">{row.maxF}</td>
                    <td className="px-6 py-4 text-center font-black text-secondary border-b border-border">{row.maxC}</td>
                    <td className="px-6 py-4 text-muted-foreground border-b border-border hidden md:table-cell">{row.note}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            ® Viton is a registered trademark of DuPont Performance Elastomers.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-secondary text-white p-12 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-2xl font-black mb-2">Need a specific packing material?</h3>
            <p className="text-white/70">Our team will recommend the right packing type for your process fluid and temperature range.</p>
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
