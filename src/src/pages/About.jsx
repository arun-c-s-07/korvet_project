// File: src/pages/About.jsx

import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

function About() {
  return (
    <div className="about-page">
      {/* Hero Banner */}
      <motion.section
        className="hero-banner"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1><span>KORVET</span> INNOVATIONS</h1>
        <p>Fueling the future with tech that matters.</p>
      </motion.section>

      {/* Timeline/Story */}
      <section className="about-timeline">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>🚀 January 2025</h3>
            <p>A spark ignited by tech & open-source enthusiasts. Korvet was born.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>🌱 First Product Launched</h3>
            <p>We launched our first AI-enhanced web automation suite.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>🏢 From Passion to Business</h3>
            <p>Transitioned into a full product-based company serving clients globally.</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <motion.section
        className="about-services"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>What We Do</h2>
        <div className="service-cards">
          <div className="card">🌐 Web Development</div>
          <div className="card">📱 App Development</div>
          <div className="card">🎯 Product Strategy</div>
          <div className="card">⚙️ Automation</div>
          <div className="card">🧠 AI/ML Integration</div>
          <div className="card">🛠️ DevOps & CI/CD</div>
        </div>
      </motion.section>

      {/* Animated Quote or Signature Line */}
      <motion.section className="about-signature" initial={{ scale: 0.9 }} whileInView={{ scale: 1 }} transition={{ duration: 0.6 }}>
        <blockquote>
          "We don't just build tech — we build trust, impact, and possibility."
        </blockquote>
        <p className="signature">— Team Korvet</p>
      </motion.section>

      {/* Fun/Creative Element */}
      <motion.section className="about-extra" initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
        <h2>⚡ Our Culture</h2>
        <p>
          We hack, break, rebuild, and improve. Once built a Slack bot that gives chai reminders during all-nighters 😄.
        </p>
        <button className="cta-button">Meet Our Team</button>
      </motion.section>
    </div>
  );
}

export default About;
