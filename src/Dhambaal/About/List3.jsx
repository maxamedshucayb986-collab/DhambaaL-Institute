// src/components/AboutHero3.jsx
import React from "react";
import { motion } from "framer-motion";

export default function AboutHero3() {
  const team = [
    {
      id: 1,
      name: "Abdirahem_bin Kassim",
      // role: "Founder & CEO",
      img: "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/561262143_832927436359454_6472442505058557016_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=OebyFMHMfdYQ7kNvwFn1WUM&_nc_oc=AdkgLi1MTGHi2lzi5ScOywK5IxkbwK-dqPmG8glKAoY1AWvNfNNXExLVeOXR_wJvXu8&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=7C8XssB6JfSTU0L1oME1rw&oh=00_AfdzCcWhMpUcIHeZzdWNAF95_X6pylT48kZFDRgAMMUYyg&oe=68FC0A69",
    },
    {
      id: 2,
      name: "",
      // role: "Head of IT Department",
      img: "",
    },
    {
      id: 3,
      name: "Omar Salad Nageye",
      // role: "Instructor",
      img: "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/480004662_620603460559515_4543071724125650112_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=AqrChdqo2NIQ7kNvwGIuhnU&_nc_oc=AdlIcjowFyXwVIOAleVZNeFU68ue0KGjKgtgyqRa7IcfLkrIUFUoYIGrSVC3XxVs_KU&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=8ptMxXaJApRRxMRcx6KfiQ&oh=00_AfeSTFcjo174BoCNYYAx4q3a1wp55cXz4pZMqP65JGiESQ&oe=68FC2437",
    },
    {
      id: 4,
      name: "",
      // role: "Student Affairs Manager",
      img: "",
    },
  ];

  return (
    <section className="py-20 bg-blue-100 text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12 text-blue-900"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Kooxda Dhambaal Institute
      </motion.h2>

      <div className="container mx-auto px-6 grid gap-10 md:grid-cols-4">
        {team.map((member, index) => (
          <motion.div
            key={member.id}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-blue-800">{member.name}</h3>
            <p className="text-gray-600 text-sm">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
