import React from "react";
import { Card } from "flwww";
import { Button } from "flwww";

import "./project-item.styles.scss";

const ProjectItem = ({ title, image, text, tech }) => {
  return (
    <div className="project">
      <div style={{ width: "100%" }}>
        <Card style={{ boxShadow: "0 10px 10px #0003", border: "none" }}>
          <div className="image">
            <img src={image} alt="screenshot" />
          </div>
          <div className="title">
            <h3 style={{ marginTop: ".5rem" }}>{title.toUpperCase()}</h3>
          </div>
          <div className="tech-used">
            <p>Built with React, Redux etc. {tech}</p>
          </div>
          <div className="text">
            <p>{text}</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Button style={{ background: "#F300B4" }} round type="primary">
              Live
            </Button>
            <Button style={{ background: "#F300B4" }} round type="primary">
              Source
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProjectItem;
