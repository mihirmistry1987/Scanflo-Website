import { motion } from "framer-motion";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import ProductsSection from "@/sections/Products";

export default function ProductsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-background min-h-screen pt-20"
    >
      <Navbar />
      <div className="bg-white border-b-4 border-primary py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-secondary tracking-tighter">All Products</h1>
      </div>
      <ProductsSection />
      <Footer />
    </motion.div>
  );
}
