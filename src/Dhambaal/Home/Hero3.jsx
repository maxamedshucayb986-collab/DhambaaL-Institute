// src/components/Hero3.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaVideo,
  FaPaintBrush,
  FaFilm,
  FaCouch,
  FaBullhorn,
  FaCameraRetro,
} from "react-icons/fa";

export default function Hero3() {
  const skills = [
    {
      id: 1,
      icon: <FaVideo className="text-4xl text-yellow-400 mb-4" />,
      title: "Video Editing",
      desc: "Baro farsamada tafatirka muuqaalada si xirfad leh, adigoo adeegsanaya software sida Adobe Premiere iyo DaVinci Resolve.",
    },
    {
      id: 2,
      icon: <FaPaintBrush className="text-4xl text-yellow-400 mb-4" />,
      title: "Graphic Design",
      desc: "Naqshadee sawirro, posters, iyo brand identity xirfad sare leh adigoo isticmaalaya Adobe Photoshop & Illustrator.",
    },
    {
      id: 3,
      icon: <FaFilm className="text-4xl text-yellow-400 mb-4" />,
      title: "Graphic Motion Design",
      desc: "Samee animations iyo motion graphics soo jiidasho leh adigoo adeegsanaya After Effects iyo cinematic techniques.",
    },
    {
      id: 4,
      icon: <FaCouch className="text-4xl text-yellow-400 mb-4" />,
      title: "Interior Design",
      desc: "Bar naqshadaynta gudaha, midabeynta iyo qaabka boosaska gudaha si hal-abuur leh oo xirfad leh.",
    },
    {
      id: 5,
      icon: <FaBullhorn className="text-4xl text-yellow-400 mb-4" />,
      title: "Social Media Marketing",
      desc: "Kobci sumaddaada adigoo bartay xeeladaha suuq-geynta dijitaalka ah ee Facebook, TikTok, iyo Instagram.",
    },
    {
      id: 6,
      icon: <FaCameraRetro className="text-4xl text-yellow-400 mb-4" />,
      title: "Visual Content Creator",
      desc: "Ku baro sida loo abuuro content muuqaal ah oo hal-abuur leh, laga bilaabo sawir ilaa video production.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-200 text-center overflow-hidden">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-blue-800 mb-10"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Xirfadaha Laga Barto Dhambaal Institute
      </motion.h2>

      <div className="container mx-auto px-6 grid gap-10 md:grid-cols-3">
        {skills.map((item, index) => (
          <motion.div
            key={item.id}
            className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition transform"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              {item.icon}
            </motion.div>
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <button className="bg-blue-800 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
          Daawo Faahfaahinta Xirfadahan
        </button>
      </motion.div>
    </section>
  );
}
