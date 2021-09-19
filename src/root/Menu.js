import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css"

const Menu = () => {
  return (
    <nav>
      <menu>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/key-responsibilities">Key Responsibilities</Link>
          </li>
          <li>
            <Link to="/work-history">Work History</Link>
          </li>
        </ul>
      </menu>
    </nav>
  );
};

export default Menu;
