import React from 'react';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/MotionWrapper';
import { BookOpen, Laptop, Milestone, Compass } from 'lucide-react';

const Departments = () => {
  const departments = [
    {
      age: '9 - 15 سنة',
      duration: 'دورة مستمرة',
      title: 'الثالث متوسط',
      desc: 'محاضرات تفاعلية تغطي الرياضيات، الفيزياء، الكيمياء، والأحياء بأسلوب تبسيطي ممتاز.',
      colorClass: 'program-card-blue',
      icon: <BookOpen size={28} className="text-white" />
    },
    {
      age: '15 - 18 سنة',
      duration: 'دورة متكاملة',
      title: 'السادس الإعدادي',
      desc: 'باقات السادس العلمي والأدبي الشاملة مع جدول مراجعات واختبارات دورية مكثفة.',
      colorClass: 'program-card-orange',
      icon: <Milestone size={28} className="text-white" />
    },
    {
      age: 'خريجي الإعدادية',
      duration: '8 أشهر',
      title: 'الذكاء الاصطناعي',
      desc: 'بناء وبرمجة نماذج الذكاء الاصطناعي، الشبكات العصبية، والتعلم الآلي بلغة Python.',
      colorClass: 'program-card-green',
      icon: <Laptop size={28} className="text-white" />
    },
    {
      age: 'الطلاب والشباب',
      duration: '12 شهر',
      title: 'علوم البرمجيات',
      desc: 'تطوير مواقع الويب والبرامج من الصفر وحتى الاحتراف مع تطبيقات عملية.',
      colorClass: 'program-card-purple',
      icon: <Compass size={28} className="text-white" />
    }
  ];

  return (
    <section className="section bg-surface border-y border-gray-100">
      <div className="container">
        
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-secondary font-bold mb-2 block text-sm uppercase tracking-wider">برامجنا الأكاديمية</span>
            <h2 className="section-title">اختر القسم المناسب لك</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              نوفر باقات تعليمية متخصصة ومصممة بعناية لتناسب كل مرحلة دراسية وتطور مهاراتك.
            </p>
          </div>
        </FadeIn>

        {/* 4-Column Responsive Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((dept, index) => (
            <StaggerItem key={index}>
              <div className={`program-card ${dept.colorClass}`}>
                
                {/* Header Tag */}
                <div className="program-card-header">
                  <span className="program-card-tag">{dept.age}</span>
                  <span className="program-card-tag opacity-80">{dept.duration}</span>
                </div>

                {/* Description Body */}
                <div className="my-6">
                  <h3 className="text-2xl font-black text-white mb-3">{dept.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed line-clamp-3">{dept.desc}</p>
                </div>

                {/* Bottom CTA & Icon */}
                <div className="flex flex-col gap-4">
                  <div className="program-card-icon-wrapper">
                    {dept.icon}
                  </div>
                  <button className="program-card-btn">
                    استكشف التفاصيل
                  </button>
                </div>

              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
};

export default Departments;
