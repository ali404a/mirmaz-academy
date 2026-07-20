import os
import re

dir_path = "/Users/alialmurtadh/.gemini/antigravity/scratch/mirmaz-academy/"
index_file = os.path.join(dir_path, "index.html")

with open(index_file, "r", encoding="utf-8") as f:
    lines = f.readlines()

header_part = "".join(lines[0:276])
footer_part = "".join(lines[730:760])
bottom_part = "".join(lines[1153:])

about_html = f"""{header_part}
<main class="main" style="padding-top: 100px;">
  <section class="section wrap">
    <div class="sec-head">
      <h2 data-en="About Us">من نحن</h2>
      <p data-en="Discover our vision and mission to empower Iraqi youth.">اكتشف رؤيتنا ورسالتنا لتمكين الشباب العراقي.</p>
    </div>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-bottom: 60px;">
      <div style="background: var(--n50); padding: 30px; border-radius: var(--radius);">
        <div style="margin-bottom:15px; color:var(--primary);"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg></div>
        <h3 data-en="Our Vision" style="margin-bottom: 15px; color: var(--primary);">رؤيتنا</h3>
        <p data-en="To be the leading educational platform in Iraq, providing modern, integrated digital learning.">أن نكون المنصة التعليمية الرائدة في العراق، ونوفر تعليماً رقمياً متكاملاً وحديثاً.</p>
      </div>
      <div style="background: var(--n50); padding: 30px; border-radius: var(--radius);">
        <div style="margin-bottom:15px; color:var(--secondary);"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg></div>
        <h3 data-en="Our Mission" style="margin-bottom: 15px; color: var(--secondary);">رسالتنا</h3>
        <p data-en="Empowering students with top-tier educators and advanced technological tools to achieve academic excellence.">تمكين الطلاب من خلال نخبة من الأساتذة والأدوات التكنولوجية المتقدمة لتحقيق التفوق الأكاديمي.</p>
      </div>
    </div>

    <h3 data-en="Core Values" style="text-align:center; margin-bottom: 30px;">قيمنا الأساسية</h3>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 20px; margin-bottom: 80px;">
      <div style="text-align:center; padding: 30px 20px; border: 1px solid var(--n200); border-radius: var(--radius-sm); transition:.3s;">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" style="margin:0 auto 15px;"><path d="M12 15l-3 3-3-3m3 3V3m9 18h-6"/></svg>
        <b data-en="Excellence">التميز</b>
      </div>
      <div style="text-align:center; padding: 30px 20px; border: 1px solid var(--n200); border-radius: var(--radius-sm); transition:.3s;">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" stroke-width="2" style="margin:0 auto 15px;"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        <b data-en="Innovation">الابتكار</b>
      </div>
      <div style="text-align:center; padding: 30px 20px; border: 1px solid var(--n200); border-radius: var(--radius-sm); transition:.3s;">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" style="margin:0 auto 15px;"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        <b data-en="Integrity">النزاهة</b>
      </div>
      <div style="text-align:center; padding: 30px 20px; border: 1px solid var(--n200); border-radius: var(--radius-sm); transition:.3s;">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" stroke-width="2" style="margin:0 auto 15px;"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        <b data-en="Collaboration">التعاون</b>
      </div>
      <div style="text-align:center; padding: 30px 20px; border: 1px solid var(--n200); border-radius: var(--radius-sm); transition:.3s;">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" style="margin:0 auto 15px;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
        <b data-en="Empowerment">التمكين</b>
      </div>
      <div style="text-align:center; padding: 30px 20px; border: 1px solid var(--n200); border-radius: var(--radius-sm); transition:.3s;">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" stroke-width="2" style="margin:0 auto 15px;"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
        <b data-en="Accessibility">سهولة الوصول</b>
      </div>
    </div>

    <h3 data-en="Our Journey" style="text-align:center; margin-bottom: 40px;">رحلتنا</h3>
    <div style="max-width: 600px; margin: 0 auto 60px; position:relative;">
      <div style="position:absolute; right:30px; top:0; bottom:0; width:2px; background:var(--n200);"></div>
      <div style="margin-bottom: 30px; display:flex; gap: 30px; align-items:flex-start; position:relative;">
        <b style="color:#fff; background:var(--primary); padding:5px 12px; border-radius:20px; font-size:14px; z-index:2;">2019</b>
        <div style="background:var(--n50); padding:20px; border-radius:var(--radius-sm); flex:1;">
          <b style="display:block; margin-bottom:5px;" data-en="Foundation">الانطلاقة</b>
          <span data-en="Foundation of Mirmaz Academy" style="color:var(--muted); font-size:14px;">تأسيس أكاديمية مرماز وانطلاق أول الدروس الإلكترونية.</span>
        </div>
      </div>
      <div style="margin-bottom: 30px; display:flex; gap: 30px; align-items:flex-start; position:relative;">
        <b style="color:#fff; background:var(--secondary); padding:5px 12px; border-radius:20px; font-size:14px; z-index:2;">2022</b>
        <div style="background:var(--n50); padding:20px; border-radius:var(--radius-sm); flex:1;">
          <b style="display:block; margin-bottom:5px;" data-en="Expansion">التوسع</b>
          <span data-en="Reaching 100,000 active students" style="color:var(--muted); font-size:14px;">الوصول إلى 100 ألف طالب نشط في عموم محافظات العراق.</span>
        </div>
      </div>
      <div style="margin-bottom: 30px; display:flex; gap: 30px; align-items:flex-start; position:relative;">
        <b style="color:#fff; background:var(--primary); padding:5px 12px; border-radius:20px; font-size:14px; z-index:2;">2024</b>
        <div style="background:var(--n50); padding:20px; border-radius:var(--radius-sm); flex:1;">
          <b style="display:block; margin-bottom:5px;" data-en="The App">التطبيق</b>
          <span data-en="Launching the mobile app" style="color:var(--muted); font-size:14px;">إطلاق تطبيق الهواتف الذكية وتسهيل تجربة التعلم.</span>
        </div>
      </div>
      <div style="margin-bottom: 0; display:flex; gap: 30px; align-items:flex-start; position:relative;">
        <b style="color:#fff; background:var(--secondary); padding:5px 12px; border-radius:20px; font-size:14px; z-index:2;">2026</b>
        <div style="background:var(--n50); padding:20px; border-radius:var(--radius-sm); flex:1;">
          <b style="display:block; margin-bottom:5px;" data-en="The Future">المستقبل</b>
          <span data-en="Expanding to new educational domains" style="color:var(--muted); font-size:14px;">التوسع في مجالات تعليمية جديدة تخدم متطلبات العصر.</span>
        </div>
      </div>
    </div>

    <!-- Team section -->
    <h3 data-en="Our Team" style="text-align:center; margin-bottom: 30px;">فريق العمل</h3>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 30px; text-align:center; margin-bottom:60px;">
      <div>
        <svg width="100" height="100" viewBox="0 0 24 24" fill="var(--n200)" style="border-radius:50%; margin-bottom:15px;"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        <b style="display:block;" data-en="Ahmed Ali">أحمد علي</b>
        <span style="color:var(--muted); font-size:14px;" data-en="CEO & Founder">المدير التنفيذي والمؤسس</span>
      </div>
      <div>
        <svg width="100" height="100" viewBox="0 0 24 24" fill="var(--n200)" style="border-radius:50%; margin-bottom:15px;"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        <b style="display:block;" data-en="Mona Hassan">منى حسن</b>
        <span style="color:var(--muted); font-size:14px;" data-en="Head of Education">مديرة قسم التعليم</span>
      </div>
      <div>
        <svg width="100" height="100" viewBox="0 0 24 24" fill="var(--n200)" style="border-radius:50%; margin-bottom:15px;"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        <b style="display:block;" data-en="Omar Tariq">عمر طارق</b>
        <span style="color:var(--muted); font-size:14px;" data-en="Chief Technology Officer">المدير التقني</span>
      </div>
    </div>
  </section>
</main>
{footer_part}
{bottom_part}"""

