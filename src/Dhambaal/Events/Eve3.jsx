// src/components/EventsHero3.jsx
import React from "react";
import { motion } from "framer-motion";

export default function EventsHero3() {
  const pastEvents = [
    {
      id: 1,
      title: "Workshop: Video Editing & Design",
      img: "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/535672379_789057224079809_5557935265126559396_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=1PdZrV5vd-YQ7kNvwGLZ71i&_nc_oc=AdmdCafaJTORlnLVYE3lam8_-ORvMWS5hh83Vno9LR04IA2PaY0_L9NU-nqRmA-eyzA&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=2YEejiOShb8kqOYYV2i6oA&oh=00_Afe65kMaIyhBmuwF1QkWPtBZ-SH39UbGYrAJkxac0RMaZw&oe=68FD0B9A",
      desc: "Tababar lagu barayay xirfadaha tafatirka muuqaalka iyo naqshadeynta si loo hormariyo hal-abuurka ardayda Dhambaal Institute.",
    },
    {
      id: 2,
      title: "Tech Talk: Digital Skills for Youth",
      img: "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/523835475_766707372981461_894897006668934501_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=s5yO-6_HNPMQ7kNvwEeX6us&_nc_oc=AdlYRioxu5aJwlETODxocYxfL7_bekrxibcSaeuGeePEnSlp3sOjwXkqAWEjBZE-U3c&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=INdavenTBsCc3yxWasi0Hw&oh=00_AffHxgO4W6JzdapN8eeTPf6HY0isD_yjzWaZ10K52VEqMQ&oe=68FD2E1A",
      desc: "Kulankii dhalinyarada ee ku saabsan mustaqbalka tiknoolajiyada iyo sida xirfadaha digital-ka loo adeegsan karo shaqo abuurka.",
    },
    {
      id: 3,
      title: "Student Creativity Day",
      img: "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/502434787_721356784183187_48031721598718503_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=sntE8IvZKpUQ7kNvwHGBbtg&_nc_oc=AdkkXhjutKhG5cskymQaBOQK_MGT0A-GnGwTpRo2qxRjACK5D77qH7JSZUUETv3fVaA&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=p0VqLqy-CDBymEKTrncPkg&oh=00_Afcmaj1NA87PclQi227k64J-eyyaY_X8GDyi9TQaPbahzg&oe=68FD1F73",
      desc: "Maalin lagu soo bandhigay mashaariicda ardayda ee qaybaha Graphic Design, Social Media iyo Motion Graphics.",
    },
    {
      id: 4,
      title: "Career Guidance Seminar",
      img: "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/498183759_719915880993944_2876323309268462215_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=T5bbFnAMzKsQ7kNvwE-Y1zY&_nc_oc=AdlBaxY2kGFhBrMpn8QIjtLWlsotxx4AxMytmGRReWBJ-Gfh0iaLQNlvbm477LKm-yY&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=kSFWVO4fC1kNtkYB8Rm0gA&oh=00_AffZNxEgypJrspVmVkQ_ybGr_n492d3XzXFjkbYYbLSCPw&oe=68FD2920",
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
