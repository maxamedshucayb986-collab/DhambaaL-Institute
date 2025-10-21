// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Dhambaal/Header";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Courses from "./Pages/Courses";
import Events from "./Pages/Events";
import Contact from "./Pages/Contact";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        {/* <footer className="bg-blue-900 text-white text-center py-4">
          <p>© {new Date().getFullYear()} Dhambaal Institute - All Rights Reserved</p>
        </footer> */}
      </div>
    </Router>
  );
}

export default App;