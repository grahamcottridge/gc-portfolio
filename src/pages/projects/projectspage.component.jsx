import React from "react";

import Card from "../../components/card/card.component";
import Projects from "../../components/projects/projects.component";

import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

const ProjectsPage = () => (
  <div>
    <Fade clear>
      <Card goto="projects" title="Projects">
        <Projects />
      </Card>
    </Fade>
  </div>
);

export default ProjectsPage;
