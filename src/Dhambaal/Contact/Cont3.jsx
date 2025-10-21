import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function GoogleMap() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      {/* Cinwaanka */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="text-2xl font-bold mb-6 text-center text-blue-500 flex items-center justify-center gap-2"
      >
        <FaMapMarkerAlt className="text-red-500 text-3xl" />
        Our Location
      </motion.h2>

      {/* Map-ka Dhambaal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: "spring" }}
        className="overflow-hidden rounded-xl shadow-lg"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7974.594459168736!2d45.307529743472905!3d2.0369397417789328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3d584310b66e140b%3A0x8cb11db5a350c60a!2sDhambaal%20Advertising%20Agency!5e0!3m2!1sen!2sso!4v1760971787486!5m2!1sen!2sso"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-xl shadow-2xl"
        ></iframe>
      </motion.div>
    </section>
  );
}
