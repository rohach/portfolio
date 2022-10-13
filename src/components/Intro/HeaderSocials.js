import React, { useEffect } from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import gsap from "gsap";

const Headersocials = () => {
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
    tl.fromTo(
      ".scroll__down",
      { opacity: 0 },
      { opacity: 1, duration: 1.5 },
      "-=1"
    );
    tl.fromTo(
      ".header__socials",
      { opacity: 0 },
      { opacity: 1, duration: 1.5 },
      "-=1"
    );
  });
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/rohan-chaulagain-ab0976211/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://www.facebook.com/rohan.chaulagain.5" target="_blank">
        <BsFacebook />
      </a>
      <a href="https://www.instagram.com/rohanchaulagain/" target="_blank">
        <AiFillInstagram />
      </a>
    </div>
  );
};

export default Headersocials;
