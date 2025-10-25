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
      img: "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/528314099_775372765448255_3212240297955278588_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=aNKayG9l51QQ7kNvwG9lFJY&_nc_oc=AdlNuX_HecoHJSGguq1RqQ0hlxlWP1iX7b7FQETxtkQfQEZXnmO-xTtj4swNn8FvnuM&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=Dhe1dhAV0gtOUvKsMR94fg&oh=00_AfeKlmbvNnuhyTRDjd2_fdxW6GZVPoNfMzikeSoRvd_Lng&oe=6902B783",
    },
    {
      id: 2,
      title: "Graphic Design",
      duration: "8 Weeks",
      desc: "Baro design-ka casriga ah, Photoshop, Illustrator, iyo UI/UX design si aad u noqoto naqshadeeye hal-abuur leh.",
      img: "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/535377349_787435430908655_2687371816148912143_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=rl9aRxR1b2cQ7kNvwHWNVES&_nc_oc=AdkEDeO9Hr-MdQd-y5aq3BabwLVmz0FvQUo9iIR4tN6tutV3XVBBDzqCgva4ixokTHo&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=qy4WlonwzO8js-NWVHoj_A&oh=00_AfcDWynWYGcAxzgt8mFNm4bgBSp8xBrf8fQMEqJ1FRTEiA&oe=6902B922",
    },
    {
      id: 3,
      title: "Graphic Motion Design",
      duration: "6 Weeks",
      desc: "Baro sida loo abuuro animations iyo motion graphics adigoo adeegsanaya After Effects iyo Blender.",
      img: "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/559343123_833754722943392_8338322375331262040_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=4CXInkGLrzEQ7kNvwGiCjVp&_nc_oc=AdkUQfzqYqAPyKyUvp8L7lDoJt51Wpqw3z7MiopomXm9bZINq4LQ-E0Zxg4V7c7WLPQ&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=H_sbOa6gfI6knxTRVDnIYg&oh=00_AfcOt9yAPvUi442M31kS9Aj16B9NoZBPYZO51wFjIefn1g&oe=6902DF3D",
    },
    {
      id: 4,
      title: "Interior Design",
      duration: "10 Weeks",
      desc: "Baro naqshadaynta gudaha, midabaynta, naqshadaha 3D, iyo software-yada sida AutoCAD iyo SketchUp.",
      img: "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/532618217_782191091433089_1600957639324727591_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=X1Ib4w666_kQ7kNvwEY_LSX&_nc_oc=Adnxf655UJ_Sm0wMGLoC8tvAZc92Pg5cho-ieh6ebIkxStU6Qu0nNHTgWKrQhQU0P2E&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=hBeWNPDSbuyR5FQxfEoMjg&oh=00_AfffaWAV1NSB3YCkXtZpyZkp8z7av_Yc0Hsj1F5tHFUjMw&oe=6902C31E",
    },
    {
      id: 5,
      title: "Social Media Marketing",
      duration: "6 Weeks",
      desc: "Baro sida loo suuq geeyo baraha bulshada, loo abuuro content istiraatiiji ah, iyo sida loo kiciyo kobaca brand-ka.",
      img: "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/528133320_775372222114976_4870921894776270934_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=WebnC_vO6QgQ7kNvwE-PD0f&_nc_oc=AdnORA3dYuvoAOitxWQgX5--AcMycIn2yIeBu8UP_Nju1QQxxdVkkL3yURfAb57AlTw&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=lyE6tX6zp00kOERP1k8Emg&oh=00_AfdemUV6FQndCNx-EURsGj57t7RawuEWpL9Px1HBKaRS2w&oe=6902E2F1",
    },
    {
      id: 6,
      title: "Visual Content Creator",
      duration: "8 Weeks",
      desc: "Baro sida loo sameeyo content muuqaal ah (reels, short videos, posts) adigoo adeegsanaya taleefan ama software xirfad leh.",
      img: "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/516372557_749251848060347_8515186568801447648_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=mQLgEt1ViIcQ7kNvwGV-KzX&_nc_oc=AdnK-F3X2DW06OnvzES8ZpJ22MDgoq37X0INE5Ex-bk2qb4stlGqZu9GmhTGmpxCsio&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=ji3VisZ2zu3jp5sIQdanow&oh=00_AfcaA72UZhc952Pclg6664KH7Ft7ryVUxxtxuTHglyGzFA&oe=6902E442",
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
