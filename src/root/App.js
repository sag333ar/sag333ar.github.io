import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../pages/home/Home";
import WorkHistory from "../pages/work/WorkHistory";
import RolesResponsibilities from '../pages/RolesResponsibilities'
import Education from '../pages/Education';
import Contact from "../pages/Contact";
import SiteHeader from "./SiteHeader";
import Menu from "./Menu";
import "./App.css";

function App() {
  return (
    <div>
      <SiteHeader />
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/key-responsibilities">
            <RolesResponsibilities />
          </Route>
          <Route exact path="/work-history">
            <WorkHistory />
          </Route>
          <Route exact path="/education">
            <Education />
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
