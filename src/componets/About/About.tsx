import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div id="About">
      <div className="title">About Me</div>
      <div className="content">
        I'm currently a senior undergraduate looking to improve my software and web development knowledge. I study at
        the University of Arizona, and I'm majoring in computer science.
        <br />
        <br />
        I am skilled with web development languages and frameworks such as JavaScript, Typescript, React.js, Express.js,
        Node.js, CSS3, HTML5, and SCSS.
        <br />
        <br />
        Also, I have experience working with object-oriented programming languages such as Python, Java and C, database
        MongoDB, and industry tools such as Webpack, Git, Github, ESLint, and Docker.
        <br />
        <br />
        Outside of coding I also enjoy weightlifting, watching reality TV competitive shows like Survivor, and playing
        social deduction games like Mafia.
      </div>
    </div>
  );
};

export default About;
