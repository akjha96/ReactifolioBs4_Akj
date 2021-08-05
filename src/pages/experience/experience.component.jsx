import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_ACCENTURE from "../../assets/img/experience/accenture-3.svg";
import L_DELOITTE from "../../assets/img/experience/deloitte.svg";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div>
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      {/* Deloitte */}
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header
                as="h5"
                className="d-flex justify-content-center flex-wrap"
              >
                <Card.Img
                  variant="top"
                  className="img-resize"
                  src={L_DELOITTE}
                  alt="Deloitte logo"
                />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">DC Analyst</Card.Title>
                </div>
                <div>
                  <div className="text-center style">
                    <strong className="body-title-style ">
                      Full Stack Developer
                    </strong>
                    <br />
                    <strong>Technology:</strong> React JS, React Native,
                    Node.js, NestJS, PostgreSQL
                    <br />
                    <strong>Duration:</strong> June 2021 - Present
                    <br />
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li>
                        Worked as Backend Developer with TypeScript Node.js and
                        NestJS
                      </li>

                      <li>
                        <strong>Provided</strong> application maintenance while
                        working as `Production Support` and Enhancement items
                        based on analysis of the same
                      </li>
                    </ul>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>

      {/* Accenture */}
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header
                as="h5"
                className="d-flex justify-content-center flex-wrap"
              >
                <Card.Img
                  variant="top"
                  className="img-resize"
                  src={L_ACCENTURE}
                  alt="Accenture logo"
                />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">
                    Associate Software Engineer
                  </Card.Title>
                </div>
                <div>
                  <div className="text-center style">
                    <strong className="body-title-style ">
                      Full Stack Developer
                    </strong>
                    <br />
                    <strong>Technology:</strong> React JS, DOTNET, C#, MS-SQL,
                    Python
                    <br />
                    <strong>Duration:</strong> June 2019 - June 2021
                    <br />
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li>
                        <strong>Developed &amp; enhanced</strong> multiple
                        features with customizability option across web apps
                      </li>
                      <li>
                        <strong>Developed</strong> automation system to create
                        SQL bulk query scripts that increased efficiency by 80%.
                      </li>
                      <li>
                        <strong>Provided</strong> application maintenance while
                        working as `Production Support`.
                      </li>
                      <li>
                        <strong>Performed</strong> CRUD operations on multiple
                        databases to load/ remove data according to the business
                        requirements.
                      </li>
                      <li>
                        <strong>Co-created</strong> React Document used as a
                        guide for new developers.
                      </li>
                    </ul>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
