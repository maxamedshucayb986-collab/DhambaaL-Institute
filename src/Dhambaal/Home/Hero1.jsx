// src/components/Hero1.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero1() {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white overflow-hidden py-28">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12 relative z-10">

        {/* LEFT TEXT */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Ku soo dhowow <span className="text-yellow-400">Dhambaal Institute</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
            Machad hormuud ah oo bixiya tababaro casri ah oo xirfadeed, 
            barnaamijyo IT, luuqado, iyo xirfado shaqo oo la jaanqaadaya suuqa.
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center md:justify-start">
            <Link
              to="/courses"
              className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-2xl hover:bg-yellow-300 transition transform hover:-translate-y-1"
            >
              Baro Koorsooyinka
            </Link>
            <Link
              to="/about"
              className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-700 font-semibold transition transform hover:-translate-y-1"
            >
              Nagu Saabsan
            </Link>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="flex-1 flex justify-center relative"
          initial={{ opacity: 0, x: 80, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src="https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/558763706_832977659687765_3797915818825958020_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=lspBDwDBH3IQ7kNvwFeqFZU&_nc_oc=AdnE3w1JfmgsOlK5r6PjIEeh6r3NhDmKCpHghcLh4VQV2YPaNXtQ_5hkqhEHludmZIs&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=HvtR3MdpG8Mo7eBFdLwxQw&oh=00_Afdcj-voEeupwGeYLAnfPLbHupk-s9xefdFX4PIR0fzUTQ&oe=6902E185"
            alt="Dhambaal Institute Students"
            className="rounded-3xl shadow-2xl w-full md:w-4/5 object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
          {/* Decorative shapes */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-yellow-400 opacity-20 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-yellow-400 opacity-15 rounded-full animate-pulse"></div>
        </motion.div>

      </div>

      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 opacity-50 z-0"></div>
    </section>
  );
}
