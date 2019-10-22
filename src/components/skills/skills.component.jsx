import React from "react";

import "./skills.styles.scss";

const skills = [
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
  <div className="skills-container">
    <h2 className="title">Skills</h2>
    <React.Fragment>
      <ul>
        {skills.items.map((item, i) => (
          <li>`{item[i]}`</li>
        ))}
      </ul>
    </React.Fragment>
  </div>
);

// {skills.map(skill => (
//   <h3>{skill.category}</h3>
// ))}

// <ul className="list">
//   <li>{skills.item[0]}</li>
//   <li>Skill 2</li>
//   <li>Skill 3</li>
// </ul>;

// {
//   skills.map((skill, index) => (
//     <div key={index}>
//       <h3>{skill.category}</h3>
//       {skills.items.map((el, i) => (
//         <ul key={i}>
//           <li>{el}</li>
//         </ul>
//       ))}
//     </div>
//   ));
// }

export default Skills;

// <div>
//     <h3 className="skills">Back End</h3>
//     <ul className="list">
//       <li>Skill 1</li>
//       <li>Skill 2</li>
//       <li>Skill 3</li>
//     </ul>
//   </div>
