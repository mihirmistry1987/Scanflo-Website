import { motion } from "framer-motion";
import { Cog, FlaskConical, Package, Ruler, ShieldCheck, Zap } from "lucide-react";

const features = [
  {
    icon: Package,
    title: "Foundry",
    desc: "We cast our own valve bodies and other components. Keeping a check on the quality of the castings along with an eye on the cost.",
  },
  {
    icon: Ruler,
    title: "Raw Material",
    desc: "We use quality stainless steel of Jindal Steel Ltd., Tata Steel or Arcelor Mittal. Quality products with long lasting service life can be achieved only if the right material are used.",
  },
  {
    icon: Cog,
    title: "Designing",
    desc: "Driven by skilled engineers, we craft valves that exceed industry standards — blending innovation with functionality from CAD models to the final product.",
  },
  {
    icon: Zap,
    title: "Machining",
    desc: "We machine almost 95% of all the valve components in-house thereby having full control on the accuracy, finishing & workmanship. Our state-of-the-art machine shop runs 24 hrs × 7 days to keep up to the increasing demands.",
  },
  {
    icon: ShieldCheck,
    title: "QC/QA Dept",
    desc: "All valve parts are inspected at every stage of manufacturing so that when all the parts come together they fit in perfectly and deliver a product with highest service life.",
  },
  {
    icon: FlaskConical,
    title: "Testing",
    desc: "Each valve undergoes stringent quality checks as prescribed under MSS SP 81 standards. They are fit and forget products.",
  },
];

export default function WhyScanflo() {
  return (
    <section className="py-24 bg-[#F58220]" data-testid="section-why-scanflo">
      <div className="container mx-auto px-4 md:px-8">

        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-sm font-bold text-white/80 tracking-widest uppercase mb-4">Why Choose Us</h2>
          <h3 className="text-4xl font-black tracking-tight mb-6 text-white">
            The Scanflo Advantage
          </h3>
          <div className="w-20 h-1 bg-white mx-auto" />
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white border border-white/20 p-8 hover:shadow-lg transition-shadow flex flex-col"
            >
              <feature.icon className="w-12 h-12 text-[#F58220] mb-6" strokeWidth={1.5} />
              <h4 className="text-xl font-bold mb-3 uppercase tracking-wide text-secondary">{feature.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
