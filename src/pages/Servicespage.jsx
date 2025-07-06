import React from 'react';
import './Services.css';
import { motion } from 'framer-motion';

function Services() {
  const items = [
    { icon: '🌐', title: 'Web Development', desc: 'Custom, scalable websites for businesses and startups.' },
    { icon: '📱', title: 'App Development', desc: 'Beautiful, fast mobile apps for iOS and Android.' },
    { icon: '🎯', title: 'Product Strategy', desc: 'Launch MVPs fast with scalable architecture.' },
    { icon: '🧠', title: 'AI Solutions', desc: 'Smart solutions powered by Machine Learning.' },
    { icon: '📊', title: 'Analytics & Dashboards', desc: 'Visualize growth with our interactive dashboards.' },
    { icon: '🎨', title: 'UI/UX Design', desc: 'Design that blends beauty with usability.' },
  ];

  return (
    <section className="services-section">
      <h2>💼 Our Services</h2>
      <div className="services-grid">
        {items.map((service, idx) => (
          <motion.div
            key={idx}
            className="service-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <h3>{service.icon} {service.title}</h3>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Services;
