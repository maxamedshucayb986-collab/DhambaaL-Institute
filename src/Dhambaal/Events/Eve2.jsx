// src/components/EventsHero2.jsx
import React from "react";
import { motion } from "framer-motion";

export default function EventsHero2() {
  const events = [
    {
      id: 1,
      title: "Seminaarka Teknoolojiyadda",
      date: "11 Oct 2025",
      desc: "Ka qayb gal seminaar ku saabsan horumarinta xirfadaha IT iyo teknoolojiyada casriga ah.",
      img: "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/558847429_832837436368454_5019718037757910918_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=iDDW1egNpDEQ7kNvwHj9Gof&_nc_oc=AdkP9Mvw41Ndt_eCs2CMtpN_yW6KdwfVFPsVWxIVvcsOlSQwDzwVF4rP6aetYHtjpTg&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=S6C4EOYG4nE2pc8l3K7ukQ&oh=00_AfdeUPhuR60p1OpyZzNqb9mVH95jl-v_hzloYymvYjqFCQ&oe=6902D390",
    },
    {
      id: 2,
      title: "Tartanka Ardayda",
      date: "27 Aug 2025",
      desc: "Dhacdo tartan ah oo ardaydu ku soo bandhigayaan mashruucyadooda iyo hal-abuurkooda.",
      img: "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/540832622_794303496888515_2734282336282993440_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=RdupsDvgHDsQ7kNvwEX2wmq&_nc_oc=Adnp_NbAaT4iaCTccOhzxBL3vEPsxmLZyogBG3U1qUcO8a3Kf91guDMqhToLeKzn-OE&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=SWB-m-d8AVGPlRIFmKKvoA&oh=00_AfftW6xfr9qtWvZ4xoLuiXMJ7EUoCiu_TpE1L8FDgyz_Kw&oe=6902E4DB",
    },
    {
      id: 3,
      title: "Dhacdo: Maalinta Hal-abuurka Dhambaal",
      date: "27 Feb 2025",
      desc: "Maalin lagu xusayo hal-abuurka iyo kartida ardayda Dhambaal Institute, halkaas oo lagu soo bandhigayo shaqooyin ardaydu sameeyeen sida design, video editing iyo motion graphics.",
      img: "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/487142445_672556502396549_2775339146221983635_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=E8pmdpuOZj8Q7kNvwHFxYMU&_nc_oc=AdmWKX2qrZ_3YLc1O55EwAaZSamYlfzzcKWxDnPhdtuIDANnJ-BnPBIfrZwp9siA62w&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=G6zjkh9RMkhLBQtzj65nfw&oh=00_AffzoCsWIGuhiJF6qDe5fublmg9At85VgXm-666whUnYxA&oe=6902CA0F",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-blue-800"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Dhacdooyinka Soo Socda
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{event.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{event.date}</p>
                <p className="text-gray-700 text-sm">{event.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
