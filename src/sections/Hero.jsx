import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowLeft } from 'lucide-react';
import Button from '../components/Button';
import { StaggerContainer, StaggerItem, FadeIn } from '../components/MotionWrapper';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        
        {/* Left Content */}
        <div className="hero-content">
          <StaggerContainer delayChildren={0.2} staggerChildren={0.15}>
            <StaggerItem>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white mb-4">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span className="font-semibold text-sm">المنصة التعليمية الأولى في العراق</span>
              </div>
            </StaggerItem>
            
            <StaggerItem>
              <h1 className="hero-title">
                مستقبل التعليم <br /> يبدأ من هنا.
              </h1>
            </StaggerItem>
            
            <StaggerItem>
              <p className="hero-description">
                نحن في مرماز لا نقدم دروساً فقط... بل نبني رحلة تعليمية متكاملة يقودها نخبة أساتذة العراق عبر تجربة رقمية حديثة.
              </p>
            </StaggerItem>
            
            <StaggerItem>
              <div className="hero-buttons">
                <Button variant="primary" size="large" icon={<ArrowLeft size={20} />}>
                  ابدأ التعلم
                </Button>
                <Button variant="outline" size="large" icon={<Play size={20} fill="currentColor" />}>
                  استكشف الأقسام
                </Button>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>

        {/* Right Visual */}
        <FadeIn delay={0.4} duration={0.8} className="hero-visual">
          {/* Main Hero Image Placeholder */}
          <div className="hero-main-image bg-white/5 backdrop-blur-sm flex items-center justify-center relative overflow-hidden">
            {/* We can use a generated image here later, for now just a nice gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light opacity-50 mix-blend-overlay"></div>
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="طُلاب مرماز"
              className="w-full h-full object-cover mix-blend-luminosity opacity-80"
            />
          </div>

          {/* Floating Cards */}
          <motion.div 
            animate={{ y: [0, -15, 0] }} 
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="floating-card float-1"
          >
            <span className="floating-card-title">120K+</span>
            <span className="floating-card-subtitle">طالب وطالبة</span>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 20, 0] }} 
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="floating-card float-2"
          >
            <span className="floating-card-title">150+</span>
            <span className="floating-card-subtitle">أستاذ خبير</span>
          </motion.div>

          <motion.div 
            animate={{ y: [0, -10, 0] }} 
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
            className="floating-card float-3"
          >
            <span className="floating-card-title">18</span>
            <span className="floating-card-subtitle">محافظة</span>
          </motion.div>
        </FadeIn>

      </div>
    </section>
  );
};

export default Hero;
