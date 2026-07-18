import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const Departments = () => {
  const [activeTab, setActiveTab] = useState(0);
  const trackRef = useRef(null);
  
  const tabs = ['المراحل الدراسية', 'التخصصات', 'التطوير المهني', 'اللغات'];
  
  const tabCourses = [
    // 0: المراحل الدراسية
    [
      { title: 'الثالث متوسط', tag: 'المراحل الدراسية', price: '75,000 د.ع', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&q=80' },
      { title: 'السادس العلمي', tag: 'المراحل الدراسية', price: '95,000 د.ع', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400&q=80' },
      { title: 'السادس الأدبي', tag: 'المراحل الدراسية', price: '85,000 د.ع', image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=400&q=80' },
      { title: 'المهني', tag: 'المراحل الدراسية', price: '70,000 د.ع', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80' }
    ],
    // 1: التخصصات
    [
      { title: 'رياضيات', tag: 'التخصصات', price: '45,000 د.ع', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=400&q=80' },
      { title: 'فيزياء', tag: 'التخصصات', price: '50,000 د.ع', image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&w=400&q=80' },
      { title: 'كيمياء', tag: 'التخصصات', price: '40,000 د.ع', image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=400&q=80' },
      { title: 'أحياء', tag: 'التخصصات', price: '42,000 د.ع', image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313bb?auto=format&fit=crop&w=400&q=80' },
      { title: 'عربي', tag: 'التخصصات', price: '35,000 د.ع', image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=400&q=80' },
      { title: 'إنجليزي', tag: 'التخصصات', price: '40,000 د.ع', image: 'https://images.unsplash.com/photo-1503694978374-8a2fb5206f89?auto=format&fit=crop&w=400&q=80' }
    ],
    // 2: التطوير المهني
    [
      { title: 'البرمجة', tag: 'التطوير المهني', price: '120,000 د.ع', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80' },
      { title: 'الذكاء الاصطناعي', tag: 'التطوير المهني', price: '150,000 د.ع', image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=400&q=80' },
      { title: 'التصميم الجرافيكي', tag: 'التطوير المهني', price: '100,000 د.ع', image: 'https://images.unsplash.com/photo-1626785779199-567f70b77627?auto=format&fit=crop&w=400&q=80' },
      { title: 'إدارة المشاريع', tag: 'التطوير المهني', price: '90,000 د.ع', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80' }
    ],
    // 3: اللغات
    [
      { title: 'الإنجليزية', tag: 'اللغات', price: '60,000 د.ع', image: 'https://images.unsplash.com/photo-1546410531-bea98c0b2b51?auto=format&fit=crop&w=400&q=80' },
      { title: 'الفرنسية', tag: 'اللغات', price: '70,000 د.ع', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80' },
      { title: 'التركية', tag: 'اللغات', price: '50,000 د.ع', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=400&q=80' },
      { title: 'الألمانية', tag: 'اللغات', price: '75,000 د.ع', image: 'https://images.unsplash.com/photo-1599946347371-68eb71b16afc?auto=format&fit=crop&w=400&q=80' }
    ]
  ];

  const currentCourses = tabCourses[activeTab];

  // Reset scroll when tab changes
  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [activeTab]);

  const scroll = (dir) => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: dir * 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="departments-wrapper">
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
              <h2 className="section-title">{tabs[activeTab]}</h2>
            </div>
            <div className="carousel-arrows">
              <button onClick={() => scroll(1)}><ChevronRight size={20} /></button>
              <button onClick={() => scroll(-1)}><ChevronLeft size={20} /></button>
            </div>
          </div>

          <div className="carousel-track" ref={trackRef}>
            {currentCourses.map((course, i) => (
              <motion.div 
                key={`${activeTab}-${i}`} 
                className="course-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
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
    </div>
  );
};

export default Departments;
