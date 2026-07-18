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
    { title: 'الجامعات الكبرى', courses: 30, teachers: 20, icon: <Users className="text-blue-500"/> },
    { title: 'علوم الحاسوب والبرمجة', courses: 12, teachers: 8, icon: <MonitorPlay className="text-slate-800"/> },
  ];

  return (
    <section className="section bg-surface border-y border-gray-100">
      <div className="container">
        
        <FadeIn>
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-secondary font-bold mb-2 block text-sm uppercase tracking-wider">أقسام مرماز الأكاديمية</span>
              <h2 className="section-title mb-0">تصفح التخصصات والمراحل</h2>
            </div>
            <Button variant="outline" icon={<ArrowLeft size={18}/>}>عرض كافة الأقسام</Button>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, index) => (
            <StaggerItem key={index}>
              <Card className="flex flex-col gap-6 p-8 hover:border-primary cursor-pointer group bg-white border-none">
                <div className="flex justify-between items-start">
                  <div className="w-14 h-14 rounded-2xl bg-surface flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    {dept.icon}
                  </div>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">{dept.courses} دورة</span>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{dept.title}</h3>
                  <p className="text-muted text-sm font-medium flex items-center gap-2">
                    <Users size={16}/> {dept.teachers} أستاذ متخصص في القسم
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex justify-between items-center text-primary text-sm font-bold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                  استكشف القسم الآن <ArrowLeft size={16}/>
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
