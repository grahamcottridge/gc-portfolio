import React from "react";

import "./card.styles.scss";

const Card = props => {
  return (
    <div>
      <div className="card-new">{props.children}</div>
    </div>
  );
};

export default Card;

// <div className="title" id={props.id}>
//       <h2 id={props.goto}>{props.title}</h2>
//
