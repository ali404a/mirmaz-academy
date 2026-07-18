import React from 'react';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/MotionWrapper';
import { Video, Brain, LineChart, Headphones, Smartphone } from 'lucide-react';

const WhyMirmaz = () => {
  const features = [
    {
      icon: <Video size={36} className="text-primary" />,
      title: 'تعليم مباشر وتفاعلي',
      desc: 'حلقات بث مباشر بجودة عالية تتيح لك التواصل المباشر مع أساتذتك وطرح أسئلتك لتلقي الإجابات الفورية، مما يحاكي الصفوف الحقيقية.',
      className: 'bento-col-2',
      glow: 'rgba(43, 67, 220, 0.03)'
    },
    {
      icon: <Brain size={36} className="text-secondary" />,
      title: 'اختبارات ذكية',
      desc: 'قيّم تحصيلك العلمي من خلال اختبارات دورية آلية تحاكي نظام الأسئلة الوزارية وتحدد نقاط قوتك وضعفك.',
      className: '',
      glow: 'rgba(255, 103, 0, 0.03)'
    },
    {
      icon: <LineChart size={36} className="text-emerald-500" />,
      title: 'متابعة مستمرة للطلبة',
      desc: 'تقارير أداء دورية ترسل لأولياء الأمور لتتبع الحضور والغياب، ومستوى التقدم الأكاديمي أولاً بأول.',
      className: '',
      glow: 'rgba(16, 185, 129, 0.03)'
    },
    {
      icon: <Smartphone size={36} className="text-purple-500" />,
      title: 'تطبيقات ذكية متكاملة',
      desc: 'تطبيق مخصص للهواتف والألواح الذكية يتيح لك تحميل المحاضرات ومشاهدتها دون الحاجة للاتصال بالإنترنت، للدراسة المرنة في أي وقت.',
      className: 'bento-col-2',
      glow: 'rgba(139, 92, 246, 0.03)'
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        
        <FadeIn>
          <div className="max-w-3xl mb-16">
            <span className="text-secondary font-bold mb-2 block text-sm uppercase tracking-wider">مميزات المنصة</span>
            <h2 className="section-title">لماذا تُعد مرماز الخيار الأفضل؟</h2>
            <p className="section-subtitle">
              نوفر لك بيئة متكاملة تدمج بين كفاءة المعلم وقوة التكنولوجيا الرقمية لنصل بك إلى القمة.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="bento-grid">
          {features.map((feature, index) => (
            <StaggerItem key={index} className={feature.className}>
              <div 
                className="bento-card h-full"
                style={{ backgroundColor: feature.glow }}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm mb-6 border border-gray-100">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                </div>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
};

export default WhyMirmaz;
