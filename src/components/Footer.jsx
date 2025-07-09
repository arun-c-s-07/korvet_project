import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand and Tagline */}
        <div className="footer-brand">
          <h2>KORVET</h2>
          <p>🚀 Innovating the future, one solution at a time.</p>
        </div>

        {/* Address */}
        <div className="footer-address">
          <h3>📍 Headquarters</h3>
          <p>Korvet Innovations Pvt. Ltd.</p>
          <p>Tech Valley Road, Near Innovation Hub</p>
          <p>Piravom, Kochi – 686664</p>
          <p>Kerala, India</p>
          <p>📧 hello@korvet.in</p>
          <p>📞 +91 98765 43210</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/services">Services</a>
          <a href="/careers">Careers</a>
          <a href="/contact">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="footer-social">
          <h3>Connect With Us</h3>
          <a href="#" aria-label="Twitter">🐦 Twitter</a>
          <a href="#" aria-label="LinkedIn">🔗 LinkedIn</a>
          <a href="#" aria-label="GitHub">💻 GitHub</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Korvet Innovations. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
