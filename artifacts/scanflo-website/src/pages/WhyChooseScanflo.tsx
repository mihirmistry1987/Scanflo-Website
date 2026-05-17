import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Cog, FlaskConical, Package, Ruler, ShieldCheck, Zap, CheckCircle2, Globe, Award, Factory, Users } from "lucide-react";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import { Button } from "@/components/ui/button";

const capabilities = [
  {
    icon: Package,
    title: "Foundry",
    desc: "We cast our own valve bodies and other components — keeping a close check on the quality of castings along with an eye on cost efficiency.",
  },
  {
    icon: Ruler,
    title: "Raw Material",
    desc: "We use quality stainless steel from Jindal Steel Ltd., Tata Steel, or Arcelor Mittal. Quality products with long-lasting service life can only be achieved when the right materials are used.",
  },
  {
    icon: Cog,
    title: "Designing",
    desc: "Driven by skilled engineers, we craft valves that exceed industry standards — blending innovation with functionality from CAD models through to the final product.",
  },
  {
    icon: Zap,
    title: "Machining",
    desc: "We machine approximately 95% of all valve components in-house, giving us full control over accuracy, finishing, and workmanship. Our state-of-the-art machine shop runs 24 hrs × 7 days to keep pace with increasing demands.",
  },
  {
    icon: ShieldCheck,
    title: "QC / QA",
    desc: "All valve parts are inspected at every stage of manufacturing — so when all components come together, they fit perfectly and deliver a product with the highest possible service life.",
  },
  {
    icon: FlaskConical,
    title: "Testing",
    desc: "Each valve undergoes stringent quality checks as prescribed under MSS SP 81 standards. They are fit-and-forget products built for long-term, trouble-free operation.",
  },
];

const differentiators = [
  {
    icon: Factory,
    title: "In-House Foundry",
    desc: "Complete control over raw material quality from the very first pour — no outsourcing, no compromise.",
  },
  {
    icon: Award,
    title: "International Standards",
    desc: "Every valve is tested against global quality benchmarks and dispatched only after passing stringent checks.",
  },
  {
    icon: Users,
    title: "Solution Provider",
    desc: "We partner with customers to engineer to exact process needs — not just supply off-the-shelf products.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    desc: "Scanflo valves are trusted worldwide. Our repeat orders speak louder than any brochure.",
  },
];

const keyPoints = [
  "Attention to detail, strict timelines, and high quality — all within your budget.",
  "Over three decades of experience with a core technical team ready to assist at every step.",
  "Large stock of regular valve sizes maintained to reduce your inventory carrying cost.",
  "On time delivery and within budget — every time.",
];

export default function WhyChooseScanflo() {
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
          <Link href="/about" className="inline-flex items-center text-white/60 hover:text-primary font-medium mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to About Us
          </Link>
          <div className="flex items-center gap-4 mb-3">
            <span className="bg-primary text-white text-sm font-bold px-4 py-1 uppercase tracking-widest">About Us</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">Why Choose Scanflo</h1>
          <p className="text-white/60 mt-3 text-lg max-w-xl">
            From our own foundry to final dispatch — every stage of production is in our hands, ensuring quality you can rely on.
          </p>
        </div>
      </div>

      <div className="space-y-0">

        {/* 6 capability cards */}
        <section className="py-20 bg-secondary text-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">End-to-End Control</p>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight">The Scanflo Advantage</h2>
              <div className="w-16 h-1 bg-primary mx-auto mt-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((c, i) => {
                const Icon = c.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors flex flex-col"
                  >
                    <Icon className="w-11 h-11 text-primary mb-5" strokeWidth={1.5} />
                    <h3 className="text-lg font-black uppercase tracking-wide mb-3">{c.title}</h3>
                    <p className="text-white/65 text-sm leading-relaxed">{c.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4 differentiators */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">What Sets Us Apart</p>
              <h2 className="text-3xl md:text-4xl font-black text-secondary tracking-tight">Built Different, Built Better</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {differentiators.map((d, i) => {
                const Icon = d.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="border border-border p-7 hover:shadow-lg transition-shadow group"
                  >
                    <div className="bg-primary/10 p-3 w-fit mb-5 group-hover:bg-primary transition-colors">
                      <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-black text-secondary text-base mb-2">{d.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{d.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Key points strip */}
        <section className="py-14 bg-muted/40">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {keyPoints.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-4 bg-white border border-border p-6"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-secondary font-medium text-sm leading-relaxed">{point}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-secondary text-white">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center justify-between gap-6"
            >
              <div>
                <h3 className="text-2xl font-black mb-2">Ready to experience the Scanflo difference?</h3>
                <p className="text-white/60">Talk to our team and get a tailored solution for your application.</p>
              </div>
              <Link href="/contact" className="shrink-0">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none px-10 font-bold h-14 text-base">
                  Get in Touch
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

      </div>
      <Footer />
    </motion.div>
  );
}
