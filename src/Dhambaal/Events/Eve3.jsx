// src/components/EventsHero3.jsx
import React from "react";
import { motion } from "framer-motion";

export default function EventsHero3() {
  const pastEvents = [
    {
      id: 1,
      title: "Workshop: Video Editing & Design",
      img: "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/535672379_789057224079809_5557935265126559396_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=CJtFKE2Sj10Q7kNvwFv5iiB&_nc_oc=AdmheX0YFy9fMvktcLWt8K_mP1dqlTKj120PvlK44_meJP5LeK6oxa3TZ_burxsU7NM&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=txyL206FzpjhXRWH0n4SJg&oh=00_AfdznDVm4ZPGN2QCJDVSCYux5RJCfCCuJVthruMA5eRBHQ&oe=6903A31A",
      desc: "Tababar lagu barayay xirfadaha tafatirka muuqaalka iyo naqshadeynta si loo hormariyo hal-abuurka ardayda Dhambaal Institute.",
    },
    {
      id: 2,
      title: "Tech Talk: Digital Skills for Youth",
      img: "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/523835475_766707372981461_894897006668934501_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=d5ktaTnN2UoQ7kNvwE4iepF&_nc_oc=Adk5lvSq5QW1lFmRyDsk0dRR4ERvl_0pa1D8_9aJGf_P4db10TeHa5KfZ3iLk6BhuU0&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=XLUJHzeSru05RO21KPguNg&oh=00_Affus2eoKoPP0gzG0vuyay6qVE6eaOAVHdxfPhl5PZ-gGQ&oe=69038D5A",
      desc: "Kulankii dhalinyarada ee ku saabsan mustaqbalka tiknoolajiyada iyo sida xirfadaha digital-ka loo adeegsan karo shaqo abuurka.",
    },
    {
      id: 3,
      title: "Student Creativity Day",
      img: "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/502434787_721356784183187_48031721598718503_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=RAUsC1dOEogQ7kNvwF4g-dF&_nc_oc=AdlMdRDhy86ZVCTbRcBtJUTlBEtfR78ZBY-_E6RYkAvlPkY3H-7LFS9OY7hLRJUP0nc&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=jffF0l2UTq90Yhasx98YFw&oh=00_Afc5Gu14REFkapRy4dBx3UL37drxpiDXVMsonHZURp2gaQ&oe=6903B6F3",
      desc: "Maalin lagu soo bandhigay mashaariicda ardayda ee qaybaha Graphic Design, Social Media iyo Motion Graphics.",
    },
    {
      id: 4,
      title: "Career Guidance Seminar",
      img: "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/498183759_719915880993944_2876323309268462215_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=YvVy5cR4TEIQ7kNvwE0dNEw&_nc_oc=AdnLPiZDM0N-xVRgpJEXn77pUxd6paWBCqQD1_3dYIX6ZP0Hvhv1CsFKA5PWH_C-itQ&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=AyIZbR0pgpcsqtXvDA5xfw&oh=00_Afdhz_8E3pj96dvkvmuqZFumrzPO3Ts-aF-3wPe6Q0Pl_w&oe=6903C0A0",
      desc: "Seminaar lagu dhiirrigelinayay ardayda sidii ay xirfadahooda ugu adeegsan lahaayeen suuqa shaqada ee gudaha iyo dibadda.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-blue-800"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Dhacdooyinkii Hore ee Dhambaal Institute
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-6">
          {pastEvents.map((event, index) => (
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
              <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-900">{event.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{event.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
