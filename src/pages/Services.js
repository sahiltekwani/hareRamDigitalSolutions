import React from "react";
import "./css/Services.css";
import LazyVideo from "./LazyVideo"; // Adjust path as needed
import { HashLink } from "react-router-hash-link";

const services = [
  {
    title: "AI Innovations",
    description: [
      "Secure and modern use of the most advanced AI solutions tailored to your business.",
      "Custom AI model development and integration",
      "Real-time analytics and automation",
      "AI-driven personalization for customer experience",
    ],
    video: "/videos/ai.mp4",
  },
  {
    title: "Web Development",
    description: [
      "Scalable and secure web platforms with beautiful UI and robust backend.",
      "Responsive and mobile-first designs",
      "SEO and performance optimization",
      "Integration with modern APIs and services",
    ],
    video: "/videos/web.mp4",
  },
  {
    title: "Mobile Applications",
    description: [
      "Cross-platform mobile apps for iOS and Android with seamless UX.",
      "Flutter and React Native development",
      "Push notifications and offline support",
      "App Store and Play Store deployment",
    ],
    video: "/videos/mobile.mp4",
  },
  {
    title: "Cloud Integration",
    description: [
      "Optimized cloud-based systems for performance, reliability, and scalability.",
      "AWS, Azure, and GCP expertise",
      "CI/CD and DevOps best practices",
      "Secure and scalable infrastructure setup",
    ],
    video: "/videos/cloud.mp4",
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <p className="services-subtext">
        We provide cutting-edge digital solutions to bring your ideas to life.
      </p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div
            className={`service-card ${index % 2 !== 0 ? "reverse" : ""}`}
            key={index}
          >
            <LazyVideo className="service-video" src={service.video} />
            <h2>{service.title}</h2>
            <ul className="service-description">
              {service.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="contact-button-wrapper">
              <HashLink smooth to="/#contact" className="nav-link">
                Contact Us
              </HashLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
