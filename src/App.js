import { HashRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Footer from "./pages/Footer";
import logo from "./media/logo.jpg";
import "./App.css";
import bgVideo from "./media/tech-bg.mp4";
import { HashLink } from "react-router-hash-link";
import { useEffect, useRef, useState } from "react";

function App() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuRef = useRef(null); // Ref for detecting outside clicks

  const toggleMenu = () => {
    setIsMenuVisible((prev) => !prev);
  };
  const handleNavClick = () => {
    setIsMenuVisible(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Close menu on scroll or outside click
  useEffect(() => {
    const handleScroll = () => {
      if (isMenuVisible) setIsMenuVisible(false);
    };

    const handleClickOutside = (event) => {
      if (
        isMenuVisible &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest(".menu-toggle") // ✅ Ignore clicks on the toggle button
      ) {
        setIsMenuVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuVisible]);

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
              <div className="logo-container" onClick={handleNavClick}>
                <img src={logo} alt="logo" className="logo" />
              </div>
            </NavLink>
          </div>

          <button className="menu-toggle" tabIndex="0" onClick={toggleMenu}>
            &#9776;
          </button>

          <ul
            ref={menuRef}
            className={`header-navigation ${isMenuVisible ? "show" : ""}`}
          >
            <li>
              <NavLink
                to="/"
                end
                onClick={handleNavClick}
                className={({ isActive }) =>
                  isActive ? "active-link" : undefined
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                onClick={handleNavClick}
                className={({ isActive }) =>
                  isActive ? "active-link" : undefined
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={handleNavClick}
                className={({ isActive }) =>
                  isActive ? "active-link" : undefined
                }
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
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
