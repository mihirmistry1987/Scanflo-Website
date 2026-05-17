import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Link } from "wouter";

export default function FloatingCTA() {
  return (
    <Link href="/contact">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-6 right-6 z-50 cursor-pointer group"
        data-testid="floating-cta"
      >
        <div className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:shadow-[#25D366]/40 hover:scale-110 transition-all duration-300">
          <MessageCircle size={28} />
        </div>
      </motion.div>
    </Link>
  );
}
