import React from 'react';
import { motion } from 'framer-motion';

const Statement = () => {
  return (
    <section className="statement-section">
      <div className="container" style={{ position: 'relative' }}>
        {/* Big faded typography */}
        <div className="statement-bg-text">
          جودة لا
          <br />
          مثيل لها
        </div>
        
        {/* Diagonal blue stripe */}
        <div className="statement-diagonal">
          <span className="statement-diagonal-text">
            ★ مرماز أكاديمي ★ المنصة التعليمية الأولى ★ مرماز أكاديمي ★ المنصة التعليمية الأولى ★
          </span>
        </div>

        {/* Description */}
        <motion.p 
          className="statement-sub"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          في مرماز أكاديمي نؤمن بأن كل طالب عراقي يستحق تعليماً بأعلى المعايير الأكاديمية. 
          نقدم منظومة تعليمية رقمية متكاملة تجمع بين جودة المحتوى وتميز الأساتذة.
        </motion.p>
      </div>
    </section>
  );
};

export default Statement;
