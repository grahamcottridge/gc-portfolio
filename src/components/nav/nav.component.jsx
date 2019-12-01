import React from "react";

import "./nav.styles.scss";

import Scroll from "../scroll/scroll.component";
import { animateScroll as scroll } from "react-scroll";

const Nav = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="fixednav">
      <div className="leftnav">
        <Scroll
          to="nav"
          title="Graham Cottridge"
          onClick={scrollToTop}
        ></Scroll>
      </div>
      <Scroll to="about" title="About me"></Scroll>
      <Scroll to="skills" title="Skills"></Scroll>
      <Scroll to="projects" title="Projects"></Scroll>
    </nav>
  );
};

export default Nav;
