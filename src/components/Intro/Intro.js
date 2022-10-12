import React from "react";
import "./Intro.css";
import "./CTA.js";
import "./HeaderSocials.js";
import CTA from "./CTA.js";
import Headersocials from "./HeaderSocials.js";

const Intro = () => {
  return (
    <section id="intro">
      <div className="container">
        <div className="intro__container">
          ROHAN <br /> CHAULAGAIN
        </div>
        <p className="intro__bottom">I am a full-stack web developer. </p>
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
