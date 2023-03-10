import React from "react";
import "./index.scss";

const Home = () => {
  return (
    <div>
      <div id="Header">
        <div className="name">
          <h1>Kelvin Kast</h1>
        </div>
        <div className="tabs">
          <button type="button">About</button>
          <button type="button">Skills</button>
          <button type="button">Portfolio</button>
          <button type="button">Contact</button>
          <div className="toggle">
            <input type="checkbox" id="switch" />
            <label htmlFor="switch">Toggle</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
