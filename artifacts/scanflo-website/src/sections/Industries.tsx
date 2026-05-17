import { motion } from "framer-motion";
import { industries } from "@/data/industries";
import * as Icons from "lucide-react";

export default function Industries() {
  return (
    <section className="py-24 bg-muted/30" data-testid="section-industries">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Industries Served</h2>
          <h3 className="text-4xl font-black text-secondary tracking-tight mb-6">
            Trusted Across Sectors
          </h3>
          <p className="text-lg text-muted-foreground">
            Our valves perform reliably in the most demanding industrial applications globally.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((ind, idx) => {
            const Icon = (Icons as any)[ind.icon] || Icons.Factory;
            return (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="relative group overflow-hidden cursor-pointer"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={ind.image}
                    alt={ind.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/90 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="font-bold text-white text-sm md:text-base leading-tight">{ind.name}</h4>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
