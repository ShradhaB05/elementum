import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Newsletter.css';

export default function Newsletter() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="newsletter" id="faqs">
      <div className="nl-squiggle" />
      <div className="nl-purple" />

      <motion.div
        ref={ref}
        className="nl-inner"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h2>Subscribe to<br />our newsletter</h2>
        <p>To make your stay special and even more memorable</p>
        <motion.button
          className="subscribe-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Subscribe Now
        </motion.button>
      </motion.div>

      <div className="nl-divider" />

      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#studio">Studio</a></li>
              <li><a href="#services">Service</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Terms &amp; Policies</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms &amp; Conditions</a></li>
              <li><a href="#">Explore</a></li>
              <li><a href="#">Accessibility</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Follow Us</h4>
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Youtube</a></li>
              <li><a href="#">Twitter</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <address>
              <p>1498w Fluton ste, STE<br />2D Chicago, IL 63867.</p>
              <p>(123) 456789000</p>
              <p>info@elementum.com</p>
            </address>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy;2023 Elementum. All rights reserved</p>
        </div>
      </footer>
    </section>
  );
}
