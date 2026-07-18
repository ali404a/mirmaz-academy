import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Menu, ChevronDown } from 'lucide-react';
import Button from '../components/Button';
import { FadeIn } from '../components/MotionWrapper';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'solid' : 'transparent'}`}>
      <div className="container header-container">
        {/* Logo */}
        <Link to="/" className="header-logo">
          {/* Logo Placeholder (M shape) */}
          <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 50 L50 70 L80 50 M20 70 A30 30 0 0 1 50 30 A30 30 0 0 1 80 70" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M35 40 L50 50 L65 40" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>مرماز أكاديمي</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="header-nav">
          <Link to="/" className="nav-link">الرئيسية</Link>
          <Link to="/experience" className="nav-link">عن مرماز</Link>
          <div className="nav-link">
            الأقسام <ChevronDown size={16} />
          </div>
          <div className="nav-link">
            الأساتذة <ChevronDown size={16} />
          </div>
          <div className="nav-link">
            الدورات <ChevronDown size={16} />
          </div>
          <div className="nav-link">
            الكامبينات <ChevronDown size={16} />
          </div>
          <Link to="/pos" className="nav-link">نقاط البيع</Link>
        </nav>

        {/* Actions */}
        <div className="header-actions">
          <button className="btn-text" style={{ color: 'inherit' }} aria-label="بحث">
            <Search size={20} />
          </button>
          <Button variant={isScrolled ? 'primary' : 'outline'} icon={<User size={18} />}>
            تسجيل الدخول
          </Button>
          {/* Mobile Menu Toggle */}
          <button className="btn-text lg:hidden" style={{ color: 'inherit', display: 'lg:none' }}>
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
