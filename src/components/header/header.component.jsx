import React from "react";

import "./header.styles.scss";

import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

import { useSpring, animated } from "react-spring";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <div
      id="nav"
      className="header"
      // style={{
      //   height: `${window.innerHeight}px`,
      //   overflow: "hidden"
      // }}
    >
      <Fade delay={500}>
        <div className="main">
          <animated.h1 className="title">
            Full Stack React Developer
          </animated.h1>
          <div className="icons">
            <a className="icon" href="mailto:codinggc@gmail.com?subject=Hi!">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a
              className="icon"
              href="https://github.com/grahamcottridge"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              className="icon"
              href="https://www.linkedin.com/in/mvc1234"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Header;
