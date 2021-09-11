import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "../pages/Home";
import Experience from "../pages/Experience";
import Contact from "../pages/Contact";
import SiteHeader from "./SiteHeader";
import "./App.css";

function App() {
  return (
    <div>
      <SiteHeader />
      <Router>
        <nav>
          <menu>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/experience">Experience</Link>
              </li>
              <li>
                <Link to="/contact">Contact Me</Link>
              </li>
            </ul>
          </menu>
        </nav>
        <Switch>
          <Route exact path="/experience">
            <Experience />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
