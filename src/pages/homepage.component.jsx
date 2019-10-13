import React from "react";

import Card from "../components/card/card.component";
import About from "../components/about/about.component";
import Projects from "../components/projects/projects.component";
import Menu from "../components/menu/menu.component";

import "./homepage.styles.scss";

const HomePage = () => (
  <div>
    <div className="homepage">
      <img src="" alt="" />
      <Menu />
      <Card goto="about" title="About me">
        <About />
      </Card>
      <Card goto="projects" title="Projects">
        <Projects />
      </Card>
    </div>
    <div>
      <h1>Contact</h1>
    </div>
  </div>
);

export default HomePage;
