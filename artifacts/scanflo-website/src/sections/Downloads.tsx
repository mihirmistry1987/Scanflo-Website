import { motion } from "framer-motion";
import { FileText, Download, Settings, Box, BookOpen, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const downloads = [
  { icon: BookOpen, title: "Product Catalog", desc: "Complete 2024 product range and specifications" },
  { icon: FileText, title: "Technical Datasheets", desc: "Detailed specs for all valve series" },
  { icon: Settings, title: "Installation Manuals", desc: "Step-by-step installation guides" },
  { icon: Box, title: "CAD Drawings", desc: "2D and 3D models for engineering integration" },
  { icon: ShieldCheck, title: "Certifications", desc: "ISO 9001 and compliance certificates" },
];

export default function Downloads() {
  return (
    <section className="py-24 bg-white" data-testid="section-downloads">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b pb-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Resource Center</h2>
            <h3 className="text-4xl font-black text-secondary tracking-tight">
              Technical Documentation
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {downloads.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex flex-col justify-between p-8 border border-border bg-card hover:shadow-lg transition-all"
            >
              <div>
                <item.icon className="w-10 h-10 text-primary mb-6" strokeWidth={1.5} />
                <h4 className="text-xl font-bold text-secondary mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm mb-6">{item.desc}</p>
              </div>
              <Button variant="outline" className="w-full justify-between rounded-none border-border group hover:border-primary hover:bg-transparent hover:text-primary">
                Download <Download className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
