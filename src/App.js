import { HashRouter as Router, Routes, Route, NavLink } from "react-router-dom";
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
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible((prev) => !prev);
  };

  return (
    <Router>
      <div className="content-overlay">
        <video autoPlay muted loop className="bg-video">
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

        <header className="App-header">
          <div className="header-left">
            <NavLink to="/" end>
              <div className="logo-container" onClick={toggleMenu}>
                <img src={logo} alt="logo" className="logo" />
              </div>
            </NavLink>
          </div>

          <button className="menu-toggle" onClick={toggleMenu}>
            &#9776;
          </button>

          <ul className={`header-navigation ${isMenuVisible ? "show" : ""}`}>
            <li>
              <NavLink
                to="/"
                end
                onClick={toggleMenu}
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                onClick={toggleMenu}
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={toggleMenu}
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <HashLink onClick={toggleMenu} smooth to="/#contact">
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
