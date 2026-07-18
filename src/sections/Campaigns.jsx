import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, ArrowLeft } from 'lucide-react';
import { FadeIn } from '../components/MotionWrapper';
import Button from '../components/Button';

const Campaigns = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const campaigns = [
    {
      id: 1,
      title: 'الخصم الذهبي للسادس الإعدادي',
      desc: 'ابدأ رحلة تفوقك الدراسي الآن مع الباقة المتكاملة لطلبة السادس الإعدادي. سجل واحصل على خصم فوري بنسبة 30% مع شحن مجاني لكافة الملازم والكتب الدراسية حتى باب بيتك.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tag: 'تخفيضات البكالوريا'
    },
    {
      id: 2,
      title: 'مسابقة أوائل مرماز الوطنية للتميز',
      desc: 'اختبر معلوماتك وتنافس مع آلاف الطلاب على مستوى العراق. شارك الآن في التقييم الوطني الشامل لتنال فرصة الفوز بجوائز عينية ممتازة تشمل أجهزة لابتوب وألواح ذكية.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tag: 'مسابقات وطنية'
    },
    {
      id: 3,
      title: 'باقة الإخوة والعائلة التضامنية',
      desc: 'نسعى دائماً لدعم عوائلنا الكريمة في العراق. احصل على باقة الخصم العائلي الخاص عند تسجيل أكثر من طالب من نفس العائلة في أي من تخصصات أو مراحل الأكاديمية.',
      image: 'https://images.unsplash.com/photo-1511629091441-ee46146481b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tag: 'باقات عائلية'
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
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-secondary font-bold mb-2 block text-sm uppercase tracking-wider">الحملات الترويجية</span>
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

        {/* Swipe-able/Slider Track */}
        <div className="overflow-hidden">
          <div 
            className="slider-track"
            style={{ transform: `translateX(${activeIndex * 100}%)` }}
          >
            {campaigns.map((camp) => (
              <div key={camp.id} className="slider-item">
                <div className="premium-campaign-card">
                  
                  {/* Visual Image */}
                  <div className="campaign-visual-wrapper">
                    <img src={camp.image} alt={camp.title} className="campaign-image" />
                  </div>

                  {/* Content details */}
                  <div className="campaign-content-wrapper">
                    <div>
                      <span className="text-xs font-bold text-primary bg-primary-glow px-3 py-1 rounded-full inline-block mb-3">
                        {camp.tag}
                      </span>
                      <h3 className="text-2xl font-black mb-3 text-gray-800">{camp.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{camp.desc}</p>
                    </div>
                    <Button variant="outline" className="align-self-start" icon={<ArrowLeft size={16}/>}>
                      عرض تفاصيل العرض
                    </Button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Campaigns;
