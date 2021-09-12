import React from "react";
import data from "./skills-data";

const Skills = () => {
  return (
    <ul>
      {data.map((skill) => (
        <li>
          <i>{skill.key}</i>: {skill.value}
        </li>
      ))}
    </ul>
  );
};

export default Skills;
