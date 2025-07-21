import React from 'react';
import './ServiceDetail.css';
import { motion } from 'framer-motion';
import { FaInfinity } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function ConsultingService() {
  return (
    <div className="service-detail-page">
      <motion.div className="service-detail-hero" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <div className="detail-icon"><FaInfinity size={36} /></div>
        <h1>Consulting & Strategy</h1>
        <p>We help startups and enterprises align digital vision with business value.</p>
      </motion.div>
      <motion.div className="service-detail-content" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <h2>What We Offer</h2>
      <ul>
          <li>🧭 Product strategy & roadmapping</li>
          <li>📊 Market validation & feasibility studies</li>
          <li>💡 Startup mentoring & tech advising</li>
          <li>⚙️ System architecture planning & vendor selection</li>
        </ul>
        <h2>How We Think</h2>
        <p>We blend lean startup methodology with agile execution and modern tech frameworks.</p>
        <h2>Why Partner With Korvet?</h2>
      <ul>
          <li>✅ 1:1 mentorship & advisory sessions</li>
          <li>✅ Ground-up execution from idea to MVP</li>
          <li>✅ Experience with 10+ product launches</li>
        </ul>

        <h2>Success Story</h2>
        <p>
          We helped an early-stage EdTech startup pivot to a freemium model, which led to a 7x increase in user acquisition within 4 months.
        </p>

        <Link to="/contact">
          <motion.button className="detail-cta" whileHover={{ scale: 1.1 }}>Consult With Us 🤝</motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
export default ConsultingService;
