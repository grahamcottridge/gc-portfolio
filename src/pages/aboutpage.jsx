import React from "react";

import Card from "../components/card/card.component";
import About from "../components/about/about.component";

const AboutPage = () => (
  <div className="aboutpage">
    <Card section="about" title="About me">
      <About />
    </Card>
  </div>
);

export default AboutPage;
