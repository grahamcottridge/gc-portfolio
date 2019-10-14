import React from "react";

import Card from "../../components/card/card.component";
import About from "../../components/about/about.component";

import Fade from "react-reveal/Fade";

const AboutPage = () => (
  <div>
    <Fade center>
      <Card goto="about" title="About me">
        <About />
      </Card>
    </Fade>
  </div>
);

export default AboutPage;
