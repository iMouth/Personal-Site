import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div id="Header">
      <div className="name">
        <h1>Kelvin Kast</h1>
      </div>
      <nav className="tabs">
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Skills">Skills</a>
        <a href="#Projects">Projects</a>
        <a href="#Contact">Contact</a>
      </nav>
    </div>
  );
};

export default Header;
