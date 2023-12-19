import React, { useEffect, useRef } from "react";
import "./about.css";
import me from "../../Assets/me.jpg";
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    // Word Animation
    gsap.to(".aboutAnimationElem", {
      y: "0%",
      duration: 1,
      stagger: 0.3,
      ease: Power3.easeInOut,
      scrollTrigger: {
        trigger: ".about_container_inner",
      },
    });
    gsap.to(".aboutAnimationWordsElem", {
      css: { opacity: 1 },
      delay: 1.3,
      scrollTrigger: {
        trigger: ".about_me",
      },
    });
  });
  return (
    <div className="container">
      <div className="about_container">
        <div className="small_box_content">
          {" "}
          <div className="small_box">
            <i className="fa-solid fa-user"></i> About{" "}
          </div>{" "}
        </div>
        <div className="about_container_inner">
          <Parallax speed={2}>
            <div className="about_left" data-scroll data-scroll-speed="1">
              <div className="about_heading aboutAnimation">
                <div className="aboutAnimationElem">Hi, I am</div>
              </div>
              <div
                className="about_me aboutAnimation"
                style={{ marginTop: "1rem" }}
              >
                <div className="aboutAnimationElem">Rohan</div>
              </div>
              <div className="about_me aboutAnimation">
                <div className="aboutAnimationElem">Chaulagain</div>
              </div>
              <div className="about_desc aboutAnimationWords">
                <div className="aboutAnimationWordsElem">
                  I am a Full-Stack Web Developer, currently living in
                  Kathmandu, Nepal. I have completed my Bachelor of Science in
                  Computer Science from Softwarica College of IT & Ecommerce,
                  and my primary focus and inspiration for my studies is Web
                  Development.
                </div>
              </div>
            </div>
          </Parallax>
          <Parallax speed={-2}>
            <div className="about_right" data-scroll data-scroll-speed="-1">
              <ParallaxBanner>
                <img src={me} alt="myImage" className="about_image" />
              </ParallaxBanner>
            </div>
          </Parallax>
        </div>
      </div>
    </div>
  );
};

export default About;
