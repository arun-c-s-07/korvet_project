import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';
import logo from '../assets/logo.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const handleLoginClick = () => {
    setMenuOpen(false);
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src={logo} alt="Korvet Logo" />
          <span>KORVET</span>
        </div>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/About Us" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/Our Insights" onClick={() => setMenuOpen(false)}>Our Insights</Link>
          <Link to="/Services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/Offers" onClick={() => setMenuOpen(false)}>Offers</Link>
          <Link to="/Contact" onClick={() => setMenuOpen(false)}>Let's Talk</Link>
          <button onClick={handleLoginClick}>Login</button>
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
