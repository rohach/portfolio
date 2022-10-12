import React from "react";
import "./Footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__line"></div> <br />
      <div className="container footer__container">
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
