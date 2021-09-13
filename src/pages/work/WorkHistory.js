import React from "react";
import data from "./work-data";
import "./WorkHistory.css";

export default function WorkHistory() {
  return (
    <div className="work-history">
      <h3>Work History</h3>
      {data.map((item, index) => (
        <div key={index}>
          <h4>
          <a href={item.company.link} target="_blank" rel="noreferrer">
            {item.company.name}
          </a>
          &nbsp;&nbsp;-&nbsp;&nbsp;{item.info.title}
          </h4>
          <ul>
            <li><i>Location: </i>{item.company.location}</li>
            <li><i>Duration: </i>{item.info.from} - {item.info.to}</li>
            <li><i>Highlights: </i>{item.info.highlights}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}