contact_html = f"""{header_part}
<main class="main" style="padding-top: 100px;">
  <section class="section wrap">
    <div class="sec-head">
      <h2 data-en="Contact Us">تواصل معنا</h2>
      <p data-en="We are here to help you. Reach out to us anytime.">نحن هنا لمساعدتك. تواصل معنا في أي وقت.</p>
    </div>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; align-items:start;">
      <div style="background: var(--n50); padding: 40px; border-radius: var(--radius); box-shadow:var(--shadow-sm);">
        <form style="display:flex; flex-direction:column; gap:20px;">
          <input type="text" placeholder="الاسم الكامل" style="padding:15px; border-radius:8px; border:1px solid var(--n200); font-family:inherit;" data-en-placeholder="Full Name">
          <input type="email" placeholder="البريد الإلكتروني" style="padding:15px; border-radius:8px; border:1px solid var(--n200); font-family:inherit;" data-en-placeholder="Email Address">
          <input type="text" placeholder="رقم الهاتف" style="padding:15px; border-radius:8px; border:1px solid var(--n200); font-family:inherit;" data-en-placeholder="Phone Number">
          <input type="text" placeholder="الموضوع" style="padding:15px; border-radius:8px; border:1px solid var(--n200); font-family:inherit;" data-en-placeholder="Subject">
          <textarea placeholder="رسالتك" rows="6" style="padding:15px; border-radius:8px; border:1px solid var(--n200); font-family:inherit;" data-en-placeholder="Your Message"></textarea>
          <button type="button" class="btn btn-primary" style="justify-content:center; width:100%;" data-en="Send Message">إرسال الرسالة</button>
        </form>
      </div>
      <div style="display:flex; flex-direction:column; gap:30px;">
        <div style="display:flex; gap:15px; align-items:center; background:var(--n50); padding:20px; border-radius:var(--radius-sm);">
          <div style="width:50px; height:50px; background:var(--primary-soft); color:var(--primary); display:grid; place-items:center; border-radius:12px;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </div>
          <div>
            <h4 data-en="Email" style="margin-bottom:5px;">البريد الإلكتروني</h4>
            <p style="color:var(--muted); font-size:15px; direction:ltr;">info@mirmaz.edu.iq</p>
          </div>
        </div>
        <div style="display:flex; gap:15px; align-items:center; background:var(--n50); padding:20px; border-radius:var(--radius-sm);">
          <div style="width:50px; height:50px; background:var(--secondary-soft); color:var(--secondary); display:grid; place-items:center; border-radius:12px;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </div>
          <div>
            <h4 data-en="Phone" style="margin-bottom:5px;">رقم الهاتف</h4>
            <p style="color:var(--muted); font-size:15px; direction:ltr;">+964 770 123 4567</p>
          </div>
        </div>
        <div style="display:flex; gap:15px; align-items:center; background:var(--n50); padding:20px; border-radius:var(--radius-sm);">
          <div style="width:50px; height:50px; background:var(--primary-soft); color:var(--primary); display:grid; place-items:center; border-radius:12px;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          </div>
          <div>
            <h4 data-en="Address" style="margin-bottom:5px;">العنوان</h4>
            <p data-en="Baghdad, Iraq" style="color:var(--muted); font-size:15px;">بغداد، العراق</p>
          </div>
        </div>
        
        <div style="height: 250px; background: #e5e7eb; border-radius: var(--radius); display:grid; place-items:center; position:relative; overflow:hidden;">
          <svg style="position:absolute; inset:0; width:100%; height:100%; color:#d1d5db;" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0 0h100v100H0z"/></svg>
          <div style="position:relative; background:white; padding:10px 20px; border-radius:20px; box-shadow:0 4px 10px rgba(0,0,0,0.1); font-weight:600; color:var(--primary);" data-en="Map View">عرض الخريطة</div>
        </div>
        
        <div style="display:flex; gap:15px; justify-content:center;">
            <a href="#" class="icon-btn" style="background:var(--n50);"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg></a>
            <a href="#" class="icon-btn" style="background:var(--n50);"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg></a>
            <a href="#" class="icon-btn" style="background:var(--n50);"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.597 1.323-1.324V1.325C24 .597 23.403 0 22.675 0z"/></svg></a>
        </div>
      </div>
    </div>
  </section>
</main>
{footer_part}
{bottom_part}"""

