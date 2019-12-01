import React from "react";
import "./App.css";

import { Route } from "react-router-dom";

import Menu from "./components/menu/menu-component";

import Nav from "./components/nav/nav.component";
import HomePage from "./pages/homepage.component";
import AboutPage from "./pages/aboutpage";
import ProjectsPage from "./pages/projectspage";

const App = () => (
  <div className="background">
    <Nav />
    <HomePage />
  </div>
);

export default App;

// <Route exact path="/" component={HomePage} />
// <Route path="/about" component={AboutPage} />
// <Route path="/projects" component={ProjectsPage} />
