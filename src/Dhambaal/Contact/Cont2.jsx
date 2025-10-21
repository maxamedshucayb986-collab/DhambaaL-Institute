// src/components/Hero2.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe } from "react-icons/fa";

export default function Hero2() {
  const info = [
    { icon: <FaMapMarkerAlt />, label: "Address", value: "Taleh, Hodan, Mogadishu, Somalia" },
    { icon: <FaPhone />, label: "Mobile", value: "+252 61 9444614" },
    { icon: <FaEnvelope />, label: "Email", value: "dhambaalinstitute@gmail.com" },
    { icon: <FaGlobe />, label: "Website", value: "http://www.dhambaalacademy.so/" },
  ];

  return (
    <section className="relative bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white py-28 overflow-hidden">
      <div className="container mx-auto px-6 text-center md:text-left">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-yellow-400"
        >
          Get in Touch with Dhambaal Institute
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {info.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex items-center gap-4 bg-white text-yellow-400 bg-opacity-10 p-5 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <div className="text-yellow-400 text-2xl">{item.icon}</div>
              <div className="text-left">
                <p className="font-semibold">{item.label}</p>
                <p className="text-black">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Shapes */}
      <div className="absolute -top-20 -left-10 w-36 h-36 bg-yellow-400 opacity-20 rounded-full animate-pulse"></div>
      <div className="absolute -bottom-20 -right-10 w-52 h-52 bg-yellow-400 opacity-15 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-yellow-400 opacity-10 rounded-full animate-pulse"></div>
    </section>
  );
}
