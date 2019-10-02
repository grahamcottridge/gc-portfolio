import React from "react";

import Header from "../components/header/header.component";
import Card from "../components/card/card.component";
import About from "../components/about/about.component";
import Projects from "../components/projects/projects.component";

import "./homepage.styles.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      <Card title="About me">
        <About />
      </Card>
      <Card title="Projects">
        <Projects />
      </Card>
    </div>
  );
};

export default HomePage;
