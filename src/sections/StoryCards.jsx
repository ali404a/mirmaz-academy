import React from 'react';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/MotionWrapper';
import Card from '../components/Card';
import { Target, Lightbulb, ShieldCheck, Award } from 'lucide-react';

const StoryCards = () => {
  const stories = [
    {
      icon: <Lightbulb size={28} className="text-primary" />,
      title: 'رؤيتنا الطموحة',
      desc: 'نسعى لقيادة التحول التعليمي في العراق، عبر توفير بيئة تعليمية ذكية ومتطورة تتجاوز الحواجز الجغرافية والتقليدية.'
    },
    {
      icon: <Target size={28} className="text-secondary" />,
      title: 'رسالة مرماز',
      desc: 'تمكين الطالب العراقي من تحقيق التميز الدراسي عبر ربطه بأقوى الكفاءات التدريسية، وتطبيق أحدث تقنيات التعليم الرقمي.'
    },
    {
      icon: <ShieldCheck size={28} className="text-emerald-500" />,
      title: 'الجودة والأمان',
      desc: 'نضمن تجربة دراسية آمنة ومتكاملة، مع محتوى مصمم بدقة عالية ومتابعة دورية تضمن أعلى مستويات الفهم والتحصيل.'
    },
    {
      icon: <Award size={28} className="text-purple-500" />,
      title: 'قصة النجاح',
      desc: 'منذ انطلاقنا، نجحنا في بناء شبكة تغطي كافة محافظات العراق، لتصبح مرماز اليوم شريك التفوق للآلاف من الطلبة الأوائل.'
    }
  ];

  return (
    <section className="section section-bg-light">
      <div className="container">
        
        <FadeIn y={30}>
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-secondary font-bold mb-2 text-sm uppercase tracking-wider">من نحن</span>
            <h2 className="section-title">الهوية التعليمية لمرماز</h2>
            <p className="section-subtitle">
              نحن لا نقدم دروساً رقمية فحسب، بل نبني منظومة متكاملة تدعم الطالب في كل خطوة من رحلته الدراسية.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="story-grid">
          {stories.map((story, index) => (
            <StaggerItem key={index} y={30}>
              <Card className="h-full flex flex-col p-8 border-none bg-white hover:border-b-4 hover:border-b-primary">
                <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center mb-6">
                  {story.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{story.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {story.desc}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
};

export default StoryCards;
