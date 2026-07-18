import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Menu, ChevronDown, BookOpen, MonitorPlay, Users, Award } from 'lucide-react';
import Button from '../components/Button';
import logoBlue from '../assets/logo_blue.png';
import logoWhite from '../assets/logo_white.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuHover = (menu) => {
    setActiveMenu(menu);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  return (
    <header className={`header ${isScrolled || activeMenu ? 'solid' : 'transparent'}`} onMouseLeave={handleMenuLeave}>
      <div className="container header-container">
        
        {/* Logo Image */}
        <Link to="/" className="header-logo">
          <img 
            src={isScrolled || activeMenu ? logoBlue : logoWhite} 
            alt="مرماز أكاديمي" 
            style={{ height: '40px', objectFit: 'contain' }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="header-nav relative h-full">
          <Link to="/" className="nav-link py-6">الرئيسية</Link>
          <Link to="/experience" className="nav-link py-6">عن مرماز</Link>
          
          {/* Departments Mega Menu */}
          <div 
            className="nav-link py-6"
            onMouseEnter={() => handleMenuHover('departments')}
          >
            الأقسام <ChevronDown size={16} />
            {activeMenu === 'departments' && (
              <div className="mega-menu">
                <div>
                  <h3><BookOpen size={16}/> المراحل الدراسية</h3>
                  <ul>
                    <li><Link to="/dept/3rd-inter">الثالث متوسط</Link></li>
                    <li><Link to="/dept/6th-prep">السادس الإعدادي</Link></li>
                    <li><Link to="/dept/science">الفرع العلمي</Link></li>
                    <li><Link to="/dept/arts">الفرع الأدبي</Link></li>
                    <li><Link to="/dept/vocational">المهني</Link></li>
                  </ul>
                </div>
                <div>
                  <h3><MonitorPlay size={16}/> تطوير المهارات</h3>
                  <ul>
                    <li><Link to="/dept/university">الجامعات</Link></li>
                    <li><Link to="/dept/english">اللغة الإنجليزية</Link></li>
                    <li><Link to="/dept/programming">البرمجة</Link></li>
                    <li><Link to="/dept/ai">الذكاء الاصطناعي</Link></li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Teachers Dropdown */}
          <div 
            className="nav-link py-6"
            onMouseEnter={() => handleMenuHover('teachers')}
          >
            الأساتذة <ChevronDown size={16} />
            {activeMenu === 'teachers' && (
              <ul className="dropdown-menu">
                <li><Link to="/teachers/math">الرياضيات</Link></li>
                <li><Link to="/teachers/physics">الفيزياء</Link></li>
                <li><Link to="/teachers/chemistry">الكيمياء</Link></li>
                <li><Link to="/teachers/biology">الأحياء</Link></li>
                <li><Link to="/teachers/arabic">اللغة العربية</Link></li>
              </ul>
            )}
          </div>

          <div className="nav-link py-6">
            الدورات
          </div>
          
          {/* Campaigns Dropdown */}
          <div 
            className="nav-link py-6"
            onMouseEnter={() => handleMenuHover('campaigns')}
          >
            الكامبينات <ChevronDown size={16} />
            {activeMenu === 'campaigns' && (
              <ul className="dropdown-menu">
                <li><Link to="/campaigns/current">العروض الحالية</Link></li>
                <li><Link to="/campaigns/sales">التخفيضات</Link></li>
                <li><Link to="/campaigns/competitions">المسابقات</Link></li>
                <li><Link to="/campaigns/prizes">الجوائز</Link></li>
              </ul>
            )}
          </div>

          <Link to="/pos" className="nav-link py-6">نقاط البيع</Link>
        </nav>

        {/* Actions */}
        <div className="header-actions">
          <button className="btn-text" style={{ color: 'inherit' }} aria-label="بحث">
            <Search size={20} />
          </button>
          <Button variant={isScrolled || activeMenu ? 'primary' : 'outline'} icon={<User size={18} />}>
            تسجيل الدخول
          </Button>
          <button className="btn-text" style={{ color: 'inherit', display: 'block' }}>
            <Menu size={24} className="lg:hidden" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
