import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Info from "./components/Info";
import "./App.css";

// Page components
const Home = () => (
  <div>
    <img src="/logo1.png" alt="Club Logo" className="club-logo" />
    <p>Airsoft club "Rendžeri" (eng. Rangers) is an airsoft team based in Sarajevo.
    </p>
  </div>
);
const Onama = () => <Info />;
const Aktivnosti = () => <div>Aktivnosti Content</div>;
const Slike = () => <div>Slike Content</div>;
const Kontakt = () => <div>Kontakt Content</div>;

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Simulate page load completion (useEffect will trigger after the initial render)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false); // Set loading to false after the page is loaded
    }, 200); // Adjust the delay time as needed

    return () => clearTimeout(timeout);
  }, []);

  // Only render the content after loading is complete
  if (isLoading) {
    return (
      <div className="App loading">
        <div className="loading-screen">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <nav className="navbar">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <img src="/logo.png" alt="ASK Rendzeri Logo" className="logo" />
          </Link>
          <button className="hamburger" onClick={toggleMenu}>
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="2x" />
          </button>
          <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
            <li>
              <Link to="/onama">O nama</Link>
            </li>
            <li>
              <Link to="/aktivnosti">Aktivnosti</Link>
            </li>
            <li>
              <Link to="/slike">Slike</Link>
            </li>
            <li>
              <Link to="/kontakt">Kontakt</Link>
            </li>
          </ul>
        </nav>

        {/* Main Area with Smooth Transition */}
        <main className="main">
          <TransitionGroup>
            <CSSTransition timeout={1500} classNames="fade" key={window.location.pathname}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/onama" element={<Onama />} />
                <Route path="/aktivnosti" element={<Aktivnosti />} />
                <Route path="/slike" element={<Slike />} />
                <Route path="/kontakt" element={<Kontakt />} />
              </Routes>
            </CSSTransition>
          </TransitionGroup>
        </main>

        {/* Footer */}
        <footer className="footer">
          <p>ASK Rendžeri, est 2016</p>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/ASK.Rendzeri"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a
              href="https://www.instagram.com/askrangers/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
