import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const links = ['Home', 'Studio', 'Services', 'Contact', 'FAQs'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="navbar-inner">
          {/* Logo — no box */}
          <a href="#home" className="navbar-logo">Elementum</a>

          {/* Center links */}
          <ul className="navbar-links">
            {links.map(link => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`}>{link}</a>
              </li>
            ))}
          </ul>

          {/* Hamburger — always visible, opens sidebar */}
          <button
            className="navbar-hamburger"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span /><span />
          </button>
        </div>
      </motion.nav>

      {/* Sidebar overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Dark backdrop */}
            <motion.div
              className="sidebar-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Sidebar panel */}
            <motion.div
              className="sidebar"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.35, ease: 'easeInOut' }}
            >
              <button
                className="sidebar-close"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>

              <a href="#home" className="sidebar-logo">Elementum</a>

              <ul className="sidebar-links">
                {links.map((link, i) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.07 }}
                  >
                    <a href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="sidebar-footer">
                <p>info@elementum.com</p>
                <p>(123) 456789000</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
