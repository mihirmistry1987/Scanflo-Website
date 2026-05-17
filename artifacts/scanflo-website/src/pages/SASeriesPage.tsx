import { motion } from "framer-motion";
import { Link } from "wouter";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

const features = [
  "One piece body design with internal cast in gate wedges and guides for tighter shut off.",
  "Full port design for greater flow capacity & minimal pressure drop.",
  "Stainless steel gate grinded on both sides to avoid jamming and seat damage.",
  "Standard metal to metal seat (Optional: metal to soft seated).",
  "O' port as standard. Other options: V port, special materials, fabricated valves.",
];

const materials = [
  { part: "Body", material: "CF8, CF8M" },
  { part: "Gate", material: "SS304, SS316" },
  { part: "Seat", material: "Metal Seat / Soft Seat" },
  { part: "Packing", material: "PTFE Impregnated Fibre" },
  { part: "Gland Follower", material: "CF8, CF8M" },
  { part: "Stem", material: "SS304" },
  { part: "Stem Nut", material: "Forged PB" },
  { part: "Yoke", material: "Carbon Steel" },
  { part: "Seat Ring", material: "SS304, SS316" },
  { part: "Actuation", material: "Manual" },
  { part: "Handwheel", material: "SG Iron" },
  { part: "Stem Cover", material: "Carbon Steel" },
];

export default function SASeriesPage() {
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
          <Link href="/products" className="inline-flex items-center text-white/60 hover:text-primary font-medium mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Products
          </Link>
          <div className="flex items-center gap-4 mb-3">
            <span className="bg-primary text-white text-sm font-bold px-4 py-1 uppercase tracking-widest">SA Series</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">Uni-Directional Knife Gate Valve</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-16 space-y-16">

        {/* Hero: image + description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-muted/30 border border-border p-8 flex items-center justify-center"
          >
            <img
              src="/images/uni-directional-valve.jpg"
              alt="SA Series Uni-Directional Knife Gate Valve"
              className="w-full max-w-md object-contain"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <p className="text-muted-foreground text-base leading-relaxed">
                The SA model knife gate valve is a Uni-Directional wafer type valve designed for general industrial service applications. The knife gate fits tightly with seat and the movements between gate &amp; seat offers shear cutting forces and self-cleaning function which makes it suitable for pulp &amp; medium containing fiber.
              </p>
            </div>

            {/* Features */}
            <div className="border-t border-border pt-6">
              <h3 className="font-bold text-secondary text-lg uppercase tracking-wide mb-4">Features</h3>
              <ul className="space-y-3">
                {features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick specs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-muted/40 border border-border p-4">
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Size Range</p>
                <p className="text-sm font-semibold text-secondary">2″ (50 NB) to 28″ (700 NB)</p>
              </div>
              <div className="bg-muted/40 border border-border p-4">
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Flange Standard</p>
                <p className="text-sm font-semibold text-secondary">ASME B16.5 CL150 / DIN PN10 / PN16</p>
              </div>
              <div className="bg-muted/40 border border-border p-4">
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Actuation</p>
                <p className="text-sm font-semibold text-secondary">Manual, Pneumatic, Electric &amp; more</p>
              </div>
            </div>

            {/* Actuator options */}
            <div className="border-t border-border pt-6">
              <h3 className="font-bold text-secondary text-base uppercase tracking-wide mb-2">Actuator Options</h3>
              <p className="text-muted-foreground text-sm">Manual Handwheel, Pneumatic, Bevel Gearbox, Hand Lever, Hydraulic, Electric, Chainwheel.</p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 font-bold h-14">
                  Request a Quote
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="rounded-none border-secondary text-secondary hover:bg-secondary hover:text-white px-8 font-bold h-14">
                Download Datasheet
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Materials table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-black text-secondary uppercase tracking-tight mb-6 border-b border-border pb-4">
            Material of Construction
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left px-6 py-3 font-bold uppercase tracking-wider">Part</th>
                  <th className="text-left px-6 py-3 font-bold uppercase tracking-wider">Material of Construction</th>
                </tr>
              </thead>
              <tbody>
                {materials.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-muted/30" : "bg-white"}>
                    <td className="px-6 py-3 font-semibold text-secondary border-b border-border">{row.part}</td>
                    <td className="px-6 py-3 text-muted-foreground border-b border-border">{row.material}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-secondary text-white p-12 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-2xl font-black mb-2">Need a custom size or material?</h3>
            <p className="text-white/70">Our engineers can design SA Series valves to your exact process requirements.</p>
          </div>
          <Link href="/contact" className="shrink-0">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none px-10 font-bold h-14 text-base">
              Contact Our Team
            </Button>
          </Link>
        </motion.div>

      </div>
      <Footer />
    </motion.div>
  );
}
