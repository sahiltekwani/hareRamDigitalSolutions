import React from "react";
import { motion } from "framer-motion";
import "./css/Home.css";
import "../App.css";
import Contact from "./Contact.js";
import { HashLink } from "react-router-hash-link";
import LazyVideo from "./LazyVideo.jsx";
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
];
const Home = () => {
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
            Welcome to Hare Ram Digital Solutions
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
            Whether you want to start your digital revolution to the most
            advance AI features. We have got you covered. Reach out to us to
            start today.
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
          <div className="main-left">
            <h2>What We Do</h2>
            <p>
              We deliver top-notch digital experiences tailored to your business
              goals. From concept to launch, we’re with you every step of the
              way.
            </p>

            <div className="highlights">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className={`highlight-box div-main ${
                    index % 2 === 1 ? "reverse" : ""
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div
                    className={`highlight-box div-main ${
                      index % 2 === 1 ? "reverse" : ""
                    }`}
                  >
                    <div className="video-wrapper">
                      <LazyVideo className="lazy-video" src={service.video} />
                    </div>
                    <div className="service-main-right">
                      <h3>{service.title}</h3>
                      <ul>
                        {service.description.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                      <div className="cta-container">
                        <HashLink smooth to="/services" className="nav-link">
                          other services
                        </HashLink>
                      </div>{" "}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="main-right" id="contact">
            <Contact />
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
