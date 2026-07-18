import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, MapPin, MonitorPlay, HeartHandshake } from 'lucide-react';

const Stats = () => {
  const stats = [
    { number: '120K+', label: 'طالب مسجل', desc: 'في مختلف المحافظات', icon: <Users size={20} /> },
    { number: '150+', label: 'أستاذ خبير', desc: 'من أفضل الكفاءات', icon: <Award size={20} /> },
    { number: '18', label: 'محافظة عراقية', desc: 'تغطية شاملة', icon: <MapPin size={20} /> },
    { number: '700+', label: 'دورة تفاعلية', desc: 'شروحات شاملة', icon: <MonitorPlay size={20} /> },
    { number: '95%', label: 'رضا الطلبة', desc: 'تقييم حقيقي', icon: <HeartHandshake size={20} /> },
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">قوة مرماز</span>
          <h2 className="section-title">أرقام وإنجازات <span className="underline-box">نفخر</span> بها</h2>
        </div>
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="stat-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-desc">{stat.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
