// src/components/Hero6.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function Hero6() {
  return (
    <section className="bg-white text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1')] bg-cover bg-center opacity-20"></div>
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
          className="text-gray-900 text-lg mb-8 max-w-2xl mx-auto"
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
