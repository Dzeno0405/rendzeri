import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <a href="#home">
          <img src="/logo.png" alt="ASK Rendzeri Logo" className="logo" />
        </a>
        <button className="hamburger" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="2x" />
        </button>
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>
              O nama
            </a>
          </li>
          <li>
            <a href="#activities" onClick={() => setIsMenuOpen(false)}>
              Aktivnosti
            </a>
          </li>
          <li>
            <a href="#images" onClick={() => setIsMenuOpen(false)}>
              Slike
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>
              Kontakt
            </a>
          </li>
        </ul>
      </nav>

      {/* Main Area */}
      <main className="main">
        <img src="/logo1.png" alt="Club Logo" className="club-logo" />
        <section id="about-text" className="about">
          <p>
            Airsoft club "Rendžeri" (eng. Rangers) is an airsoft team based in
            Sarajevo.
          </p>
        </section>
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
