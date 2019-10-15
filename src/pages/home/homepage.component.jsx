import React from "react";

import Header from "../../components/header/header.component";

import AboutPage from "../../pages/about/aboutpage.component";
import ProjectsPage from "../../pages/projects/projectspage.component";

import Card from "../../components/card/card.component";
import About from "../../components/about/about.component";
import Projects from "../../components/projects/projects.component";
import Fade from "react-reveal/Fade";

import "./homepage.styles.scss";

const HomePage = () => (
  <div className="homepage">
    <Header />
    <AboutPage />
    <ProjectsPage />>
  </div>
);

export default HomePage;
