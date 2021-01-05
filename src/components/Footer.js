import React from "react";
import logo from "../images/Logo-white.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-div">
        <div className="footer-container">
          <img src={logo} alt="logo white"></img>
          <div className="footer-links-container">
            <div className="footer-links">
              <h5>About</h5>
              <Link to="/about" style={{ textDecoration: "none" }}>
                <p>About us</p>
              </Link>
              <Link to="/terms" style={{ textDecoration: "none" }}>
                  <p>Privacy &amp; Terms of Use</p>
              </Link>
            </div>
            <div className="footer-links">
              <h5>Support</h5>
              <p>Contact Us</p>
            </div>
          </div>
        </div>
        <p className="copyright">© 2020 Wellow. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
