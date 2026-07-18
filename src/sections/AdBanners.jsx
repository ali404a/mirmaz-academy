import React, { useState, useEffect } from 'react';
import { FadeIn } from '../components/MotionWrapper';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const AdBanners = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Sample HD images from unsplash that fit an "Ads/Campaigns" look
  const ads = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      title: 'خصم خاص للمتميزين',
      link: '#'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      title: 'اشترك الآن في الباقات العائلية',
      link: '#'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      title: 'استعد للامتحانات الوزارية',
      link: '#'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev === ads.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [ads.length]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === ads.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? ads.length - 1 : prev - 1));
  };

  return (
    <section className="py-12 bg-gray-50 border-y border-gray-100">
      <div className="container">
        
        <FadeIn>
          <div className="flex justify-between items-end mb-8">
            <div>
              <span className="text-primary font-bold mb-2 block text-sm uppercase tracking-wider">إعلانات</span>
              <h2 className="text-3xl font-bold mb-0 text-gray-900">الحملات الإعلانية</h2>
            </div>
            <div className="hidden md:flex gap-2">
              <button onClick={prevSlide} className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-primary hover:text-white transition-colors border border-gray-200" aria-label="السابق">
                <ChevronRight size={20} />
              </button>
              <button onClick={nextSlide} className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-primary hover:text-white transition-colors border border-gray-200" aria-label="التالي">
                <ChevronLeft size={20} />
              </button>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="relative w-full h-[250px] md:h-[350px] lg:h-[400px] rounded-2xl overflow-hidden shadow-lg group">
            
            {ads.map((ad, index) => (
              <div 
                key={ad.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              >
                <img 
                  src={ad.image} 
                  alt={ad.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-white text-2xl md:text-4xl font-bold mb-4">{ad.title}</h3>
                  <a href={ad.link} className="inline-block px-6 py-3 bg-primary text-white font-bold rounded-lg w-max hover:bg-secondary transition-colors">
                    سجل الآن
                  </a>
                </div>
              </div>
            ))}

            {/* Pagination Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {ads.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${index === activeIndex ? 'bg-primary w-8' : 'bg-white/50 hover:bg-white'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default AdBanners;
