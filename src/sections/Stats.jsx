import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/MotionWrapper';
import Card from '../components/Card';
import { Users, Award, ShieldCheck, BookOpen, Smile } from 'lucide-react';

const Stats = () => {
  const stats = [
    { 
      number: '+120,000', 
      label: 'طالب مسجل نشط', 
      color: 'text-primary',
      icon: <Users size={20} className="text-primary"/>,
      bg: 'rgba(43, 67, 220, 0.05)'
    },
    { 
      number: '+150', 
      label: 'أستاذ خبير وموجه أكاديمي', 
      color: 'text-secondary',
      icon: <Award size={20} className="text-secondary"/>,
      bg: 'rgba(255, 103, 0, 0.05)'
    },
    { 
      number: '18', 
      label: 'محافظة (تغطية كاملة للبلد)', 
      color: 'text-emerald-500',
      icon: <ShieldCheck size={20} className="text-emerald-500"/>,
      bg: 'rgba(16, 185, 129, 0.05)'
    },
    { 
      number: '+700', 
      label: 'منهج ودورة مسجلة وتفاعلية', 
      color: 'text-purple-500',
      icon: <BookOpen size={20} className="text-purple-500"/>,
      bg: 'rgba(139, 92, 246, 0.05)'
    },
    { 
      number: '95%', 
      label: 'نسبة رضا الطلبة وأولياء الأمور', 
      color: 'text-amber-500',
      icon: <Smile size={20} className="text-amber-500"/>,
      bg: 'rgba(245, 158, 11, 0.05)'
    },
  ];

  return (
    <section className="section bg-white border-y border-gray-100">
      <div className="container">
        
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-secondary font-bold mb-2 block text-sm uppercase tracking-wider">إحصائيات وقوة المنصة</span>
            <h2 className="section-title">أرقام وإنجازات نفخر بها</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              أرقام تعكس ثقة الطلاب وأولياء الأمور في مرماز كأكبر منظومة تعليمية في العراق.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <StaggerItem key={index}>
              <Card className="flex flex-col items-center justify-center text-center p-8 border-none bg-surface/50 relative overflow-hidden">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: stat.bg }}
                >
                  {stat.icon}
                </div>
                <motion.span 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`text-3xl lg:text-4xl font-black mb-2 font-secondary ${stat.color}`}
                  style={{ direction: 'ltr' }}
                >
                  {stat.number}
                </motion.span>
                <span className="font-bold text-gray-700 text-sm">{stat.label}</span>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
};

export default Stats;
