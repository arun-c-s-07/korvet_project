import React, { useEffect, useRef, useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Slider from './components/slider';
import WhyChooseUs from './components/WhyChooseUs';
import Video from './components/video';
import Footer from './components/Footer';

function App() {
  const [bgClass, setBgClass] = useState('bg-dark');

  const whyRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (entry.target.id === 'why-section') {
              setBgClass('bg-light');
            }
            if (entry.target.id === 'video-section') {
              setBgClass('bg-dark');
            }
          }
        }
      },
      {
        threshold: 0.3, // how much of section must be visible to trigger
      }
    );

    if (whyRef.current) observer.observe(whyRef.current);
    if (videoRef.current) observer.observe(videoRef.current);

    return () => {
      if (whyRef.current) observer.unobserve(whyRef.current);
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  return (
    <div className={`app-container ${bgClass}`}>
      <Navbar />
      <Slider />
      <section id="why-section" ref={whyRef}>
        <WhyChooseUs />
      </section>
      <section id="video-section" ref={videoRef}>
        <Video />
      </section>
      <Footer />
    </div>
  );
}

export default App;
