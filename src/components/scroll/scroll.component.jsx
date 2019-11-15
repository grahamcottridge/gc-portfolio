import React from "react";

import { Link } from "react-scroll";

const Scroll = ({ to, title }) => {
  return (
    <div>
      <Link
        className="test"
        activeClass="active"
        to={to}
        spy={true}
        smooth={true}
        offset={-100}
        duration={1000}
      >
        {title}
      </Link>
    </div>
  );
};

export default Scroll;
