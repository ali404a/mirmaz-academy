import os
import re

base_dir = '/Users/alialmurtadh/.gemini/antigravity/scratch/mirmaz-academy'
index_path = os.path.join(base_dir, 'index.html')

with open(index_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Header is from start to end of <!-- ============ HEADER ============ --> block
header = content.split('<!-- ============ HERO ============ -->')[0]

# Footer is from <!-- ============ FOOTER ============ --> to the end
footer = '<!-- ============ FOOTER ============ -->' + content.split('<!-- ============ FOOTER ============ -->')[1]

def save_page(name, title, main_content):
    page_html = header + main_content + '\n' + footer
    # Replace title
    page_html = re.sub(r'<title>.*?</title>', f'<title>{title} — مرماز أكاديمي</title>', page_html)
    with open(os.path.join(base_dir, name), 'w', encoding='utf-8') as f:
        f.write(page_html)

# 1. pos.html
pos_content = """
<!-- ============ PAGE HERO ============ -->
<section class="section hero-subpage" style="background: linear-gradient(135deg, var(--primary), var(--primary-dark)); color: #fff; padding: 120px 0 60px; text-align: center;">
  <div class="wrap">
    <h1 style="font-size: clamp(32px, 5vw, 54px); margin-bottom: 16px;" data-en="Points of Sale">نقاط البيع</h1>
    <p style="font-size: 18px; opacity: 0.9; max-width: 600px; margin: 0 auto;" data-en="Find Mirmaz Academy cards at our authorized agents across Iraq.">ابحث عن بطاقات مرماز أكاديمي لدى وكلائنا المعتمدين في كافة محافظات العراق.</p>
  </div>
</section>

<!-- ============ POS SECTION ============ -->
<section class="section pos-sec" style="padding: 60px 0;">
  <div class="wrap">
    
    <!-- Payment Methods -->
    <div style="background: var(--n50); border: 1px solid var(--n100); border-radius: 24px; padding: 40px; text-align: center; margin-bottom: 50px;">
      <h2 style="font-size: 24px; margin-bottom: 24px;" data-en="Supported Payment Methods">طرق الدفع المدعومة</h2>
      <div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;">
        <div style="background: #fff; border: 1px solid var(--n100); border-radius: 16px; padding: 20px 40px; display: grid; place-items: center; box-shadow: var(--shadow-sm);">
          <b style="font-size: 20px; color: #E3000F;" data-en="ZainCash">زين كاش</b>
        </div>
        <div style="background: #fff; border: 1px solid var(--n100); border-radius: 16px; padding: 20px 40px; display: grid; place-items: center; box-shadow: var(--shadow-sm);">
          <b style="font-size: 20px; color: #0078A8;" data-en="AsiaHawala">آسيا حوالة</b>
        </div>
        <div style="background: #fff; border: 1px solid var(--n100); border-radius: 16px; padding: 20px 40px; display: grid; place-items: center; box-shadow: var(--shadow-sm);">
          <b style="font-size: 20px; color: #000;" data-en="MasterCard / Visa">ماستر كارد / فيزا</b>
        </div>
      </div>
    </div>

    <div class="pos-layout">
      <!-- Left side: List & Search -->
      <div>
        <div class="pos-search">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.3-4.3"/></svg>
          <input type="text" placeholder="ابحث عن أقرب نقطة بيع..." data-en="Search for nearest POS...">
        </div>
        <div class="pos-list">
          <div class="pos-item">
            <div class="pi-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
            <div>
              <b data-en="Baghdad - Mansour">بغداد - المنصور</b>
              <span data-en="Al-Mansour Main Street, near the Mall">شارع المنصور الرئيسي، قرب المول</span>
            </div>
          </div>
          <div class="pos-item">
            <div class="pi-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
            <div>
              <b data-en="Basra - Ashar">البصرة - العشار</b>
              <span data-en="Ashar Market, near the Clock">سوق العشار، قرب الساعة</span>
            </div>
          </div>
          <div class="pos-item">
            <div class="pi-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
            <div>
              <b data-en="Erbil - Iskan">أربيل - الإسكان</b>
              <span data-en="Iskan Street">شارع الإسكان العام</span>
            </div>
          </div>
          <div class="pos-item">
            <div class="pi-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
            <div>
              <b data-en="Najaf - Medina">النجف - المدينة القديمة</b>
              <span data-en="Near Imam Ali Shrine">المدينة القديمة، شارع الطوسي</span>
            </div>
          </div>
          <div class="pos-item">
            <div class="pi-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
            <div>
              <b data-en="Nineveh - Mosul">نينوى - الموصل</b>
              <span data-en="Zuhour Street">الجانب الأيسر، شارع الزهور</span>
            </div>
          </div>
        </div>
      </div>
      <!-- Right side: Map -->
      <div class="pos-map">
        <!-- Placeholder for Iraq Map SVG -->
        <svg class="iraq-map" viewBox="0 0 500 500" fill="#f0f2f5" stroke="#cbd5e1" stroke-width="2">
          <!-- Simplified mock path for Iraq -->
          <path d="M200,50 L350,150 L450,300 L400,450 L300,450 L100,300 L50,150 Z" />
          <g class="map-pins">
            <circle class="pin big" cx="300" cy="250" r="6" /> <!-- Baghdad -->
            <circle class="pin" cx="380" cy="400" r="6" /> <!-- Basra -->
            <circle class="pin" cx="250" cy="100" r="6" /> <!-- Erbil -->
            <circle class="pin" cx="280" cy="300" r="6" /> <!-- Najaf -->
            <circle class="pin" cx="180" cy="120" r="6" /> <!-- Mosul -->
          </g>
        </svg>
        <div class="pos-hint">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <span data-en="Click on a governorate on the map to filter points of sale">اضغط على المحافظة في الخريطة لتصفية نقاط البيع</span>
        </div>
      </div>
    </div>
  </div>
</section>
"""
save_page('pos.html', 'نقاط البيع', pos_content)

# 2. news.html
news_content = """
<!-- ============ PAGE HERO ============ -->
<section class="section hero-subpage" style="background: linear-gradient(135deg, var(--primary), var(--primary-dark)); color: #fff; padding: 120px 0 60px; text-align: center;">
  <div class="wrap">
    <h1 style="font-size: clamp(32px, 5vw, 54px); margin-bottom: 16px;" data-en="Academy News">أخبار الأكاديمية</h1>
    <p style="font-size: 18px; opacity: 0.9; max-width: 600px; margin: 0 auto;" data-en="Stay updated with the latest news, announcements, and events at Mirmaz Academy.">ابقَ على اطلاع دائم بآخر الأخبار والإعلانات والفعاليات في مرماز أكاديمي.</p>
  </div>
</section>

<section class="section news-sec" style="padding: 60px 0; background: var(--n50);">
  <div class="wrap">
    <!-- Category Tabs -->
    <div class="adcamp-filters" style="margin-bottom: 30px; justify-content: center;">
      <button class="adf active" data-en="All">الكل</button>
      <button class="adf" data-en="Announcements">إعلانات الإدارة</button>
      <button class="adf" data-en="Events">الفعاليات</button>
      <button class="adf" data-en="Updates">تحديثات المنصة</button>
    </div>

    <!-- Featured Article -->
    <div class="news-card feat" style="margin-bottom: 40px; display: grid; grid-template-columns: 1.5fr 1fr; background: #fff; border-radius: 24px; overflow: hidden; box-shadow: var(--shadow-sm);">
      <div class="news-media" style="height: 100%; min-height: 350px;">
        <span class="news-cat" data-en="Announcements">إعلانات الإدارة</span>
      </div>
      <div class="news-body" style="padding: 40px; display: flex; flex-direction: column; justify-content: center;">
        <span class="news-date">12 تموز 2026</span>
        <h3 style="font-size: 28px; margin-bottom: 16px;" data-en="Mirmaz Academy launches its comprehensive mobile app">مرماز أكاديمي تطلق تطبيقها الشامل للهواتف الذكية</h3>
        <p style="font-size: 16px; line-height: 1.6; margin-bottom: 24px;" data-en="We are thrilled to announce the launch of our new mobile application, providing students with seamless access to all courses, live sessions, and study materials anywhere, anytime.">نعلن بكل فخر عن إطلاق تطبيقنا الجديد للهواتف الذكية، والذي سيوفر للطلاب وصولاً سهلاً ومباشراً إلى جميع الدورات والمحاضرات المباشرة والمواد الدراسية في أي وقت ومن أي مكان.</p>
        <a href="#" class="btn btn-primary" style="align-self: flex-start;" data-en="Read More">اقرأ المزيد</a>
      </div>
    </div>

    <!-- News Grid -->
    <div class="adcamp-grid">
      <div class="adc-card">
        <div class="adc-media" style="height: 200px;">
          <span class="adc-year" data-en="Events">الفعاليات</span>
        </div>
        <div class="adc-body">
          <span class="news-date">05 تموز 2026</span>
          <h3 data-en="Honoring top students in the national exams">تكريم الطلبة الأوائل في الامتحانات الوزارية</h3>
          <p data-en="A special ceremony was held to honor the outstanding students who achieved top ranks.">أقيم حفل خاص لتكريم الطلبة المتفوقين الذين حققوا المراتب الأولى على مستوى العراق.</p>
        </div>
      </div>
      <div class="adc-card">
        <div class="adc-media" style="height: 200px;">
          <span class="adc-year" data-en="Updates">تحديثات المنصة</span>
        </div>
        <div class="adc-body">
          <span class="news-date">28 حزيران 2026</span>
          <h3 data-en="New interactive learning tools added">إضافة أدوات تعليمية تفاعلية جديدة</h3>
          <p data-en="We have introduced new features to make the learning experience more engaging.">قمنا بتقديم ميزات جديدة لجعل تجربة التعلم أكثر تفاعلية ومتعة للطلاب.</p>
        </div>
      </div>
      <div class="adc-card">
        <div class="adc-media" style="height: 200px;">
          <span class="adc-year" data-en="Announcements">إعلانات الإدارة</span>
        </div>
        <div class="adc-body">
          <span class="news-date">20 حزيران 2026</span>
          <h3 data-en="Registration for the new academic year is open">فتح باب التسجيل للعام الدراسي الجديد</h3>
          <p data-en="Students can now enroll in the upcoming courses with special early bird discounts.">يمكن للطلاب الآن التسجيل في الدورات القادمة مع خصومات خاصة للتسجيل المبكر.</p>
        </div>
      </div>
      <div class="adc-card">
        <div class="adc-media" style="height: 200px;">
          <span class="adc-year" data-en="Events">الفعاليات</span>
        </div>
        <div class="adc-body">
          <span class="news-date">15 حزيران 2026</span>
          <h3 data-en="Live Q&A session with top educators">جلسة حوارية مباشرة مع نخبة الأساتذة</h3>
          <p data-en="Join our live session this Friday to get your questions answered by our experts.">انضم إلى الجلسة المباشرة يوم الجمعة لطرح أسئلتك على الخبراء والمختصين.</p>
        </div>
      </div>
      <div class="adc-card">
        <div class="adc-media" style="height: 200px;">
          <span class="adc-year" data-en="Updates">تحديثات المنصة</span>
        </div>
        <div class="adc-body">
          <span class="news-date">01 حزيران 2026</span>
          <h3 data-en="Improved video player for slow connections">تحسين مشغل الفيديو للاتصالات البطيئة</h3>
          <p data-en="Enjoy uninterrupted learning with our optimized video streaming technology.">استمتع بتعلم دون انقطاع مع تقنية بث الفيديو المحسنة للاتصالات الضعيفة.</p>
        </div>
      </div>
      <div class="adc-card">
        <div class="adc-media" style="height: 200px;">
          <span class="adc-year" data-en="Announcements">إعلانات الإدارة</span>
        </div>
        <div class="adc-body">
          <span class="news-date">25 أيار 2026</span>
          <h3 data-en="Partnership with major tech companies">شراكة استراتيجية مع كبرى شركات التقنية</h3>
          <p data-en="Mirmaz Academy signs a new partnership to provide modern devices to students.">أكاديمية مرماز توقع شراكة جديدة لتوفير أجهزة حديثة للطلاب بأسعار مدعومة.</p>
        </div>
      </div>
    </div>
  </div>
</section>
"""
save_page('news.html', 'الأخبار', news_content)

# 3. app.html
app_content = """
<!-- ============ FULL SCREEN HERO ============ -->
<section class="app-sec" style="min-height: 90vh; display: flex; align-items: center; padding-top: 120px;">
  <div class="app-bg">
    <div class="hero-grid"></div>
  </div>
  <div class="wrap app-inner">
    <div class="app-copy">
      <div class="eyebrow orange" style="margin-bottom: 20px;">
        <i class="dot"></i>
        <span data-en="New Release">إصدار جديد</span>
      </div>
      <h2 style="font-size: clamp(38px, 5vw, 58px); color: #fff; line-height: 1.1; margin-bottom: 20px;" data-en="Learn anywhere, anytime">تعلم في أي مكان وفي أي وقت</h2>
      <p class="app-sub" style="font-size: 19px; max-width: 500px;" data-en="Download the Mirmaz Academy app to access all your courses, track your progress, and join live classes directly from your smartphone.">حمل تطبيق مرماز أكاديمي للوصول إلى جميع دوراتك، وتتبع تقدمك، والانضمام إلى المحاضرات المباشرة مباشرة من هاتفك الذكي.</p>
      
      <div class="store-row" style="margin-top: 40px;">
        <a href="#" class="store-btn">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.74 3.58-.8 2.6-.2 4.1 1.25 4.8 2.37-3.9 2.1-3.24 6.82.72 8.36-.61 1.54-1.39 3.09-2.58 4.3v-.02l-1.6.02v-.02a5.53 5.53 0 0 1 0-.04v.04c-.03-.02-.05-.04-.07-.06l.07.06zm-4.73-13.62C12.18 4.29 13.9 2.5 13.65 0c-2.31.25-4.27 1.83-4.88 4.33 2.5.35 4.27-1.57 3.55-4.32z"/></svg>
          <span><small data-en="Download on the">حمل من</small>App Store</span>
        </a>
        <a href="#" class="store-btn">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3.61 2.22C3.23 2.6 3 3.19 3 3.93v16.14c0 .74.23 1.33.61 1.71l.06.06L12.6 12.9v-.26L3.67 3.71l-.06.06v-1.55z"/><path d="M18.66 16.5l-4.52-4.51v-.47l4.52-4.51.08.05 5.34 3.04c1.52.87 1.52 2.28 0 3.15l-5.34 3.04-.08.05z"/><path d="M3.67 22.05l9.45-9.44 5.55 5.55-15 8.53z"/><path d="M3.67 2.51L18.67 11l-5.55 5.55L3.67 7.11 3.67 2.51z"/></svg>
          <span><small data-en="Get it on">احصل عليه من</small>Google Play</span>
        </a>
      </div>

      <div class="qr-row">
        <div class="qr">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h8v8H3zm2 2v4h4V5zM13 3h8v8h-8zm2 2v4h4V5zM3 13h8v8H3zm2 2v4h4v-4zm13-2h-2v2h2zm-2 2h-2v2h2zm2 2h-2v2h2zm-2 2h-2v2h2zm-2-6h-2v2h2zm0 4h-2v2h2zm4 0h-2v2h2z"/></svg>
        </div>
        <div>
          <b data-en="Scan QR Code" style="display: block;">امسح الرمز</b>
          <span data-en="To download the app directly">لتحميل التطبيق مباشرة</span>
        </div>
      </div>
    </div>
    
    <div class="app-visual">
      <div class="phone">
        <div class="phone-notch"></div>
        <div class="phone-screen">
          <div class="ps-top">
            <div class="ps-logo"></div>
            <div class="ps-bars"><i></i><i></i><i></i></div>
          </div>
          <div class="ps-hero">
            <b data-en="Hello, Ahmed!">مرحباً، أحمد!</b><br>
            <span data-en="Ready to learn?">مستعد للتعلم اليوم؟</span>
          </div>
          <div class="ps-card">
            <div class="psc-ic"></div>
            <div>
              <b data-en="Mathematics">الرياضيات - الفصل الأول</b>
              <small data-en="Dr. Ali Hassan">د. علي حسن</small>
            </div>
          </div>
          <div class="ps-card">
            <div class="psc-ic o"></div>
            <div>
              <b data-en="Physics">الفيزياء - القوة والحركة</b>
              <small data-en="Prof. Mohammed">أستاذ محمد</small>
            </div>
          </div>
          <div class="ps-card">
            <div class="psc-ic g"></div>
            <div>
              <b data-en="Chemistry">الكيمياء العضوية</b>
              <small data-en="Dr. Sara">د. سارة</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============ APP FEATURES ============ -->
<section class="section why-sec" style="padding: 80px 0;">
  <div class="wrap">
    <div class="sec-head">
      <h2 data-en="App Features">مميزات التطبيق</h2>
      <p data-en="Everything you need in your pocket.">كل ما تحتاجه للنجاح أصبح في جيبك.</p>
    </div>
    <div class="why-grid">
      <div class="why-card">
        <div class="why-ic" style="--c: #2b43dc;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></div>
        <h3 data-en="Offline Viewing">مشاهدة بدون إنترنت</h3>
        <p data-en="Download lessons and watch them anytime without relying on internet connection.">حمل المحاضرات وشاهدها في أي وقت دون الحاجة للاتصال بالإنترنت.</p>
      </div>
      <div class="why-card">
        <div class="why-ic" style="--c: #ff6700;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div>
        <h3 data-en="Study Reminders">تنبيهات ذكية</h3>
        <p data-en="Get notified about live sessions, new materials, and exam dates automatically.">احصل على إشعارات فورية عن مواعيد المحاضرات المباشرة والمواد الجديدة.</p>
      </div>
      <div class="why-card">
        <div class="why-ic" style="--c: #0ea672;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20v-6M6 20V10M18 20V4"/></svg></div>
        <h3 data-en="Progress Tracking">متابعة الأداء</h3>
        <p data-en="Track your study hours, exam scores, and overall progress with detailed analytics.">تتبع ساعات دراستك ودرجات امتحاناتك مع إحصائيات دقيقة وشاملة.</p>
      </div>
      <div class="why-card">
        <div class="why-ic" style="--c: #8a2be2;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>
        <h3 data-en="Instant Support">دعم فوري</h3>
        <p data-en="Chat directly with technical support or ask your teachers questions easily.">تواصل مباشرة مع الدعم الفني أو اطرح أسئلتك على أساتذتك بكل سهولة.</p>
      </div>
      <div class="why-card">
        <div class="why-ic" style="--c: #e91e63;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
        <h3 data-en="Secure Environment">بيئة آمنة</h3>
        <p data-en="Your data and account are protected with the highest security standards.">بياناتك وحسابك محميان بأعلى معايير الأمان والتشفير.</p>
      </div>
      <div class="why-card">
        <div class="why-ic" style="--c: #00bcd4;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg></div>
        <h3 data-en="Interactive Quizzes">اختبارات تفاعلية</h3>
        <p data-en="Test your knowledge with quick quizzes after each lesson.">اختبر معلوماتك من خلال اختبارات سريعة وتفاعلية بعد كل درس.</p>
      </div>
    </div>
  </div>
</section>
"""
save_page('app.html', 'التطبيق', app_content)

# 4. support.html
support_content = """
<!-- ============ PAGE HERO ============ -->
<section class="section hero-subpage" style="background: linear-gradient(135deg, var(--primary), var(--primary-dark)); color: #fff; padding: 120px 0 60px; text-align: center;">
  <div class="wrap">
    <h1 style="font-size: clamp(32px, 5vw, 54px); margin-bottom: 16px;" data-en="Technical Support">الدعم الفني ومساعدة الطلاب</h1>
    <p style="font-size: 18px; opacity: 0.9; max-width: 600px; margin: 0 auto; margin-bottom: 30px;" data-en="How can we help you today?">كيف يمكننا مساعدتك اليوم؟</p>
    
    <div style="max-width: 500px; margin: 0 auto; position: relative;">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="position: absolute; right: 16px; top: 16px; width: 20px; height: 20px; color: #666;"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.3-4.3"/></svg>
      <input type="text" placeholder="ابحث عن سؤالك هنا..." data-en="Search for your question here..." style="width: 100%; padding: 15px 45px 15px 15px; border-radius: 100px; border: none; font-size: 16px; font-family: inherit; outline: none;">
    </div>
  </div>
</section>

<!-- ============ HELP CATEGORIES ============ -->
<section class="section map-sec" style="padding: 60px 0;">
  <div class="wrap">
    <div class="eduroad" style="gap: 20px;">
      <div class="road-node">
        <div class="rn-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
        <b data-en="Account & Registration">الحساب والتسجيل</b>
      </div>
      <div class="road-node">
        <div class="rn-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div>
        <b data-en="Technical Issues">المشاكل التقنية</b>
      </div>
      <div class="road-node">
        <div class="rn-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg></div>
        <b data-en="Payment & Cards">الدفع والبطاقات</b>
      </div>
      <div class="road-node">
        <div class="rn-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></div>
        <b data-en="App & Downloads">التطبيق والتحميل</b>
      </div>
    </div>
  </div>
</section>

<!-- ============ FAQ SECTION ============ -->
<section class="section faq-sec" style="padding: 60px 0;">
  <div class="wrap faq-wrap">
    <div class="sec-head">
      <h2 data-en="Frequently Asked Questions">الأسئلة الشائعة</h2>
      <p data-en="Find quick answers to common issues.">تجد هنا إجابات سريعة لمعظم الاستفسارات الشائعة.</p>
    </div>
    
    <div class="faq-list">
      <details class="faq">
        <summary><span data-en="How do I create a new account?">كيف أقوم بإنشاء حساب جديد؟</span><div class="faq-x"></div></summary>
        <div class="faq-a" data-en="You can create a new account by clicking the 'Register' button on the top navigation bar and filling in your phone number and details.">يمكنك إنشاء حساب جديد من خلال النقر على زر 'إنشاء حساب' في أعلى الصفحة وإدخال رقم هاتفك وتفاصيلك الشخصية، ثم تأكيد الرقم عبر رسالة نصية.</div>
      </details>
      <details class="faq">
        <summary><span data-en="I bought a card, how do I activate it?">اشتريت بطاقة، كيف أقوم بتفعيلها؟</span><div class="faq-x"></div></summary>
        <div class="faq-a" data-en="Go to your profile, click on 'Recharge Balance', and enter the code found on your scratched card.">اذهب إلى ملفك الشخصي، واضغط على خيار 'شحن الرصيد'، ثم أدخل الرمز الموجود على البطاقة بعد خدشها، وسيتم إضافة الرصيد مباشرة إلى حسابك لتتمكن من الاشتراك في الدورات.</div>
      </details>
      <details class="faq">
        <summary><span data-en="The video is buffering, what should I do?">الفيديو يتقطع أثناء التشغيل، ماذا أفعل؟</span><div class="faq-x"></div></summary>
        <div class="faq-a" data-en="Please check your internet connection. You can also lower the video quality from the settings gear icon on the player.">يرجى التحقق من جودة اتصالك بالإنترنت. يوفر مشغل الفيديو لدينا خاصية تغيير الجودة، يمكنك النقر على أيقونة الإعدادات (الترس) في مشغل الفيديو واختيار جودة أقل تتناسب مع سرعة الإنترنت لديك.</div>
      </details>
      <details class="faq">
        <summary><span data-en="Can I watch the lessons on multiple devices?">هل يمكنني مشاهدة الدروس على أكثر من جهاز؟</span><div class="faq-x"></div></summary>
        <div class="faq-a" data-en="For security reasons, your account can only be active on one device at a time.">لأسباب تتعلق بحماية حقوق النشر والخصوصية، لا يمكن تسجيل الدخول والمشاهدة من أكثر من جهاز في نفس الوقت. عند الدخول من جهاز جديد، سيتم تسجيل خروجك من الجهاز السابق.</div>
      </details>
      <details class="faq">
        <summary><span data-en="I forgot my password!">نسيت كلمة المرور الخاصة بي!</span><div class="faq-x"></div></summary>
        <div class="faq-a" data-en="Click on 'Forgot Password' in the login screen. You will receive an SMS to reset it.">انقر على 'نسيت كلمة المرور' في شاشة تسجيل الدخول، وأدخل رقم هاتفك المسجل. ستصلك رسالة نصية تحتوي على رمز التحقق لتعيين كلمة مرور جديدة.</div>
      </details>
    </div>
  </div>
</section>

<!-- ============ CONTACT SECTION ============ -->
<section class="section contact-sec" style="padding: 60px 0;">
  <div class="wrap">
    <div class="contact-grid">
      <div class="contact-copy">
        <h2 data-en="Still need help?">لم تجد إجابة لاستفسارك؟</h2>
        <p data-en="Our technical support team is available 24/7.">فريق الدعم الفني لدينا متواجد على مدار الساعة للرد على استفساراتك ومساعدتك.</p>
        
        <!-- System Status -->
        <div style="display: flex; align-items: center; gap: 10px; background: #e8f5e9; color: #2e7d32; padding: 12px 20px; border-radius: 12px; margin-bottom: 30px; font-weight: 600; font-size: 14px;">
          <div style="width: 10px; height: 10px; background: #4caf50; border-radius: 50%; box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.2);"></div>
          <span data-en="All systems are operating normally">جميع أنظمة المنصة تعمل بشكل طبيعي</span>
        </div>

        <div class="contact-channels">
          <div class="cch">
            <div class="cch-ic" style="--c: #0088cc;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg></div>
            <div>
              <span data-en="Telegram">تيليجرام</span>
              <small>@MirmazSupport</small>
            </div>
          </div>
          <div class="cch">
            <div class="cch-ic" style="--c: #25D366;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg></div>
            <div>
              <span data-en="WhatsApp">واتساب</span>
              <small>+964 780 000 0000</small>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Contact Form -->
      <form class="contact-form">
        <div class="cf-field">
          <label data-en="Name">الاسم الكامل</label>
          <input type="text" placeholder="مثال: أحمد محمد" required>
        </div>
        <div class="cf-row">
          <div class="cf-field">
            <label data-en="Phone Number">رقم الهاتف المسجل</label>
            <input type="tel" placeholder="07X XXXX XXXX" required>
          </div>
          <div class="cf-field">
            <label data-en="Issue Type">نوع المشكلة</label>
            <input type="text" placeholder="مثال: تفعيل بطاقة" required>
          </div>
        </div>
        <div class="cf-field">
          <label data-en="Message Details">تفاصيل المشكلة</label>
          <textarea rows="4" placeholder="اكتب تفاصيل استفسارك أو المشكلة التي تواجهها هنا..." required></textarea>
        </div>
        <button type="submit" class="btn btn-primary cf-submit" data-en="Send Message">إرسال الرسالة</button>
      </form>
    </div>
  </div>
</section>
"""
save_page('support.html', 'الدعم الفني', support_content)
