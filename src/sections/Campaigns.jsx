import React from 'react';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/MotionWrapper';
import Button from '../components/Button';
import { Calendar, Users, ArrowLeft } from 'lucide-react';

const Campaigns = () => {
  const campaigns = [
    {
      id: 1,
      title: 'الخصم الذهبي للسادس الإعدادي',
      desc: 'سجل الآن في الباقة المتكاملة للسادس الإعدادي واحصل على خصم 30% مع الملازم مجاناً حتى باب بيتك.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tag: 'تخفيضات البكالوريا',
      daysLeft: '3 أيام متبقية',
      enrolled: '450 طالب مسجل'
    },
    {
      id: 2,
      title: 'مسابقة أوائل مرماز الوطنية',
      desc: 'شارك في الاختبار الوطني الشامل واربح جوائز قيمة تشمل أجهزة تابلت ولابتوبات للطلبة الأوائل.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tag: 'مسابقات وطنية',
      daysLeft: '7 أيام متبقية',
      enrolled: '1.2K مشارك'
    },
    {
      id: 3,
      title: 'باقة الإخوة والعائلة التضامنية',
      desc: 'خصم عائلي خاص ومستمر عند تسجيل أكثر من طالب من نفس العائلة في أي من دورات مرماز.',
      image: 'https://images.unsplash.com/photo-1511629091441-ee46146481b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tag: 'باقات عائلية',
      daysLeft: 'عرض مستمر',
      enrolled: '80+ عائلة مستفيدة'
    }
  ];

  return (
    <section className="section bg-surface border-y border-gray-100">
      <div className="container">
        
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-secondary font-bold mb-2 block text-sm uppercase tracking-wider">الحملات الترويجية</span>
            <h2 className="section-title">أحدث الكامبينات والعروض</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              عروض حصرية ومسابقات وطنية مخصصة لدعم تفوق ونجاح الطلاب في العراق.
            </p>
          </div>
        </FadeIn>

        {/* 3-Column Responsive Grid Layout (Neat & Balanced) */}
        <StaggerContainer className="campaign-grid">
          {campaigns.map((camp, index) => (
            <StaggerItem key={camp.id}>
              <div className="campaign-card-new">
                
                {/* Visual Image & Floating tag */}
                <div className="campaign-card-img">
                  <span className="campaign-card-tag-new">{camp.tag}</span>
                  <img src={camp.image} alt={camp.title} />
                </div>

                {/* Details Body */}
                <div className="campaign-card-body">
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{camp.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">{camp.desc}</p>
                  </div>
                  
                  <div>
                    {/* Marketing Details Bar */}
                    <div className="campaign-card-meta">
                      <div className="campaign-meta-item">
                        <Calendar size={14} className="text-primary" />
                        <span>{camp.daysLeft}</span>
                      </div>
                      <div className="campaign-meta-item">
                        <Users size={14} className="text-secondary" />
                        <span>{camp.enrolled}</span>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full mt-4" icon={<ArrowLeft size={16}/>}>
                      عرض التفاصيل
                    </Button>
                  </div>
                </div>

              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
};

export default Campaigns;
