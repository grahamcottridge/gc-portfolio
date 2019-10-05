import React from "react";

import "./navbar.styles.scss";

const Navbar = () => (
  <div className="navbar">
    <a className="name-container" href="#">
      Graham Cottridge
    </a>
    <div className="options">
      <a className="option" href="#about">
        ABOUT
      </a>
      <a className="option" href="#projects">
        PROJECTS
      </a>
    </div>
  </div>
);

export default Navbar;
