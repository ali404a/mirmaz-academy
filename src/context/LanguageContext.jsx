import React, { createContext, useState, useEffect, useContext } from 'react';

const translations = {
  // Navigation
  "الرئيسية": "Home",
  "من نحن": "About Us",
  "الأقسام": "Departments",
  "الأساتذة": "Teachers",
  "الدورات": "Courses",
  "الكامبينات": "Campaigns",
  "اتصل بنا": "Contact Us",
  "نقاط البيع": "Points of Sale",

  // Navigation Dropdowns
  "الثالث متوسط": "Third Intermediate",
  "السادس الإعدادي": "Sixth Preparatory",
  "الفرع العلمي": "Science Branch",
  "الفرع الأدبي": "Arts Branch",
  "اللغة الإنجليزية": "English Language",
  "الرياضيات": "Mathematics",
  "الفيزياء": "Physics",
  "الكيمياء": "Chemistry",
  "الأحياء": "Biology",
  "اللغة العربية": "Arabic Language",
  "الدعم الفني": "Technical Support",
  "المبيعات والتسجيل": "Sales & Registration",
  "فروعنا": "Our Branches",

  // Section titles
  "أرقام وإنجازات نفخر بها": "Numbers & Achievements We Are Proud Of",
  "أساتذة مرماز": "Mirmaz Teachers",
  "شركاؤنا": "Our Partners",
  "الحملات الإعلانية": "Advertising Campaigns",
  "أحدث الكامبينات": "Latest Campaigns",

  // Buttons
  "ابدأ رحلتك الآن": "Start Your Journey Now",
  "اكتشف المزيد": "Discover More",
  "عرض التفاصيل": "View Details",
  "إرسال": "Send",
  "اشتراك": "Subscribe",
  "عربي": "Arabic",
  "EN": "EN",
  "بحث": "Search",
};

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ar');

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'ar' ? 'en' : 'ar'));
  };

  useEffect(() => {
    document.documentElement.dir = language === 'en' ? 'ltr' : 'rtl';
    // Optional: add a class to body for global styling based on language
    if (language === 'en') {
      document.body.classList.add('en');
    } else {
      document.body.classList.remove('en');
    }
  }, [language]);

  const t = (text) => {
    if (language === 'en' && translations[text]) {
      return translations[text];
    }
    return text;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