terms_html = f"""{header_part}
<main class="main" style="padding-top: 100px; min-height:80vh;">
  <section class="section wrap" style="max-width: 800px; padding-bottom:100px;">
    <h2 data-en="Terms and Conditions" style="margin-bottom:20px; font-size:36px;">الشروط والأحكام</h2>
    <p data-en="Last updated: October 2025" style="color:var(--muted); margin-bottom:40px;">تاريخ آخر تحديث: أكتوبر 2025</p>

    <div style="background:var(--n50); padding:30px; border-radius:var(--radius); margin-bottom:40px;">
        <p data-en="Welcome to Mirmaz Academy. By using our platform, you agree to the following terms..." style="margin-bottom:0;">مرحباً بكم في أكاديمية مرماز. باستخدامكم لمنصتنا (موقع الويب والتطبيقات الخاصة بنا)، أنتم توافقون على الشروط والأحكام التالية التي تنظم استخدامكم لخدماتنا.</p>
    </div>
    
    <div style="margin-bottom:30px;">
        <h4 data-en="1. Acceptance of Terms" style="margin-bottom:15px; font-size:22px; color:var(--primary);">1. قبول الشروط</h4>
        <p style="margin-bottom:15px; color:var(--muted);" data-en="By accessing and using this service, you accept and agree to be bound by the terms and provision of this agreement.">من خلال الوصول إلى هذه الخدمة واستخدامها، فإنك تقبل وتوافق على الالتزام بالشروط والأحكام الموضحة في هذه الاتفاقية. إذا كنت لا توافق على هذه الشروط، يرجى عدم استخدام منصتنا.</p>
    </div>

    <div style="margin-bottom:30px;">
        <h4 data-en="2. User Accounts" style="margin-bottom:15px; font-size:22px; color:var(--primary);">2. حسابات المستخدمين</h4>
        <ul style="margin-right:20px; margin-bottom:15px; color:var(--muted); list-style-type:disc;">
            <li data-en="You are responsible for maintaining the confidentiality of your account and password." style="margin-bottom:10px;">أنت مسؤول بالكامل عن الحفاظ على سرية حسابك وكلمة المرور الخاصة بك.</li>
            <li data-en="You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account." style="margin-bottom:10px;">يجب عليك إخطارنا فوراً عند علمك بأي خرق أمني أو استخدام غير مصرح به لحسابك.</li>
            <li data-en="Account sharing is strictly prohibited." style="margin-bottom:10px;">يمنع منعاً باتاً مشاركة الحساب مع أشخاص آخرين.</li>
        </ul>
    </div>

    <div style="margin-bottom:30px;">
        <h4 data-en="3. Educational Content" style="margin-bottom:15px; font-size:22px; color:var(--primary);">3. المحتوى التعليمي والملكية الفكرية</h4>
        <p style="margin-bottom:15px; color:var(--muted);" data-en="All content provided is for educational purposes and is the intellectual property of Mirmaz.">يتم توفير جميع المحتويات (الفيديوهات، الملازم، الاختبارات) لأغراض تعليمية شخصية فقط وهي ملكية فكرية حصرية لأكاديمية مرماز وأساتذتها. يمنع تحميل أو إعادة توزيع أي محتوى دون إذن كتابي.</p>
    </div>

    <div style="margin-bottom:30px;">
        <h4 data-en="4. Modifications" style="margin-bottom:15px; font-size:22px; color:var(--primary);">4. التعديلات</h4>
        <p style="margin-bottom:15px; color:var(--muted);" data-en="We reserve the right to modify these terms at any time.">نحتفظ بالحق في تعديل هذه الشروط أو استبدالها في أي وقت، وسيتم إشعاركم بأي تغييرات جوهرية عبر البريد الإلكتروني أو من خلال المنصة.</p>
    </div>
  </section>
</main>
{footer_part}
{bottom_part}"""

