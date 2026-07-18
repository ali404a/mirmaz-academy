import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Teachers = () => {
  const teachers = [
    { name: 'أ. علي المرتضى', subject: 'الرياضيات', rating: 4.9, students: '10K+', image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=300&q=80' },
    { name: 'د. سارة أحمد', subject: 'الفيزياء', rating: 4.8, students: '8K+', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80' },
    { name: 'أ. محمد حسن', subject: 'الكيمياء', rating: 5.0, students: '15K+', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80' },
    { name: 'د. نور محمد', subject: 'الأحياء', rating: 4.7, students: '5K+', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80' },
    { name: 'أ. مصطفى العراقي', subject: 'الإنجليزية', rating: 4.9, students: '12K+', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80' },
    { name: 'أ. زينب خليل', subject: 'العربية', rating: 5.0, students: '20K+', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80' },
    { name: 'أ. أحمد جاسم', subject: 'التاريخ', rating: 4.6, students: '4K+', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80' },
    { name: 'م. ليلى شاكر', subject: 'الاقتصاد', rating: 4.8, students: '6K+', image: 'https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?auto=format&fit=crop&w=300&q=80' },
  ];

  return (
    <section className="popular-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">نخبة العراق</span>
          <h2 className="section-title">أساتذة <span className="underline-box">مرماز</span> الأكاديميون</h2>
        </div>
        <div className="teachers-grid">
          {teachers.map((t, i) => (
            <motion.div
              key={i}
              className="teacher-card-dark"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <div className="teacher-avatar-circle">
                <img src={t.image} alt={t.name} />
              </div>
              <span className="teacher-subject-tag">{t.subject}</span>
              <h3 className="teacher-name">{t.name}</h3>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem', marginBottom: '0.4rem' }}>
                <Star size={12} fill="#ff6700" color="#ff6700" />
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#ff6700' }}>{t.rating}</span>
              </div>
              <div className="teacher-meta">{t.students} طالب</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;
