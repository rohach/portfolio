import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uw24cqn",
        "template_k3t5gv8",
        form.current,
        "fQMv6xqivBCqu1LNG"
      )
      .then(
        window.alert("Message sent!"),
        window.location.reload(),
        (error) => {
          window.alert("Some error occured!");
        }
      );
  };
  return (
    <div className="container">
      <div className="small_box_content" id="contact">
        {" "}
        <div className="small_box">
          <i className="fa-solid fa-user"></i> Contact{" "}
        </div>{" "}
      </div>
      <div className="contact">
        <div className="contact_left">
          <div className="contact_form">
            <form id="contact_form" ref={form} onSubmit={sendEmail}>
              <h2>Send Message</h2>
              <div className="top_section box_margin">
                <div className="input_box ">
                  <input type="text" required="true" name="from_name" />
                  <span>Full Name</span>
                </div>
                <div className="input_box ">
                  <input type="email" required="true" name="from_email" />
                  <span>Email</span>
                </div>
              </div>

              <div className="input_box box_margin">
                <textarea required="true" name="message" />
                <span>Type your Message...</span>
              </div>

              <div className="input_box">
                <input type="submit" value="Send" name="" />
              </div>
            </form>
          </div>
        </div>
        <div className="contact_right">
          <div className="info_box">
            <div className="info">Info</div>
            <div className="contact_info">
              <div className="contact_number">(+977) 9868828760</div>
              <div className="contact_mail">rohanchaulagain1@gmail.com</div>
            </div>
            <div className="copyright"> © 2022 ROHAN CHAULAGAIN.</div>
            <div className="location">Kathmandu, Nepal</div>
            <div className="social_icons">
              <a
                href="https://www.facebook.com/rohan.chaulagain.5"
                target="_blank"
              >
                <i className="ri-facebook-fill footer_icon"></i>
              </a>
              <a href="https://github.com/rohach" target="_blank">
                <i className="ri-github-fill footer_icon"></i>
              </a>
              <a
                href="https://www.instagram.com/rohanchaulagain/"
                target="_blank"
              >
                <i className="ri-instagram-fill footer_icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
