import React from "react";

import Card from "../components/card/card.component";
import About from "../components/about/about.component";
import Projects from "../components/projects/projects.component";
import Menu from "../components/menu/menu.component";

import "./homepage.styles.scss";

const HomePage = () => (
  <div>
    <div className="homepage">
      <Menu />
      <Card title="About me" id="about">
        <About />
      </Card>
      <Card title="Projects" id="projects">
        <Projects />
      </Card>
    </div>
  </div>
);

export default HomePage;
