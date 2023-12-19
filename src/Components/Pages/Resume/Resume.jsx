import React, { useEffect } from "react";
import "./resume.css";
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Parallax } from "react-scroll-parallax";
gsap.registerPlugin(ScrollTrigger);

const Resume = () => {
  useEffect(() => {
    gsap.to(".resumeAnimationElem", {
      y: "0%",
      duration: 1,
      stagger: 0.3,
      ease: Power3.easeInOut,
      scrollTrigger: {
        trigger: ".resume_container",
      },
    });
    gsap.to(".resumeAnimationWordsElem", {
      css: { opacity: 1 },
      delay: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".resume_container",
      },
    });
  });
  return (
    <div className="container">
      <div className="small_box_content">
        {" "}
        <div className="small_box">
          <i className="fa-solid fa-user"></i> Resume{" "}
        </div>{" "}
      </div>
      <div className="resume_container">
        <div className="resume_container_inner">
          <Parallax speed={-1}>
            <div className="resume_container_left">
              <div className="resumeAnimation">
                <div className="resumeAnimationElem">Lets be honest, I</div>
              </div>
              <div className="resumeAnimation">
                <div className="resumeAnimationElem">wasn't very good</div>
              </div>{" "}
              <div className="resumeAnimation">
                <div className="resumeAnimationElem">at studies. And I</div>
              </div>
              <div className="resumeAnimation">
                <div className="resumeAnimationElem">
                  <span style={{ textDecoration: "line-through" }}> don't</span>{" "}
                  <span></span>
                  regret it.
                </div>
              </div>
            </div>
          </Parallax>
          <Parallax speed={2}>
            <div className="resume_container_right ">
              {/* Softwarica */}
              <div className="first_resume">
                <div className="resume">
                  <div className="resume_left resumeAnimationWordsElem">
                    <div className="dot"></div>
                    <div className="line"></div>
                  </div>
                  <div className="resume_right resumeAnimationWordsElem">
                    <a href="https://softwarica.edu.np/" target="_blank">
                      <div className="institution_name">
                        Softwarica College of IT & eCommerce
                      </div>
                    </a>
                    <div className="gpa">69.32%</div>
                    <div className="year">2019 - 2022</div>
                  </div>
                </div>
                {/* HSM */}
                <div className="resume">
                  <div className="resume_left resumeAnimationWordsElem">
                    <div className="dot"></div>
                    <div className="line"></div>
                  </div>
                  <div className="resume_right resumeAnimationWordsElem">
                    <a href="https://hsm.edu.np/" target="_blank">
                      <div className="institution_name">
                        Hetauda School of Social Science
                      </div>
                    </a>
                    <div className="gpa">2.81</div>
                    <div className="year">2017 - 2019</div>
                  </div>
                </div>
                {/* SIA */}
                <div className="resume">
                  <div className="resume_left resumeAnimationWordsElem">
                    <div className="dot"></div>
                    <div className="line"></div>
                  </div>
                  <div className="resume_right resumeAnimationWordsElem">
                    <a
                      href="https://solidarityinternationalacademy.edu.np/"
                      target="_blank"
                    >
                      <div className="institution_name">
                        Solidarity International Academy
                      </div>
                    </a>
                    <div className="gpa">3.50</div>
                    <div className="year">2019 - 2022</div>
                  </div>
                </div>
              </div>
            </div>
          </Parallax>
        </div>
      </div>
    </div>
  );
};

export default Resume;
