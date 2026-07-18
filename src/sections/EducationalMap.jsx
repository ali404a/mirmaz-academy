import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/MotionWrapper';
import { ArrowDown } from 'lucide-react';

const EducationalMap = () => {
  const steps = [
    { title: 'المرحلة الابتدائية', color: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
    { title: 'المتوسطة', color: 'bg-blue-100 text-blue-800 border-blue-200' },
    { title: 'الإعدادية', color: 'bg-primary/20 text-primary-dark border-primary/30' },
    { title: 'الجامعات', color: 'bg-purple-100 text-purple-800 border-purple-200' },
    { title: 'الدورات الاحترافية', color: 'bg-amber-100 text-amber-800 border-amber-200' },
    { title: 'الذكاء الاصطناعي', color: 'bg-rose-100 text-rose-800 border-rose-200' },
    { title: 'اللغات والبرمجة', color: 'bg-slate-100 text-slate-800 border-slate-200' }
  ];

  return (
    <section className="section bg-white">
      <div className="container max-w-4xl">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-secondary font-bold mb-2 block">رحلتك معنا</span>
            <h2 className="section-title">الخريطة التعليمية</h2>
            <p className="text-muted">مسار واضح متكامل يبدأ من الخطوة الأولى وحتى الاحتراف.</p>
          </div>
        </FadeIn>

        <div className="relative py-10">
          {/* Connecting Line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-emerald-200 via-primary-light to-slate-200 transform -translate-x-1/2 rounded-full hidden md:block"></div>

          <StaggerContainer className="flex flex-col items-center gap-4 relative z-10">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <StaggerItem>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className={`px-8 py-4 rounded-full border-2 font-bold text-xl md:text-2xl shadow-sm cursor-pointer transition-colors hover:shadow-md ${step.color}`}
                  >
                    {step.title}
                  </motion.div>
                </StaggerItem>
                {index < steps.length - 1 && (
                  <StaggerItem>
                    <motion.div 
                      animate={{ y: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="text-gray-300 md:hidden my-2"
                    >
                      <ArrowDown size={24} />
                    </motion.div>
                  </StaggerItem>
                )}
              </React.Fragment>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default EducationalMap;
