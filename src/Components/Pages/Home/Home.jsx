import React, { useEffect } from "react";
import "./home.css";
import me1 from "../../Assets/me2.jpg";
import arrow from "../../Assets/arrow.svg";
import gsap, { Power3 } from "gsap";

const Home = () => {
  useEffect(() => {
    gsap.to(".homeAnimationElem", {
      y: "0%",
      duration: 1,
      stagger: 0.3,
      ease: Power3.easeInOut,
    });
    gsap.to(".home_image", {
      y: "0%",
      duration: 1,
      stagger: 0.3,
      ease: Power3.easeInOut,
    });
    gsap.to(
      ".home_links",
      {
        css: { opacity: 1 },
      },
      "start"
    );
    gsap.to(".home_image", {
      css: { opacity: 1 },
      delay: 1.3,
    });
  });
  return (
    <div className="container">
      <div className="home_container">
        <div
          className="home_top"
          data-scroll=""
          data-scroll-speed="3"
          data-scroll-position="top"
        >
          <div className="hone_creative homeAnimation">
            <div className="homeAnimationElem creative">Creative</div>
          </div>
          <div className="home_desc homeAnimation">
            <div className="homeAnimationElem">
              Passionate web developer Committed to creating visually appealing
              and functional websites, ensuring a seamless user experience.
            </div>
          </div>
        </div>
        <div
          className="home_bottom"
          data-scroll=""
          data-scroll-speed="2"
          data-scroll-position="top"
        >
          <div className="home_designer homeAnimation">
            <div className="homeAnimationElem">Designer</div>
          </div>
          <div className="home_photo">
            <img src={me1} alt="my_image" className="home_image" />
          </div>
        </div>
        <div className="home_links">
          <div className="home_social">
            <ul className="home_ul ">
              <li className="home_social_li">
                <i className="ri-facebook-line"></i>
              </li>
              <li className="home_social_li">
                <i className="ri-instagram-line"></i>
              </li>
              <li className="home_social_li">
                <i className="ri-github-fill"></i>{" "}
              </li>
            </ul>
          </div>
          <div className="home_arrow">
            <img src={arrow} alt="arrow" className="arrow_down" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
