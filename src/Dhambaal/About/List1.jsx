// src/components/AboutHero1.jsx
import React from "react";
import { motion } from "framer-motion";

export default function AboutHero1() {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white py-24 overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400 leading-snug">
            Welcome to Dhambaal Institute
          </h1>
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            Dhambaal Institute is a modern learning center providing training in 
            technology, management, and life skills. Our mission is to cultivate 
            knowledgeable and innovative generations contributing to Somali society.
          </p>
          <motion.a
            href="#vision"
            className="inline-block bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-2xl transition"
            whileHover={{ scale: 1.07, y: -2 }}
          >
            Learn More
          </motion.a>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <motion.img
            src="https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/524293811_766707629648102_6156358661761878788_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=79a05cQXqdMQ7kNvwFIFA2z&_nc_oc=Adkdbi8bCFCOhXaktb0wH3JMiqUajfDAEn2xVxSFBQnUxSmH_vEIjMCj-sbHrGq_YXU&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=ajuWNtmK5IyXyitAhD3MwA&oh=00_Aff4mKxBPzMa2R6LPV4N7Gr9k9PK8C1oIC0w7rTdlXS9Zg&oe=68FC2EF3"
            alt="Dhambaal Institute Students"
            className="rounded-3xl shadow-2xl w-full object-cover hover:scale-105 transition-transform duration-500"
          />
          {/* Optional decorative shapes */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-yellow-400 rounded-full opacity-15 animate-pulse"></div>
        </motion.div>
      </div>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 opacity-50 z-0"></div>
    </section>
  );
}
