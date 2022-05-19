import React, { useState } from "react";
import "./navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="box">
        <div className="logo">khusan</div>
        <ul className="nav-lists">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
