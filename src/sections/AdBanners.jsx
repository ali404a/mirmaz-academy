import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AdBanners = () => {
  const [active, setActive] = useState(0);
  
  const ads = [
    { image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80', title: 'باقة السادس الإعدادي المتكاملة - خصم 30%' },
    { image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80', title: 'مسابقة أوائل مرماز الوطنية - جوائز قيمة' },
    { image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80', title: 'الباقة العائلية - سجل أخوتك معاً ووفر أكثر' },
    { image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80', title: 'دورة IELTS المكثفة - ابدأ رحلتك نحو العالم' },
    { image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=1200&q=80', title: 'برنامج التميز الصيفي - سجل الآن قبل فوات الأوان' }
  ];

  useEffect(() => {
    const timer = setInterval(() => setActive((p) => (p === ads.length - 1 ? 0 : p + 1)), 5000);
    return () => clearInterval(timer);
  }, [ads.length]);

  return (
    <section style={{ padding: '3rem 0' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">إعلانات</span>
          <h2 className="section-title">الحملات الإعلانية</h2>
        </div>
        <div className="ad-banner-wrapper">
          {ads.map((ad, i) => (
            <div key={i} className="ad-slide" style={{ opacity: i === active ? 1 : 0, zIndex: i === active ? 1 : 0 }}>
              <img src={ad.image} alt={ad.title} />
              <div className="ad-slide-overlay">
                <h3>{ad.title}</h3>
                <button className="btn-pill btn-pill-secondary" style={{ width: 'max-content' }}>سجل الآن</button>
              </div>
            </div>
          ))}
          <div className="ad-dots">
            {ads.map((_, i) => (
              <button key={i} className={`ad-dot ${i === active ? 'active' : ''}`} onClick={() => setActive(i)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdBanners;
