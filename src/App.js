import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Footer from "./pages/Footer";
import logo from "./media/logo.png";
import "./App.css";
import bgVideo from "./media/tech-bg.mp4";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";

function App() {
  const [isMenuVisible, setIsMenuVisible] = useState(true); // State to toggle menu visibility

  // const handleLogoClick = () => {
  //   setIsMenuVisible(!isMenuVisible); // Toggle menu visibility when logo is clicked
  // };
  const toggleMenu = () => {
    setIsMenuVisible((prev) => !prev);
  };

  return (
    <Router>
      {/* Background Video */}
      <div className="content-overlay">
        <video autoPlay muted loop className="bg-video">
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

        <header className="App-header">
          <div className="header-left">
            <Link to="/">
              <div className="logo-container" onClick={toggleMenu}>
                <img src={logo} alt="logo" className="logo" />
              </div>
            </Link>
          </div>

          <button className="menu-toggle" onClick={toggleMenu}>
            &#9776;
          </button>

          <ul className={`header-navigation ${isMenuVisible ? "show" : ""}`}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>

            <li>
              <HashLink smooth to="/#contact">
                Contact Us
              </HashLink>
            </li>
          </ul>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
