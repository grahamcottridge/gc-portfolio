import React from "react";

import "./card.styles.scss";

import About from "../about-item/about-item.component";
import Projects from "../project-item/project-item.component";

const Card = ({ title }) => {
  const cardItem = title;
  return (
    <div class="card">
      <div class="title">
        <h2>{title}</h2>
      </div>
      <div>{cardItem === "About me" ? <About /> : <Projects />}</div>
    </div>
  );
};

export default Card;
