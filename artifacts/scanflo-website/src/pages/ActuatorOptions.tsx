import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";

export default function ActuatorOptions() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-background min-h-screen pt-24"
    >
      <Navbar />

      <div className="bg-secondary text-white py-14">
        <div className="container mx-auto px-4 md:px-8">
          <Link
            href="/design"
            className="inline-flex items-center text-white/60 hover:text-primary font-medium mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Design
          </Link>
          <div className="flex items-center gap-4 mb-3">
            <span className="bg-primary text-white text-sm font-bold px-4 py-1 uppercase tracking-widest">
              Design
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">Actuator Options</h1>
          <p className="text-white/60 mt-3 text-lg max-w-xl">
            Select the actuator configuration that best matches your valve application and operating requirements.
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 md:px-8 py-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Actuation Solutions</p>
            <h2 className="text-3xl md:text-4xl font-black text-secondary tracking-tight">Actuator Options</h2>
          </div>
          <div className="bg-white border border-border p-4 md:p-8 flex items-center justify-center">
            <img
              src="/images/actuator-options-latest.png"
              alt="Scanflo Knife Gate Valve Actuator Options"
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.section>
      </main>

      <Footer />
    </motion.div>
  );
}