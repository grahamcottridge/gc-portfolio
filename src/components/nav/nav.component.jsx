import React from "react";

import "./nav.styles.scss";

const Nav = () => (
  <nav class="fixednav">
    <div class="leftnav">
      <a href="#">Graham Cottridge</a>
    </div>
    <div class="rightnav">
      <a href="#" class="rightnav">
        About me
      </a>
    </div>
    <div class="rightnav">
      <a href="#" class="rightnav">
        Projects
      </a>
    </div>
  </nav>
);

export default Nav;
