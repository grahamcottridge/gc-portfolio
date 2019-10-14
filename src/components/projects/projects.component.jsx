import React from "react";
import PROJECT_DATA from "./projects.data";

import ProjectItem from "../project-item/project-item.component";

import "./projects.styles.scss";

const Projects = () => {
  return (
    <div className="projects-container">
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
  );
};

export default Projects;
