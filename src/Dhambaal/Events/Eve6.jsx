// src/components/Footer.jsx
import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-12">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        
        {/* Logo & Intro */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-yellow-400">Dhambaal Institute</h2>
          <p className="text-gray-200">
            Digital Institute for learning Digital Skills
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-yellow-400 transition">Home</a></li>
            <li><a href="/about" className="hover:text-yellow-400 transition">About</a></li>
            <li><a href="/courses" className="hover:text-yellow-400 transition">Courses</a></li>
            <li><a href="/events" className="hover:text-yellow-400 transition">Events</a></li>
            <li><a href="/contact" className="hover:text-yellow-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-gray-200">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt />
              <a
                href="https://www.google.com/maps?q=Taleh,+Hodan,+Mogadishu,+Somalia"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition"
              >
                Taleh, Hodan, Mogadishu, Somalia
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt />
              <a
                href="https://wa.me/252619444614"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition"
              >
                WhatsApp: +252 61 9444614
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope />
              <a
                href="mailto:dhambaalinstitute@gmail.com"
                className="hover:text-yellow-400 transition"
              >
                dhambaalinstitute@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaGlobe />
              <a
                href="https://dhambaalacademy.so"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition"
              >
                dhambaalacademy.so
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-12 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Dhambaal Institute. All rights reserved.
      </div>
    </footer>
  );
}
