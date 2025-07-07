import React from "react";
import "./Services.css";

function Services() {
  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <p>We provide web & app development, UI/UX design, AI solutions, and more.</p>

      <div className="service-list">
        <div className="service-card">🌐 Web Development</div>
        <div className="service-card">📱 App Development</div>
        <div className="service-card">🎨 UI/UX Design</div>
        <div className="service-card">🤖 AI Integration</div>
      </div>
    </section>
  );
}

export default Services;
