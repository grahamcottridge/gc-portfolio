import React from "react";

import "./nav.styles.scss";

const Nav = () => (
  <nav class="sticky">
    <ul class="main-nav">
      <li>
        <a className="brand" href="">
          Graham Cottridge
        </a>
      </li>
      <li>
        <a href="">About me</a>
      </li>
      <li>
        <a href="">Projects</a>
      </li>
      <li class="link-right">
        <a href="">Contacts</a>
      </li>
    </ul>
  </nav>
);

export default Nav;
