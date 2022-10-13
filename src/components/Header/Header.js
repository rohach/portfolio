import React, { useEffect } from "react";
import "./Header.css";
import gsap from "gsap";

const Header = () => {
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
    tl.fromTo(".nav__list", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
  });
  return (
    <>
      <header className="container header__container">
        <div class="introSlider">
          <div class="introSlider-text">
            <h1 class="hide">
              <span class="text">Hello</span>
            </h1>
            <h1 class="hide">
              <span class="text">beautiful</span>
            </h1>

            <h1 class="hide">
              <span class="text">people.</span>
            </h1>
          </div>
        </div>
        <div className="nav">
          <ul className="nav__list">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#home" className="logo">
                ROHAN
              </a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="line"></div>
      </header>
    </>
  );
};

export default Header;
