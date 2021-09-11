import React from "react";
import data from "./skills-data";

const Skills = () => {
  return (
    <ul>
      {data.map((skill) => (
        <li>
          <b>{skill.key}</b>: {skill.value}
        </li>
      ))}
    </ul>
  );
};

export default Skills;
