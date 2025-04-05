"use client";

import { motion } from "framer-motion";

export default function CTAButton() {
  return (
    <motion.a
      href="#contact"
      className="inline-block px-8 py-4 mt-8 text-lg font-semibold rounded-lg shadow-lg hover:scale-105 transition-all bg-primary cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      Start Your Project
    </motion.a>
  );
}
