import React from "react";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const pageName = props.page === "admin" ? true : false;
  return (
    <nav id="navContainer" className="navContainer">
      <div id="logoContainer">
        <img id="logoImg" src={Logo} alt="Logo"></img>
        <Link to="/">
          <a href="/home" id="heading">
            artfuly
          </a>
        </Link>
      </div>
      <div id="navRightContainer">
        <input id="navToggle" type="checkbox" />
        <label className="menuBtnContainer" for="navToggle">
          <div className="menuBtn"></div>
        </label>
        <ul className="navList">
          {!pageName && (
            <>
              <li>
                <Link to="/">
                  <a className="navLink" href="#home">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <a className="navLink" href="#about">
                  About
                </a>
              </li>
            </>
          )}
          {pageName && (
            <li>
              <Link to="/dashboard">
                <a className="navLink" href="/dashboard">
                  Dashboard
                </a>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
