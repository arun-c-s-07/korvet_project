// src/pages/Home.jsx

import React, { useEffect } from "react";
import Slider from "../components/slider";
import WhyChooseUs from "../components/WhyChooseUs";
import Services from "../components/Services";
import CTASection from "../components/CTASection";
import VideoSection from "../components/video";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import "../App.css";

function Home() {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5,
    });
  }, []);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Slider />
      </motion.div>

      <motion.div
        className="tilt"
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.8 }}
        style={{ margin: "50px 0" }}
      >
        <WhyChooseUs />
      </motion.div>

      <motion.div
        className="tilt"
        whileInView={{ opacity: 1, rotateY: 0 }}
        initial={{ opacity: 0, rotateY: -90 }}
        transition={{ duration: 1 }}
        style={{ margin: "50px 0" }}
      >
        <Services />
      </motion.div>

      <motion.div
        className="tilt"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        style={{ margin: "50px auto", maxWidth: "900px" }}
      >
        <VideoSection />
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
      >
        <CTASection />
      </motion.div>
    </div>
  );
}

export default Home;