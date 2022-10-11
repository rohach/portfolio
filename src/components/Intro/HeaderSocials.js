import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Headersocials = () => {
  return (
    <div className="header__socials">
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
  );
};

export default Headersocials;
