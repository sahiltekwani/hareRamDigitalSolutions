import React from 'react';
import './css/Services.css'; // Optional CSS for styling

const Services = () => {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <p className="intro-text">
        We offer a wide range of technology services tailored to meet your business needs. Whether you're a startup or an established brand, we're here to help you grow with innovative solutions.
      </p>

      <div className="service-grid">
        <div className="service-card">
          <h2>Web Development</h2>
          <p>We build responsive, SEO-friendly, and scalable websites using the latest technologies like React, Angular, and Node.js.</p>
        </div>

        <div className="service-card">
          <h2>Mobile App Development</h2>
          <p>Our team crafts intuitive iOS and Android apps using React Native, Flutter, and native development for a smooth mobile experience.</p>
        </div>

        <div className="service-card">
          <h2>UI/UX Design</h2>
          <p>We design user-centric interfaces that are clean, modern, and enhance the user journey for maximum engagement.</p>
        </div>

        <div className="service-card">
          <h2>E-commerce Solutions</h2>
          <p>From small stores to large marketplaces, we build secure and high-performing e-commerce platforms tailored for success.</p>
        </div>

        <div className="service-card">
          <h2>Cloud Services</h2>
          <p>We help you migrate, scale, and manage your infrastructure using platforms like AWS, Azure, and Google Cloud.</p>
        </div>

        <div className="service-card">
          <h2>Maintenance & Support</h2>
          <p>We provide reliable maintenance and long-term support for your applications to ensure optimal performance and uptime.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
