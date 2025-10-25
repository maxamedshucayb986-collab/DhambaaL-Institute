// src/components/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    console.log("Contact Form Data:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });


    
  };

  return (
    <section className="relative bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-center text-yellow-400"
        >
          Contact Dhambaal Institute
        </motion.h1>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-2xl space-y-5"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="w-full px-5 py-3 border rounded-xl focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full px-5 py-3 border rounded-xl focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full px-5 py-3 border rounded-xl focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          />

          <motion.button
            type="submit"
            className="bg-yellow-400 text-blue-900 font-semibold px-8 py-3 rounded-xl hover:bg-yellow-500 shadow-lg transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>

          {submitted && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-green-500 font-semibold mt-4 text-center"
            >
              Your message has been sent!
            </motion.p>
          )}
        </motion.form>
      </div>

      {/* Optional decorative shapes */}
      <div className="absolute -top-20 -left-10 w-40 h-40 bg-yellow-400 opacity-20 rounded-full animate-pulse"></div>
      <div className="absolute -bottom-20 -right-10 w-56 h-56 bg-yellow-400 opacity-15 rounded-full animate-pulse"></div>
    </section>
  );
}
