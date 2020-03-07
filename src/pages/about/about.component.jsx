import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../assets/img/profile/profile.webp";
import Image from "react-bootstrap/Image";

const About = () => {
  return (
    <div>
      <div className="about">
        <h1 className="pt-5 text-center font-details pb-4">About Me</h1>
        <Container>
          <Row className="pt-3 pb-5">
            <Col xs={12} md={6}>
              <Row className="justify-content-center">
                <Image className="profile justify-content-end" src={Profile} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start pr-2">
                Hi there! I am <strong>&nbsp;Anand Kumar Jha</strong>
                <br />A passionate programmer and a Coach, born and brought up in India. I am a Full Stack Web Developer with React.js, Express.js, Node.js, and PostgreSQL as my main stack.
                <br />
                <br />
                In 2019, I successfully completed my Engineering with specialization in 'Electronics and Telecommunication'.
                <br />
                <br />
                Working with the clients, my goal is always driven towards providing amazing experience with the best level of quality and service to them.
                <br />
                <br />
                Along with that, I also help people as a COACH on their journey of becoming a professional programmer. I love learning new about technologies, what problems are they solving and How can I use them to build better and scalable products.
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
