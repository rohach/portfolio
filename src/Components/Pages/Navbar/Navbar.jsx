import React, { useEffect, useRef } from "react";
import "./navbar.css";
import gsap, { Power3 } from "gsap";

const Navbar = () => {
  const navRef = useRef(null);
  useEffect(() => {
    const open = document.querySelector(".right");
    const close = document.querySelector(".close");
    const links = document.querySelector(".nav_links");
    var tl = gsap.timeline({
      defaults: { duration: 1, ease: Power3.easeInOut },
    });
    open.addEventListener("click", () => {
      if (tl.reversed()) {
        tl.play();
      } else {
        tl.to("nav", { transform: "translateX(0%)" })
          .to("nav", { height: "100vh" }, "-=.1")
          .to(
            "nav ul li a",
            { opacity: 1, pointerEvents: "all", stagger: 0.2 },
            "-=.8"
          )
          .to(".close", { opacity: 1, pointerEvents: "all" }, "-=.8")
          .to("nav h2", { opacity: 1 }, "-=1");
      }
    });

    close.addEventListener("click", () => {
      tl.reverse();
    });
    links.addEventListener("click", () => {
      tl.reverse();
    });

    gsap.to(".navAnimationElem", {
      y: "0%",
      duration: 1,
      stagger: 0.3,
      ease: Power3.easeInOut,
    });
    gsap.to(".right_inner", {
      y: "0%",
      duration: 1,
      stagger: 0.3,
      ease: Power3.easeInOut,
    });
  }, []);

  return (
    <div className="">
      <div className="container">
        <div className="nav">
          <label htmlFor="logo" className="nav_name navAnimation">
            <div className="navAnimationElem">Rohan</div>
          </label>
          <div className="right">
            <div className="right_inner">
              <i className="ri-menu-3-line menu_icon"></i>
            </div>
          </div>
        </div>
      </div>
      {/* mobile nav */}
      <nav ref={navRef}>
        <h2>Rohan</h2>
        <div className="close">
          <div></div>
        </div>
        <ul>
          <li>
            <a href="#" className="nav_links">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav_links">
              About
            </a>
          </li>
          <li>
            <a href="#" className="nav_links">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="nav_links">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
