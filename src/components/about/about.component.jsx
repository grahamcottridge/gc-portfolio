import React from "react";

import "./about.styles.scss";

const About = props => (
  <div className="about-container">
    <h2 className="title">About me</h2>
    <div className="about-me">
      <p>
        A graduate of Le Wagon (Lisbon) — a highly rated, start-up focused,
        9-week intensive coding boot camp learning the foundations of
        programming and tools of web development concluding in building full
        stack applications. The skills learnt have since been advanced and
        broadened with further study, online courses and building personal
        projects.
      </p>
      <p>
        As a continuous learner, now focused on building full stack applications
        with React & Redux and advancing knowledge in that ecosystem to make the
        switch from current role as a presentations specialist to React web
        developer.
      </p>
    </div>
  </div>
);

export default About;
