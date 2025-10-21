// src/components/AboutHero4.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

export default function AboutHero4() {
  const testimonials = [
    {
      id: 1,
      name: "Abdirahman Kaahiye ",
      img: "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/533479962_122254105250024387_5738558061551332473_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=gfuOze6iJTwQ7kNvwFpYvhS&_nc_oc=AdnasvFy2bqlJvy1rnfva14xB2OPQUnSh7aQmLnuptzH-Pn67YjNtzfk2ulJ7qIHc2Q&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=Zhd5_iy3GpaLFCWpnZnlyA&oh=00_Afdgs8qOrhbz9D5YsOGM_9O-lTm87pAsALb6f73jwmA9Rg&oe=68FC6112",
      text: "Dhambaal Institute waxay iga dhigtay qof xirfad leh oo kalsooni badan. Tababaradooda waa kuwo tayo sare leh.",
    },
    {
      id: 2,
      name: "Farxaan Maxamuud Cali (Shabellka)",
      img: "",
      text: "Macallimiintu waa khibrad leh, jawiga waxbarashaduna waa mid dhiirrigeliya hal-abuurka.",
    },
    {
      id: 3,
      name: "Nimco Axmed",
      img: "",
      text: "Waxaan bartay xirfado IT ah oo aan hadda shaqo ku helay. Dhambaal waa goob lagu horumaro.",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-10 text-blue-800"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Guulaha Ardayda
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <FaQuoteLeft className="text-blue-600 text-3xl mb-4 mx-auto" />
              <p className="text-gray-700 italic mb-6">"{item.text}"</p>
              <img
                src={item.img}
                alt={item.name}
                className="w-16 h-16 rounded-full mx-auto mb-2"
              />
              <h3 className="text-lg font-semibold text-blue-800">
                {item.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
