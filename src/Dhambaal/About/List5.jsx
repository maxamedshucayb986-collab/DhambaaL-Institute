// src/components/AboutHero5.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function AboutHero5() {
  return (
    <section className="bg-blue-900 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596496052193-626d6e0d1766')] bg-cover bg-center opacity-20"></div>
      <div className="relative container mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-6 text-yellow-400"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Ku Soo Biir Dhambaal Institute Maanta!
        </motion.h2>

        <motion.p
          className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Haddii aad rabto inaad barato xirfado casri ah, teknoolojiyad, iyo maamul  
          horumarsan — Dhambaal Institute waa meesha kugu habboon.  
          Noloshaada waxbarasho ha noqoto mid tayo leh!
        </motion.p>

        <motion.a
          href="#contact"
          className="inline-flex items-center gap-3 bg-yellow-400 text-blue-900 font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Isdiiwaangeli Hadda <FaArrowRight />
        </motion.a>
      </div>
    </section>
  );
}
