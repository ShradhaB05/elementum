import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Testimonials.css';

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="testimonials" id="contact">
      <div className="t-layout">

        {/* Left column */}
        <div className="t-col t-col--left">
          <div className="t-av" style={{ width: 60, height: 60 }}>
            <img src="https://randomuser.me/api/portraits/men/10.jpg" alt="" />
          </div>
          <div className="t-av t-av--large" style={{ width: 120, height: 120 }}>
            <img src="https://randomuser.me/api/portraits/men/20.jpg" alt="" />
          </div>
          <div className="t-av" style={{ width: 55, height: 55 }}>
            <img src="https://randomuser.me/api/portraits/men/30.jpg" alt="" />
          </div>
        </div>

        {/* Center */}
        <motion.div
          ref={ref}
          className="t-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2>
            <span className="t-highlight">What</span> our customer
            <br />says <span className="t-underline">About Us</span>
          </h2>
          <div className="testimonial-card">
            <span className="quote-open">&ldquo;&ldquo;</span>
            <p>
              Elementum delivered the site within the timeline as they requested.
              In the end, the client found a 50% increase in traffic within days
              since its launch. They also had an impressive ability to use technologies
              that the company hadn&apos;t used, which have also proved to be easy to use and reliable.
            </p>
            <span className="quote-close">&rdquo;&rdquo;</span>
          </div>
        </motion.div>

        {/* Right column */}
        <div className="t-col t-col--right">
          <div className="t-av-row">
            <div className="t-av" style={{ width: 65, height: 65 }}>
              <img src="https://randomuser.me/api/portraits/men/40.jpg" alt="" />
            </div>
            <div className="t-av" style={{ width: 75, height: 75 }}>
              <img src="https://randomuser.me/api/portraits/men/50.jpg" alt="" />
            </div>
          </div>
          <div className="t-av" style={{ width: 65, height: 65 }}>
            <img src="https://randomuser.me/api/portraits/men/60.jpg" alt="" />
          </div>
          <div className="t-av t-av--large" style={{ width: 120, height: 120 }}>
            <img src="https://randomuser.me/api/portraits/men/70.jpg" alt="" />
          </div>
        </div>

      </div>
    </section>
  );
}
