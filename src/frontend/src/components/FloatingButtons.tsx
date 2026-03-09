import { Phone } from "lucide-react";
import { motion } from "motion/react";
import { SiWhatsapp } from "react-icons/si";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col gap-3">
      {/* Call Button */}
      <motion.a
        href="tel:07057427575"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
        className="w-13 h-13 flex items-center justify-center bg-primary text-primary-foreground rounded-full shadow-float hover:bg-primary/90 transition-colors float-btn"
        aria-label="Call Kastura Veg"
        data-ocid="float.primary_button"
        style={{ width: "52px", height: "52px" }}
      >
        <Phone className="w-5 h-5" />
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/917057427575"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.8, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
        className="w-13 h-13 flex items-center justify-center bg-green-500 text-white rounded-full shadow-float hover:bg-green-600 transition-colors"
        aria-label="WhatsApp Kastura Veg"
        data-ocid="float.primary_button"
        style={{ width: "52px", height: "52px" }}
      >
        <SiWhatsapp className="w-5 h-5" />
      </motion.a>
    </div>
  );
}
