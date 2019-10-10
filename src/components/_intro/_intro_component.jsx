import React from "react";

import "./_intro.styles.scss";

const Intro = props => {
  return (
    <header id="welcome-section">
      <div className="container">
        <h1>
          <span className="line">Full Stack</span>
          <span className="line">Web Developer</span>
        </h1>
        <div className="buttons">
          <a href="#projects">my portfolio</a>
          <a href="#contact" className="cta">
            get in touch
          </a>
        </div>
      </div>
    </header>
  );
};

export default Intro;
