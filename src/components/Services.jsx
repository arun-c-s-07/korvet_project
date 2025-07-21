import React, { useEffect, useState } from "react";
import "./Services.css";
import logoImage from "../assets/korvet.logo.jpg"; // Correct path to your logo
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPalette,
  FaBrain,
  FaCogs,
  FaChartLine,
} from "react-icons/fa";

function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector(".services-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timeout = setTimeout(() => {
        document.querySelectorAll(".service-card").forEach((card) => {
          card.classList.add("animate");
        });
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [isVisible]);

  return (
    <div className="services-section">
      {/* ✅ Styled heading container */}
      <div className="services-heading">
        <h2>
          Our <span>Services</span>
        </h2>
        <p>
          Powering your digital future with creativity, innovation, and
          excellence.
        </p>
      </div>

      <img src={logoImage} alt="Logo" className="center-logo" />

      <div className="services-flyout">
        <div className="service-card top-left">
          <span className="icon-text">
            <FaLaptopCode className="service-icon" />
            <span className="label">Web Development</span>
          </span>
        </div>
        <div className="service-card top-right">
          <span className="icon-text">
            <FaMobileAlt className="service-icon" />
            <span className="label">Mobile App Solutions</span>
          </span>
        </div>
        <div className="service-card bottom-left">
          <span className="icon-text">
            <FaPalette className="service-icon" />
            <span className="label">UI/UX Design</span>
          </span>
        </div>
        <div className="service-card bottom-right">
          <span className="icon-text">
            <FaBrain className="service-icon" />
            <span className="label">AI & ML Integration</span>
          </span>
        </div>
        <div className="service-card extra-left">
          <span className="icon-text">
            <FaCogs className="service-icon" />
            <span className="label">DevOps and CI/CD</span>
          </span>
        </div>
        <div className="service-card extra-right">
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