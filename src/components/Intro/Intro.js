import React from "react";
import "./Intro.css";
import "./CTA.js";
import "./HeaderSocials.js";
import CTA from "./CTA.js";
import Headersocials from "./HeaderSocials.js";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";

const Intro = () => {
  return (
    <section id="intro">
      <div className="container">
        <div className="intro__container" data-aos="fade-in">
          ROHAN <br /> CHAULAGAIN
        </div>
        <p className="intro__bottom">
          {" "}
          I am
          <Typewriter
            loop
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={80}
            delaySpeed={2000}
            words={[
              " a student.",
              " from Hetauda, Nepal.",
              " aiming to become a Full stack web developer.",
            ]}
          />
        </p>
        <CTA />
        <Headersocials />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </section>
  );
};

export default Intro;
