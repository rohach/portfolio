import React, { useEffect } from "react";
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { useRef } from "react";
import emailjs from "emailjs-com";
import Aos from "aos";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_bye0tsv",
      "template_5asgaip",
      form.current,
      "fQMv6xqivBCqu1LNG"
    );
    e.target.reset().then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <section id="contact">
      <h5 data-aos="zoom-in">Get In Touch</h5>
      <h2 data-aos="zoom-in">Contact Me</h2>
      <div className="smallLine" data-aos="fade-in"></div>
      <div className="smallLineSecond" data-aos="fade-in"></div>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option" data-aos="fade-right">
            <MdEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>rohanchaulagain1@gmail.com</h5>
            <a href="mailto:rohanchaulagain1@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option" data-aos="fade-right">
            <BsMessenger className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>rohanchaulagain1@gmail.com</h5>
            <a href="https://m.me/rohan.chaulagain.5" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option" data-aos="fade-right">
            <IoLogoWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+977-9868828760</h5>
            <a
              href="https://api.whatsapp.com/send?phone=9779868828760"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* FORM */}
        <form ref={form} id="form" onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            data-aos="fade-left"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            id="email"
            required
            data-aos="fade-left"
          />
          <span id="text"></span>
          <textarea
            name="message"
            rows="10"
            placeholder="Your Message"
            required
            data-aos="fade-left"
          ></textarea>
          <button
            type="submit"
            className="btn btn-primary"
            data-aos="fade-left"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
