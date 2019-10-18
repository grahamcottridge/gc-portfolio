import React from "react";
import "./App.css";

import Nav from "./components/nav/nav.component";
import HomePage from "./pages/homepage.component";

const App = () => (
  <div className="background">
    <Nav />
    <HomePage />
  </div>
);

export default App;
