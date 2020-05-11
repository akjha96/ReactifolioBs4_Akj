import React, { Component } from "react";
import MyNavbar from "./components/my-navbar/my-navbar.component";
import MyCarousal from "./components/my-carousal/my-carousal.component";
import MyTitleMessage from "./components/title-message/title-message.component";
import About from "./pages/about/about.component";
import Skills from "./pages/skills/skills.component";
import Container from "react-bootstrap/Container";
import TimeLine from "./components/projects-timeline/projects-timeline.component";
import Experience from "./pages/experience/experience.component";
import Fade from "react-reveal/Fade";
import ContactForm from "./pages/contact-form/contact-form.component";
import { Parallax } from "react-parallax";
// import Particles from "react-particles-js";
import FooterPanel from "./components/footer/footer.component";

import "./App.css";

// const particlesOptions = {
//   particles: {
//     number: {
//       value: 80,
//       density: {
//         enable: true,
//         value_area: 1900,
//       },
//     },
//     color: {
//       value: "#ffffff",
//     },
//     shape: {
//       type: "polygon",
//       stroke: {
//         width: 0,
//         color: "#000000",
//       },
//       polygon: {
//         nb_sides: 5,
//       },
//       image: {
//         src: "img/github.svg",
//         width: 100,
//         height: 100,
//       },
//     },
//     opacity: {
//       value: 0.5,
//       random: false,
//       anim: {
//         enable: false,
//         speed: 1,
//         opacity_min: 0.1,
//         sync: false,
//       },
//     },
//     size: {
//       value: 3,
//       random: true,
//       anim: {
//         enable: false,
//         speed: 40,
//         size_min: 0.1,
//         sync: false,
//       },
//     },
//     line_linked: {
//       enable: true,
//       distance: 150,
//       color: "#ffffff",
//       opacity: 0.4,
//       width: 1,
//     },
//     move: {
//       enable: true,
//       speed: 6,
//       direction: "none",
//       random: false,
//       straight: false,
//       out_mode: "out",
//       bounce: false,
//       attract: {
//         enable: false,
//         rotateX: 600,
//         rotateY: 1200,
//       },
//     },
//   },
//   interactivity: {
//     detect_on: "canvas",
//     events: {
//       onhover: {
//         enable: true,
//         mode: "repulse",
//       },
//       onclick: {
//         enable: true,
//         mode: "push",
//       },
//       resize: true,
//     },
//     modes: {
//       grab: {
//         distance: 400,
//         line_linked: {
//           opacity: 1,
//         },
//       },
//       bubble: {
//         distance: 400,
//         size: 40,
//         duration: 2,
//         opacity: 8,
//         speed: 3,
//       },
//       repulse: {
//         distance: 200,
//         duration: 0.4,
//       },
//       push: {
//         particles_nb: 4,
//       },
//       remove: {
//         particles_nb: 2,
//       },
//     },
//   },
//   retina_detect: true,
// };

class App extends Component {
  render() {
    return (
      <div className="App" style={{ position: "relative" }}>
        <MyCarousal />
        <MyTitleMessage />
        <MyNavbar />
        {/* <Particles className="particles particles-box" params={particlesOptions} /> */}

        <div>
          <Parallax blur={{ min: -30, max: 30 }} bgImage={require("./assets/img/parallex/background.webp")} bgImageAlt="" strength={-200}>
            <div>
              <Container className="container-box rounded">
                <Fade duration={700}>
                  <About />
                </Fade>
              </Container>
            </div>
          </Parallax>
        </div>
        <Container className="container-box rounded">
          <Fade duration={700}>
            <hr />

            <Skills />
          </Fade>
        </Container>
        <div>
          <Container className="container-box rounded">
            <Fade duration={500}>
              <hr />

              <Experience />
            </Fade>
          </Container>
        </div>
        <Container className="container-box rounded">
          <Fade duration={700}>
            <hr />
            <TimeLine />
          </Fade>
        </Container>
        <Container className="container-box rounded">
          <Fade duration={700}>
            <hr />
            <ContactForm />
          </Fade>
        </Container>

        <hr />
        <FooterPanel />
      </div>
    );
  }
}

export default App;
