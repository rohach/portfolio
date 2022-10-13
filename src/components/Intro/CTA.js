import React, { useEffect } from "react";
import CV from "../assets/CV.pdf";
import gsap from "gsap";

const CTA = () => {
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
      ".intro__bottom",
      { opacity: 0 },
      { opacity: 1, duration: 1.5 },
      "-=1"
    );
    tl.fromTo(".cta", { opacity: 0 }, { opacity: 1, duration: 1.5 }, "-=1");
    tl.fromTo(".scroll__down", { opacity: 0 }, { opacity: 1, duration: 1.5 });
  });
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
