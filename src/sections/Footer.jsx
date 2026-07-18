import React from 'react';
import { Link } from 'react-router-dom';
import logoWhite from '../assets/logo_white.png';
import logoMWhite from '../assets/logo_m_white.png';
import Ticker from '../components/Ticker';

const Footer = () => {
  return (
    <>
      {/* Ticker strip above footer */}
      <Ticker dark />

      {/* Subscribe Section */}
      <section className="subscribe-section">
        <div className="container subscribe-inner">
          <div className="subscribe-logo">
            <img src={logoMWhite} alt="مرماز" />
          </div>
          <div className="subscribe-text">
            <h3>اشترك في نشرتنا</h3>
            <p>كن أول من يعلم بأحدث العروض والدورات الجديدة من مرماز أكاديمي.</p>
          </div>
          <div className="subscribe-form">
            <input type="email" placeholder="بريدك الإلكتروني" />
            <button>اشتراك</button>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <img src={logoWhite} alt="مرماز أكاديمي" style={{ height: '50px' }} />
              <p>
                منصة تعليمية عراقية رائدة تجمع بين أفضل الكفاءات التدريسية 
                وأحدث التقنيات التفاعلية لتحقيق التفوق الأكاديمي.
              </p>
            </div>
            <div className="footer-col">
              <h4>الأقسام</h4>
              <Link to="/dept/3rd">الثالث متوسط</Link>
              <Link to="/dept/6th">السادس الإعدادي</Link>
              <Link to="/dept/science">الفرع العلمي</Link>
              <Link to="/dept/arts">الفرع الأدبي</Link>
            </div>
            <div className="footer-col">
              <h4>روابط سريعة</h4>
              <Link to="/about">من نحن</Link>
              <Link to="/teachers">الأساتذة</Link>
              <Link to="/campaigns">الكامبينات</Link>
              <Link to="/pos">نقاط البيع</Link>
            </div>
            <div className="footer-col">
              <h4>تواصل معنا</h4>
              <Link to="/contact">الدعم الفني</Link>
              <Link to="/contact">المبيعات</Link>
              <Link to="/contact">فروعنا</Link>
              <a href="mailto:info@mirmaz.com">info@mirmaz.com</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2025 مرماز أكاديمي. جميع الحقوق محفوظة.</span>
            <span>صُنع بـ ❤️ في العراق</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
