import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/MotionWrapper';
import Card from '../components/Card';

const Stats = () => {
  const stats = [
    { number: '120,000+', label: 'طالب وطالبة', color: 'text-primary' },
    { number: '150+', label: 'أستاذ خبير', color: 'text-secondary' },
    { number: '18', label: 'محافظة', color: 'text-emerald-500' },
    { number: '700+', label: 'دورة تعليمية', color: 'text-purple-500' },
    { number: '95%', label: 'رضا الطلبة', color: 'text-amber-500' },
  ];

  return (
    <section className="section bg-white border-y border-gray-100">
      <div className="container">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="section-title">مرماز بالأرقام</h2>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <StaggerItem key={index}>
              <Card className="flex flex-col items-center justify-center text-center p-6 bg-surface/50 border-none">
                <motion.span 
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`text-4xl lg:text-5xl font-black mb-2 font-ibm ${stat.color}`}
                  style={{ direction: 'ltr' }}
                >
                  {stat.number}
                </motion.span>
                <span className="font-bold text-gray-700 text-lg">{stat.label}</span>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Stats;
