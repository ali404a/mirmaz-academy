import React from 'react';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/MotionWrapper';
import { Video, Brain, LineChart, Headphones, ShieldCheck, Award } from 'lucide-react';
import Button from '../components/Button';

const Identity = () => {
  const features = [
    {
      icon: <Video size={36} className="text-primary" />,
      title: 'تعليم تفاعلي مباشر',
      desc: 'بث مباشر بجودة عالية للتواصل مع الأساتذة ومحاكاة الصفوف الحقيقية.',
      glow: 'rgba(43, 67, 220, 0.03)'
    },
    {
      icon: <Brain size={36} className="text-secondary" />,
      title: 'اختبارات ذكية',
      desc: 'اختبارات دورية تحاكي النظام الوزاري لتحديد نقاط القوة والضعف.',
      glow: 'rgba(255, 103, 0, 0.03)'
    },
    {
      icon: <LineChart size={36} className="text-emerald-500" />,
      title: 'متابعة مستمرة',
      desc: 'تقارير أداء دورية ترسل لأولياء الأمور لتتبع الحضور والتقدم الأكاديمي.',
      glow: 'rgba(16, 185, 129, 0.03)'
    },
    {
      icon: <ShieldCheck size={36} className="text-purple-500" />,
      title: 'بيئة آمنة وموثوقة',
      desc: 'نظام حماية متكامل يضمن خصوصية وسرية بيانات الطلبة بالكامل.',
      glow: 'rgba(139, 92, 246, 0.03)'
    }
  ];

  return (
    <section className="section bg-white overflow-hidden relative">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* About Us (من نحن) */}
          <FadeIn direction="right">
            <div>
              <span className="text-secondary font-bold mb-2 block text-sm uppercase tracking-wider">من نحن</span>
              <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight text-gray-900">
                مرماز أكاديمي: 
                <br/>
                <span className="text-primary">بوابتك الرقمية للتفوق</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                نحن منصة تعليمية عراقية رائدة تسعى لإحداث ثورة في قطاع التعليم الرقمي. نجمع بين نخبة من أفضل الكفاءات التدريسية في العراق وأحدث التقنيات التفاعلية لنقدم تجربة تعليمية لا مثيل لها تضمن لطلابنا التفوق والنجاح المتميز.
              </p>
              
              <div className="flex gap-4 mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">المركز الأول</h4>
                    <span className="text-xs text-gray-500">في التعليم الإلكتروني</span>
                  </div>
                </div>
              </div>

              <Button variant="primary">اكتشف قصتنا</Button>
            </div>
          </FadeIn>

          {/* Why Mirmaz (لماذا مرماز الأفضل) */}
          <FadeIn direction="left" delay={0.2}>
            <div className="bg-surface p-8 rounded-3xl border border-gray-100">
              <h3 className="text-2xl font-bold mb-8 text-gray-900 border-b border-gray-200 pb-4">لماذا مرماز الخيار الأفضل؟</h3>
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <StaggerItem key={index}>
                    <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow" style={{ backgroundColor: feature.glow }}>
                      <div className="mb-4">
                        {feature.icon}
                      </div>
                      <h4 className="font-bold mb-2 text-gray-800">{feature.title}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default Identity;
