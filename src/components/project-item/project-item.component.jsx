import React from "react";
import CustomButton from "../custom-button/custom-button-component";

import "./project-item.styles.scss";

const ProjectItem = ({ title, image, text, tech }) => {
  return (
    <div className="project">
      <div>
        <div className="image">
          <img src={image} alt="screenshot" />
        </div>
      </div>
      <div className="content">
        <div className="title">
          <h3 style={{ marginTop: ".5rem" }}>{title.toUpperCase()}</h3>
        </div>
        <div className="tech-used">
          <p>Built with React, Redux etc. {tech}</p>
        </div>
        <div className="text">
          <p>{text}</p>
        </div>
        <div className="buttons">
          <CustomButton>Live</CustomButton>
          <CustomButton>Source</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
