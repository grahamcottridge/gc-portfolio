import React from "react";

import "./about.styles.scss";

const About = props => (
  <div className="about-container">
    <h2 className="title">About me</h2>
    <div className="about-me">
      <p>
        I’m a graduate of Le Wagon (Lisbon) — a start-up focused, 9-week
        intensive coding boot camp where I learnt the foundations of programming
        and web development concluding in building full stack applications with
        the Ruby on Rails framework.
      </p>
      <p>
        I’m a graduate of Le Wagon (Lisbon) — a start-up focused, 9-week
        intensive coding boot camp.  Since then, I have continued to consolidate
        and broaden those skills with good quality online courses and have an
        active GitHub profile.  Right now, I love building full stack
        applications with React & Redux, getting more advanced with JavaScript
        and diving into further libraries and tools around this ecosystem
        relevant to today’s industry standards and with an eye on future trends.
      </p>
    </div>
  </div>
);

export default About;
