// src/components/CoursesHero2.jsx
import React from "react";
import { motion } from "framer-motion";

export default function CoursesHero2() {
  const courses = [
    {
      id: 1,
      title: "Video Editing",
      duration: "10 Weeks",
      desc: "Baro sida loo isticmaalo Adobe Premiere Pro, After Effects, iyo DaVinci Resolve si aad u abuurto muuqaalyo xirfad leh.",
      img: "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/540533906_798254826493382_1474748043038199168_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=9zRPe0njmbUQ7kNvwGSc01q&_nc_oc=AdnqMJCxFG5LeoggOceCKPjjrMJ9VQr-R1W_v-H8locyiUrCFgLZBTTaZCWITfBjIrQ&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=8cyfSG3kzuxAEBjjuGiuEQ&oh=00_Afck9c6_kZupP3ztZjpB7JHUSFXAj18GLui78QwWMZ-xuQ&oe=68FC2BAD",
    },
    {
      id: 2,
      title: "Graphic Design",
      duration: "8 Weeks",
      desc: "Baro design-ka casriga ah, Photoshop, Illustrator, iyo UI/UX design si aad u noqoto naqshadeeye hal-abuur leh.",
      img: "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/559538940_825978663720998_1778271136325388959_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Ctgu1oyuYT8Q7kNvwGu1Rwu&_nc_oc=AdmCWhVzKtvX194C6aFtvvtcor-lTW2gOH9KgJiYXwmiO5k16idAGmJFFuhWXJN5jP4&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=YvY8kr6aMF1hgR4Ogsc43w&oh=00_Afcsw3hf3cVEneCvuVTezsVN-5n4bV2uuHjzG17Ouu3LiQ&oe=68FC4509",
    },
    {
      id: 3,
      title: "Graphic Motion Design",
      duration: "6 Weeks",
      desc: "Baro sida loo abuuro animations iyo motion graphics adigoo adeegsanaya After Effects iyo Blender.",
      img: "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/559343123_833754722943392_8338322375331262040_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=cDe8q8wW-J8Q7kNvwHWOhCS&_nc_oc=AdlFTyHYDULtSRNRBRR5AYL567X3PoJh_7mFEdG1AF1EvoegAcSglazFj-N4JwaBrEI&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=alXQM6cLNTQHwVFnI0D5Uw&oh=00_AfekX4hUI3Q7rYKjz9tw4m09k6eugzJa2f3V5kithATsOA&oe=68FC47BD",
    },
    {
      id: 4,
      title: "Interior Design",
      duration: "10 Weeks",
      desc: "Baro naqshadaynta gudaha, midabaynta, naqshadaha 3D, iyo software-yada sida AutoCAD iyo SketchUp.",
      img: "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/532618217_782191091433089_1600957639324727591_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=RJ9CHp0ZuhwQ7kNvwEnVyCr&_nc_oc=AdkI4mfNMSh1g2XfRzTJpc7PW-k8mWdWyDHVbVUblRbgJ2USpDwh5F1wdEwvL1hTQpY&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=5UhouzDfodWdUTZFtgr0Zw&oh=00_AfcJsJDRQjxrFya_TD8RXSZtsn2rJttHsLx-gnmyRmKaHQ&oe=68FC2B9E",
    },
    {
      id: 5,
      title: "Social Media Marketing",
      duration: "6 Weeks",
      desc: "Baro sida loo suuq geeyo baraha bulshada, loo abuuro content istiraatiiji ah, iyo sida loo kiciyo kobaca brand-ka.",
      img: "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/559243107_825982033720661_6763572524996293688_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=2jc-KSFY_pcQ7kNvwHSMqzi&_nc_oc=AdmPyNjjuSByu8ouLElm3iWtBLsQu_9IAMyY2xbPVU-x-WUDBqxzc6ML7MUFx7mtJzY&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=SxxVN63nnagYoctZdiCxCQ&oh=00_AffGxMo5Z4AjG0k8q_obgflZNK0z_VAERb0zwlUrE3oKmw&oe=68FC54E3",
    },
    {
      id: 6,
      title: "Visual Content Creator",
      duration: "8 Weeks",
      desc: "Baro sida loo sameeyo content muuqaal ah (reels, short videos, posts) adigoo adeegsanaya taleefan ama software xirfad leh.",
      img: "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/557755017_825981250387406_4100999608082714510_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=kjSvhg9pzBEQ7kNvwFIcrkC&_nc_oc=AdnxEdSRlVHUbNBZuu_j4cdTnGWbg9qbXoVq44cMhYuiS21_jdBifZOFTGbeSbSF78o&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=1AC3YW2zWp_xqQ8yOJCoWA&oh=00_Affoe7xmA4oHUBtcccfXRX-C9_THkR3_bAsk_hMXx676mw&oe=68FC4899",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-blue-800"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Koorsooyinka La Heli Karo
        </motion.h2>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <div className="overflow-hidden">
                <motion.img
                  src={course.img}
                  alt={course.title}
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-blue-900 mb-1">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{course.duration}</p>
                <p className="text-gray-700 text-sm">{course.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
