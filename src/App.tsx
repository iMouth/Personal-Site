import React from "react";
import "./App.scss";
import Header from "./componets/Header/Header";
import Home from "./componets/Home/Home";
import Skills from "./componets/Skills/Skills";
import Projects from "./componets/Projects/Projects";
import About from "./componets/About/About";
import Contact from "./componets/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="snap-container">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
