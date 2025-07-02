import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-brand">
          <h2>KORVET</h2>
          <p>Innovating your digital future.</p>
        </div>

        <div className="footer-links">
          <a href="/about">About Us</a>
          <a href="/services">Services</a>
          <a href="/insights">Our Insights</a>
          <a href="/contact">Let’s Talk</a>
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
