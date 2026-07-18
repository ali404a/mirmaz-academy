import React from 'react';
import { motion } from 'framer-motion';
import { Video, Brain, LineChart, ShieldCheck } from 'lucide-react';

const Identity = () => {
  const features = [
    { icon: <Video size={24} />, title: 'تعليم تفاعلي مباشر', desc: 'بث مباشر بجودة عالية للتواصل مع الأساتذة.', color: '#2b43dc' },
    { icon: <Brain size={24} />, title: 'اختبارات ذكية', desc: 'اختبارات دورية تحاكي النظام الوزاري.', color: '#ff6700' },
    { icon: <LineChart size={24} />, title: 'متابعة مستمرة', desc: 'تقارير أداء دورية ترسل لأولياء الأمور.', color: '#10b981' },
    { icon: <ShieldCheck size={24} />, title: 'بيئة آمنة', desc: 'نظام حماية متكامل يضمن الخصوصية.', color: '#8b5cf6' },
  ];

  return (
    <section className="identity-section">
      <div className="container identity-grid">
        
        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">من نحن</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, lineHeight: 1.2, marginBottom: '1.5rem' }}>
            مرماز أكاديمي:
            <br />
            <span style={{ color: 'var(--primary-light)' }}>بوابتك الرقمية للتفوق</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem', maxWidth: 480 }}>
            نحن منصة تعليمية عراقية رائدة تجمع بين نخبة الأساتذة وأحدث التقنيات التفاعلية 
            لنقدم تجربة تعليمية لا مثيل لها تضمن لطلابنا التفوق والنجاح.
          </p>
          <button className="btn-pill btn-pill-primary">اكتشف المزيد</button>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="identity-features"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {features.map((f, i) => (
            <div key={i} className="identity-feature-card">
              <div className="icon" style={{ background: `${f.color}20`, color: f.color }}>
                {f.icon}
              </div>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Identity;
