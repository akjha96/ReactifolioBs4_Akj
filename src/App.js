import React, { useState, useEffect } from "react";
import MyNavbar from "./components/my-navbar/my-navbar.component";
import MyCarousal from "./components/my-carousal/my-carousal.component";
import MyTitleMessage from "./components/title-message/title-message.component";
import About from "./pages/about/about.component";
import Skills from "./pages/skills/skills.component";
import Container from "react-bootstrap/Container";
import TimeLine from "./components/projects-timeline/projects-timeline.component";
import Experience from "./pages/experience/experience.component";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import ContactForm from "./pages/contact-form/contact-form.component";
import { Parallax } from "react-parallax";
import Particles from "react-particles-js";
import { particlesOptions } from "./particlesOptions";
import FooterPanel from "./components/footer/footer.component";

import "./App.css";

const App = () => {
  const ApplyParticlesAfterWindowSize = 900;
  const [width, setWidth] = useState(window.innerWidth);
  const [shouldApplyparticles, setShouldApplyParticles] = useState(
    width >= ApplyParticlesAfterWindowSize
  );

  useEffect(() => {
    const handleApplyParticle = () => {
      setWidth(window.innerWidth);
      setShouldApplyParticles(width >= ApplyParticlesAfterWindowSize);
    };
    window.addEventListener("resize", handleApplyParticle);

    return () => {
      window.removeEventListener("resize", handleApplyParticle);
    };
  }, [shouldApplyparticles, width]);

  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar />
      <MyCarousal shouldApplyparticles={shouldApplyparticles} />
      <MyTitleMessage />
      {shouldApplyparticles ? (
        <Particles
          className="particles particles-box"
          params={particlesOptions}
        />
      ) : null}

      <div id="about">
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <div id="skills">
        <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <hr />
            <Skills />
          </Slide>
        </Container>
      </div>
      <div id="experience">
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />

            <Experience />
          </Fade>
        </Container>
      </div>
      <div id="projects">
        <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <hr />
            <TimeLine />
          </Slide>
        </Container>
      </div>
      <div id="contact">
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />
            <ContactForm />
          </Fade>
        </Container>
      </div>
      <hr />
      <FooterPanel />
    </div>
  );
};

export default App;
