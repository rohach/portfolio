import React, { useEffect } from "react";
import "./project.css";
import eLearner from "../../Assets/e-learner.png";
import online from "../../Assets/online.png";
import carMax from "../../Assets/carmax.png";
import gsap, { Power3 } from "gsap";

const Projects = () => {
  useEffect(() => {
    document.querySelectorAll(".elem").forEach(function (elem) {
      var rotate = 0;
      var diffrot = 0;

      elem.addEventListener("mouseleave", function (dets) {
        gsap.to(elem.querySelector("img"), {
          opacity: 0,
          ease: Power3,
          duration: 0.5,
        });
      });

      elem.addEventListener("mousemove", function (dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(elem.querySelector("img"), {
          opacity: 1,
          ease: Power3,
          top: diff,
          left: dets.clientX,
          rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
        });
      });
    });
  });
  return (
    <div className="container">
      <div className="small_box_content">
        {" "}
        <div className="small_box">
          <i className="fa-solid fa-user"></i> Projects{" "}
        </div>{" "}
      </div>
      <div className="projects_container">
        <div className="projects_container_inner">
          <div className="project_container">
            <div class="elem">
              <img src={online} alt="online" className="hover_image" />
              <div>Online Store</div>
            </div>
            <div className="project_options">
              <a href="https://github.com/rohach/onlineStore" target="_blank">
                <div className="github">Code</div>
              </a>
              <a
                href="https://candid-dieffenbachia-5478ad.netlify.app/"
                target="_blank"
              >
                <div className="live">Demo</div>
              </a>
            </div>
          </div>
          <div className="project_container">
            <div class="elem">
              <img src={eLearner} alt="eLearner" className="hover_image" />
              <div>eLearner</div>
            </div>
            <div className="project_options">
              <a href="https://github.com/rohach/e-Learner" target="_blank">
                <div className="github">Code</div>
              </a>
              <a href="" target="_blank">
                <div className="live">Demo</div>
              </a>
            </div>
          </div>
          <div className="project_container elemlast">
            <div class="elem">
              <img src={carMax} alt="carMax" className="hover_image" />
              <div>Car Max</div>
            </div>
            <div className="project_options">
              <a
                href="https://github.com/rohach/carmax.github.io"
                target="_blank"
              >
                <div className="github">Code</div>
              </a>
              <a
                href="https://rohach.github.io/carmax.github.io/"
                target="_blank"
              >
                <div className="live">Demo</div>
              </a>
            </div>
          </div>
          <div className="see_more">
            Want to see more of my projects? Visit my Github profile from{" "}
            <a
              href="https://github.com/rohach"
              style={{ fontWeight: "bold" }}
              target="_blank"
            >
              <span>here.</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
