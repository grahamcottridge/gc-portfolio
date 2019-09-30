import React from "react";

import "./card.styles.scss";

import About from "../about/about.component";
import Projects from "../projects/projects.component";

const Card = ({ title }) => {
  const cardItem = title;
  return (
    <div className="card">
      <div className="title">
        <h2>{title}</h2>
      </div>
      <div>{cardItem === "About me" ? <About /> : <Projects />}</div>
    </div>
  );
};

export default Card;
