import React from "react";
import "./css/About.css"; // Optional for styling
import meetImg from "../media/meet.jpg";
import proposal from "../media/quatation.jpg";
import maintenance from "../media/maintenance.jpg";
import signOff from "../media/signoff.jpg";
import delivery from "../media/delivery.jpg";
import { HashLink } from "react-router-hash-link";

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to <strong>Hare Ram InfoTech</strong>! We're a passionate team
        of developers, designers, and strategists committed to building
        innovative digital solutions that make an impact.
      </p>

      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          Founded in [2025], we specialize in delivering high-quality web and
          mobile applications tailored to your business needs. Our team brings
          together expertise across a wide range of technologies to provide
          seamless digital experiences.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to empower businesses through technology — by
          delivering reliable, scalable, and user-centric solutions that drive
          success.
        </p>
      </section>
      <div className="about-main">
        <div className="about-main-left">
          <section className="about-section">
            <h2>What We Do</h2>
            <ul>
              <div>
                <li>
                  <h2>Custom Web Development</h2>
                  <p>
                    We design customer centric optimised and user friendly
                    websites.
                  </p>
                </li>
              </div>
              <div>
                <li>
                  <h2>Mobile App Development</h2>
                  <p>
                    We design customer centric optimised and user friendly
                    applications.
                  </p>
                </li>
              </div>
              <div>
                <li>
                  <h2>E-commerce Solutions</h2>
                  <p>
                    We design customer centric optimised and user friendly
                    applications.
                  </p>
                </li>
              </div>
              <div>
                <li>
                  <h2>UI/UX Design</h2>
                  <p>
                    We design customer centric optimised and user friendly
                    applications.
                  </p>
                </li>
              </div>
              <div>
                <li>
                  <h2>Cloud Integration & Hosting</h2>
                  <p>
                    We design customer centric optimised and user friendly
                    applications.
                  </p>
                </li>
              </div>
              <li>
                <li>
                  <h2>Product Strategy & Consulting</h2>
                  <p>
                    We design customer centric optimised and user friendly
                    applications.
                  </p>
                </li>
              </li>
            </ul>
          </section>
        </div>
        <div className="about-main-right">
          <section className="about-section how-we-work-section">
            <h2>How We Work</h2>
            <div className="work-steps">
              <div className="step">
                <div>
                  <img src={meetImg} alt="Discussion with client" />
                </div>
                <div className="step-content">
                  <h3>Step 1: Understanding Requirements</h3>
                  <p>
                    We begin with in-depth discussions to fully understand your
                    business needs, target audience, and technical goals.
                  </p>
                  <div className="cta-container">
                    <HashLink
                      smooth
                      to="/#contact"
                      className="get-in-touch-btn"
                    >
                      Get in Touch
                    </HashLink>
                  </div>
                </div>
              </div>

              <div className="step reverse">
                <div>
                  <img src={proposal} alt="Proposal and quotation" />
                </div>
                <div className="step-content">
                  <h3>Step 2: Proposal & Quotation</h3>
                  <p>
                    Our team prepares a clear proposal with scope, budget,
                    timeline, and tools we’ll use to execute your vision.
                  </p>
                  <div className="cta-container">
                    <HashLink
                      smooth
                      to="/#contact"
                      className="get-in-touch-btn"
                    >
                      Get in Touch
                    </HashLink>
                  </div>
                </div>
              </div>

              <div className="step">
                <div>
                  <img src={signOff} alt="Contract sign-off" />
                </div>
                <div className="step-content">
                  <h3>Step 3: Deal Sign-off</h3>
                  <p>
                    Once everything is aligned, we sign a formal agreement and
                    begin project execution with set milestones.
                  </p>
                  <div className="cta-container">
                    <HashLink
                      smooth
                      to="/#contact"
                      className="get-in-touch-btn"
                    >
                      Get in Touch
                    </HashLink>
                  </div>
                </div>
              </div>

              <div className="step reverse">
                <div>
                  <img src={delivery} alt="Product delivery" />
                </div>
                <div className="step-content">
                  <h3>Step 4: Product Delivery</h3>
                  <p>
                    After development and testing, we hand over a
                    quality-assured product with documentation and training.
                  </p>
                  <div className="cta-container">
                    <HashLink
                      smooth
                      to="/#contact"
                      className="get-in-touch-btn"
                    >
                      Get in Touch
                    </HashLink>
                  </div>
                </div>
              </div>

              <div className="step">
                <img src={maintenance} alt="Ongoing support" />
                <div className="step-content">
                  <h3>Step 5: Ongoing Maintenance</h3>
                  <p>
                    We offer monthly or yearly maintenance plans to keep your
                    product secure, up-to-date, and optimized.
                  </p>
                  <div className="cta-container">
                    <HashLink
                      smooth
                      to="/#contact"
                      className="get-in-touch-btn"
                    >
                      Get in Touch
                    </HashLink>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section className="about-section">
        <h2>Why Choose Us</h2>
        <p>
          We believe in long-term partnerships, transparency, and delivering
          quality over quantity. Whether you're a startup or an enterprise, we
          are here to transform your vision into reality.
        </p>
      </section>
    </div>
  );
};

export default About;
