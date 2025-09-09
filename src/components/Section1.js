import React from 'react';
import { motion } from 'framer-motion';

const Section1 = () => {
  return (
    <motion.section 
      className="section1"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>
        <div className="services-grid">
          <motion.div 
            className="service-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="service-icon">🌐</div>
            <h3>Web Development</h3>
            <p>Custom websites built with modern technologies like React, Vue.js, and Angular. Responsive, fast, and SEO-optimized.</p>
          </motion.div>
          <motion.div 
            className="service-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="service-icon">📱</div>
            <h3>Mobile Apps</h3>
            <p>Native and cross-platform mobile applications for iOS and Android. Built with React Native and Flutter.</p>
          </motion.div>
          <motion.div 
            className="service-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="service-icon">🎨</div>
            <h3>UI/UX Design</h3>
            <p>Beautiful and intuitive user interfaces designed with tools like Figma, Adobe XD, and Sketch.</p>
          </motion.div>
          <motion.div 
            className="service-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="service-icon">🚀</div>
            <h3>Digital Marketing</h3>
            <p>Comprehensive digital marketing strategies including SEO, PPC, social media, and content marketing.</p>
          </motion.div>
          <motion.div 
            className="service-card"
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="service-icon">☁️</div>
            <h3>Cloud Solutions</h3>
            <p>Scalable cloud infrastructure and deployment solutions using AWS, Google Cloud, and Azure.</p>
          </motion.div>
          <motion.div 
            className="service-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="service-icon">🔧</div>
            <h3>Maintenance</h3>
            <p>Ongoing website and application maintenance, updates, and technical support to keep your projects running smoothly.</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Section1;