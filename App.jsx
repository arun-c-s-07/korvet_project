import React from 'react';
import './App.css';

import Video from "./components/Video";
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <header className="hero-section">
        <h1>Welcome to <span>KORVET</span></h1>
        <p>Empowering digital transformation through innovation and technology.</p>
      </header>

      <Vedio />         {/* ✅ Insert your video component here */}
      <WhyChooseUs />
      <Footer />
    </div>
  );
}

export default App;
