import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Globe, Menu, ChevronDown, X } from 'lucide-react';
import logoWhite from '../assets/logo_white.png';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const { language, toggleLanguage, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        
        <Link to="/" className="header-logo">
          <img src={logoWhite} alt={t("مرماز أكاديمي")} style={{ height: '85px' }} />
        </Link>

        <nav className="header-nav">
          <div className="nav-item active">{t("الرئيسية")}</div>
          <div className="nav-item">{t("من نحن")}</div>

          <div className="nav-item" onMouseEnter={() => setActiveMenu('dept')} onMouseLeave={() => setActiveMenu(null)}>
            {t("الأقسام")} <ChevronDown size={14} />
            {activeMenu === 'dept' && (
              <div className="nav-dropdown">
                <Link to="/dept/3rd">{t("الثالث متوسط")}</Link>
                <Link to="/dept/6th">{t("السادس الإعدادي")}</Link>
                <Link to="/dept/science">{t("الفرع العلمي")}</Link>
                <Link to="/dept/arts">{t("الفرع الأدبي")}</Link>
                <Link to="/dept/english">{t("اللغة الإنجليزية")}</Link>
              </div>
            )}
          </div>

          <div className="nav-item" onMouseEnter={() => setActiveMenu('teachers')} onMouseLeave={() => setActiveMenu(null)}>
            {t("الأساتذة")} <ChevronDown size={14} />
            {activeMenu === 'teachers' && (
              <div className="nav-dropdown">
                <Link to="/teachers/math">{t("الرياضيات")}</Link>
                <Link to="/teachers/physics">{t("الفيزياء")}</Link>
                <Link to="/teachers/chemistry">{t("الكيمياء")}</Link>
                <Link to="/teachers/biology">{t("الأحياء")}</Link>
                <Link to="/teachers/arabic">{t("اللغة العربية")}</Link>
              </div>
            )}
          </div>

          <div className="nav-item">{t("الدورات")}</div>
          <div className="nav-item">{t("الكامبينات")}</div>

          <div className="nav-item" onMouseEnter={() => setActiveMenu('contact')} onMouseLeave={() => setActiveMenu(null)}>
            {t("اتصل بنا")} <ChevronDown size={14} />
            {activeMenu === 'contact' && (
              <div className="nav-dropdown">
                <Link to="/contact/support">{t("الدعم الفني")}</Link>
                <Link to="/contact/sales">{t("المبيعات والتسجيل")}</Link>
                <Link to="/contact/branches">{t("فروعنا")}</Link>
              </div>
            )}
          </div>
        </nav>

        <div className="header-actions">
          <button className="btn-icon-circle" aria-label={t("بحث")}>
            <Search size={18} />
          </button>
          <button className="btn-pill btn-pill-primary" onClick={toggleLanguage}>
            <Globe size={16} />
            {language === 'ar' ? 'EN' : 'عربي'}
          </button>
          <button className="btn-icon-circle" onClick={() => setMobileOpen(!mobileOpen)} style={{ display: 'none' }}>
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
