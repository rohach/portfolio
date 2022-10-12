import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="container header__container">
        <div className="nav">
          <ul className="nav__list">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#home" className="logo">
                ROHAN
              </a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="line"></div>
      </header>
    </>
  );
};

export default Header;
