import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Menu, ChevronDown, BookOpen, MonitorPlay, Users, Award } from 'lucide-react';
import Button from '../components/Button';

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
        {/* Logo */}
        <Link to="/" className="header-logo">
          <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 50 L50 70 L80 50 M20 70 A30 30 0 0 1 50 30 A30 30 0 0 1 80 70" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M35 40 L50 50 L65 40" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>مرماز أكاديمي</span>
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
              <div className="absolute top-[100%] right-0 w-[600px] bg-white text-gray-900 shadow-xl rounded-2xl p-6 grid grid-cols-2 gap-4 border border-gray-100">
                <div>
                  <h3 className="font-bold text-primary mb-4 flex items-center gap-2"><BookOpen size={18}/> المراحل الدراسية</h3>
                  <ul className="space-y-2">
                    <li><Link to="/dept/3rd-inter" className="hover:text-primary transition-colors">الثالث متوسط</Link></li>
                    <li><Link to="/dept/6th-prep" className="hover:text-primary transition-colors">السادس الإعدادي</Link></li>
                    <li><Link to="/dept/science" className="hover:text-primary transition-colors">الفرع العلمي</Link></li>
                    <li><Link to="/dept/arts" className="hover:text-primary transition-colors">الفرع الأدبي</Link></li>
                    <li><Link to="/dept/vocational" className="hover:text-primary transition-colors">المهني</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-4 flex items-center gap-2"><MonitorPlay size={18}/> تطوير المهارات</h3>
                  <ul className="space-y-2">
                    <li><Link to="/dept/university" className="hover:text-primary transition-colors">الجامعات</Link></li>
                    <li><Link to="/dept/english" className="hover:text-primary transition-colors">اللغة الإنجليزية</Link></li>
                    <li><Link to="/dept/programming" className="hover:text-primary transition-colors">البرمجة</Link></li>
                    <li><Link to="/dept/ai" className="hover:text-primary transition-colors">الذكاء الاصطناعي</Link></li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Teachers Mega Menu */}
          <div 
            className="nav-link py-6"
            onMouseEnter={() => handleMenuHover('teachers')}
          >
            الأساتذة <ChevronDown size={16} />
            {activeMenu === 'teachers' && (
              <div className="absolute top-[100%] right-1/4 w-[300px] bg-white text-gray-900 shadow-xl rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-4 flex items-center gap-2"><Users size={18}/> حسب المادة</h3>
                <ul className="space-y-2">
                  <li><Link to="/teachers/math" className="hover:text-primary transition-colors">الرياضيات</Link></li>
                  <li><Link to="/teachers/physics" className="hover:text-primary transition-colors">الفيزياء</Link></li>
                  <li><Link to="/teachers/chemistry" className="hover:text-primary transition-colors">الكيمياء</Link></li>
                  <li><Link to="/teachers/biology" className="hover:text-primary transition-colors">الأحياء</Link></li>
                  <li><Link to="/teachers/arabic" className="hover:text-primary transition-colors">اللغة العربية</Link></li>
                </ul>
              </div>
            )}
          </div>

          <div className="nav-link py-6">
            الدورات
          </div>
          
          <div 
            className="nav-link py-6"
            onMouseEnter={() => handleMenuHover('campaigns')}
          >
            الكامبينات <ChevronDown size={16} />
            {activeMenu === 'campaigns' && (
              <div className="absolute top-[100%] left-1/4 w-[300px] bg-white text-gray-900 shadow-xl rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-4 flex items-center gap-2"><Award size={18}/> عروض مرماز</h3>
                <ul className="space-y-2">
                  <li><Link to="/campaigns/current" className="hover:text-primary transition-colors">العروض الحالية</Link></li>
                  <li><Link to="/campaigns/sales" className="hover:text-primary transition-colors">التخفيضات</Link></li>
                  <li><Link to="/campaigns/competitions" className="hover:text-primary transition-colors">المسابقات</Link></li>
                  <li><Link to="/campaigns/prizes" className="hover:text-primary transition-colors">الجوائز</Link></li>
                </ul>
              </div>
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
