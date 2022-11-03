import React from "react";
import "./Footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
  return (
    <section className="footer">
      <ScrollToTop smooth className="top__btn" />
      <div className="footer__line"></div> <br />
      <div className="container footer__container">
        <a
          href="https://www.linkedin.com/in/rohan-chaulagain-ab0976211/"
          target="_blank"
          data-aos="fade-right"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://www.facebook.com/rohan.chaulagain.5"
          target="_blank"
          data-aos="fade-up"
        >
          <BsFacebook />
        </a>
        <a
          href="https://www.instagram.com/rohanchaulagain/"
          target="_blank"
          data-aos="fade-left"
        >
          <AiFillInstagram />
        </a>
      </div>
      <div className="footer__copyright">
        <small>
          Copyright &copy; 2022{" "}
          <strong>
            <a href="#">ROHAN CHAULAGAIN</a>
          </strong>
          .
        </small>
      </div>
    </section>
  );
};

export default Footer;
