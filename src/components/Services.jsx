import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Services.css';

const services = [
  { category: 'Office of multiple interest content', title: 'Collaborative & partnership' },
  { category: 'The hanger US Air force digital experimental', title: 'We talk about our weight' },
  { category: 'Delta faucet content, social, digital', title: 'Piloting digital confidence' },
];

function ServiceRow({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="service-row"
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
      whileHover={{ backgroundColor: '#f9f9f9' }}
    >
      <span className="service-category">{item.category}</span>
      <span className="service-title">{item.title}</span>
      <motion.span
        className="service-arrow"
        whileHover={{ x: 8 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        &#8594;
      </motion.span>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="services" id="services">
      <div className="services-squiggle" />

      <motion.div
        ref={ref}
        className="services-heading"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h2>
          What we <span className="svc-green">can</span>
          <br />
          offer <span className="svc-underline">you!</span>
        </h2>
      </motion.div>

      <div className="services-list">
        {services.map((item, i) => (
          <ServiceRow key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
