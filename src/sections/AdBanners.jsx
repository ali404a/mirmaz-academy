import React from 'react';
import { motion } from 'framer-motion';
import { Megaphone, Gift, Percent, Trophy, Zap, Star } from 'lucide-react';

const AdBanners = () => {
  const ads = [
    {
      title: 'عرض العودة للمدارس',
      sub: 'خصم 40% على جميع الباقات الدراسية',
      icon: <Percent size={28} />,
      color: '#2b43dc',
      tag: 'عرض محدود',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'مسابقة أوائل العراق',
      sub: 'شارك واربح جوائز بقيمة 10 مليون دينار',
      icon: <Trophy size={28} />,
      color: '#ff6700',
      tag: 'مسابقة وطنية',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'الباقة العائلية الذهبية',
      sub: 'سجل أخوتك معاً ووفر حتى 50%',
      icon: <Gift size={28} />,
      color: '#10b981',
      tag: 'باقات عائلية',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'دورة IELTS المكثفة',
      sub: 'احصل على شهادة IELTS بدرجة +7',
      icon: <Star size={28} />,
      color: '#8b5cf6',
      tag: 'دورة متقدمة',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'برنامج التميز الصيفي',
      sub: 'مراجعة شاملة لجميع المواد خلال الصيف',
      icon: <Zap size={28} />,
      color: '#ef4444',
      tag: 'برنامج صيفي',
      image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'حملة ادعم طالباً',
      sub: 'ساهم في تعليم طالب محتاج مجاناً',
      icon: <Megaphone size={28} />,
      color: '#f59e0b',
      tag: 'مبادرة مجتمعية',
      image: 'https://images.unsplash.com/photo-1567168544813-cc03465b4fab?auto=format&fit=crop&w=400&q=80',
    },
  ];

  return (
    <section className="popular-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">إعلانات وحملات</span>
          <h2 className="section-title">الحملات <span className="underline-box">الإعلانية</span></h2>
        </div>
        <div className="popular-grid">
          {ads.map((ad, i) => (
            <motion.div
              key={i}
              className="popular-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="popular-card-circle">
                <img src={ad.image} alt={ad.title} />
              </div>
              <div className="popular-card-body">
                <span style={{
                  display: 'inline-block',
                  background: `${ad.color}20`,
                  color: ad.color,
                  padding: '0.2rem 0.7rem',
                  fontSize: '0.65rem',
                  fontWeight: 800,
                  borderRadius: 'var(--radius-full)',
                  marginBottom: '0.5rem'
                }}>
                  {ad.tag}
                </span>
                <div className="popular-card-name">{ad.title}</div>
                <div className="popular-card-sub">{ad.sub}</div>
                <div style={{ marginTop: '0.75rem' }}>
                  <button className="btn-pill btn-pill-outline" style={{ padding: '0.4rem 1.2rem', fontSize: '0.75rem' }}>
                    التفاصيل
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdBanners;
