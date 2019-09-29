import React from "react";

import Header from "../components/header/header.component";
import Card from "../components/card/card.component";

import "./homepage.styles.scss";

class HomePage extends React.Component {
  constructor() {
    super();

    this.state = {
      cards: [
        {
          id: 1,
          title: "About me",
          grid: "about"
        },
        {
          id: 2,
          title: "Projects",
          grid: "project"
        }
      ]
    };
  }

  render() {
    return (
      <div className="homepage">
        <Header />
        {this.state.cards.map(({ id, title }) => (
          <Card key={id} title={title} />
        ))}
      </div>
    );
  }
}

export default HomePage;
