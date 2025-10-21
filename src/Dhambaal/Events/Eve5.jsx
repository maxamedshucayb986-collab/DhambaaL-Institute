// src/components/CoursesHero5.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

export default function CoursesHero5() {
  const [email, setEmail] = useState("");
  const [showMsg, setShowMsg] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowMsg(true);
    setEmail("");

    // Ka qarso fariinta 4 ilbidhiqsi kadib
    setTimeout(() => setShowMsg(false), 4000);
  };

  return (
    <section className="bg-white text-black py-20 relative overflow-hidden">
      {/* Background cad & nadiif ah */}
      <div className="absolute inset-0 bg-white"></div>

      <div className="relative container mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-6 text-yellow-400"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Ku Soo Biir Newsletter-keena Koorsooyinka!
        </motion.h2>

        <motion.p
          className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Heli wargelin ku saabsan koorsooyinka cusub, seminaaro, iyo fursadaha tababarka.
          Ha moogaan fursadaha horumarkaaga!
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="flex justify-center gap-3 max-w-md mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email-kaaga"
            className="w-full px-4 py-3 rounded-l-full text-blue-900 font-semibold focus:outline-none border border-yellow-300"
          />
          <button
            type="submit"
            className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-r-full font-semibold flex items-center gap-2 hover:scale-105 transition"
          >
            Dir <FaPaperPlane />
          </button>
        </motion.form>
      </div>

      {/* Fariin hoos ka soo kacaysa (toast style) */}
      <AnimatePresence>
        {showMsg && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-8 py-4 rounded-xs shadow-2xl font-semibold text-lg"
          >
            Mahadsanid! Email-kaaga waa la diiwaangeliyay ✅
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
