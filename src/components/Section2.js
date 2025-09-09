import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import teamImage from '../TeamImage.avif';

const Section2 = () => {
  const statsRef = useRef(null);

  useEffect(() => {
    const animateCounters = () => {
      const counters = statsRef.current.querySelectorAll('.stat-number');
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 200;
        let current = 0;
        
        const updateCounter = () => {
          if (current < target) {
            current += increment;
            counter.textContent = Math.ceil(current) + (target > 5 ? '+' : '/7');
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target + (target > 5 ? '+' : '/7');
          }
        };
        
        updateCounter();
      });
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.section 
      className="section2"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>About Leo9Studio</h2>
            <p>We are a passionate team of developers, designers, and digital strategists dedicated to creating exceptional digital experiences. Founded with the vision of helping businesses thrive in the digital age.</p>
            <p>Our expertise spans across web development, mobile applications, UI/UX design, and digital marketing. We use cutting-edge technologies and follow industry best practices to deliver solutions that not only look great but perform exceptionally.</p>
            <p>At Leo9Studio, we believe in building long-term partnerships with our clients, understanding their unique needs, and delivering solutions that drive real business results.</p>
            
            <div className="stats" ref={statsRef}>
              <div className="stat-item">
                <span className="stat-number" data-target="150">0+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number" data-target="50">0+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
              <div className="stat-item">
                <span className="stat-number" data-target="5">0+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number" data-target="24">0</span>
                <span className="stat-label">Support</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="image-placeholder">
              <img src={teamImage} alt="Team"  />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Section2;