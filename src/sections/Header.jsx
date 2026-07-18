import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Globe, Menu, ChevronDown, X } from 'lucide-react';
import logoWhite from '../assets/logo_white.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [lang, setLang] = useState('AR');
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
          <img src={logoWhite} alt="مرماز أكاديمي" />
        </Link>

        <nav className="header-nav">
          <div className="nav-item active">الرئيسية</div>
          <div className="nav-item">من نحن</div>

          <div className="nav-item" onMouseEnter={() => setActiveMenu('dept')} onMouseLeave={() => setActiveMenu(null)}>
            الأقسام <ChevronDown size={14} />
            {activeMenu === 'dept' && (
              <div className="nav-dropdown">
                <Link to="/dept/3rd">الثالث متوسط</Link>
                <Link to="/dept/6th">السادس الإعدادي</Link>
                <Link to="/dept/science">الفرع العلمي</Link>
                <Link to="/dept/arts">الفرع الأدبي</Link>
                <Link to="/dept/english">اللغة الإنجليزية</Link>
              </div>
            )}
          </div>

          <div className="nav-item" onMouseEnter={() => setActiveMenu('teachers')} onMouseLeave={() => setActiveMenu(null)}>
            الأساتذة <ChevronDown size={14} />
            {activeMenu === 'teachers' && (
              <div className="nav-dropdown">
                <Link to="/teachers/math">الرياضيات</Link>
                <Link to="/teachers/physics">الفيزياء</Link>
                <Link to="/teachers/chemistry">الكيمياء</Link>
                <Link to="/teachers/biology">الأحياء</Link>
                <Link to="/teachers/arabic">اللغة العربية</Link>
              </div>
            )}
          </div>

          <div className="nav-item">الدورات</div>
          <div className="nav-item">الكامبينات</div>

          <div className="nav-item" onMouseEnter={() => setActiveMenu('contact')} onMouseLeave={() => setActiveMenu(null)}>
            اتصل بنا <ChevronDown size={14} />
            {activeMenu === 'contact' && (
              <div className="nav-dropdown">
                <Link to="/contact/support">الدعم الفني</Link>
                <Link to="/contact/sales">المبيعات والتسجيل</Link>
                <Link to="/contact/branches">فروعنا</Link>
              </div>
            )}
          </div>
        </nav>

        <div className="header-actions">
          <button className="btn-icon-circle" aria-label="بحث">
            <Search size={18} />
          </button>
          <button className="btn-pill btn-pill-primary" onClick={() => setLang(lang === 'AR' ? 'EN' : 'AR')}>
            <Globe size={16} />
            {lang === 'AR' ? 'EN' : 'عربي'}
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
