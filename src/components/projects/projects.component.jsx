import React from "react";

import ProjectItem from "../project-item/project-item.component";

import imageOne from "../../assets/clothing-store.jpg";
import imageTwo from "../../assets/clothing-store.jpg";
import imageThree from "../../assets/rsvp.jpg";
import imageFour from "../../assets/music-event.jpg";

import "./projects.styles.scss";

const projectItems = [
  {
    id: 1,
    title: "Clothing Store",
    image: imageOne,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    live: "",
    source: ""
  },
  {
    id: 2,
    title: "Face Recognition",
    image: imageTwo,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    live: "",
    source: ""
  },
  {
    id: 3,
    title: "Event Organiser",
    image: imageThree,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    live: "",
    source: ""
  },
  {
    id: 4,
    title: "Music Event",
    image: imageFour,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    live: "",
    source: ""
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
