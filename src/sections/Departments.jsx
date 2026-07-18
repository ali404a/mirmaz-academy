import React from 'react';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/MotionWrapper';
import Card from '../components/Card';
import Button from '../components/Button';
import { BookOpen, MonitorPlay, Users, ArrowLeft } from 'lucide-react';

const Departments = () => {
  const departments = [
    { title: 'الثالث متوسط', courses: 24, teachers: 12, icon: <BookOpen className="text-primary"/> },
    { title: 'السادس الإعدادي', courses: 45, teachers: 30, icon: <BookOpen className="text-secondary"/> },
    { title: 'الفرع العلمي', courses: 18, teachers: 15, icon: <BookOpen className="text-emerald-500"/> },
    { title: 'الفرع الأدبي', courses: 15, teachers: 10, icon: <BookOpen className="text-purple-500"/> },
    { title: 'الجامعات', courses: 30, teachers: 20, icon: <Users className="text-blue-500"/> },
    { title: 'البرمجة', courses: 12, teachers: 8, icon: <MonitorPlay className="text-slate-800"/> },
  ];

  return (
    <section className="section bg-surface border-y border-gray-100">
      <div className="container">
        <FadeIn>
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-secondary font-bold mb-2 block">أقسامنا</span>
              <h2 className="section-title mb-0">تصفح أقسام مرماز</h2>
            </div>
            <Button variant="text" icon={<ArrowLeft size={18}/>}>عرض الكل</Button>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, index) => (
            <StaggerItem key={index}>
              <Card className="flex flex-col gap-6 p-8 hover:border-primary cursor-pointer group">
                <div className="flex justify-between items-start">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    {dept.icon}
                  </div>
                  <div className="flex gap-2 text-sm font-bold">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">{dept.courses} دورة</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{dept.title}</h3>
                  <p className="text-muted font-medium flex items-center gap-2">
                    <Users size={16}/> {dept.teachers} أستاذ متخصص
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center text-primary font-bold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                  استكشف القسم <ArrowLeft size={18}/>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Departments;
