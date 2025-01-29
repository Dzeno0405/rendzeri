import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Info from "./components/Info";
import Images from "./components/Images";
import Activities from "./components/Activities"; // Import Activities component
import Contact from "./components/Contact"; // Import the Contact component
import "./App.css";


// Page components
const Home = () => (
  <div>
    <div className="club-logo-container">
      <img src="/logo1.png" alt="Club Logo" className="club-logo" />
    </div>
    <p className="club-description">Airsoft klub "Rendžeri" (eng. Rangers) predstavlja vrhunski organizovan i renomiran tim sa sjedištem u Sarajevu, Bosna i Hercegovina. Klub se ističe profesionalnim pristupom, timskim duhom i posvećenošću promociji airsofta kao sporta i rekreativne aktivnosti.</p>
  </div>
);

const Onama = () => <Info />;
const Aktivnosti = () => <Activities />;
const Slike = () => <Images />;
const Kontakt = () => <Contact />; // Use the Contact component here

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get the current location from React Router

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
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
    <Link to="/onama" onClick={() => { toggleMenu(); window.scrollTo(0, 0); }}>O nama</Link>
  </li>
  <li>
    <Link to="/aktivnosti" onClick={() => { toggleMenu(); window.scrollTo(0, 0); }}>Aktivnosti</Link>
  </li>
  <li>
    <Link to="/slike" onClick={() => { toggleMenu(); window.scrollTo(0, 0); }}>Slike</Link>
  </li>
  <li>
    <Link to="/kontakt" onClick={() => { toggleMenu(); window.scrollTo(0, 0); }}>Kontakt</Link>
  </li>
</ul>
      </nav>

      {/* Main Area with Smooth Transitions */}
      <main className="main">
      <TransitionGroup>
  <CSSTransition
    key={location.pathname} // Use location.pathname as the unique key
    timeout={500} // Duration for the animation
    classNames="fade" // Use the fade class
    unmountOnExit // Ensures the previous component is removed from the DOM
  >
    <Routes location={location}>
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
  );
}

export default App;
