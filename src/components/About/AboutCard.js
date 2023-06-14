import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view seec">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Soumyajit Dey </span>
            from <span className="purple"> Kolkata,WB,India.</span>
            <br />
            <br />
            <br />
            <br />
            <center><span  className="purple"> Education</span></center>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> B.Tech in Electronics and Communication Engineering from B.P. Poddar Institute of Management and Technology 
            </li>
            <li className="about-activity">
              <ImPointRight /> I.S.C from Central Modern School
            </li>
            <li className="about-activity">
              <ImPointRight /> I.C.S.E from Central Modern School
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
