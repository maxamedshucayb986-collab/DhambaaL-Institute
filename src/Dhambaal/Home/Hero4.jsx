// src/components/Hero4.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaMedal, FaUsers, FaLightbulb } from "react-icons/fa";

export default function Hero4() {
  const reasons = [
    {
      id: 1,
      icon: <FaMedal className="text-yellow-400 text-4xl mb-4" />,
      title: "Tayo & Kalsooni",
      desc: "Dhambaal Institute waxay caan ku tahay tayada waxbarasho iyo kalsoonida bulshada, iyadoo diiradda saareysa natiijooyin muuqda.",
    },
    {
      id: 2,
      icon: <FaUsers className="text-yellow-400 text-4xl mb-4" />,
      title: "Arday Firfircoon",
      desc: "Ardayda Dhambaal waa kuwa firfircoon, hal abuur leh, isla markaana ka qeyb qaata tartamada iyo mashaariicda aqooneed.",
    },
    {
      id: 3,
      icon: <FaLightbulb className="text-yellow-400 text-4xl mb-4" />,
      title: "Hal-abuur & Teknooloji",
      desc: "Waxaan dhiirrigelinnaa hal-abuurka iyo isticmaalka teknoolojiyadda si loo abuuro jiil cusub oo casri ah.",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-10 text-yellow-400"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Maxaad u dooranaysaa Dhambaal Institute?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {reasons.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-blue-800 p-8 rounded-2xl shadow-lg hover:scale-105 transition"
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
      </div>
    </section>
  );
}
