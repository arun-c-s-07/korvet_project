import React, { useEffect, useState } from "react";
import "./slider.css";
import { useNavigate } from "react-router-dom";

// Import images
import image1 from './images/image1.jpg';
import image2 from './images/image2.png';
import image3 from './images/image3.png';

const images = [image1, image2, image3];

function Slider() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleLoginClick = () => {
    navigate("/Login");
  };

  return (
    <section className="slider">
      <img src={images[index]} alt="slider" className="slider-img" />
      <button className="get-started-slider" onClick={handleLoginClick}>
        LOGIN
      </button>
    </section>
  );
}

export default Slider;