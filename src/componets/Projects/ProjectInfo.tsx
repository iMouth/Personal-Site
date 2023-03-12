import React from "react";
import { MDBBtnGroup, MDBBtn, MDBTypography } from "mdb-react-ui-kit";
import "./ProjectInfo.scss";

interface Props {
  name: string;
  live: string;
  github: string;
}

const ProjectInfo = ({ name, live, github }: Props) => {
  return (
    <div id="ProjectInfo">
      <MDBTypography variant="h4">{name}</MDBTypography>
      <MDBBtnGroup>
        <MDBBtn href={github} target="_blank" color="dark">
          github
        </MDBBtn>
        <MDBBtn href={live} target="_blank" color="dark">
          live
        </MDBBtn>
      </MDBBtnGroup>
    </div>
  );
};

export default ProjectInfo;
