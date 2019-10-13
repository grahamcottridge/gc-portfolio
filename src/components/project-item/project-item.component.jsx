import React from "react";
import CustomButton from "../custom-button/custom-button-component";

import "./project-item.styles.scss";

const ProjectItem = ({ title, image, sub, text, live, source }) => {
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
        <div className="sub">
          <p>{sub}</p>
        </div>
        <div className="text">
          <p>{text}</p>
        </div>
        <div className="buttons">
          <CustomButton>
            <a
              className="link"
              href={live}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </a>
          </CustomButton>
          <CustomButton>
            <a
              className="link"
              href={source}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source
            </a>
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
