import React from "react";

import wave from "../../assets/wave.svg";
import "./header.styles.scss";

import Zoom from "react-reveal/Zoom";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Header = () => (
  <div
    className="header"
    style={{
      height: `${window.innerHeight}px`,
      overflow: "hidden"
    }}
  >
    <div className="div3 bounce-in-top">
      <div className="div2 bounce-in-right">
        <div className="div1 bounce-in-left"></div>
      </div>
    </div>

    <div className="title tracking-in-expand">
      <h1>Full Stack React Developer</h1>
    </div>
    <div className="icons">
      <a className="icon" href="mailto:codinggc@gmail.com?subject=Hi!">
        <FontAwesomeIcon size="2x" icon={faEnvelope} />
      </a>
      <a
        className="icon"
        href="https://github.com/grahamcottridge"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FontAwesomeIcon size="2x" icon={faGithub} />
      </a>
      <a
        className="icon"
        href="https://www.linkedin.com/in/mvc1234"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FontAwesomeIcon size="2x" icon={faLinkedin} />
      </a>
    </div>
  </div>
);

export default Header;

// <Zoom>
// <img src={wave} alt="wave" />
// </Zoom>
