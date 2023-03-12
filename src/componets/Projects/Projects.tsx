import React, { useState } from "react";
import "./Projects.scss";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import CartoonSearch from "./assets/Cartoon Search.png";
import CVCreator from "./assets/CV Creator.png";
import MessageBoard from "./assets/Message Board.png";
import WeatherApp from "./assets/Weather App.png";
import MemoryCard from "./assets/Memory Card.png";
import ShoppingCart from "./assets/Shopping Cart.png";
import ProjectInfo from "./ProjectInfo";
import uniqid from "uniqid";

const Projects = () => {
  const [curProject, setCurProject] = useState(0);

  const newProject = () => {
    const indicators = document.querySelectorAll(".carousel-indicators li");
    let project = 0;
    indicators.forEach((indicator) => {
      if (indicator.classList.contains("active")) {
        project = parseInt(indicator.getAttribute("data-mdb-target") as string);
      }
    });
    setCurProject(project);
  };

  const projectInfoList = [
    <ProjectInfo
    key={uniqid()}
      name="Cartoon Search"
      github="https://github.com/iMouth/Cartoon-Search"
      live="https://cartoon-search-62364.firebaseapp.com"
    />,
    <ProjectInfo
    key={uniqid()}
      name="Memory Card"
      github="https://github.com/iMouth/Memory-Card"
      live="https://imouth.github.io/Memory-Card/"
    />,
    <ProjectInfo
    key={uniqid()}
      name="Weather App"
      github="https://github.com/iMouth/Weather-App"
      live="https://imouth.github.io/Weather-App/"
    />,
    <ProjectInfo
    key={uniqid()}
      name="Message Board"
      github="https://github.com/iMouth/Message-Board"
      live="https://agile-mesa-05205.herokuapp.com/"
    />,
    <ProjectInfo
     key={uniqid()}
      name="CV Creator"
      github="https://github.com/iMouth/CV-Creator"
      live="https://imouth.github.io/CV-Creator/"
    />,
    <ProjectInfo
     key={uniqid()}
      name="Shopping Cart"
      github="https://github.com/iMouth/Shopping-Cart"
      live="https://imouth.github.io/Shopping-Cart/"
    />,
  ];

  return (
    <div id="Projects">
      <div className="title">Projects</div>
      <MDBCarousel onSlide={newProject} className="d-flex" interval={999999} showIndicators showControls dark fade>
        <MDBCarouselItem className="w-75 d-flex" itemId={1} src={CartoonSearch} alt="..."></MDBCarouselItem>
        <MDBCarouselItem className="w-75 d-flex" itemId={5} src={MemoryCard} alt="..."></MDBCarouselItem>
        <MDBCarouselItem className="w-75 d-flex" itemId={4} src={WeatherApp} alt="..."></MDBCarouselItem>
        <MDBCarouselItem className="w-75 d-flex" itemId={3} src={MessageBoard} alt="..."></MDBCarouselItem>
        <MDBCarouselItem className="w-75 d-flex" itemId={2} src={CVCreator} alt="..."></MDBCarouselItem>
        <MDBCarouselItem className="w-75 d-flex" itemId={6} src={ShoppingCart} alt="..."></MDBCarouselItem>
      </MDBCarousel>
      {projectInfoList[curProject]}
    </div>
  );
};

export default Projects;
