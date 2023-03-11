import React from "react";
import "./Home.scss";
import Footer from "../Footer/Footer";

const Home = () => {
  // move the picture around on mousemove
  document.addEventListener("mousemove", (e) => {
    const outer = document.getElementById("outer") as HTMLElement;
    const inner = document.getElementById("inner") as HTMLElement;
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    outer.style.transform = `rotateX(${y * 30 - 15}deg) rotateY(${x * -30 + 15}deg)`;
    inner.style.transform = `translateX(${x * -30 + 15}%) translateY(${y * -30 + 15}%)`;
  });

  return (
    <div id="Home">
      <div className="info">
        <p className="name">Kelvin Kast</p>
        <p className="title">Full Stack Developer</p>
      </div>
      <div id="outer" className="pic-container">
        <div id="inner" className="pic"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
