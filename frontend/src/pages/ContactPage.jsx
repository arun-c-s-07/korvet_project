// File: src/pages/ContactPage.jsx
import React from 'react';
import './contactpage.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <motion.section
        className="contact-hero"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1> Let's Talk</h1>
        <p>We'd love to hear from you — let's connect and create something great.</p>
      </motion.section>

      <div className="contact-grid">
        {/* Contact Info */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="info-item">
            <FaEnvelope className="icon" />
            <div>
              <h4>Email Us</h4>
              <p>korvetinnovations@gmail.com</p>
            </div>
          </div>
          <div className="info-item">
            <FaPhoneAlt className="icon" />
            <div>
              <h4>Call Us</h4>
              <p>+91 62389 53471</p>
            </div>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <div>
              <h4>Visit Us</h4>
              <p>Korvet in,2nd Floor,Piravom,Ernakulam</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="contact-form"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          onSubmit={async (e) => {
         e.preventDefault();

          const formData = {
           name: e.target.name.value,
           email: e.target.email.value,
           message: e.target.message.value,
           };

          try {
           const response = await fetch("http://127.0.0.1:8000/api/contact/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
             },
            body: JSON.stringify(formData),
             });

           if (response.ok) {
            alert("✅ Message sent successfully!");
            e.target.reset(); // clear form after success
        } else {
           alert("❌ Something went wrong!");
        }
       } catch (error) {
       console.error(error);
       alert("⚠ Failed to send message!");
      }
     }}
 >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required />
        <button type="submit">Send Message</button>
</motion.form>
      </div>
    </div>
  );
};

export default ContactPage;
