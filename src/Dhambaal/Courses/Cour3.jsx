// src/components/CoursesHero3.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaHome,
  FaPaintBrush,
  FaVideo,
  FaBullhorn,
  FaCube,
  FaCamera,
} from "react-icons/fa";

export default function CoursesHero3() {
  const skills = [
    {
      id: 1,
      title: "Interior Design",
      icon: <FaHome className="text-blue-600 text-5xl mb-4" />,
      desc: "Baro naqshadaynta gudaha ee casriga ah — sida loo qorsheeyo midabada, nalalka, iyo qaabka guryaha iyo xafiisyada.",
    },
    {
      id: 2,
      title: "Graphic Design",
      icon: <FaPaintBrush className="text-pink-600 text-5xl mb-4" />,
      desc: "Naqshadee content soo jiidasho leh adigoo adeegsanaya Photoshop, Illustrator, iyo Figma.",
    },
    {
      id: 3,
      title: "Video Editing",
      icon: <FaVideo className="text-red-600 text-5xl mb-4" />,
      desc: "Baro tafatirka muuqaalada iyo abuurista videos xirfad leh oo tayo sare leh.",
    },
    {
      id: 4,
      title: "Social Media Marketing",
      icon: <FaBullhorn className="text-green-600 text-5xl mb-4" />,
      desc: "Soo saar istiraatiijiyo suuqgeyn ah oo kor u qaada sumcadda iyo helitaanka macaamiisha.",
    },
    {
      id: 5,
      title: "Motion Graphics",
      icon: <FaCube className="text-purple-600 text-5xl mb-4" />,
      desc: "Samee animation-yo hal-abuur leh iyo motion designs adigoo adeegsanaya After Effects.",
    },
    {
      id: 6,
      title: "Visual Content Creation",
      icon: <FaCamera className="text-yellow-500 text-5xl mb-4" />,
      desc: "Abuur muuqaalo iyo sawirro soo jiidasho leh si loo xoojiyo astaanta (brand identity).",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-blue-50">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-blue-800"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Xirfadaha Ardayda Dhambaal Institute
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                {skill.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">{skill.title}</h3>
              <p className="text-gray-600 text-sm">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
