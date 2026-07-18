import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2 text-2xl font-black text-white">
              <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 50 L50 70 L80 50 M20 70 A30 30 0 0 1 50 30 A30 30 0 0 1 80 70" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M35 40 L50 50 L65 40" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>مرماز أكاديمي</span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              المنصة التعليمية الأولى في العراق، نبني رحلة تعليمية متكاملة يقودها نخبة أساتذة العراق عبر تجربة رقمية حديثة.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-xs">FB</a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-xs">X</a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-xs">IG</a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-xs">YT</a>
            </div>
          </div>

          {/* Column 2: Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b-2 border-primary pb-2 inline-block">روابط سريعة</h3>
            <ul className="flex flex-col gap-4">
              <li><Link to="/experience" className="text-gray-400 hover:text-white transition-colors">عن المنصة</Link></li>
              <li><Link to="/courses" className="text-gray-400 hover:text-white transition-colors">الدورات</Link></li>
              <li><Link to="/teachers" className="text-gray-400 hover:text-white transition-colors">الأساتذة</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">المدونة</Link></li>
              <li><Link to="/campaigns" className="text-gray-400 hover:text-white transition-colors">الكامبينات</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal & Support */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b-2 border-primary pb-2 inline-block">الدعم الفني</h3>
            <ul className="flex flex-col gap-4">
              <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">الشروط والأحكام</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">سياسة الخصوصية</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">الوظائف</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">الأسئلة الشائعة</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">تواصل معنا</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b-2 border-primary pb-2 inline-block">تواصل معنا</h3>
            <ul className="flex flex-col gap-4 mb-6">
              <li className="flex items-center gap-3 text-gray-400">
                <MapPin size={20} className="text-secondary"/>
                <span>العراق، بغداد، شارع فلسطين</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={20} className="text-secondary"/>
                <span dir="ltr">+964 770 123 4567</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={20} className="text-secondary"/>
                <span>info@mirmaz.com</span>
              </li>
            </ul>
            
            <div className="bg-white/5 p-4 rounded-xl">
              <h4 className="font-bold mb-2">النشرة البريدية</h4>
              <p className="text-sm text-gray-400 mb-3">اشترك ليصلك كل جديد</p>
              <div className="flex">
                <input type="email" placeholder="البريد الإلكتروني" className="bg-white/10 text-white border-none rounded-r-lg px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-primary" />
                <button className="bg-primary text-white px-4 py-2 rounded-l-lg hover:bg-primary-light transition-colors">اشتراك</button>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} مرماز أكاديمي. جميع الحقوق محفوظة.</p>
          <div className="flex gap-4">
            <span>صُنع بشغف في العراق 🇮🇶</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
