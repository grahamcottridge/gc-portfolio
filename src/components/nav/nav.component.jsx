import React from "react";

import "./nav.styles.scss";

import { Link, animateScroll as scroll } from "react-scroll";

const Nav = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="fixednav">
      <div className="leftnav">
        <a onClick={scrollToTop}>Graham Cottridge</a>
      </div>
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-100}
        duration={1000}
      >
        About me
      </Link>

      <Link
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={-100}
        duration={1000}
      >
        Projects
      </Link>
    </nav>
  );
};

export default Nav;
