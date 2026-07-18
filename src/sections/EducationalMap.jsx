import React from 'react';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/MotionWrapper';
import { School, BookOpen, GraduationCap, Award, BrainCircuit } from 'lucide-react';

const EducationalMap = () => {
  const steps = [
    { 
      number: '1', 
      title: 'المرحلة الابتدائية', 
      desc: 'نركز على بناء التأسيس الدراسي السليم بأساليب تعليمية تفاعلية ومحببة.',
      icon: <School size={20} />
    },
    { 
      number: '2', 
      title: 'المرحلة المتوسطة', 
      desc: 'ندعم الطالب لبناء تفكير تحليلي ونقدي يضمن استيعابه للمقررات المنهجية.',
      icon: <BookOpen size={20} />
    },
    { 
      number: '3', 
      title: 'المرحلة الإعدادية', 
      desc: 'تجهيز شامل للامتحانات الوزارية (البكالوريا) مع نخبة أساتذة العراق.',
      icon: <GraduationCap size={20} />
    },
    { 
      number: '4', 
      title: 'المراحل الجامعية', 
      desc: 'توفير مراجعات وشروحات للمقررات العلمية المعقدة في الكليات والمعاهد.',
      icon: <Award size={20} />
    },
    { 
      number: '5', 
      title: 'الذكاء الاصطناعي والبرمجيات', 
      desc: 'تأهيل الشباب لمتطلبات المستقبل وتدريبهم على لغات البرمجة المتطورة.',
      icon: <BrainCircuit size={20} />
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-secondary font-bold mb-2 block text-sm uppercase tracking-wider">خريطة التعلم الذكي</span>
            <h2 className="section-title">رحلتك التعليمية مع مرماز</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              نطور الطالب في العراق من أول خطوة دراسية وحتى احتراف مهارات المستقبل.
            </p>
          </div>
        </FadeIn>

        {/* 2-Column Grid for Steps (neat and balanced) */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <StaggerItem key={index}>
              <div className="step-card">
                <div className="step-badge">{step.number}</div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800 flex items-center gap-2">
                    <span className="text-primary">{step.icon}</span>
                    {step.title}
                  </h3>
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
