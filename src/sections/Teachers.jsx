import React, { useState } from 'react';
import { FadeIn } from '../components/MotionWrapper';
import Button from '../components/Button';
import { Star, ChevronRight, ChevronLeft, ArrowLeft } from 'lucide-react';

const Teachers = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const teachers = [
    {
      id: 1,
      name: 'أ. علي المرتضى',
      subject: 'الرياضيات',
      exp: '15 سنة خبرة',
      students: '10K+ طالب',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 2,
      name: 'د. سارة أحمد',
      subject: 'الفيزياء',
      exp: '10 سنوات خبرة',
      students: '8K+ طالب',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 3,
      name: 'أ. محمد حسن',
      subject: 'الكيمياء',
      exp: '12 سنة خبرة',
      students: '15K+ طالب',
      rating: 5.0,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 4,
      name: 'د. نور محمد',
      subject: 'الأحياء',
      exp: '8 سنوات خبرة',
      students: '5K+ طالب',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === teachers.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? teachers.length - 1 : prev - 1));
  };

  return (
    <section className="section bg-white overflow-hidden">
      <div className="container">
        
        <FadeIn>
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-secondary font-bold mb-2 block text-sm uppercase tracking-wider">نخبة العراق</span>
              <h2 className="section-title mb-0">أساتذة مرماز الأكاديميون</h2>
            </div>
            <div className="hidden md:flex gap-4">
              <button onClick={prevSlide} className="w-12 h-12 rounded-full bg-surface flex items-center justify-center shadow-sm hover:bg-primary hover:text-white transition-colors" aria-label="السابق">
                <ChevronRight size={24} />
              </button>
              <button onClick={nextSlide} className="w-12 h-12 rounded-full bg-surface flex items-center justify-center shadow-sm hover:bg-primary hover:text-white transition-colors" aria-label="التالي">
                <ChevronLeft size={24} />
              </button>
            </div>
          </div>
        </FadeIn>

        <div className="overflow-hidden">
          <div 
            className="slider-track"
            style={{ transform: `translateX(${activeIndex * 100}%)` }}
          >
            {teachers.map((teacher) => (
              <div key={teacher.id} className="teacher-item">
                <div className="premium-teacher-card">
                  
                  {/* Circular Avatar wrapper */}
                  <div className="teacher-avatar-wrapper">
                    <img src={teacher.image} alt={teacher.name} className="teacher-avatar" />
                  </div>

                  {/* Profile info */}
                  <div>
                    <span className="teacher-tag">{teacher.subject}</span>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{teacher.name}</h3>
                    
                    <div className="flex items-center justify-center gap-1 text-sm font-bold text-amber-500 mb-4">
                      <Star size={14} fill="currentColor" />
                      <span>{teacher.rating} تقييم</span>
                    </div>

                    <p className="text-xs text-gray-500 font-medium">
                      {teacher.exp} • {teacher.students}
                    </p>
                  </div>

                  <Button variant="outline" className="w-full mt-6" icon={<ArrowLeft size={16}/>}>
                    الملف الشخصي
                  </Button>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Teachers;
