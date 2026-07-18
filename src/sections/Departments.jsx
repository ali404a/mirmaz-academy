import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const Departments = () => {
  const [activeTab, setActiveTab] = useState(0);
  const trackRef = useRef(null);
  
  const tabs = ['المراحل الدراسية', 'التخصصات', 'التطوير المهني', 'اللغات'];
  
  const courses = [
    { title: 'باقة الثالث متوسط الشاملة', tag: 'الثالث متوسط', price: '75,000 د.ع', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&q=80' },
    { title: 'السادس الإعدادي العلمي', tag: 'السادس العلمي', price: '95,000 د.ع', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400&q=80' },
    { title: 'دورة الرياضيات المتقدمة', tag: 'رياضيات', price: '45,000 د.ع', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=400&q=80' },
    { title: 'دورة الفيزياء التفاعلية', tag: 'فيزياء', price: '50,000 د.ع', image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&w=400&q=80' },
    { title: 'أساسيات الكيمياء الحديثة', tag: 'كيمياء', price: '40,000 د.ع', image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=400&q=80' },
    { title: 'دورة الأحياء المتكاملة', tag: 'أحياء', price: '42,000 د.ع', image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313bb?auto=format&fit=crop&w=400&q=80' },
  ];

  const scroll = (dir) => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: dir * 300, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Tabs */}
      <section className="tabs-section">
        <div className="container">
          <div className="tabs-row">
            {tabs.map((tab, i) => (
              <button key={i} className={`tab-btn ${i === activeTab ? 'active' : ''}`} onClick={() => setActiveTab(i)}>
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Carousel */}
      <section className="carousel-section">
        <div className="container">
          <div className="carousel-header">
            <div>
              <span className="section-label">تصفح الدورات</span>
              <h2 className="section-title">الأقسام والتخصصات</h2>
            </div>
            <div className="carousel-arrows">
              <button onClick={() => scroll(1)}><ChevronRight size={20} /></button>
              <button onClick={() => scroll(-1)}><ChevronLeft size={20} /></button>
            </div>
          </div>

          <div className="carousel-track" ref={trackRef}>
            {courses.map((course, i) => (
              <motion.div 
                key={i} 
                className="course-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="course-card-img">
                  <img src={course.image} alt={course.title} />
                </div>
                <div className="course-card-body">
                  <span className="course-card-tag">{course.tag}</span>
                  <h3 className="course-card-title">{course.title}</h3>
                  <span className="course-card-price">{course.price}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <button className="btn-pill btn-pill-outline">
              عرض الجميع
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Departments;
