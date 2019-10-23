import React from "react";

import Card from "../components/card/card.component";
import About from "../components/about/about.component";
import Skills from "../components/skills/skills.component";
import Projects from "../components/projects/projects.component";

import Header from "../components/header/header.component";

import "./homepage.styles.scss";

const HomePage = () => (
  <div className="homepage">
    <Header />
    <Card section="about" title="About me">
      <About />
    </Card>
    <Card section="skills" title="Skills">
      <Skills />
    </Card>
    <Card section="projects" title="Projects">
      <Projects />
    </Card>
  </div>
);

export default HomePage;
