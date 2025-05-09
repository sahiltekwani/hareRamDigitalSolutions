import React from 'react';
import './css/About.css'; // Optional for styling

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to <strong>[Your Company Name]</strong>! We're a passionate team of developers, designers, and strategists
        committed to building innovative digital solutions that make an impact.
      </p>

      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          Founded in [Year], we specialize in delivering high-quality web and mobile applications tailored to your business
          needs. Our team brings together expertise across a wide range of technologies to provide seamless digital experiences.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to empower businesses through technology — by delivering reliable, scalable, and user-centric solutions
          that drive success.
        </p>
      </section>

      <section className="about-section">
        <h2>What We Do</h2>
        <ul>
          <li>Custom Web Development</li>
          <li>Mobile App Development</li>
          <li>UI/UX Design</li>
          <li>E-commerce Solutions</li>
          <li>Cloud Integration & Hosting</li>
          <li>Product Strategy & Consulting</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Why Choose Us</h2>
        <p>
          We believe in long-term partnerships, transparency, and delivering quality over quantity. Whether you're a startup or an
          enterprise, we are here to transform your vision into reality.
        </p>
      </section>
    </div>
  );
};

export default About;
