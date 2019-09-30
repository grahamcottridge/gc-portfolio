import React from "react";

import ProjectItem from "../project-item/project-item.component";

import imageone from "../../assets/music-event.png";

import "./projects.styles.scss";

class Projects extends React.Component {
  constructor() {
    super();

    this.state = {
      projects: [
        {
          id: 1,
          title: "Project 1",
          image: imageone,
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          id: 2,
          title: "Project 2",
          image: imageone,
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      ]
    };
  }

  render() {
    return (
      <div className="projects-container">
        {this.state.projects.map(({ id, title, image, text }) => (
          <ProjectItem key={id} title={title} image={image} text={text} />
        ))}
      </div>
    );
  }
}

export default Projects;
