import React from "react";
import "./Projects.css";
import Aos from "aos";
import elearner from "../assets/e-learner.png";
import carmax from "../assets/carmax.png";
import construct from "../assets/construct.png";
import agricfarm from "../assets/agricfarm.png";
import hamro from "../assets/hamro.png";
import news from "../assets/news.png";

const project = () => {
  return (
    <section id="project">
      <h5 data-aos="zoom-out-down">Projects that I have done</h5>
      <h2 data-aos="zoom-out-up">My Projects</h2>
      <div className="smallLine" data-aos="fade-in"></div>
      <div className="smallLineSecond" data-aos="fade-in"></div>
      <div className="container project__container">
        <div data-aos="fade-right">
          <img src={elearner} alt="e-learner" className="projects__image" />
          <small className="small__container">
            <div>ReactJS</div>
            <div>NodeJS</div>
          </small>
          <h1>e-Learner</h1>
          <p className="project__desc">
            An eLearning platform that was designed with an intention to
            facilititate and offer students a wide range of knowledge.
          </p>
          <a href="https://github.com/rohach/e-Learner.git" target="_blank">
            <button className="fancy-link">
              <i className="fa-brands fa-github"></i> GithHub{" "}
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </a>
        </div>
        <div data-aos="fade-up">
          <img
            src={construct}
            alt="construct-all"
            className="projects__image"
          />
          <small className="small__container">
            <div>ReactJS</div>
            <div>NodeJS</div>
          </small>
          <h1>Construct-All</h1>
          <p className="project__desc">
            Construct-All is an online construction company designed in order to
            facilitate users with best construction partner.
          </p>
          <a href="https://github.com/rohach/e-Learner.git" target="_blank">
            <button className="fancy-link">
              <i className="fa-brands fa-github"></i> GithHub{" "}
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </a>
        </div>
        <div data-aos="fade-left">
          <img src={carmax} alt="car-max" className="projects__image" />
          <small className="small__container">
            <div>HTML</div>
            <div>CSS</div>
            <div>JS</div>
          </small>
          <h1>Car-Max</h1>
          <p className="project__desc">
            Car-Max initially was designed as a prototype for car selling
            company. Car-Max is a static webstie.
          </p>
          <a
            href="https://github.com/rohach/carmax.github.io.git"
            target="_blank"
          >
            <button className="fancy-link">
              <i className="fa-brands fa-github"></i> GithHub{" "}
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </a>
        </div>
      </div>
      <div className="container project__container">
        <div
          data-aos="zoom-in-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img src={hamro} alt="hamro-garden" className="projects__image" />
          <small className="small__container">
            <div>ReactJS</div>
            <div>NodeJS</div>
          </small>
          <h1>Hamro Garden</h1>
          <p className="project__desc">
            Hamro Garden is a group project that is completed by 5 of my
            friends.
          </p>
          <a href="https://github.com/rochak79/Pandavs.git" target="_blank">
            <button className="fancy-link">
              <i className="fa-brands fa-github"></i> GithHub{" "}
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </a>
        </div>
        <div data-aos="zoom-in">
          <img src={agricfarm} alt="agricfarm" className="projects__image" />
          <small className="small__container">
            <div>HTML</div>
            <div>CSS</div>
            <div>JS</div>
            <div>BOOTSTRAP</div>
          </small>
          <h1>Agricfarm</h1>
          <p className="project__desc">
            A static website designed as a clone of the main website Agricfarm.
          </p>
          <a href="https://github.com/rohach/agricfarm.git" target="_blank">
            <button className="fancy-link">
              <i className="fa-brands fa-github"></i> GithHub{" "}
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </a>
        </div>

        <div data-aos="zoom-in-left">
          <img
            src={news}
            alt="newsletter-homepage"
            className="projects__image"
          />
          <small className="small__container">
            <div>HTML</div>
            <div>CSS</div>
            <div>JS</div>
          </small>
          <h1>Newsletter</h1>
          <p className="project__desc">
            A static page that I created for Newsletter landing page.
          </p>
          <a
            href="https://github.com/rohach/newshomepage.github.io.git"
            target="_blank"
          >
            <button className="fancy-link">
              <i className="fa-brands fa-github"></i> GithHub{" "}
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default project;
