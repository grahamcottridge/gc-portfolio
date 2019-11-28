import React from "react";

import "./header.styles.scss";

import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Header = () => (
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
        <h1 className="title">Full Stack Developer</h1>
        <div className="icons">
          <a className="icon" href="mailto:codinggc@gmail.com?subject=Hi!">
            <FontAwesomeIcon size="3x" icon={faEnvelope} />
          </a>
          <a
            className="icon"
            href="https://github.com/grahamcottridge"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon size="3x" icon={faGithub} />
          </a>
          <a
            className="icon"
            href="https://www.linkedin.com/in/mvc1234"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon size="3x" icon={faLinkedin} />
          </a>
        </div>
      </div>
    </Fade>
  </div>
);

export default Header;
