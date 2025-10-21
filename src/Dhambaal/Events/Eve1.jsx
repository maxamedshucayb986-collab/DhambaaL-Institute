// src/components/EventsHero1.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaUsers, FaStar } from "react-icons/fa";

export default function EventsHero1() {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white py-24 overflow-hidden">
      {/* Floating background circles */}
      <motion.div
        className="absolute top-10 left-10 w-48 h-48 bg-yellow-400 rounded-full mix-blend-overlay blur-3xl opacity-30"
        animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 6 }}
      ></motion.div>

      <motion.div
        className="absolute bottom-10 right-10 w-64 h-64 bg-blue-300 rounded-full mix-blend-overlay blur-3xl opacity-30"
        animate={{ y: [0, -30, 0], scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 7 }}
      ></motion.div>

      <div className="relative container mx-auto px-6 text-center">
        {/* Icon Top */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center mb-6"
        >
          <FaCalendarAlt className="text-yellow-400 text-6xl drop-shadow-lg" />
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-4 text-yellow-400 drop-shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Dhacdooyinka Dhambaal Institute
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-gray-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Ka qaybgal dhacdooyin aqooneed, tartamo, iyo tababaro xiiso leh oo ay
          Dhambaal Institute u qabato ardayda iyo bulshada. Halkan waxaad ka
          ogaan kartaa dhacdooyinka ugu xiisaha badan ee soo socda.
        </motion.p>

        {/* Icons row */}
        <motion.div
          className="flex justify-center gap-8 mb-10 text-yellow-400 text-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <FaUsers className="hover:scale-125 transition-transform duration-300" />
          <FaStar className="hover:scale-125 transition-transform duration-300" />
          <FaCalendarAlt className="hover:scale-125 transition-transform duration-300" />
        </motion.div>

        {/* Button */}
        <motion.a
          href="#all-events"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-yellow-400 text-blue-900 font-bold px-10 py-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          Daawo Dhacdooyinka
        </motion.a>
      </div>
    </section>
  );
}
