import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,

  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import "../../App.css"


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons  skill ">
        <CgCPlusPlus className="tech-logo" />
        <progress className="progress  hidden progress-info w-56"  value="80" max="100"></progress>

      </Col>
      <Col xs={4} md={2} className="tech-icons skill ">
        <DiJavascript1 />
        <progress className="progress  hidden progress-info w-56"  value="80" max="100"></progress>

      </Col>
      
      <Col xs={4} md={2} className="tech-icons skill">
      <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/000000/html-5--v1.png" alt="html-5--v1"/>
      <progress className="progress  hidden progress-info w-56"  value="80" max="100"></progress>

      </Col>
      <Col xs={4} md={2} className="tech-icons skill">
        <DiNodejs />
        <progress className="progress  hidden progress-info w-56"  value="80" max="100"></progress>

      </Col>
      <Col xs={4} md={2} className="tech-icons skill">
        <DiReact />
        <progress className="progress  hidden progress-info w-56"  value="80" max="100"></progress>

      </Col>
   
      <Col xs={4} md={2} className="tech-icons skill">
        <DiMongodb />
        <progress className="progress  hidden progress-info w-56"  value="80" max="100"></progress>

      </Col>
      <Col xs={4} md={2} className="tech-icons skill">
        <SiNextdotjs />
        <progress className="progress  hidden progress-info w-56"  value="80" max="100"></progress>

      </Col>
      <Col xs={4} md={2} className="tech-icons skill">
        <DiGit />
        <progress className="progress  hidden progress-info w-56"  value="80" max="100"></progress>

      </Col>
 
     
      <Col xs={4} md={2} className="tech-icons skill">
        <SiPostgresql />
        <progress className="progress  hidden progress-info w-56"  value="80" max="100"></progress>

      </Col>
   
      <Col xs={4} md={2} className="tech-icons skill">
        <DiJava />
        <progress className="progress  hidden progress-info w-56"  value="80" max="100"></progress>

      </Col>
    </Row>
  );
}

export default Techstack;
