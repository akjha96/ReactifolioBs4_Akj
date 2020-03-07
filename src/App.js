import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MyNavbar from "./components/my-navbar/my-navbar.component";
import MyCarousal from "./components/my-carousal/my-carousal.component";
import MyTitleMessage from "./components/title-message/title-message.component";
import About from "./pages/about/about.component";
import Skills from "./pages/skills/skills.component";
import Container from "react-bootstrap/Container";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <MyCarousal />
          <MyTitleMessage />
          <MyNavbar />
          <Container className="container-box rounded">
            <hr />
            <About />
            <hr />
            <Skills />
            <hr />
            <About />
            <About />
            <About />
            <hr />
          </Container>
        </Router>
      </div>
    );
  }
}

export default App;
