import React from "react";

import "./custom-button.styles.scss";

const CustomButton = props => {
  return <div className="custom-button">{props.children}</div>;
};

export default CustomButton;
