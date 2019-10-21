import React from "react";

import "./card.styles.scss";

import Fade from "react-reveal/Fade";
import VisibilitySensor from "react-visibility-sensor";

const Card = props => (
  <Fade top>
    <div className="card" id={props.section}>
      {props.children}
    </div>
  </Fade>
);

export default Card;
