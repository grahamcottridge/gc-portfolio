import React from "react";

import Card from "../components/card/card.component";
import About from "../components/about/about.component";
import Projects from "../components/projects/projects.component";

import Menu from "../components/_menu/_menu.component";
import Nav from "../components/_nav/_nav.component";
import Intro from "../components/_intro/_intro_component";

import "./homepage.styles.scss";

class HomePage extends React.Component {
  state = {
    menuState: false
  };

  toggleMenu = () => {
    this.setState(state => ({
      menuState: !state.menuState
        ? "active"
        : state.menuState === "deactive"
        ? "active"
        : "deactive"
    }));
  };

  render() {
    return (
      <div>
        <Menu toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
        <Nav toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
        <Intro />
        <div className="homepage">
          <Card title="About me" id="about">
            <About />
          </Card>
          <Card title="Projects" id="projects">
            <Projects />
          </Card>
        </div>
      </div>
    );
  }
}

export default HomePage;
