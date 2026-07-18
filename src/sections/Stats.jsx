import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/MotionWrapper';
import { Users, Award, MapPin, MonitorPlay, HeartHandshake } from 'lucide-react';

const Stats = () => {
  const stats = [
    { 
      number: '120K+', 
      label: 'طالب مسجل نشط', 
      desc: 'في مختلف المحافظات العراقية',
      color: 'text-primary',
      icon: <Users size={16} />
    },
    { 
      number: '150+', 
      label: 'أستاذ خبير وموجه', 
      desc: 'من كبار الكفاءات التدريسية',
      color: 'text-secondary',
      icon: <Award size={16} />
    },
    { 
      number: '18', 
      label: 'محافظة عراقية', 
      desc: 'تغطية متكاملة لجميع المدن',
      color: 'text-emerald-500',
      icon: <MapPin size={16} />
    },
    { 
      number: '700+', 
      label: 'دورة ومنهج تفاعلي', 
      desc: 'شروحات علمية شاملة ومبسطة',
      color: 'text-purple-500',
      icon: <MonitorPlay size={16} />
    },
    { 
      number: '95%', 
      label: 'نسبة رضا الطلبة', 
      desc: 'تقييم حقيقي لتجربتنا الرقمية',
      color: 'text-amber-500',
      icon: <HeartHandshake size={16} />
    },
  ];

  return (
    <section className="section bg-white border-y border-gray-100">
      <div className="container">
        
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-secondary font-bold mb-2 block text-sm uppercase tracking-wider">قوة مرماز الأكاديمية</span>
            <h2 className="section-title">أرقام وإنجازات نفخر بها</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              نجاح طلابنا هو المقياس الحقيقي لتميزنا الرقمي وتطور منظومتنا.
            </p>
          </div>
        </FadeIn>

        {/* Clean Flowpay Inspired Layout */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <StaggerItem key={index}>
              <div className="flow-stat-card">
                <div className="flex justify-between items-center mb-2">
                  <span className={`flow-stat-number ${stat.color}`}>{stat.number}</span>
                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400">
                    {stat.icon}
                  </div>
                </div>
                <h3 className="flow-stat-label mb-1">{stat.label}</h3>
                <p className="text-xs text-gray-400 leading-normal">{stat.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
};

export default Stats;
