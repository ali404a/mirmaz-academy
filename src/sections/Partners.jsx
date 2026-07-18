import React from 'react';
import { FadeIn } from '../components/MotionWrapper';

const Partners = () => {
  // Array of mock partner names to display in place of logos for now
  const partners = [
    'وزارة التربية العراقية',
    'شركة زين للاتصالات',
    'آسيا سيل',
    'مايكروسوفت العراق',
    'مؤسسة الرؤية التعليمية',
    'منصة نون أكاديمي',
    'مكتبة جرير',
    'جامعة بغداد'
  ];

  return (
    <section className="py-12 bg-white border-y border-gray-100 overflow-hidden">
      <div className="container">
        
        <FadeIn>
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-gray-500 uppercase tracking-wide">
              شركاؤنا في النجاح
            </h3>
          </div>
        </FadeIn>

        {/* Marquee Animation Container */}
        <FadeIn delay={0.2}>
          <div className="relative flex overflow-x-hidden group">
            <div className="animate-marquee flex items-center space-x-12 space-x-reverse whitespace-nowrap">
              {partners.map((partner, index) => (
                <div key={index} className="flex items-center justify-center px-8 py-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-primary/30 transition-colors min-w-[200px]">
                  <span className="font-bold text-gray-400 text-lg">{partner}</span>
                </div>
              ))}
              {/* Duplicate for infinite seamless scroll */}
              {partners.map((partner, index) => (
                <div key={`dup-${index}`} className="flex items-center justify-center px-8 py-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-primary/30 transition-colors min-w-[200px]">
                  <span className="font-bold text-gray-400 text-lg">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default Partners;
