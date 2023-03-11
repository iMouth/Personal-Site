import React from "react";
import Icon from "./Icon";
import uniqid from "uniqid";
import _ from "lodash";
import "./Skills.scss";

const Skills = () => {
  const devTools = require.context("./assets/dev-tools", true, /\.svg$/);
  let devToolsList = devTools.keys().map((key) => {
    const name = key.replace("./", "").replace(".svg", "");
    return <Icon key={uniqid()} name={name} link={devTools(key)} />;
  });
  devToolsList = _.shuffle(devToolsList);

  const langAndFrames = require.context("./assets/lang-frame", true, /\.svg$/);
  let langAndFramesList = langAndFrames.keys().map((key) => {
    const name = key.replace("./", "").replace(".svg", "");
    return <Icon key={uniqid()} name={name} link={langAndFrames(key)} />;
  });
  langAndFramesList = _.shuffle(langAndFramesList);

  return (
    <div id="Skills">
      <div className="title">Skills</div>
      <div className="lang-frame">
        <div className="lang-frame-title">Languages and Frameworks</div>
        <div className="lang-frame-list">{langAndFramesList}</div>
      </div>
      <div className="dev-tools">
        <div className="dev-tools-title">Development Tools</div>
        <div className="dev-tools-list">{devToolsList}</div>
      </div>
    </div>
  );
};

export default Skills;
