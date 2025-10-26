// src/components/AboutHero4.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

export default function AboutHero4() {
  const testimonials = [
    {
      id: 1,
      name: "Abdirahman Kaahiye ",
      img: "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-1/541818634_122256853382024387_4315962630133660139_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=1d2534&_nc_ohc=EV3x0S7fhlYQ7kNvwE7z48b&_nc_oc=Adn5283Vbrc4Ot0UzTapLWbaiSADhtJw4z1HqJGctN9BH0yauyb94fLliMDFXKyfP2c&_nc_zt=24&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=c5Ed55ttdsJNUE0gbNE1PA&oh=00_AffTEQh-aznyBbtge23XFS2_o5OeZmvfkAuGnpsFxwYvYA&oe=6902F031",
      text: "Dhambaal Institute waxay iga dhigtay qof xirfad leh oo kalsooni badan. Tababaradooda waa kuwo tayo sare leh.",
    },
    {
      id: 2,
      name: "Farxaan Maxamuud Cali (Shabellka)",
      img: "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-1/527344702_2390070461387833_5722004722974373808_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=103&ccb=1-7&_nc_sid=1d2534&_nc_ohc=MzHyFzxg2dMQ7kNvwG-47Dq&_nc_oc=AdkuJIg2MYL8UaDBJmy3MCZAgVLOzvYoJPElzkpneNQC-9TpafCcnWufnzLVY_z2-DA&_nc_zt=24&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=48IMi3AybXp3vh0vTsEOLQ&oh=00_AffoW0WYtnL0vpDItbjqSvH1rZcuuUf996YYRaYpNoahyA&oe=6903AD4D",
      text: "Macallimiintu waa khibrad leh, jawiga waxbarashaduna waa mid dhiirrigeliya hal-abuurka.",
    },
    {
      id: 3,
      name: "Abdikarin Barre (Abdi haji)",
      img: "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-1/558863599_25035994709357923_8681270044932937802_n.jpg?stp=c90.74.1679.1678a_dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=1d2534&_nc_ohc=4ySgTF75wkYQ7kNvwGmQ1Wp&_nc_oc=AdnTrGp2tENkyX0lI5Us_MRSLp61Gh0_VGvA937CTH6cQFtGYQzaZDVAazaCgLIApuA&_nc_zt=24&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=lLJg8Tf26L0L4qG8_0VgaA&oh=00_AfdMd5KmeNPFxMkuGQi9AfHb465XiC35OSd-NPJlY7tdbA&oe=6903C1DF",
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
