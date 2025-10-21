// src/components/CoursesHero1.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

export default function CoursesHero1() {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white py-24 overflow-hidden">
      {/* Background Animation Circles */}
      <motion.div
        className="absolute top-20 left-10 w-48 h-48 bg-yellow-400 rounded-full mix-blend-overlay blur-3xl opacity-30"
        animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 6 }}
      ></motion.div>

      <motion.div
        className="absolute bottom-10 right-10 w-64 h-64 bg-blue-300 rounded-full mix-blend-overlay blur-3xl opacity-30"
        animate={{ y: [0, -30, 0], scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 7 }}
      ></motion.div>

      <div className="relative container mx-auto px-6 text-center">
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center mb-6"
        >
          <FaGraduationCap className="text-yellow-400 text-6xl drop-shadow-lg" />
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-4 text-yellow-400 drop-shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Koorsooyinka Dhambaal Institute
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          className="text-gray-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Ku bilow safarka aqoonta! Dhambaal Institute waxay bixisaa koorsooyin
          xirfadeed, tababaro casri ah iyo aqoon kaa caawinaya inaad dhisto
          mustaqbal ifaya.
        </motion.p>

        {/* Button */}
        <motion.a
          href="#all-courses"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-yellow-400 text-blue-900 font-bold px-10 py-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          Daawo Koorsooyinka
        </motion.a>
      </div>
    </section>
  );
}
