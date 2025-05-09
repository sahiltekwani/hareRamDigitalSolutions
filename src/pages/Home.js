import React from 'react';
import { motion } from 'framer-motion';
import './css/Home.css';
import '../App.css'
import { Link } from 'react-router-dom';
import bgVideo from '../media/tech-bg.mp4'; // Make sure you have a video in this path

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section with Background Video */}
      <section className="hero-section">
        <video autoPlay muted loop className="bg-video">
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

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

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Link to="/contact" className="cta-button">Get in Touch</Link>
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
        <h2>What We Do</h2>
        <p>We deliver top-notch digital experiences tailored to your business goals. From concept to launch, we’re with you every step of the way.</p>

        <div className="highlights">
          {[
            { title: 'Web Development', desc: 'Scalable and secure web solutions with beautiful UI and robust backend.' },
            { title: 'Mobile Applications', desc: 'Seamless mobile apps for iOS and Android using cross-platform tools.' },
            { title: 'Cloud Integration', desc: 'Optimized, cloud-based systems for performance and reliability.' },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="highlight-box"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Projects Preview Section */}
      <motion.section 
        className="home-section projects-preview"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Featured Projects</h2>
        <p>Take a look at some of the work we've delivered for our amazing clients.</p>
        <Link to="/projects" className="cta-link">View Projects</Link>
      </motion.section>
    </div>
  );
};

export default Home;
