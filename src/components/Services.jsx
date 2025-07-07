import React, { useEffect, useState } from "react";
import "./Services.css";
import logoImage from "../assets/logo.jpg"; // Correct path to your logo

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
            <h2>Our Services</h2>

            <img src={logoImage} alt="Logo" className="center-logo" />

            {/* Add connector lines */}
            <svg className="connector-lines">
                {/* Top Left */}
                <line className="line" x1="50%" y1="58%" x2="25%" y2="16%" />
                {/* Top Right */}
                <line className="line" x1="50%" y1="60%" x2="80%" y2="20%" />
                {/* Bottom Left */}
                <line className="line" x1="50%" y1="60%" x2="20%" y2="65%" />
                {/* Bottom Right */}
                <line className="line" x1="50%" y1="60%" x2="80%" y2="65%" />
                {/* Extra Left */}
                <line className="line" x1="50%" y1="60%" x2="30%" y2="80%" />
                {/* Extra Right */}
                <line className="line" x1="50%" y1="60%" x2="70%" y2="80%" />
            </svg>

            <div className="services-flyout">
                <div className="service-card top-left">
                    <span>🌐 Web Development</span>
                </div>
                <div className="service-card top-right">
                    <span>📱 App Development</span>
                </div>
                <div className="service-card bottom-left">
                    <span>🎨 UI/UX Design</span>
                </div>
                <div className="service-card bottom-right">
                    <span>🤖 AI Integration</span>
                </div>
                <div className="service-card extra-left">
                    <span>⚙️ DevOps and CI/CD</span>
                </div>
                <div className="service-card extra-right">
                    <span>📊 Product Management & Analysis</span>
                </div>
            </div>
        </div>
    );
}

export default Services;
