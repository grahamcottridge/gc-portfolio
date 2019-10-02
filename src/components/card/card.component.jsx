import React from "react";

import "./card.styles.scss";

const Card = props => {
  return (
    <div className="card">
      <div className="title">
        <h2>{props.title}</h2>
        {props.children}
      </div>
    </div>
  );
};

export default Card;
