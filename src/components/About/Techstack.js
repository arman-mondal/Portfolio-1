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
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons seeec">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons seeec">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons seeec">
        <TbBrandGolang />
      </Col>
      <Col xs={4} md={2} className="tech-icons seeec">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons seeec">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons seeec">
        <SiSolidity />
      </Col>
      <Col xs={4} md={2} className="tech-icons seeec">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons seeec">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons seeec">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons seeec">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons seeec">
        <SiRedis />
      </Col>
      <Col xs={4} md={2} className="tech-icons seeec">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons seeec">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons seeec">
        <DiJava />
      </Col>
    </Row>
  );
}

export default Techstack;
