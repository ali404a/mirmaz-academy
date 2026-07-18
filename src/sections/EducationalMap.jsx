import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/MotionWrapper';
import { ChevronDown, GraduationCap, School, BookOpen, BrainCircuit, Globe } from 'lucide-react';

const EducationalMap = () => {
  const steps = [
    { 
      title: 'المرحلة الابتدائية', 
      desc: 'بناء التأسيس الصحيح للطفل بأساليب تعليمية تفاعلية ومحفزة.',
      icon: <School size={24} />,
      color: 'border-emerald-500 text-emerald-600 bg-emerald-50/30'
    },
    { 
      title: 'المرحلة المتوسطة', 
      desc: 'تطوير التفكير النقدي وبناء قاعدة معرفية متينة للمواد الدراسية.',
      icon: <BookOpen size={24} />,
      color: 'border-blue-500 text-blue-600 bg-blue-50/30'
    },
    { 
      title: 'المرحلة الإعدادية', 
      desc: 'التحضير المكثف للامتحانات الوزارية وتوجيه الطالب نحو التخصص المناسب.',
      icon: <GraduationCap size={24} />,
      color: 'border-primary text-primary-dark bg-primary/5'
    },
    { 
      title: 'المراحل الجامعية', 
      desc: 'دعم المقررات الهندسية والطبية والإدارية لتسهيل الرحلة الجامعية.',
      icon: <Globe size={24} />,
      color: 'border-purple-500 text-purple-600 bg-purple-50/30'
    },
    { 
      title: 'الذكاء الاصطناعي والبرمجة', 
      desc: 'تعليم لغات البرمجة الحديثة وتطوير خوارزميات الذكاء الاصطناعي للمستقبل.',
      icon: <BrainCircuit size={24} />,
      color: 'border-rose-500 text-rose-600 bg-rose-50/30'
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-secondary font-bold mb-2 block text-sm uppercase tracking-wider">رحلتك التعليمية معنا</span>
            <h2 className="section-title">خارطة مرماز الأكاديمية</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              نرافقك في كافة محطاتك الدراسية، من التأسيس وحتى احتراف علوم المستقبل والذكاء الاصطناعي.
            </p>
          </div>
        </FadeIn>

        {/* Steps Container */}
        <StaggerContainer className="flex flex-col gap-6 max-w-3xl mx-auto relative">
          
          {/* Vertical connection line */}
          <div className="absolute top-8 bottom-8 right-8 w-[2px] bg-gradient-to-b from-emerald-200 via-primary-light to-rose-200 hidden md:block"></div>

          {steps.map((step, index) => (
            <StaggerItem key={index}>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 relative z-10">
                
                {/* Step Icon Indicator */}
                <div className={`w-16 h-16 rounded-2xl border-2 flex items-center justify-center flex-shrink-0 ${step.color} shadow-sm`}>
                  {step.icon}
                </div>
                
                {/* Card details */}
                <div className="bg-background/40 border border-gray-100 rounded-2xl p-6 flex-grow shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>

              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
};

export default EducationalMap;
