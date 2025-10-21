// src/components/EventsHero2.jsx
import React from "react";
import { motion } from "framer-motion";

export default function EventsHero2() {
  const events = [
    {
      id: 1,
      title: "Seminaarka Teknoolojiyadda",
      date: "25 Oct 2025",
      desc: "Ka qayb gal seminaar ku saabsan horumarinta xirfadaha IT iyo teknoolojiyada casriga ah.",
      img: "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/558847429_832837436368454_5019718037757910918_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=p9YtvfsXL_sQ7kNvwHhPIvF&_nc_oc=AdmI3wdUhYfq1mu2iJMWvKsHcWhyerZE50ehSFKJlRLg9oi5po9K0s-1f37V7oiJkl0&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=Nd05hdOYs2g5IGxIvaB6qg&oh=00_Afert_w3NK0S4R1qdJykatyPgkZy2XACzak7YePcsm7ALg&oe=68FC3C10",
    },
    {
      id: 2,
      title: "Tartanka Ardayda",
      date: "10 Nov 2025",
      desc: "Dhacdo tartan ah oo ardaydu ku soo bandhigayaan mashruucyadooda iyo hal-abuurkooda.",
      img: "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/540832622_794303496888515_2734282336282993440_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ohv2xcLgvdIQ7kNvwFd1XEk&_nc_oc=AdnoZ8tTWkhAAoyBmEb3t8gvG_T1l_V-44xOASID3r1AOgchZE8zBxRudDoFYZxHl0o&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=K_wCfi04JPIqkZtVzjKwvQ&oh=00_AfdAUy5MVptQgM5HImlDLdtFS5kinDygiWAHYcrju4FTCA&oe=68FC4D5B",
    },
    {
      id: 3,
      title: "Dhacdo: Maalinta Hal-abuurka Dhambaal",
      date: "5 Dec 2025",
      desc: "Maalin lagu xusayo hal-abuurka iyo kartida ardayda Dhambaal Institute, halkaas oo lagu soo bandhigayo shaqooyin ardaydu sameeyeen sida design, video editing iyo motion graphics.",
      img: "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/499914262_717515664567299_5994199043087510811_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=BeM0j1tDBD8Q7kNvwGQQHiJ&_nc_oc=Adm2fw88Pmtv4xBl0mJxQc6WeKY7ix1nCjP5lud4qWYCOkednpD5qxqFt-xcqHcTiEE&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=GHRjf89B1nCU5mNUalAQ0Q&oh=00_Afe0T2Ddt5fGUh48x9xtOvnMuga92PaAmVboscnrlCkCDA&oe=68FC2C31",
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
