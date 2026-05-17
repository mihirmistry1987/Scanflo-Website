import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Globe, Award, Factory, Users, Eye, Target } from "lucide-react";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import { Button } from "@/components/ui/button";


const pillars = [
  {
    icon: Factory,
    title: "In-House Foundry",
    desc: "Our own foundry in Gujarat ensures complete control over raw material quality from the very first pour.",
  },
  {
    icon: Award,
    title: "International Standards",
    desc: "Every valve undergoes stringent quality checks before dispatch, meeting global quality benchmarks.",
  },
  {
    icon: Users,
    title: "Solution Provider",
    desc: "We work with customers as a solution partner — not a mere product supplier — engineering to your exact needs.",
  },
  {
    icon: Globe,
    title: "Global Presence",
    desc: "Today Scanflo valves are trusted worldwide. Our repeat orders speak for the quality and service we deliver.",
  },
];

export default function CompanyProfile() {
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
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">Company Profile</h1>
          <p className="text-white/60 mt-3 text-lg max-w-xl">
            A wholly owned subsidiary of Scan Engineering, Vapi, Gujarat — designing and manufacturing knife gate valves for the toughest applications.
          </p>
        </div>
      </div>

      <div className="space-y-0">

        {/* Intro section — building image + text */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Who We Are</p>
                <h2 className="text-3xl md:text-4xl font-black text-secondary tracking-tight mb-6">
                  Three Decades of Valve Engineering Excellence
                </h2>
                <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
                  <p>
                    SCANFLO Valves is a wholly owned subsidiary of Scan Engineering based in Vapi, Gujarat. We specialise in designing and manufacturing knife gate valves for the toughest applications. Since establishment, SCANFLO has stayed true to its mission to produce quality products and provide application-based solutions in the field of valves.
                  </p>
                  <p>
                    With over three decades of experience backed by a state-of-the-art machining facility located in Gujarat and an in-house foundry, we are constantly meeting customer requirements in the most efficient manner. We work with our customers as a solution provider — not as a mere product supplier.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <img
                  src="/images/about-factory.png"
                  alt="Scanflo Facility"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white font-bold text-lg">Scan Engineering — Vapi, Gujarat</p>
                  <p className="text-white/70 text-sm">Plot 763/764, 40 Shed Area, GIDC Vapi</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Manufacturing section — factory floor image + text */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-2 lg:order-1 relative"
              >
                <img
                  src="/images/factory-floor.png"
                  alt="Scanflo Manufacturing Floor"
                  className="w-full h-80 object-cover border border-border"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1 lg:order-2"
              >
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Manufacturing</p>
                <h2 className="text-3xl md:text-4xl font-black text-secondary tracking-tight mb-6">
                  Foundry to Final Finish — All Under One Roof
                </h2>
                <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
                  <p>
                    With a competent production process from foundry to final metal finish, customers can be assured of quality materials and top-class manufacturing equipment being used to produce valves that offer longer service life and complete peace of mind.
                  </p>
                  <p>
                    Our team of qualified and experienced people ensures quality is maintained at each stage and the final product meets international standards. Each valve undergoes stringent quality checks before dispatch.
                  </p>
                  <p>
                    Today Scanflo valves have a global presence and the quality and service is highly appreciated by customers. Our repeat orders speak for themselves.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 4 pillars */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Our Strengths</p>
              <h2 className="text-3xl md:text-4xl font-black text-secondary tracking-tight">What Makes Scanflo Different</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="border border-border p-7 hover:shadow-lg transition-shadow group"
                  >
                    <div className="bg-primary/10 p-3 w-fit mb-5 group-hover:bg-primary transition-colors">
                      <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-black text-secondary text-lg mb-3">{p.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-14 bg-secondary text-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex items-start gap-5 px-6 py-8 md:py-0 md:pr-12"
              >
                <div className="bg-primary/20 p-3 shrink-0 mt-1">
                  <Eye className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Vision</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    To be the globally preferred choice in knife gate valve solutions — setting the industry standard for quality, durability, and innovation.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.12 }}
                className="flex items-start gap-5 px-6 py-8 md:py-0 md:pl-12"
              >
                <div className="bg-primary/20 p-3 shrink-0 mt-1">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Mission</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    To consistently deliver high-quality, tailored knife gate valve solutions for the most challenging applications — with precision, speed, and reliability.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-muted/40 border border-border p-12 flex flex-col md:flex-row items-center justify-between gap-6"
            >
              <div>
                <h3 className="text-2xl font-black text-secondary mb-2">Ready to work with us?</h3>
                <p className="text-muted-foreground">Get in touch and let us engineer the right valve solution for your process.</p>
              </div>
              <Link href="/contact" className="shrink-0">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none px-10 font-bold h-14 text-base">
                  Contact Us
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
