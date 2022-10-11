import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="container">
        <nav className="nav">
          <ul className="nav__list">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/" className="logo">
                ROHAN
              </a>
            </li>
            <li>
              <a href="/">Experience</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="line"></div>
      </header>
    </>
  );
};

export default Header;
