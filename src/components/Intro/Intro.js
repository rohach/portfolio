import React, { useEffect } from "react";
import "./Intro.css";
import "./CTA.js";
import "./HeaderSocials.js";
import CTA from "./CTA.js";
import Headersocials from "./HeaderSocials.js";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import gsap from "gsap";

const Intro = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power1.out",
      },
    });
    tl.to(".text", { y: "0%", duration: 1, stagger: 0.4 });
    tl.to(".slider", { y: "-100%", duration: 1, delay: 0.5 });
    tl.to(".introSlider", { y: "-100%", duration: 1 }, "-=1");
    tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
    tl.fromTo(
      ".intro__container",
      { opacity: 0 },
      { opacity: 1, duration: 1.5, delay: 0.1 },
      "-=1"
    );
    tl.fromTo(
      ".intro__bottom",
      { opacity: 0 },
      { opacity: 1, duration: 1.5, delay: 0.1 },
      "-=1"
    );
  });
  return (
    <section id="intro">
      <div className="container">
        <div className="intro__container">
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
              " from Hetauda, Nepal.",
              " a student.",
              " a Full stack web developer.",
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
