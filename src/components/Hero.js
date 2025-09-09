import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section 
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div 
        className="hero-content"
        initial={{ y: 30 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Welcome to Leo9Studio
        </motion.h1>
        <motion.p
          initial={{ x: 50 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          We create stunning digital experiences that captivate and convert. From web development to digital marketing, we bring your vision to life.
        </motion.p>
        <motion.div 
          className="cta-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <a href="#services" className="btn btn-primary" onClick={() => scrollToSection('services')}>Our Services</a>
          <a href="#contact" className="btn btn-secondary" onClick={() => scrollToSection('contact')}>Get In Touch</a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;