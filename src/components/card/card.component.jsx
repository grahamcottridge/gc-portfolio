import React from "react";

import "./card.styles.scss";

const Card = props => {
  return (
    <div className="card">
      <div className="title" id={props.id}>
        <h2 id={props.goto}>{props.title}</h2>
      </div>
      {props.children}
    </div>
  );
};

export default Card;
