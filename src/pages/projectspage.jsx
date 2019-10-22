import React from "react";

import Card from "../components/card/card.component";
import Projects from "../components/projects/projects.component";

import "./homepage.styles.scss";

const ProjectsPage = () => (
  <div className="projectspage">
    <Card section="projects" title="Projects">
      <Projects />
    </Card>
  </div>
);

export default ProjectsPage;
