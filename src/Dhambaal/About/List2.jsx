// src/components/AboutHero2.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaBullseye, FaEye } from "react-icons/fa";

export default function AboutHero2() {
  const sections = [
    {
      id: 1,
      icon: <FaEye className="text-blue-900 text-4xl mb-4" />,
      title: "Aragtida (Vision)",
      desc: "Inuu Dhambaal Institute noqdo xarun hormuud ah oo bixisa tababaro tayo sare leh, kaas oo ardayda ka caawiya inay noqdaan xirfadlayaal iyo hal-abuur cusub oo bulshada horumarisa.",
    },
    {
      id: 2,
      icon: <FaBullseye className="text-blue-900 text-4xl mb-4" />,
      title: "Himilada (Mission)",
      desc: "Inaan siino ardayda fursado waxbarasho oo casri ah, xirfado shaqo oo la jaanqaadaya suuqa, iyo hal-abuurnimo ay ku kobciyaan mustaqbalkooda iyo bulshada.",
    },
  ];

  return (
    <section className="py-20 bg-gray-100 text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-blue-800 mb-12"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Aragtideena & Himiladeena
      </motion.h2>

      <div className="container mx-auto px-6 grid gap-10 md:grid-cols-2">
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            className="bg-white shadow-lg p-8 rounded-2xl hover:shadow-2xl transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {section.icon}
            <h3 className="text-2xl font-semibold mb-2 text-blue-900">
              {section.title}
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">{section.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
