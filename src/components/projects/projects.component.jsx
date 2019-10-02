import React from "react";

import ProjectItem from "../project-item/project-item.component";

import imageOne from "../../assets/music-event.png";

import "./projects.styles.scss";

const projectItems = [
  {
    id: 1,
    title: "Project 1",
    image: imageOne,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 2,
    title: "Project 2",
    image: imageOne,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
];

const Projects = () => {
  return (
    <div className="projects-container">
      {projectItems.map(({ id, title, image, text }) => (
        <ProjectItem key={id} title={title} image={image} text={text} />
      ))}
    </div>
  );
};

export default Projects;
