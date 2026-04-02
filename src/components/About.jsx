import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './About.css';

function FadeIn({ children, delay = 0, x = 0, y = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x, y }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section className="about" id="studio">
      <div className="about-row">
        <FadeIn x={-40}>
          <div className="about-text-block">
            <h2>
              <span className="about-underline">Tomorrow</span> should
              <br />be better than <span className="about-green">today</span>
            </h2>
            <p>
              We are a team of strategists, designers communicators, researchers.
              Together, we believe that progress only happens when you refuse
              to play things safe.
            </p>
            <a href="#services" className="read-more">
              Read more <span className="read-more-line" />
            </a>
          </div>
        </FadeIn>

        <FadeIn x={40} delay={0.2}>
          <div className="about-image-right">
            <div className="about-img-frame">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80"
                alt="team meeting"
              />
            </div>
            <div className="shape-red-square" />
          </div>
        </FadeIn>
      </div>

      {/* Row 2: Progress */}
      <div className="about-row">
        <FadeIn x={-40} delay={0.1}>
          <div className="about-image-left">
            <div className="about-img-circle">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&q=80"
                alt="working team"
              />
            </div>
            <div className="shape-red-triangle" />
          </div>
        </FadeIn>

        <FadeIn x={40} delay={0.2}>
          <div className="about-text-block">
            <h2>
              <span className="about-green">See</span> how we can
              <br />help you <span className="about-underline">progress</span>
            </h2>
            <p>
              We add a layer of fearless insights and action that allows change
              makers to accelerate their progress in areas such as brand, design
              digital, comms and social research.
            </p>
            <a href="#services" className="read-more">
              Read more <span className="read-more-line" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
