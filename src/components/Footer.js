import React from "react";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="footer">
      <div id="firstCol" className="footerItem">
        <h3>Know More</h3>
        <ul>
          <li>
            <a
              target="blank"
              rel="noopener noreferrer"
              href="https://en.wikipedia.org/wiki/FAQ"
            >
              FAQs
            </a>
          </li>
          <li>
            <a
              target="blank"
              rel="noopener noreferrer"
              href="https://en.wikipedia.org/wiki/Privacy_policy"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              target="blank"
              rel="noopener noreferrer"
              href="https://en.wikipedia.org/wiki/Testimonial"
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              target="blank"
              rel="noopener noreferrer"
              href="https://www.zendesk.com/blog/customer-support-vs-customer-service/#"
            >
              Support
            </a>
          </li>
          <li>
            <a
              target="blank"
              rel="noopener noreferrer"
              href="https://en.wikipedia.org/wiki/Terms_of_service"
            >
              Terms of Service
            </a>
          </li>
        </ul>
      </div>
      <div id="secondCol" className="footerItem">
        <div className="flexCol">
          <img src={Logo} alt="logo"></img>
          <h1>artfuly</h1>
        </div>
        <p>
          241 Manor Road <br />
          Saint Augustine, GA 32084 <br />
          <br />
          +1 (706) 342-8631
          <br />
          customer@artfuly.com
        </p>
        <h3>follow us</h3>
        <div className="flexCol socialLinks">
          <a
            target="blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/"
          >
            <i className="fa fa-facebook-f icons"></i>
          </a>
          <a
            target="blank"
            rel="noopener noreferrer"
            href="https://twitter.com/"
          >
            <i className="fa fa-twitter icons"></i>
          </a>
          <a
            target="blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/"
          >
            <i className="fa fa-instagram icons"></i>
          </a>
        </div>
        <p>
          &copy; Copyright <span>{new Date().getFullYear()}</span>
        </p>
      </div>
      <div id="lastCol" className="footerItem">
        <div className="login-link">
          <h4>
            <Link to="/login">
              <div className="icon-container">
                <i className="fa fa-user icons"></i>
              </div>
              Admin Login
            </Link>
          </h4>
        </div>
        <p>Designed by: Karishma | Lahari | Hari Priya | Sanket | Arvind</p>
      </div>
    </footer>
  );
}
