import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/MotionWrapper';
import { Video, Brain, LineChart, Headphones, LayoutDashboard } from 'lucide-react';

const WhyMirmaz = () => {
  const features = [
    {
      icon: <Video size={40} className="mb-4 text-primary" />,
      title: 'تعليم مباشر وتفاعلي',
      desc: 'بث مباشر عالي الجودة مع الأساتذة وإمكانية طرح الأسئلة في الوقت الفعلي.',
      color: 'bg-blue-50/50 hover:bg-blue-50',
      span: 'col-span-1 md:col-span-2'
    },
    {
      icon: <Brain size={40} className="mb-4 text-purple-500" />,
      title: 'اختبارات ذكية',
      desc: 'نظام امتحانات يحاكي الامتحانات الوزارية لتقييم مستواك بدقة.',
      color: 'bg-purple-50/50 hover:bg-purple-50',
      span: 'col-span-1'
    },
    {
      icon: <LineChart size={40} className="mb-4 text-emerald-500" />,
      title: 'متابعة مستمرة',
      desc: 'تقارير دورية لأولياء الأمور لمتابعة التطور الأكاديمي للطالب.',
      color: 'bg-emerald-50/50 hover:bg-emerald-50',
      span: 'col-span-1'
    },
    {
      icon: <LayoutDashboard size={40} className="mb-4 text-secondary" />,
      title: 'تطبيقات متكاملة',
      desc: 'تطبيق للموبايل والتابلت يتيح لك الدراسة في أي وقت وأي مكان، حتى بدون إنترنت.',
      color: 'bg-orange-50/50 hover:bg-orange-50',
      span: 'col-span-1 md:col-span-2 lg:col-span-1'
    },
    {
      icon: <Headphones size={40} className="mb-4 text-amber-500" />,
      title: 'دعم فني أكاديمي',
      desc: 'فريق متخصص للإجابة على استفساراتك التقنية والعلمية على مدار الساعة.',
      color: 'bg-amber-50/50 hover:bg-amber-50',
      span: 'col-span-1 lg:col-span-1'
    }
  ];

  return (
    <section className="section bg-white overflow-hidden">
      <div className="container">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-secondary font-bold mb-2 block">المميزات</span>
              <h2 className="section-title">لماذا تختار مرماز؟</h2>
              <p className="section-subtitle mb-0">
                لأننا جمعنا لك كل ما تحتاجه للتفوق في مكان واحد، بتجربة تقنية هي الأفضل في العراق.
              </p>
            </div>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <StaggerItem key={index} className={feature.span}>
              <div className={`h-full rounded-[32px] p-8 md:p-10 transition-colors duration-300 border border-gray-100 ${feature.color}`}>
                {feature.icon}
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {feature.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default WhyMirmaz;
