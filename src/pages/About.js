import React from "react";
import "./css/About.css";
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
        Welcome to <strong>Hare Ram InfoTech</strong>— where technology meets
        purpose. We are a dynamic team of developers, designers, and digital
        experts committed to crafting innovative solutions that elevate your
        business.
      </p>

      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          Hare Ram InfoTech is a new-age tech startup founded in 2025, driven by
          innovation and purpose. We specialize in building cutting-edge web and
          mobile applications that are not only visually stunning but also
          scalable and results-driven. Blending creativity with robust
          engineering, we help businesses turn bold ideas into high-impact
          digital solutions.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to empower businesses by leveraging modern technology
          to create reliable, scalable, and user-focused digital experiences
          that drive growth and innovation.
        </p>
      </section>

      <div className="about-main">
        <div className="about-main-left">
          <section className="about-section">
            <h2>What We Do</h2>
            <ul>
              <li>
                <h2>Custom Web Development</h2>
                <p>
                  We build responsive, SEO-friendly, and high-performance
                  websites tailored to your brand and goals.
                </p>
              </li>
              <li>
                <h2>Mobile App Development</h2>
                <p>
                  Our mobile solutions deliver seamless experiences across
                  platforms, ensuring your users stay connected anywhere,
                  anytime.
                </p>
              </li>
              <li>
                <h2>E-commerce Development</h2>
                <p>
                  From intuitive storefronts to secure payment gateways, we
                  provide complete e-commerce platforms that convert visitors
                  into customers.
                </p>
              </li>
              <li>
                <h2>UI/UX Design</h2>
                <p>
                  We create intuitive, visually engaging interfaces that enhance
                  user satisfaction and encourage interaction.
                </p>
              </li>
              <li>
                <h2>Cloud Integration & Hosting</h2>
                <p>
                  Leverage the power of the cloud for enhanced scalability,
                  security, and cost-efficiency.
                </p>
              </li>
              <li className="last-li">
                <h2>Product Strategy & Consulting</h2>
                <p>
                  We help define your product vision, streamline execution, and
                  align technology with your long-term business objectives.
                </p>
              </li>
            </ul>
          </section>
        </div>

        <div className="about-main-right">
          <section className="about-section how-we-work-section">
            <h2>Our Process</h2>
            <div className="work-steps">
              <div className="step">
                <div>
                  <img src={meetImg} alt="Discussion with client" />
                </div>
                <div className="step-content">
                  <h3>Step 1: Requirement Discovery</h3>
                  <p>
                    We begin by deeply understanding your goals, target users,
                    and project expectations through collaborative discussion.
                  </p>
                  <p className="cta-container">
                    <HashLink
                      smooth
                      to="/#contact"
                      className="get-in-touch-btn"
                    >
                      Get in Touch
                    </HashLink>
                  </p>
                </div>
              </div>

              <div className="step reverse">
                <div>
                  <img src={proposal} alt="Proposal and quotation" />
                </div>
                <div className="step-content">
                  <h3>Step 2: Project Proposal</h3>
                  <p>
                    We provide a detailed plan outlining timelines, tools,
                    deliverables, and estimated budget to set clear
                    expectations.
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
                  <h3>Step 3: Formal Agreement</h3>
                  <p>
                    Upon mutual agreement, we sign a contract and initiate
                    project development following a milestone-based timeline.
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
                    After rigorous testing and validation, we deliver your
                    product along with complete documentation and training.
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
                  <h3>Step 5: Maintenance & Support</h3>
                  <p>
                    Our post-launch support ensures your product remains
                    up-to-date, secure, and fully functional over time.
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
          We prioritize quality, transparency, and long-term partnerships.
          Whether you're a startup or an established enterprise, our goal is to
          help you innovate, grow, and succeed in the digital world.
        </p>
      </section>
    </div>
  );
};

export default About;
