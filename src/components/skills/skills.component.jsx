import React from "react";

import "./skills.styles.scss";

const skillsList = [
  {
    category: "Front End",
    items: ["Ruby", "JS", "CSS"]
  },
  {
    category: "Back End",
    items: ["Ruby", "JS", "CSS"]
  },
  {
    category: "Other",
    items: ["Ruby", "JS", "CSS"]
  }
];

const Skills = () => (
  <React.Fragment>
    <div className="skills-container">
      <h2 className="title">Skills</h2>
      {skillsList.map(({ category, items }, i) => (
        <div key={i}>
          <h3 className="title">{category}</h3>
          {items.map((item, j) => (
            <ul key={j}>
              <li className="list">{item}</li>
            </ul>
          ))}
        </div>
      ))}
    </div>
  </React.Fragment>
);

export default Skills;
