import React from 'react';
import { Link } from 'react-router-dom';
import './css/Footer.css';

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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p>Email: hareramdigitalSolutions@gmail.com</p>
          <p>Phone: +91-9422558448</p>
          <p>Location: Hinjewadi Phase 1, Pune, Maharashtra, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Hare Ram Digital Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
