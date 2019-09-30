import React from "react";

import "./project-item.styles.scss";

const ProjectItem = ({ title, image, text }) => {
  return (
    <div className="project">
      <div className="image">
        <img src={image} alt="screenshot" />
      </div>
      <div className="name">
        <h4>{title}</h4>
      </div>
      <div className="text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