privacy_html = f"""{header_part}
<main class="main" style="padding-top: 100px; min-height:80vh;">
  <section class="section wrap" style="max-width: 800px; padding-bottom:100px;">
    <h2 data-en="Privacy Policy" style="margin-bottom:20px; font-size:36px;">سياسة الخصوصية</h2>
    <p data-en="Last updated: October 2025" style="color:var(--muted); margin-bottom:40px;">تاريخ آخر تحديث: أكتوبر 2025</p>

    <div style="background:var(--n50); padding:30px; border-radius:var(--radius); margin-bottom:40px;">
        <p data-en="Your privacy is important to us. This policy explains how we handle your data." style="margin-bottom:0;">خصوصيتك تهمنا جداً في أكاديمية مرماز. توضح هذه السياسة كيف نقوم بجمع واستخدام وحماية بياناتك الشخصية عند استخدامك لخدماتنا التعليمية.</p>
    </div>
    
    <div style="margin-bottom:30px;">
        <h4 data-en="1. Information Collection" style="margin-bottom:15px; font-size:22px; color:var(--primary);">1. جمع المعلومات</h4>
        <p style="margin-bottom:15px; color:var(--muted);" data-en="We collect information to provide better services to our users.">نقوم بجمع المعلومات التي تقدمها لنا مباشرة عند إنشاء حساب (مثل الاسم، البريد الإلكتروني، رقم الهاتف، والمرحلة الدراسية)، بالإضافة إلى بيانات الاستخدام (مثل الدورات التي تشاهدها ونتائج الاختبارات) لتوفير تجربة تعليمية مخصصة.</p>
    </div>

    <div style="margin-bottom:30px;">
        <h4 data-en="2. Use of Data" style="margin-bottom:15px; font-size:22px; color:var(--primary);">2. استخدام البيانات</h4>
        <ul style="margin-right:20px; margin-bottom:15px; color:var(--muted); list-style-type:disc;">
            <li data-en="We use the collected data to maintain and improve the educational experience." style="margin-bottom:10px;">تقديم وصيانة وتحسين خدماتنا التعليمية.</li>
            <li data-en="To personalize your experience and recommend courses." style="margin-bottom:10px;">تخصيص تجربتك واقتراح دورات تلائم مستواك.</li>
            <li data-en="To communicate with you regarding updates or support." style="margin-bottom:10px;">التواصل معك بخصوص التحديثات الفنية أو لتقديم الدعم الفني.</li>
        </ul>
    </div>

    <div style="margin-bottom:30px;">
        <h4 data-en="3. Data Security" style="margin-bottom:15px; font-size:22px; color:var(--primary);">3. أمن البيانات</h4>
        <p style="margin-bottom:15px; color:var(--muted);" data-en="We implement security measures to protect against unauthorized access.">نحن ننفذ تدابير أمنية تقنية وتنظيمية متقدمة لحماية بياناتك من الوصول غير المصرح به أو التعديل أو الإفصاح أو الإتلاف.</p>
    </div>

    <div style="margin-bottom:30px;">
        <h4 data-en="4. Sharing of Information" style="margin-bottom:15px; font-size:22px; color:var(--primary);">4. مشاركة المعلومات</h4>
        <p style="margin-bottom:15px; color:var(--muted);" data-en="We do not share your personal information with third parties without your consent.">نحن لا نبيع أو نؤجر معلوماتك الشخصية. قد نشارك بيانات مجهولة الهوية ومجمعة مع شركائنا لأغراض التحليل الإحصائي وتحسين جودة التعليم.</p>
    </div>
  </section>
</main>
{footer_part}
{bottom_part}"""

def fix_active_links(html_content, target_file):
    # This is a bit tricky, but let's just make it simple.
    # The header links don't have .active class in the provided CSS it seems, but if they do, we can manage it.
    return html_content

for fname, content in [("about.html", about_html), ("contact.html", contact_html), ("terms.html", terms_html), ("privacy.html", privacy_html)]:
    with open(os.path.join(dir_path, fname), "w", encoding="utf-8") as f:
        f.write(content)

print("Pages built successfully.")
