import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Products from "@/sections/Products";
import WhyScanflo from "@/sections/WhyScanflo";
import Technical from "@/sections/Technical";
import Industries from "@/sections/Industries";
import Manufacturing from "@/sections/Manufacturing";
import Downloads from "@/sections/Downloads";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-background min-h-screen font-sans"
    >
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <WhyScanflo />
        <Technical />
        <Industries />
        <Manufacturing />
        <Downloads />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </motion.div>
  );
}
