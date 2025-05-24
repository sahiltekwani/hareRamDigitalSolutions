import React from "react";
import { motion } from "framer-motion";
import "./css/Home.css";
import "../App.css";
import Contact from "./Contact.js";
import { HashLink } from "react-router-hash-link";
import LazyVideo from "./LazyVideo.jsx";
import web from "../media/web.mp4";
import aiVideo from "../media/ai.mp4";

const services = [
  {
    title: "AI Innovations",
    description: [
      "Secure and modern use of the most advanced AI solutions tailored to your business.",
      "Custom AI model development and integration",
      "Real-time analytics and automation",
      "AI-driven personalization for customer experience",
    ],
    video: aiVideo,
  },
  {
    title: "Web Development",
    description: [
      "Scalable and secure web platforms with beautiful UI and robust backend.",
      "Responsive and mobile-first designs",
      "SEO and performance optimization",
      "Integration with modern APIs and services",
    ],
    video: web,
  },
];
const Home = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="home-container">
      {/* Hero Section with Background Video */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to Hare Ram InfoTech
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Your one-stop solution for web, mobile, and cloud-based innovations.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            From launching your digital presence to integrating cutting-edge AI
            solutions — we've got you covered. Ready to transform your vision
            into reality? Reach out to us today.
          </motion.p>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <HashLink smooth to="/#contact" className="nav-link">
              Get in Touch
            </HashLink>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <motion.section
        className="home-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="main">
          <div className="home-main-left">
            <h2>What We Do</h2>
            <p>
              We deliver top-notch digital experiences tailored to your business
              goals. From concept to launch, we’re with you every step of the
              way.
            </p>

            <div className="highlights">
              {services.map((service, index) => (
                <div
                  className={`highlight-box ${
                    index % 2 !== 0 ? "reverse" : ""
                  }`}
                  key={index}
                >
                  <LazyVideo className="service-video" src={service.video} />
                  <div>
                    <h2>{service.title}</h2>
                    <ul className="service-description">
                      {service.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                    <div className="contact-button-wrapper">
                      <HashLink
                        smooth
                        to="/services"
                        onClick={scrollToTop}
                        className="nav-link"
                      >
                        Other Services
                      </HashLink>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="home-main-right" id="contact">
            <Contact />
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
