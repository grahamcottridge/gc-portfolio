import React from "react";

import Card from "../../components/card/card.component";
import Projects from "../../components/projects/projects.component";

import Fade from "react-reveal/Fade";

const ProjectsPage = () => (
  <div>
    <Fade center>
      <Card goto="projects" title="Projects">
        <Projects />
      </Card>
    </Fade>
  </div>
);

export default ProjectsPage;
