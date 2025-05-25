import React from "react";
import { Link } from "react-router-dom";
import "./css/Footer.css";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>Hare Ram InfoTech</h3>
          <p>Innovating digital experiences to grow your business.</p>
          <p>Specialized in web & mobile app development.</p>
          <p>Committed to quality, security & scalability.</p>
        </div>

        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/" onClick={scrollToTop}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={scrollToTop}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={scrollToTop}>
                About Us
              </Link>
            </li>
            <li>
              <HashLink smooth to="/#contact">
                Contact
              </HashLink>
            </li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p>
            Email:&nbsp;
            <a
              href="mailto:hareramdigitalSolutions@gmail.com"
              className="contact-link"
            >
              hareramdigitalSolutions@gmail.com
            </a>
          </p>

          <p>
            Phone:&nbsp;
            <a href="tel:+919422558448" className="contact-link">
              +91-9422558448
            </a>
          </p>
          <p>
            Location:&nbsp;
            <a
              href="https://maps.app.goo.gl/HNNCzSK8xV1xrYTVA"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              Hinjewadi Phase 1, Pune, Maharashtra, India
            </a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="trademark">
          &copy; {new Date().getFullYear()} Hare Ram InfoTech. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
