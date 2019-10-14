import React from "react";

import CustomButton from "../custom-button/custom-button-component";

import wave from "../../assets/wave.svg";
import "./header.styles.scss";

import Zoom from "react-reveal/Zoom";

const Header = () => (
  <div
    className="header"
    style={{
      height: `${window.innerHeight}px`,
      overflow: "hidden"
    }}
  >
    <div className="title">
      <h1>Full Stack React Developer</h1>
    </div>
    <CustomButton>
      <a className="contact" href="mailto:codinggc@gmail.com?subject=Hi!">
        Contact
      </a>
    </CustomButton>
    <Zoom>
      <div className="pic">
        <img src={wave} alt="wave" />
      </div>
    </Zoom>
  </div>
);

export default Header;
