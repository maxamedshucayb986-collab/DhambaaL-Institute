// src/components/AboutHero3.jsx
import React from "react";
import { motion } from "framer-motion";

export default function AboutHero3() {
  const team = [
    {
      id: 1,
      name: "Abdirahem_bin Kassim",
      // role: "Founder & CEO",
      img: "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/561262143_832927436359454_6472442505058557016_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=yyzLrky1AyUQ7kNvwGqKEmJ&_nc_oc=AdnnJyJdGY92ruNxC3iobhFWXilmBPDV5FhiXD725mDIQaX_KfWalYuqYSx_8Jql9pQ&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=NMbIeIdk7Zbop7TjsFe1AQ&oh=00_Afdu7h-P2P86EMTq_EIY1Rbv_te3hi3BmiDGF6BZHgMUMg&oe=6902DA29",
    },
    {
      id: 2,
      name: "Fartun Hassan Osman  (kalsoon)",
      // role: "Head of IT Department",
      img: "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-1/465676783_1996895764144282_1430197644317868996_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=1d2534&_nc_ohc=2waug4pVaQUQ7kNvwHUbpYS&_nc_oc=AdlQk0FuI7PuvqIXds1KIOiAWE2dOFioFNXpnO7ZFKgHRuQ4rtOUbJYJfBDS492xO3Y&_nc_zt=24&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=Me4xMkAvx-WQO_FFFCJw7Q&oh=00_AfcLhfj93XI7-x-YbblP3WvGzJ3b_MLfEDfJ_WqN9asDfQ&oe=68FD8513",
    },
    {
      id: 3,
      name: "Omar Salad Nageye",
      // role: "Instructor",
      img: "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-1/470575654_580990971187431_470691080711099836_n.jpg?stp=c165.0.1765.1765a_dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=1d2534&_nc_ohc=qes4cLNcGWcQ7kNvwE2k1UC&_nc_oc=AdlnH4nrQJrH5N5OoVunwjGBleqZobqKQrxSihxOEwYxktUZSTa1wuhpz50ipbYUkPg&_nc_zt=24&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=h0319sIvsDXcdj7IVlVD2w&oh=00_AfdyzhNyc1H6_bJFGMFmr7_xMhYvQX2k9NlzNXwUgRDU5A&oe=6902C977",
    },
    {
      id: 4,
      name: "Suldan Abdi wahid Ali ",
      // role: "Student Affairs Manager",
      img: "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-1/499786046_1786232455611356_6393000264500671788_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=1d2534&_nc_ohc=-mheGts_hg0Q7kNvwFcit2Q&_nc_oc=AdnnTvEeGTpw6I1v-AgfTVfPdAQf25TyploByphEKxDhoOi0qv_VB8SipQImBwUgodw&_nc_zt=24&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=NAKr9DIy4W6UgIntio6R2w&oh=00_AfdWexBjWOKxN_Q7G-sTDh6zWxUah9YfZfjLQzX3h03c5A&oe=68FDAF39",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12 text-yellow-400"
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
