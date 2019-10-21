import React from "react";

import image from "../../assets/graham.jpg";

import "./about.styles.scss";

const About = props => (
  <div className="about-container">
    <h2 className="title">About me</h2>
    <p className="about-me">
      I’m a graduate of Le Wagon coding bootcamp - a start-up focused, 9-week
      intensive coding boot camp learning learning Ruby on Rails, HTML, CSS,
      Bootstrap, JavaScript ES2015, SQL, GitHub and Heroku. where I learned the
      foundations of programming and web development. <br></br>Since then , I
      continued to broaden my skills, focussing particularly on Javascript up to
      ES9 and and building full stack application with the React framework
      including Redux. I strive to relevant skills in all areas Something about
      background and wanting to move into tech. I’m a continuous learner, love
      to solve problems and keep on top of current industry trends. <br></br>I
      am currently based in London, UK.
    </p>
  </div>
);

export default About;

// <div className="image">
// <img src={image} alt="profile" />
// </div>
