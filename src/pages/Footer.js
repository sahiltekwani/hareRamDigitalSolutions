<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import "./css/Footer.css";
import { HashLink } from "react-router-hash-link";
=======
import React from 'react';
import { Link } from 'react-router-dom';
import './css/Footer.css';
>>>>>>> c93a374e7a5c611b627ee25067335f90f5a6293f

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>Hare Ram Digital Solutions</h3>
          <p>Innovating digital experiences to grow your business.</p>
        </div>

        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
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
          &copy; {new Date().getFullYear()} Hare Ram Digital Solutions. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
