import React from "react";

import "./card.styles.scss";

import Fade from "react-reveal/Fade";

const Card = props => (
  <div className="card" id={props.section}>
    {props.children}
  </div>
);

export default Card;
