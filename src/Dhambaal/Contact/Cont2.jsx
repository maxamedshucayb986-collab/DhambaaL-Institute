// src/components/Hero2.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe } from "react-icons/fa";

export default function Hero2() {
  // Qeex lambarka WhatsApp ee qaab caalami ah: countrycode + rest (ilaali inaysan jirin + ama spaces)
  const whatsappNumber = "252619444614"; // <-- hubi oo bedel haddii loo baahdo
  const whatsappWeb = `https://wa.me/${whatsappNumber}`;
  const whatsappApp = `whatsapp://send?phone=${whatsappNumber}`;

  const info = [
    {
      icon: <FaMapMarkerAlt />,
      label: "Address",
      // Link to Google Maps (waxaad bedeli kartaa query-ga haddii aad rabto pin sax ah)
      value: "Taleh, Hodan, Mogadishu, Somalia",
      href: "https://www.google.com/maps/search/?api=1&query=Taleh+Hodan+Mogadishu+Somalia",
      isExternal: true,
    },
    {
      icon: <FaPhone />,
      label: "Mobile",
      value: "+252 61 9444614",
      // Waxaan si gaar ah u maareyneynaa click si marka la dhufto uu isku dayo app-ka WhatsApp, kadibna fallback u yahay wa.me
      href: whatsappWeb,
      onClick: (e) => {
        // isku day deep link-ka ka hor fallback
        // Haddii aad rabto in link-gu had iyo jeer u furo new tab, ka saar preventDefault
        e.preventDefault();
        // Isku day in browser-ku furo protocol handler (whatsapp://). Haddii uusan jirin, fallback ku furo wa.me
        const timeout = setTimeout(() => {
          window.open(whatsappWeb, "_blank", "noopener,noreferrer");
        }, 500);

        // isku day furitaanka WhatsApp app (ku shaqeeya mobile). Browser-ka wuxuu ka hortagi karaa; timeout ayaa sameynaya fallback.
        window.location.href = whatsappApp;

        // Nadiifi timeout haddii page-ku beddelo si dhaqso ah
        setTimeout(() => clearTimeout(timeout), 1000);
      },
    },
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "dhambaalinstitute@gmail.com",
      href: "mailto:dhambaalinstitute@gmail.com",
    },
    {
      icon: <FaGlobe />,
      label: "Website",
      value: "dhambaalacademy.so",
      href: "http://www.dhambaalacademy.so/",
      isExternal: true,
    },
  ];

  return (
    <section className="relative bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white py-28 overflow-hidden">
      <div className="container mx-auto px-6 text-center md:text-left">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-yellow-400"
        >
          Get in Touch with Dhambaal Institute
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {info.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex items-center gap-4 bg-white text-yellow-400 bg-opacity-10 p-5 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <div className="text-yellow-400 text-2xl">{item.icon}</div>

              {/* Haddii item.href jiro, isticmaal <a> si loo furo link; haddii kale kaliya soo bandhig */}
              <div className="text-left">
                <p className="font-semibold">{item.label}</p>

                {item.href ? (
                  <a
                    href={item.href}
                    onClick={item.onClick}
                    // Haddii isExternal ama waa wa.me, furo in new tab; deep-link click handler wuxuu preventDefault, markaas onClick ayaa maareyn doona
                    target={item.isExternal ? "_blank" : undefined}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                    className="text-black hover:underline inline-block"
                    aria-label={`${item.label} link`}
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-black">{item.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Shapes */}
      <div className="absolute -top-20 -left-10 w-36 h-36 bg-yellow-400 opacity-20 rounded-full animate-pulse"></div>
      <div className="absolute -bottom-20 -right-10 w-52 h-52 bg-yellow-400 opacity-15 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-yellow-400 opacity-10 rounded-full animate-pulse"></div>
    </section>
  );
}
