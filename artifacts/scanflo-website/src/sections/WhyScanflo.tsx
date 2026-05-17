import { motion } from "framer-motion";
import { CheckCircle2, Cog, Factory, ShieldCheck, Globe, Wrench, Settings } from "lucide-react";

const features = [
  { icon: Cog, title: "Precision Engineering", desc: "Tolerances strictly controlled for perfect sealing" },
  { icon: ShieldCheck, title: "Superior Quality", desc: "Only the highest grade raw materials used" },
  { icon: Factory, title: "In-house Manufacturing", desc: "Complete control from casting to assembly" },
  { icon: Settings, title: "Long Service Life", desc: "Built to outlast standard industry valves" },
  { icon: CheckCircle2, title: "Strict Quality Checks", desc: "100% hydrostatic and pneumatic testing" },
  { icon: Globe, title: "Global Standards", desc: "Compliant with ANSI, DIN, and AWWA" },
  { icon: Wrench, title: "Custom Engineering", desc: "Tailored solutions for unique applications" },
];

export default function WhyScanflo() {
  return (
    <section className="py-24 bg-secondary text-white" data-testid="section-why-scanflo">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Why Choose Us</h2>
          <h3 className="text-4xl font-black tracking-tight mb-6">
            The Scanflo Advantage
          </h3>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors"
            >
              <feature.icon className="w-12 h-12 text-primary mb-6" strokeWidth={1.5} />
              <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
              <p className="text-accent/80 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
