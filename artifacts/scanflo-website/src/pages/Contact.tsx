import { motion } from "framer-motion";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import ContactSection from "@/sections/Contact";

export default function ContactPage() {
  const isCatalogueRequest =
    typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).get("download") === "catalogue";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-background min-h-screen pt-20"
    >
      <Navbar />
      <div className="bg-secondary py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
          {isCatalogueRequest ? "Download Catalogue" : "Contact Us"}
        </h1>
      </div>
      <ContactSection catalogueDownload={isCatalogueRequest} />
      <Footer />
    </motion.div>
  );
}
