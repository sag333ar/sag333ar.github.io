import React from "react";

import HeaderLinks from "./HeaderLinks";

import "./SiteHeader.css";
import photo from "./sagar-photo.jpeg";

const SiteHeader = () => {
  return (
    <header>
      <HeaderLinks />
      <a href="/">
        <img src={photo} alt="Sagar" />
        <h1>Sagar Kothari</h1>
      </a>
      <h2>Mobile Application Developer</h2>
    </header>
  );
};

export default SiteHeader;
