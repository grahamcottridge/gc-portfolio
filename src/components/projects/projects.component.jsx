import React from "react";
import PROJECT_DATA from "./projects.data";

import ProjectItem from "../project-item/project-item.component";

import "./projects.styles.scss";

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="title">Projects</h2>
      <div className="projects">
        {PROJECT_DATA.map(({ id, title, image, sub, text, live, source }) => (
          <ProjectItem
            key={id}
            title={title}
            image={image}
            sub={sub}
            text={text}
            live={live}
            source={source}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
