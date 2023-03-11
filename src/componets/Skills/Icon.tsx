import React from "react";
import "./Icon.scss";

interface Props {
  name: string;
  link: string;
}

const Icon = ({ name, link }: Props) => {
  return (
    <div className="icon-container">
      <img className="icon" src={link} alt={name} />
      <p className="icon-name">{name}</p>
    </div>
  );
};

export default Icon;
