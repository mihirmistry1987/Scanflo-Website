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
                className="bg-card border border-border p-8 text-center group hover:border-primary transition-colors cursor-pointer"
              >
                <div className="w-16 h-16 mx-auto bg-muted rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <Icon className="w-8 h-8 text-secondary group-hover:text-primary transition-colors" />
                </div>
                <h4 className="font-bold text-secondary text-sm md:text-base">{ind.name}</h4>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
