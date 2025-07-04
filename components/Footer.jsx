import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-brand">
          <h2>KORVET</h2>
          <p>Where intelligence meets legacy.</p>
        </div>

        <div className="footer-links">
          <a href="/Address">Address</a>
          <a href="/Piravom.">Piravom</a>
          <a href="/Kochi">Kochi</a>
          <a href="/Kerala,India">Kerala</a>
        </div>

        <div className="footer-social">
          <a href="#" aria-label="Twitter">🐦</a>
          <a href="#" aria-label="LinkedIn">🔗</a>
          <a href="#" aria-label="GitHub">💻</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Korvet Innovations. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
