import React from "react";

import "./project-item.styles.scss";

const ProjectItem = ({ title, image, sub, text, live, source }) => {
  return (
    <div className="project-container">
      <div class="container">
        <div className="image">
          <img src={image} alt="screenshot" />
        </div>
        <div class="middle">
          <div className="buttons">
            <a
              className="link"
              href={live}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </a>
            <a
              className="link"
              href={source}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source
            </a>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="title">
          <h3>{title.toUpperCase()}</h3>
        </div>
        <div className="sub">
          <p>{sub}</p>
        </div>
        <div className="text">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
