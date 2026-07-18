import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowLeft, Award, Sparkles } from 'lucide-react';
import Button from '../components/Button';
import { StaggerContainer, StaggerItem, FadeIn } from '../components/MotionWrapper';
import heroBanner from '../assets/hero_banner.jpg';

const Hero = () => {
  return (
    <section className="hero">
      {/* Decorative Glow Backgrounds */}
      <div className="glow-bg glow-blue" style={{ top: '10%', right: '5%' }}></div>
      <div className="glow-bg glow-orange" style={{ bottom: '15%', left: '10%' }}></div>

      <div className="container hero-container">
        
        {/* Left Content (Text) */}
        <div className="hero-content">
          <StaggerContainer delayChildren={0.1} staggerChildren={0.1}>
            <StaggerItem>
              <div className="hero-badge">
                <Sparkles size={16} className="text-secondary" />
                <span>المنصة التعليمية الأكبر والأكثر ثقة في العراق</span>
              </div>
            </StaggerItem>
            
            <StaggerItem>
              <h1 className="hero-title">
                مستقبل التعليم <br /> <span>يبدأ من هنا.</span>
              </h1>
            </StaggerItem>
            
            <StaggerItem>
              <p className="hero-description">
                نحن في مرماز لا نقدم دروساً تقليدية... بل نصنع رحلة تميز أكاديمي متكاملة يقودها نخبة أساتذة العراق لتأهيلك للنجاح والتفوق عبر بيئة تعليمية ذكية.
              </p>
            </StaggerItem>
            
            <StaggerItem>
              <div className="hero-buttons">
                <Button variant="primary" size="large" icon={<ArrowLeft size={18} />}>
                  ابدأ مسيرتك التعليمية
                </Button>
                <Button variant="outline" size="large" icon={<Play size={18} fill="currentColor" />}>
                  استكشف المواد والدورات
                </Button>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>

        {/* Right Content (Visual representation) */}
        <div className="hero-visual">
          <FadeIn delay={0.3} duration={0.8} className="w-full flex justify-center">
            <div className="hero-main-wrapper">
              <img 
                src={heroBanner} 
                alt="مرماز أكاديمي - المستقبل الذكي"
                className="hero-main-image"
              />
            </div>
          </FadeIn>

          {/* Floating UI Elements */}
          <motion.div 
            animate={{ y: [0, -10, 0] }} 
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="floating-card float-1"
          >
            <span className="floating-card-title">+120K</span>
            <span className="floating-card-subtitle">طالب متفوق</span>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 15, 0] }} 
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
            className="floating-card float-2"
          >
            <span className="floating-card-title">+150</span>
            <span className="floating-card-subtitle">أستاذ خبير</span>
          </motion.div>

          <motion.div 
            animate={{ y: [0, -8, 0] }} 
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1 }}
            className="floating-card float-3"
          >
            <span className="floating-card-title">18</span>
            <span className="floating-card-subtitle">محافظة عراقية</span>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
