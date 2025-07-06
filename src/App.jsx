import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Slider from './components/slider';
import WhyChooseUs from './components/WhyChooseUs';
import Video from './components/video';
import About from './pages/About';  // ✅ import About page
import './App.css';

function HomePage() {
  return (
    <>
      <Slider />
      <WhyChooseUs />
      <Video />
    </>
  );
}

function App() {
  return (
    <div className="app-container">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />  {/* ✅ route to About */}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
