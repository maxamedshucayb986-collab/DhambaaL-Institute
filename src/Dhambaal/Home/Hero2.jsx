// src/components/Hero2.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaChalkboardTeacher, FaGlobeAfrica } from "react-icons/fa";

export default function Hero2() {
  const features = [
    {
      id: 1,
      icon: <FaLaptopCode className="text-yellow-400 text-4xl mb-4" />,
      title: "Tababaro Casri ah",
      desc: "Waxaan bixinaa koorsooyin IT, barnaamijyo xirfadeed iyo luuqado, si ardaydu ula jaanqaadaan suuqa shaqada casriga ah.",
    },
    {
      id: 2,
      icon: <FaChalkboardTeacher className="text-yellow-400 text-4xl mb-4" />,
      title: "Macalimiin Khibrad Leh",
      desc: "Kooxdayada waxbarista waa khubaro sare oo la tijaabiyey, una heelan inay bixiyaan waxbarasho tayo leh.",
    },
    {
      id: 3,
      icon: <FaGlobeAfrica className="text-yellow-400 text-4xl mb-4" />,
      title: "Isku xirnaan Caalami ah",
      desc: "Dhambaal Institute waxay xiriir la leedahay jaamacado iyo hay’ado kale oo caalami ah si loo kordhiyo fursadaha ardayda.",
    },
  ];
  

  return (
    <section className="py-20 bg-white text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-blue-800 mb-8"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Maxaa Dhambaal Institute kaa siiya?
      </motion.h2>

      <div className="container mx-auto px-6 grid gap-10 md:grid-cols-3">
        {features.map((item, index) => (
          <motion.div
            key={item.id}
            className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white p-8 rounded-2xl shadow-lg hover:scale-105 transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {item.icon}
            <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-200 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
