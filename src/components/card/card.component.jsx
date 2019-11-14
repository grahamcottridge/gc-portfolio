import React from "react";

import "./card.styles.scss";

const Card = props => (
  <div className="card" id={props.section}>
    {props.children}
  </div>
);

export default Card;
