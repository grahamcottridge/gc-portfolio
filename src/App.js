import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/home/homepage.component";
import AboutPage from "./pages/about/aboutpage.component";
import ProjectsPage from "./pages/projects/projectspage.component";

import Menu from "./components/menu/menu.component";

const App = () => (
  <div>
    <Menu />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/aboutme" component={AboutPage} />
      <Route path="/projects" component={ProjectsPage} />
    </Switch>
  </div>
);

export default App;
