import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import heroImg from '../assets/hero_banner.jpg';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        
        {/* Left: Text Content */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="hero-badge">
            <Sparkles size={14} />
            <span>المنصة التعليمية #1 في العراق</span>
          </div>

          <h1 className="hero-title">
            حيث كل درس يروي قصة نجاح…
            <br />
            <span className="highlight">ما قصتك أنت؟</span>
          </h1>

          <p className="hero-desc">
            انضم إلى أكثر من 120 ألف طالب يحققون أحلامهم مع نخبة أساتذة مرماز. 
            شروحات تفاعلية مباشرة، اختبارات ذكية، ومتابعة مستمرة تضمن لك التفوق.
          </p>

          <div className="hero-meta">
            <div>التقييم: <span>⭐ 4.9</span></div>
            <div>الطلاب: <span>120K+</span></div>
          </div>

          <button className="btn-pill btn-pill-secondary" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>
            ابدأ رحلتك الآن
          </button>
        </motion.div>

        {/* Right: Visual */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="hero-image-frame">
            <img src={heroImg} alt="مرماز أكاديمي" />
            {/* Diagonal blue stripe */}
            <div className="hero-diagonal-stripe">
              <span>مرماز أكاديمي</span>
            </div>
          </div>
          <div className="hero-vertical-text">MIRMAZ</div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
