import { motion } from "framer-motion";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import AboutSection from "@/sections/About";
import WhyScanflo from "@/sections/WhyScanflo";
import Manufacturing from "@/sections/Manufacturing";

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-background min-h-screen pt-20"
    >
      <Navbar />
      <div className="bg-secondary py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter">About Scanflo</h1>
      </div>
      <AboutSection />
      <WhyScanflo />
      <Manufacturing />
      <Footer />
    </motion.div>
  );
}
