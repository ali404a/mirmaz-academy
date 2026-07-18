import React from 'react';
import { motion } from 'framer-motion';

const Partners = () => {
  const partners = [
    { name: 'وزارة التربية', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=300&q=80' },
    { name: 'زين للاتصالات', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=300&q=80' },
    { name: 'آسيا سيل', image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=300&q=80' },
    { name: 'مايكروسوفت العراق', image: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=300&q=80' },
    { name: 'مؤسسة الرؤية', image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=300&q=80' },
    { name: 'جامعة بغداد', image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=300&q=80' },
  ];

  return (
    <section className="branches-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">شراكات النجاح</span>
          <h2 className="section-title">شركاؤنا</h2>
        </div>
        <div className="branches-grid">
          <div className="branches-label">شركاؤنا</div>
          <div className="branches-cards">
            {partners.map((p, i) => (
              <motion.div
                key={i}
                className="branch-card"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="branch-card-img">
                  <img src={p.image} alt={p.name} />
                </div>
                <div className="branch-card-name">{p.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button className="btn-pill btn-pill-outline">المزيد</button>
        </div>
      </div>
    </section>
  );
};

export default Partners;
