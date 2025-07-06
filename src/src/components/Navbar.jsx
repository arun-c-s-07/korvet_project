import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/korvet.logo.jpg'; // ✅ Corrected

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src={logo} alt="Korvet Logo" />
          <span>KORVET IN</span>
        </div>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/About" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>Our Insights</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/portfolio" onClick={() => setMenuOpen(false)}>Ed-Tech services</Link>
          <Link to="/why-us" onClick={() => setMenuOpen(false)}>Offers</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Let's talk</Link>
        </div>
        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


