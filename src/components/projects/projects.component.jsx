import React from "react";

import ProjectItem from "../project-item/project-item.component";

import imageOne from "../../assets/clothing-store2.jpg";
import imageTwo from "../../assets/clothing-store.jpg";
import imageThree from "../../assets/rsvp.jpg";
import imageFour from "../../assets/music-event.jpg";

import "./projects.styles.scss";

const projectItems = [
  {
    id: 1,
    title: "Clothing Store",
    sub: "Built with React",
    image: imageOne,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    live: "",
    source: "https://github.com/grahamcottridge/react-clothing-store"
  },
  {
    id: 2,
    title: "Face Recognition",
    sub: "Built with React",
    image: imageTwo,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    live: "https://photo-face-reveal.herokuapp.com/",
    source: "https://github.com/grahamcottridge/react-face-recognition"
  },
  {
    id: 3,
    title: "Music Event",
    sub: "Built with React",
    image: imageFour,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    live: "http://striped-love.surge.sh/",
    source: "https://github.com/grahamcottridge/react-music-event"
  },
  {
    id: 4,
    title: "Event Organiser",
    sub: "Built with React",
    image: imageThree,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    live: "",
    source: "https://github.com/grahamcottridge/react-rsvp"
  }
];

const Projects = () => {
  return (
    <div className="projects-container">
      {projectItems.map(({ id, title, image, sub, text, live, source }) => (
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
