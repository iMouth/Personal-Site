import React from "react";
import github from "./assets/github.svg";
import linkedin from "./assets/linkedin.svg";
import gmail from "./assets/mail.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <a href="https://github.com/iMouth">
        <img src={github} alt="github" />
      </a>
      <a href="https://www.linkedin.com/in/kelvin-kast-919424248/">
        <img src={linkedin} alt="linkedin" />
      </a>
      <a href="mailto:kelvin.8.kast@gmail.com">
        <img src={gmail} alt="gmail" />
      </a>
    </div>
  );
};

export default Footer;
