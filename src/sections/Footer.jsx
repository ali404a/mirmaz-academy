import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="premium-footer">
      <div className="container">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="header-logo" style={{ color: 'white' }}>
              <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 50 L50 70 L80 50 M20 70 A30 30 0 0 1 50 30 A30 30 0 0 1 80 70" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M35 40 L50 50 L65 40" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-extrabold">مرماز أكاديمي</span>
            </Link>
            
            <p className="text-sm leading-relaxed">
              المنصة التعليمية الأكبر والأكثر تكاملاً في العراق. نسعى لبناء رحلة نجاح حقيقية لكل طالب عبر نخبة تدريسية متميزة.
            </p>

            <div className="flex gap-3">
              <a href="#" className="footer-social-icon" aria-label="Facebook">FB</a>
              <a href="#" className="footer-social-icon" aria-label="Telegram">TG</a>
              <a href="#" className="footer-social-icon" aria-label="Instagram">IG</a>
              <a href="#" className="footer-social-icon" aria-label="YouTube">YT</a>
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h3>روابط سريعة</h3>
            <ul className="flex flex-col gap-3">
              <li><Link to="/experience" className="footer-link">عن الأكاديمية</Link></li>
              <li><Link to="/courses" className="footer-link">جميع الدورات</Link></li>
              <li><Link to="/teachers" className="footer-link">نخبة الأساتذة</Link></li>
              <li><Link to="/campaigns" className="footer-link">عروض الكامبينات</Link></li>
              <li><Link to="/blog" className="footer-link">مدونة مرماز</Link></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h3>الدعم الفني والوكلاء</h3>
            <ul className="flex flex-col gap-3">
              <li><Link to="/pos" className="footer-link">مراكز بيع البطاقات</Link></li>
              <li><Link to="/faq" className="footer-link">الأسئلة الشائعة</Link></li>
              <li><Link to="/terms" className="footer-link">شروط الاستخدام</Link></li>
              <li><Link to="/privacy" className="footer-link">سياسة الخصوصية</Link></li>
              <li><Link to="/contact" className="footer-link">اتصل بنا</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="flex flex-col gap-4">
            <h3>تواصل معنا</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-secondary flex-shrink-0" />
                <span>العراق، بغداد، الجادرية</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-secondary flex-shrink-0" />
                <span dir="ltr">+964 770 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-secondary flex-shrink-0" />
                <span>contact@mirmaz.edu</span>
              </li>
            </ul>

            <div className="mt-4">
              <span className="text-xs font-bold block mb-2 opacity-80">اشترك لمعرفة آخر العروض والأخبار</span>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="بريدك الإلكتروني" 
                  className="newsletter-input"
                />
                <button className="btn-secondary" style={{ padding: '0 1rem', borderRadius: 'var(--radius-sm)' }} aria-label="اشترك">
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-60">
          <p>© {new Date().getFullYear()} مرماز أكاديمي. جميع الحقوق محفوظة.</p>
          <p>صنع بفخر واحترافية في العراق 🇮🇶</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
