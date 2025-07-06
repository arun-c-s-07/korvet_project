import React from 'react';
import Hero from '../components/Hero';
import Slider from '../components/slider';
import WhyChooseUs from '../components/WhyChooseUs';
import Services from '../components/Services';
import CTASection from '../components/CTASection';

function Home() {
  return (
    <>
      <Hero />
      <Slider />
      <WhyChooseUs />
      <Services />
      <CTASection />
    </>
  );
}

export default Home;
