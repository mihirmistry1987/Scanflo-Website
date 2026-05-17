import { motion } from "framer-motion";
import { Link } from "wouter";
import { Check, ArrowLeft, Shield, Zap, Wrench, Layers } from "lucide-react";
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

const features = [
  {
    icon: Layers,
    title: "Body",
    label: "Monoblock Investment Cast",
    description:
      "Reinforced monoblock investment casted body delivers a full continuous flow — no cavities in open position means zero turbulence in the fluid and minimal load loss. The heavy-duty investment cast body provides outstanding abrasion resistance for the toughest liquid, slurry, and dry material handling applications. The cast body, chest and packing chamber provide long-term durability and integrity for all wetted parts.",
    highlight: "Full bore design — no cavities, no turbulence",
  },
  {
    icon: Zap,
    title: "Stainless Steel Knife",
    label: "SS304 Precision Ground",
    description:
      "The knife is precisely ground and machined to shear the flow of media passing through the valve. The SS304 knife provides optimum performance and life throughout the valve's entire service life. Our valves feature thicker, stronger knives engineered to prevent deflection under heavy pressure and to ensure a consistently tight seal — even in the most demanding slurry and abrasive services.",
    highlight: "Precision-ground for clean, consistent shut-off",
  },
  {
    icon: Wrench,
    title: "Stainless Steel Stem",
    label: "Self-Lubricating Design",
    description:
      "All valves are furnished with a stainless-steel stem that assures easy operation and dependable service. The stem moves in a phosphor-bronze (PB) nut fitted in the mounting plate of the valve. The contact area between the nut and stem can be externally lubricated through a grease nipple — so our valves never get jammed, even when left inoperated for extended periods of time.",
    highlight: "External grease nipple — zero jamming, even in long storage",
  },
  {
    icon: Shield,
    title: "Resilient Seat & Metal Seat",
    label: "Drip-Tight Shut-Off",
    description:
      "Resilient seated valves are available for applications where drip-tight shut-off is required. Unlike other valves, SCAN valves have a resilient seat designed especially for knife gate valve application. The resilient seat material is bonded into the stainless-steel seat ring. When the valve is closed, the gate is pushed against the seat and held in place by the gate jams. When the valve is open, the gate moves away from the seat, allowing operating clearance which prevents seat damage and makes operation smooth and easy.",
    highlight: "Seat bonded into SS ring — bubble-tight performance",
  },
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
      <div className="bg-secondary text-white py-14">
        <div className="container mx-auto px-4 md:px-8">
          <Link href="/design" className="inline-flex items-center text-white/60 hover:text-primary font-medium mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Design
          </Link>
          <div className="flex items-center gap-4 mb-3">
            <span className="bg-primary text-white text-sm font-bold px-4 py-1 uppercase tracking-widest">Design</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">Design &amp; Construction</h1>
          <p className="text-white/60 mt-4 text-lg max-w-2xl leading-relaxed">
            Scanflo knife gate valves are engineered for on-off and throttling applications — featuring investment cast bodies in SS304 &amp; SS316, available in sizes from 2&quot; to 24&quot; (DN 50–DN 500 mm), in both metal and resilient seated versions.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-16 space-y-24">

        {/* Feature sections */}
        <div className="space-y-6">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Engineering Detail</p>
            <h2 className="text-3xl md:text-4xl font-black text-secondary tracking-tight">What Sets Every Valve Apart</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white border border-border p-8 flex flex-col gap-5 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">{f.label}</p>
                      <h3 className="text-xl font-black text-secondary">{f.title}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
                  <div className="mt-auto pt-4 border-t border-border flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm font-semibold text-secondary">{f.highlight}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Exploded diagram + specs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
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
                Material of Construction
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
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Temperature Range", value: "-10°C to +150°C" },
                  { label: "Pressure Rating", value: "PN10 / PN16" },
                  { label: "Size Range", value: "2″ – 28″ NB" },
                  { label: "End Connection", value: "Wafer / Lug" },
                ].map((p) => (
                  <div key={p.label} className="bg-muted/40 border border-border p-5">
                    <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">{p.label}</p>
                    <p className="text-xl font-black text-secondary">{p.value}</p>
                  </div>
                ))}
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
            className="bg-muted/20 border border-border p-8 flex items-center justify-center sticky top-28"
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
