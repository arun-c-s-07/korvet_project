import React from "react";
import "./Services.css";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPalette,
  FaBrain,
  FaCogs,
  FaChartLine,
} from "react-icons/fa";

function Services() {
  return (
    <div className="services-section">
      {/* Heading */}
      <div className="services-heading">
        <h2>
          Our <span>Services</span>
        </h2>
        <p>
          Powering your digital future with creativity, innovation, and
          excellence.
        </p>
      </div>

      {/* Service Cards */}
      <div className="services-flyout">
        <div className="service-card animate top-left">
          <span className="icon-text">
            <FaLaptopCode className="service-icon" />
            <span className="label">Web Development</span>
          </span>
        </div>
        <div className="service-card animate top-right">
          <span className="icon-text">
            <FaMobileAlt className="service-icon" />
            <span className="label">Mobile App Solutions</span>
          </span>
        </div>
        <div className="service-card animate bottom-left">
          <span className="icon-text">
            <FaPalette className="service-icon" />
            <span className="label">UI/UX Design</span>
          </span>
        </div>
        <div className="service-card animate bottom-right">
          <span className="icon-text">
            <FaBrain className="service-icon" />
            <span className="label">AI & ML Integration</span>
          </span>
        </div>
        <div className="service-card animate extra-left">
          <span className="icon-text">
            <FaCogs className="service-icon" />
            <span className="label">DevOps and CI/CD</span>
          </span>
        </div>
        <div className="service-card animate extra-right">
          <span className="icon-text">
            <FaChartLine className="service-icon" />
            <span className="label">Product Strategy</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Services;
