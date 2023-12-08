import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/views/footer/footer.js";
import Home from "./components/Home/Home.js";
import Contact from "./components/views/Contact/Contact.js/index.js"
import About from "./components/views/About/About.js/index.js"
import Navbar from "./components/views/Navbar/Navbar";

function App() {
  return (
    <div className="app">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginSignUp />} />
      </Routes>
    </Router>
      <Footer />
      </div>
  );
}

export default App;
