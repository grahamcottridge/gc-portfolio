import React from "react";

import wave from "../../assets/wave.svg";
import "./header.styles.scss";

import Zoom from "react-reveal/Zoom";

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
    <div className="title">
      <h1>Full Stack React Developer</h1>
    </div>
    <div className="icons">
      <a className="icon" href="mailto:codinggc@gmail.com?subject=Hi!">
        <FontAwesomeIcon size="2x" icon={faEnvelope} />
      </a>
      <a className="icon" href="https://github.com/grahamcottridge">
        <FontAwesomeIcon size="2x" icon={faGithub} />
      </a>
      <a className="icon" href="https://www.linkedin.com/in/mvc1234">
        <FontAwesomeIcon size="2x" icon={faLinkedin} />
      </a>
    </div>
    <Zoom>
      <div className="pic">
        <img src={wave} alt="wave" />
      </div>
    </Zoom>
  </div>
);

export default Header;
