import React from "react";

import "./navbar.styles.scss";

const Navbar = () => (
  <div className="navbar">
    <a className="logo-container" href="#">
      Graham Cottridge
    </a>
    <div className="options">
      <a className="option" href="#">
        about
      </a>
      <a className="option" href="#">
        projects
      </a>
    </div>
  </div>
);

export default Navbar;
