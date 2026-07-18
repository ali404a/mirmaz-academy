import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users } from 'lucide-react';

const Campaigns = () => {
  const campaigns = [
    {
      title: 'الخصم الذهبي للسادس',
      sub: 'باقة البكالوريا المتكاملة',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400&q=80',
      meta: '450 طالب',
    },
    {
      title: 'مسابقة أوائل مرماز',
      sub: 'المسابقة الوطنية الشاملة',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=400&q=80',
      meta: '1.2K مشارك',
    },
    {
      title: 'باقة الإخوة العائلية',
      sub: 'خصم خاص للعوائل',
      image: 'https://images.unsplash.com/photo-1511629091441-ee46146481b6?auto=format&fit=crop&w=400&q=80',
      meta: '80+ عائلة',
    },
    {
      title: 'دورة اللغة الإنجليزية',
      sub: 'IELTS المكثفة',
      image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=400&q=80',
      meta: '300 طالب',
    },
    {
      title: 'برنامج التميز الصيفي',
      sub: 'مراجعة صيفية شاملة',
      image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=400&q=80',
      meta: '600 مشارك',
    },
    {
      title: 'جائزة المتفوقين',
      sub: 'مكافآت للأوائل',
      image: 'https://images.unsplash.com/photo-1567168544813-cc03465b4fab?auto=format&fit=crop&w=400&q=80',
      meta: '200 متفوق',
    },
  ];

  return (
    <section className="popular-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">الحملات والعروض</span>
          <h2 className="section-title"><span className="underline-box">أحدث</span> الكامبينات</h2>
        </div>
        <div className="popular-grid">
          {campaigns.map((c, i) => (
            <motion.div
              key={i}
              className="popular-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="popular-card-circle">
                <img src={c.image} alt={c.title} />
              </div>
              <div className="popular-card-body">
                <div className="popular-card-name">{c.title}</div>
                <div className="popular-card-sub">{c.sub}</div>
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

export default Campaigns;
