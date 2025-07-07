import React from 'react';
import './offerspage.css';
import { motion } from 'framer-motion';
import { FaBolt, FaGift, FaStar, FaHandshake, FaTrophy } from 'react-icons/fa';

const offers = [
  {
    icon: <FaBolt size={28} />,
    title: "Fast-Track Discount",
    desc: "Get 20% off on projects booked before this weekend. Time is money!",
  },
  {
    icon: <FaGift size={28} />,
    title: "Startup Booster",
    desc: "Special pricing for startups & student ventures. Let’s build together.",
  },
  {
    icon: <FaStar size={28} />,
    title: "Premium Package Perks",
    desc: "Free consultation + priority support when you go premium.",
  },
  {
    icon: <FaHandshake size={28} />,
    title: "Referral Rewards",
    desc: "Refer a client, and earn project credits or cash bonuses.",
  },
  {
    icon: <FaTrophy size={28} />,
    title: "Hackathon Heroes",
    desc: "Participants of our hackathons get exclusive service coupons!",
  }
];

function OffersPage() {
  return (
    <div className="offers-page">
      <motion.section
        className="offers-hero"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>🔥 Exclusive Offers from Korvet</h1>
        <p>Grab our limited-time deals and power up your ideas — the smart way.</p>
      </motion.section>

      <section className="offers-list">
        {offers.map((offer, idx) => (
          <motion.div
            className="offer-card"
            key={idx}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="offer-icon">{offer.icon}</div>
            <h3>{offer.title}</h3>
            <p>{offer.desc}</p>
          </motion.div>
        ))}
      </section>

      <motion.section
        className="offers-footer final-cta"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Claim Your Offer Now!</h2>
        <p>No hidden fees. Just awesome value. Ready to build?</p>
        <motion.button className="cta-button" whileHover={{ scale: 1.1 }}>
          Get Started 🚀
        </motion.button>
      </motion.section>
    </div>
  );
}

export default OffersPage;
