import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./about/About";
import Home from "./home/Home";
import Work from "./work/Work";
import Blog from "./blog/Blog";
import Contact from "./contact/Contact";
import Services from "./services/Services";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/work" element={<Work />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default Pages;
