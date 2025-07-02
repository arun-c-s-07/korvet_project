import React, { useEffect, useState } from "react";
import "./Slider.css";

const images = [

];
function Slider() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="slider">
      <img src={images[index]} alt="slider" className="slider-img" />
      <button className="get-started-slider">Get Started</button>
    </section>
  );
}
export default Slider;
