import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/MotionWrapper';
import Card from '../components/Card';
import { Target, Lightbulb, ShieldCheck, TrendingUp } from 'lucide-react';

const StoryCards = () => {
  const stories = [
    {
      icon: <Lightbulb size={32} className="text-primary" />,
      title: 'رؤيتنا',
      desc: 'أن نكون المنصة التعليمية الرقمية الأولى في العراق التي تقود التحول نحو تعليم ذكي، متاح للجميع، وبجودة تضاهي المعايير العالمية.'
    },
    {
      icon: <Target size={32} className="text-secondary" />,
      title: 'رسالتنا',
      desc: 'توفير بيئة تعليمية تفاعلية تجمع نخبة الأساتذة مع أحدث تقنيات التعليم لبناء جيل قادر على تحقيق التميز الأكاديمي.'
    },
    {
      icon: <ShieldCheck size={32} className="text-emerald-500" />,
      title: 'لماذا مرماز؟',
      desc: 'لأننا لا نقدم مجرد دروس، بل نصنع تجربة متكاملة تشمل المتابعة، التقييم، والاختبارات الذكية لضمان تفوق الطالب.'
    },
    {
      icon: <TrendingUp size={32} className="text-purple-500" />,
      title: 'رحلة النجاح',
      desc: 'بدأنا بفكرة بسيطة واليوم نفخر بتخريج آلاف الطلاب الأوائل، وتغطية جميع محافظات العراق بكادر تعليمي متميز.'
    }
  ];

  return (
    <section className="section section-bg-light overflow-hidden">
      <div className="container">
        <FadeIn y={30}>
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-secondary font-bold mb-2">عن المنصة</span>
            <h2 className="section-title">من هي مرماز؟</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              قصة طموح بدأت من العراق لتغيير واقع التعليم الرقمي وتقديم تجربة تليق بطموحات طلابنا.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stories.map((story, index) => (
            <StaggerItem key={index} y={50}>
              <Card className="h-full flex flex-col items-center text-center p-8 border-t-4 border-t-transparent hover:border-t-primary">
                <div className="w-16 h-16 rounded-2xl bg-surface flex items-center justify-center mb-6">
                  {story.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{story.title}</h3>
                <p className="text-muted leading-relaxed text-sm">
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
