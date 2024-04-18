import React from "react";
import Logo from "../images/logo.png";

export default function Navbar() {
  return (
    <nav id="navContainer" className="navContainer">
      <div id="logoContainer">
        <img id="logoImg" src={Logo} alt="Logo"></img>
        <a id="heading" href="#home">
          artfuly
        </a>
      </div>
      <div id="navRightContainer">
        <input id="navToggle" type="checkbox" />
        <label className="menuBtnContainer" for="navToggle">
          <div className="menuBtn"></div>
        </label>
        <ul className="navList">
          <li>
            <a className="navLink" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="navLink" href="#about">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
