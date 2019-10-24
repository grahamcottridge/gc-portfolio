import React from "react";

import "./skills.styles.scss";
import SKILLS_LIST from "./skills.data";

const skillsList = SKILLS_LIST;

const Skills = () => (
  <React.Fragment>
    <div className="skills-container">
      <h2 className="title">Skills</h2>
      {skillsList.map(({ category, items }, i) => (
        <div key={i}>
          <h3 className="category">{category.toUpperCase()}</h3>
          {items.map((item, j) => (
            <ul key={j} className="list">
              <li className="item ">{item}</li>
            </ul>
          ))}
        </div>
      ))}
    </div>
  </React.Fragment>
);

export default Skills;
