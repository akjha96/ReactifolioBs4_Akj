import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_SASS from "../../assets/img/skills/sass-1.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_REACT from "../../assets/img/skills/react.svg";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_REACT_ROUTER from "../../assets/img/skills/react-router.svg";
import L_REACT_BOOTSTRAP from "../../assets/img/skills/react-bootstrap.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_DJANGO from "../../assets/img/skills/django.svg";
import L_FLASK from "../../assets/img/skills/flask.svg";
import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
import L_MSSQL from "../../assets/img/skills/mssql.svg";
import L_GIT from "../../assets/img/skills/git-icon.svg";
import L_HEROKU from "../../assets/img/skills/heroku.svg";
import L_DIGITAL_OCEAN from "../../assets/img/skills/digital-ocean.svg";
import L_GITHUB_PAGES from "../../assets/img/skills/github.svg";
import L_PYTHONANYWHERE from "../../assets/img/skills/pythonanywhere.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_PYTHON from "../../assets/img/skills/python.svg";
import "./skills.styles.css";

const Skills = () => {
  return (
    <div className="pt-5 pb-5">
      <h1 className="text-center font-details pb-4">Technical Skills</h1>
      <CardDeck>
        <Row className="d-flex justify-content-around">
          {/* Frontend */}
          <Col md={4}>
            <Card className="focus mt-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Frontend</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  <span className="p-2">
                    <Image src={L_HTML5} rounded className="image-style m-1"></Image> HTML5
                  </span>

                  <span className="p-2">
                    <Image src={L_CSS3} rounded className="image-style m-1"></Image> CSS3
                  </span>

                  <span className="p-2">
                    <Image src={L_JAVASCRIPT} rounded className="image-style m-1"></Image> JavaScript
                  </span>
                  <span className="p-2">
                    <Image src={L_SASS} rounded className="image-style m-1"></Image> Sass
                  </span>

                  <span className="p-2">
                    <Image src={L_BOOTSTRAP4} rounded className="image-style m-1"></Image> Bootstrap 4
                  </span>

                  <span className="p-2">
                    <Image src={L_REACT} rounded className="image-style m-1"></Image> React
                  </span>
                  <span className="p-2">
                    <Image src={L_REDUX} rounded className="image-style m-1"></Image> Redux
                  </span>

                  <span className="p-2">
                    <Image src={L_REACT_ROUTER} rounded className="image-style m-1"></Image> React-Router
                  </span>

                  <span className="p-2">
                    <Image src={L_REACT_BOOTSTRAP} rounded className="image-style m-1"></Image> React-Bootstrap
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Backend */}
          <Col md={4}>
            <Card className="focus mt-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Backend</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  <span className="p-2">
                    <Image src={L_NODE_JS} rounded className="image-style m-1"></Image> Node.js
                  </span>
                  <span className="p-2">
                    <Image src={L_EXPRESS} rounded className="image-style m-1"></Image> Express
                  </span>

                  <span className="p-2">
                    <Image src={L_DJANGO} rounded className="image-style m-1"></Image> Django
                  </span>
                  <span className="p-2">
                    <Image src={L_FLASK} rounded className="image-style m-1"></Image> Flask
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Hosting Platforms */}
            <Card className="focus mt-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Hosting Platforms</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  <span className="p-2">
                    <Image src={L_HEROKU} rounded className="image-style m-1"></Image> Heroku
                  </span>

                  <span className="p-2">
                    <Image src={L_DIGITAL_OCEAN} rounded className="image-style m-1"></Image> Digital-Ocean
                  </span>

                  <span className="p-2">
                    <Image src={L_GITHUB_PAGES} rounded className="image-style m-1"></Image> GitHub-Pages
                  </span>

                  <span className="p-2">
                    <Image src={L_PYTHONANYWHERE} rounded className="image-style m-1"></Image> PythonAnywhere
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Programming Languages */}
          <Col md={4}>
            <Card className="focus mt-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Programming Languages</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  <span className="p-2">
                    <Image src={L_JAVASCRIPT} rounded className="image-style m-1"></Image> JavaScript
                  </span>

                  <span className="p-2">
                    <Image src={L_PYTHON} rounded className="image-style m-1"></Image> Python
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Database */}

            <Card className="focus mt-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Database</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  <span className="p-2">
                    <Image src={L_POSTGRESQL} rounded className="image-style m-1"></Image> PostgreSQL
                  </span>
                  <span className="p-2">
                    <Image src={L_MSSQL} rounded className="image-style m-1"></Image> MS-SQL
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
            {/* Version Control */}

            <Card className="focus mt-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Version Control</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  <span className="p-2">
                    <Image src={L_GIT} rounded className="image-style m-1"></Image> GIT
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </CardDeck>
    </div>
  );
};

export default Skills;
