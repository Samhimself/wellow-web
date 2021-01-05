import React from "react";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";

export default function Nav({btnHandler}) {
  return (
    <header id="header">
      <div className="header-container">
        <div className="logo-container">
          <Link to="/" style={{ textDecoration: "none" }}>
            <img src={logo} alt="wellow logo"></img>
          </Link>
        </div>
        <ul className="header-links">
          <Link to="/about" style={{ textDecoration: "none" }}>
            <li className="header-links__btn" id="about-us">
              About Us
            </li>
          </Link>
          <li className="header-links__btn" id="contact-us" onClick={btnHandler}>
            Contact Us
          </li>
        </ul>
      </div>
    </header>
  );
}
