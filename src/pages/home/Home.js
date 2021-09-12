import React from "react";
import "./Home.css";
import Skills from "./skills";

export default function Home() {
  const items = [
    "A dynamic professional with over 12 years of experience in iPhone/iPad application development with strong domain knowledge and object oriented language expertise.",
    "Proficient in analyzing customer requirements, understanding them to provide customized solutions towards accomplishment of corporate goals.",
    "Flexible and able to adapt quickly to the environment and ensure the delivery of new solutions on time.",
    "Aptitude for understanding new processes and technologies and ability to take independent decisions.",
    "Skilled in identifying and adopting emerging trends and addressing industry requirements to achieve organizational objectives and profitability norms.",
    "Creative and innovative thinker, bringing energy, enthusiasm to problem resolution. An excellent communicator with strong analytical skills.",
  ];
  return (
    <div className="synopsis">
      <h3>Professional Synopsis</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3>Skills</h3>
      <Skills />
    </div>
  );
}
