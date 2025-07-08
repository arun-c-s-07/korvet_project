import { Link } from "react-router-dom"; 

import "./servicepages.css";
import { motion } from 'framer-motion';
import { FaLaptopCode, FaMobileAlt, FaPencilRuler, FaBrain, FaCloud, FaInfinity } from 'react-icons/fa';
const ServicesPage = () => {
  const services = [
    {
      icon: <FaLaptopCode size={32} />, title: 'Web Development', desc: 'Stunning, scalable, and lightning-fast websites tailored to your brand.',
    },
    {
      icon: <FaMobileAlt size={32} />, title: 'App Development', desc: 'Cross-platform mobile experiences that feel native and powerful.',
    },
    {
      icon: <FaPencilRuler size={32} />, title: 'UI/UX Magic', desc: 'Designs that blend aesthetics, usability, and brand identity.',
    },
    {
      icon: <FaBrain size={32} />, title: 'AI/ML Solutions', desc: 'Smarter apps powered by intelligent algorithms and predictions.',
    },
    {
      icon: <FaCloud size={32} />, title: 'Cloud & DevOps', desc: 'Automated infrastructure for seamless deployment and scalability.',
    },
    {
      icon: <FaInfinity size={32} />, title: 'Consulting & Strategy', desc: 'From ideation to execution, we co-build digital innovation.',
    },
  ];
  return (
    <div className="services-page">
      <motion.section
        className="services-hero"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>💼 Services That Build Empires</h1>
        <p>Code, creativity & caffeine — we craft digital excellence from idea to impact.</p>
      </motion.section>
      <section className="services-grid-creative">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            className="service-creative-card"
            whileHover={{ scale: 1.06, rotate: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="icon-circle">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </section>
      <motion.section
        className="services-footer-cta final-cta"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h2>Let’s Build Something Legendary</h2>
        <p>We don’t just offer services — we become your tech partner. Ready to innovate?</p>
   <Link to="/contact">
  <motion.button className="cta-button" whileHover={{ scale: 1.1 }}>
    Let's Talk 🚀
  </motion.button>
</Link>

      </motion.section>
    </div>
  );
};

export default ServicesPage;