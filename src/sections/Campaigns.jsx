import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, ArrowLeft } from 'lucide-react';
import { FadeIn } from '../components/MotionWrapper';
import Card from '../components/Card';
import Button from '../components/Button';

const Campaigns = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const campaigns = [
    {
      id: 1,
      title: 'الخصم الذهبي للسادس الإعدادي',
      desc: 'سجل الآن في الباقة المتكاملة للسادس الإعدادي واحصل على خصم 30% بالإضافة إلى الملازم مجاناً.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tag: 'تخفيضات'
    },
    {
      id: 2,
      title: 'مسابقة أوائل مرماز',
      desc: 'شارك في الاختبار الوطني الشامل واربح جوائز قيمة تصل إلى لابتوبات وأجهزة تابلت للطلبة الأوائل.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tag: 'مسابقات'
    },
    {
      id: 3,
      title: 'عرض الإخوة',
      desc: 'خصم خاص عند تسجيل أكثر من طالب من نفس العائلة في أي من دورات مرماز أكاديمي.',
      image: 'https://images.unsplash.com/photo-1511629091441-ee46146481b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tag: 'عروض خاصة'
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === campaigns.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? campaigns.length - 1 : prev - 1));
  };

  return (
    <section className="section bg-surface overflow-hidden">
      <div className="container">
        <FadeIn>
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-secondary font-bold mb-2 block">جديد مرماز</span>
              <h2 className="section-title mb-0">أحدث الكامبينات والعروض</h2>
            </div>
            <div className="hidden md:flex gap-4">
              <button onClick={prevSlide} className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-primary hover:text-white transition-colors" aria-label="السابق">
                <ChevronRight size={24} />
              </button>
              <button onClick={nextSlide} className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-primary hover:text-white transition-colors" aria-label="التالي">
                <ChevronLeft size={24} />
              </button>
            </div>
          </div>
        </FadeIn>

        <div className="relative">
          {/* Simple Slider Implementation */}
          <div className="flex overflow-hidden gap-6 pb-8">
            {campaigns.map((camp, index) => (
              <Card 
                key={camp.id} 
                className={`min-w-[100%] md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] p-0 flex-shrink-0 transition-transform duration-500 ease-in-out`}
                style={{ transform: `translateX(${activeIndex * 100}%)` }} // basic slide logic for rtl
                hover={true}
              >
                <div className="h-64 overflow-hidden relative">
                  <span className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-bold text-primary">
                    {camp.tag}
                  </span>
                  <img src={camp.image} alt={camp.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-3 line-clamp-1">{camp.title}</h3>
                  <p className="text-gray-600 mb-6 line-clamp-2">{camp.desc}</p>
                  <Button variant="outline" className="w-full" icon={<ArrowLeft size={18}/>}>
                    التفاصيل
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Campaigns;
