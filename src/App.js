import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Nav from "./components/nav/nav.component";
import HomePage from "./pages/homepage.component";

const App = () => (
  <div className="background">
    <Nav />
    <HomePage />
  </div>
);

export default App;
