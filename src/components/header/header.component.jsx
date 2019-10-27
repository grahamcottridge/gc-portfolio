import React from "react";

import "./header.styles.scss";

import Fade from "react-reveal/Fade";
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
    <div className="main">
      <Fade top>
        <header id="pageHeader"></header>
      </Fade>
      <Fade delay={4000}>
        <article id="mainArticle">
          <Zoom delay={5000}>
            <h1>
              Full Stack <br></br> React Developer
            </h1>

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
          </Zoom>
        </article>
      </Fade>
      <Fade left delay={1000}>
        <nav id="mainNav"></nav>
      </Fade>
      <Fade right delay={2000}>
        <div id="siteAds"></div>
      </Fade>
      <Fade bottom delay={3000}>
        <footer id="pageFooter"></footer>
      </Fade>
    </div>
  </div>
);

export default Header;
