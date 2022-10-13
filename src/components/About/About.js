import React from "react";
import "./About.css";
import Me from "../assets/me.png";
import { BsFillAwardFill } from "react-icons/bs";
import { FaUserSecret } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";
import Aos from "aos";

const About = () => {
  return (
    <section className="container about" id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="smallLine"></div>
      <div className="smallLineSecond"></div>
      <div className="about__container">
        <div className="about__me-image">
          <img src={Me} alt="My_Image" />
        </div>
        <div className="about__content">
          <div className="about__cards" data-aos="fade">
            <article className="about__card">
              <BsFillAwardFill className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years of Experience</small>
            </article>
            <article className="about__card">
              <FaUserSecret className="about__icon" />
              <h5>Clients</h5>
              <small>20+ Worldwide</small>
            </article>
            <article className="about__card">
              <AiFillProject className="about__icon" />
              <h5>Projects</h5>
              <small>30+ Completed Projects</small>
            </article>
          </div>
          <p id="about__intro" data-aos="zoom-in">
            My name is Rohan Chaulagain and I am a{" "}
            <strong>Full-Stack Frontend Web Developer</strong> , currently
            living in Kathmandu, Nepal. I have completed my{" "}
            <strong>Bachelor of Science in Computer Science</strong> from
            <strong>
              <a href="https://softwarica.edu.np/" target="_blank">
                {" "}
                Softwarica College of IT & Ecommerce
              </a>
            </strong>
            , and my primary focus and inspiration for my studies is{" "}
            <strong>Web Development.</strong>
          </p>
          <a href="#contact" className="btn btn-primary" data-aos="zoom-in">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
