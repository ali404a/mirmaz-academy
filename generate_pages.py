import os

html_path = "index.html"
with open(html_path, "r", encoding="utf-8") as f:
    content = f.read()

# Extract header (from start to </header>)
header_end = content.find("</header>") + len("</header>")
header_part = content[:header_end]

# Extract footer (from <footer class="footer"> to end)
footer_start = content.find('<footer class="footer">')
footer_part = content[footer_start:]

# Extract drawer (if it exists between header and footer)
drawer_part = ""
drawer_start = content.find('<!-- ============ DRAWER ============ -->')
if drawer_start != -1:
    drawer_end = content.find('<!--', drawer_start + 10)
    # just a heuristic, drawer usually ends before hero
    drawer_part = content[drawer_start:drawer_end]

def write_page(filename, title, body_content):
    # We should replace the <title> in header
    page_header = header_part.replace('<title>مرماز أكاديمي — أكبر منصة تعليمية في العراق</title>', f'<title>{title} — مرماز أكاديمي</title>')
    
    full_html = page_header + "\n\n" + drawer_part + "\n\n" + body_content + "\n\n" + footer_part
    with open(filename, "w", encoding="utf-8") as f:
        f.write(full_html)
    print(f"Created {filename}")

courses_body = """
<!-- ============ HERO ============ -->
<section class="hero" style="min-height: 50vh; padding-top: 150px; padding-bottom: 50px;">
  <div class="wrap" style="position:relative; z-index:2; text-align:center;">
    <h1 data-en="Our Courses">دوراتنا <span class="accent" data-en="Educational">التعليمية</span></h1>
    <p class="hero-sub" style="margin: 0 auto 30px;" data-en="Explore our wide range of courses and start your journey today.">تصفح مجموعة واسعة من الدورات وابدأ رحلتك التعليمية اليوم.</p>
    <div style="max-width: 600px; margin: 0 auto; display: flex; gap: 10px;">
      <input type="text" placeholder="ابحث عن دورة..." style="flex:1; padding: 15px; border-radius: 100px; border: none; outline: none; font-size: 16px;">
      <button class="btn btn-orange" data-en="Search">بحث</button>
    </div>
  </div>
  <div class="hero-bg"><div class="hero-grid"></div></div>
</section>

<!-- ============ COURSES LIST ============ -->
<section style="padding: 80px 0; background: var(--n50);">
  <div class="wrap" style="display: grid; grid-template-columns: 280px 1fr; gap: 40px;">
    <!-- Sidebar -->
    <aside style="background: #fff; padding: 24px; border-radius: 24px; box-shadow: var(--shadow-sm); height: fit-content;">
      <h3 data-en="Filters" style="margin-bottom: 20px;">التصنيفات</h3>
      <div style="margin-bottom: 20px;">
        <h4 data-en="Subject" style="font-size: 15px; color: var(--muted); margin-bottom: 10px;">المادة</h4>
        <label style="display: block; margin-bottom: 8px;"><input type="checkbox"> رياضيات</label>
        <label style="display: block; margin-bottom: 8px;"><input type="checkbox"> فيزياء</label>
        <label style="display: block; margin-bottom: 8px;"><input type="checkbox"> كيمياء</label>
      </div>
      <div>
        <h4 data-en="Level" style="font-size: 15px; color: var(--muted); margin-bottom: 10px;">المرحلة</h4>
        <label style="display: block; margin-bottom: 8px;"><input type="checkbox"> السادس الإعدادي</label>
        <label style="display: block; margin-bottom: 8px;"><input type="checkbox"> الثالث المتوسط</label>
      </div>
    </aside>
    
    <!-- Grid -->
    <div>
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px;">
        <!-- Card 1 -->
        <div style="background: #fff; border-radius: 20px; overflow: hidden; box-shadow: var(--shadow-sm); transition: 0.3s;" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform='none'">
          <div style="height: 160px; background: linear-gradient(120deg, var(--primary), var(--primary-dark)); display: flex; align-items: center; justify-content: center; color: #fff;">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
          </div>
          <div style="padding: 20px;">
            <span class="eyebrow" data-en="Math">رياضيات</span>
            <h3 style="margin: 12px 0 8px; font-size: 18px;" data-en="Math - 6th Grade">رياضيات السادس العلمي</h3>
            <p style="color: var(--muted); font-size: 14px; margin-bottom: 16px;" data-en="Comprehensive course for 6th grade math.">دورة متكاملة لتغطية منهج السادس العلمي بالكامل مع اختبارات دورية.</p>
            <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--n100); padding-top: 16px;">
              <span style="font-weight: 600; color: var(--primary);">IQD 50,000</span>
              <a href="#" class="btn btn-primary" style="padding: 8px 16px; font-size: 13px;" data-en="Enroll">اشترك الآن</a>
            </div>
          </div>
        </div>
        <!-- Card 2 -->
        <div style="background: #fff; border-radius: 20px; overflow: hidden; box-shadow: var(--shadow-sm); transition: 0.3s;" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform='none'">
          <div style="height: 160px; background: linear-gradient(120deg, var(--secondary), #e85d00); display: flex; align-items: center; justify-content: center; color: #fff;">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
          </div>
          <div style="padding: 20px;">
            <span class="eyebrow orange" data-en="Physics">فيزياء</span>
            <h3 style="margin: 12px 0 8px; font-size: 18px;" data-en="Physics - 6th Grade">فيزياء السادس العلمي</h3>
            <p style="color: var(--muted); font-size: 14px; margin-bottom: 16px;" data-en="Detailed physics concepts with practical examples.">شرح مفصل ومبسط للفيزياء مع أمثلة وحلول أسئلة وزارية.</p>
            <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--n100); padding-top: 16px;">
              <span style="font-weight: 600; color: var(--primary);">IQD 45,000</span>
              <a href="#" class="btn btn-primary" style="padding: 8px 16px; font-size: 13px;" data-en="Enroll">اشترك الآن</a>
            </div>
          </div>
        </div>
        <!-- Card 3 -->
        <div style="background: #fff; border-radius: 20px; overflow: hidden; box-shadow: var(--shadow-sm); transition: 0.3s;" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform='none'">
          <div style="height: 160px; background: linear-gradient(120deg, #0ea672, #22c58b); display: flex; align-items: center; justify-content: center; color: #fff;">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          </div>
          <div style="padding: 20px;">
            <span class="eyebrow" style="color:#0ea672; background:#e6f7f0;" data-en="Chemistry">كيمياء</span>
            <h3 style="margin: 12px 0 8px; font-size: 18px;" data-en="Chemistry - 3rd Grade">كيمياء الثالث المتوسط</h3>
            <p style="color: var(--muted); font-size: 14px; margin-bottom: 16px;" data-en="Interactive chemistry lessons.">أساسيات الكيمياء بأسلوب تفاعلي لطلاب الثالث المتوسط.</p>
            <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--n100); padding-top: 16px;">
              <span style="font-weight: 600; color: var(--primary);">IQD 30,000</span>
              <a href="#" class="btn btn-primary" style="padding: 8px 16px; font-size: 13px;" data-en="Enroll">اشترك الآن</a>
            </div>
          </div>
        </div>
        <!-- Generate more cards for aesthetics -->
      </div>
    </div>
  </div>
</section>
"""

teachers_body = """
<!-- ============ HERO ============ -->
<section class="hero" style="min-height: 40vh; padding-top: 150px; padding-bottom: 50px;">
  <div class="wrap" style="position:relative; z-index:2; text-align:center;">
    <h1 data-en="Our Teachers">نخبة <span class="accent" data-en="Teachers">الأساتذة</span></h1>
    <p class="hero-sub" style="margin: 0 auto 30px;" data-en="Learn from the best educators in Iraq.">تعلم من أفضل وأمهر الأساتذة على مستوى العراق.</p>
  </div>
  <div class="hero-bg"><div class="hero-grid"></div></div>
</section>

<!-- ============ TEACHERS GRID ============ -->
<section style="padding: 80px 0; background: var(--white);">
  <div class="wrap">
    <!-- Filter Tabs -->
    <div style="display:flex; justify-content:center; gap:10px; margin-bottom: 50px; flex-wrap:wrap;">
      <button class="btn btn-primary" data-en="All">الكل</button>
      <button class="btn btn-ghost" data-en="Math">الرياضيات</button>
      <button class="btn btn-ghost" data-en="Physics">الفيزياء</button>
      <button class="btn btn-ghost" data-en="Chemistry">الكيمياء</button>
      <button class="btn btn-ghost" data-en="English">الإنكليزي</button>
    </div>

    <!-- Grid -->
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 30px;">
      <!-- Teacher 1 -->
      <article style="background: var(--n50); border-radius: 24px; padding: 24px; text-align: center; transition: 0.3s;" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform='none'">
        <div style="width: 100px; height: 100px; margin: 0 auto 20px; border-radius: 50%; background: linear-gradient(120deg, var(--primary), var(--primary-dark)); padding: 4px;">
          <div style="width: 100%; height: 100%; background: #fff; border-radius: 50%; display: grid; place-items: center; overflow: hidden;">
            <svg viewBox="0 0 130 150" fill="none" style="width: 80%; transform: translateY(10px);"><ellipse cx="65" cy="150" rx="55" ry="45" fill="#f0f0f0"/><circle cx="65" cy="70" r="34" fill="#ffd9b8"/><path d="M31 64a34 34 0 0168 0v-8a34 34 0 00-68 0z" fill="#161616"/><circle cx="53" cy="72" r="3.5" fill="#161616"/><circle cx="77" cy="72" r="3.5" fill="#161616"/><path d="M56 86q9 7 18 0" stroke="#161616" stroke-width="3" stroke-linecap="round" fill="none"/></svg>
          </div>
        </div>
        <h3 style="margin-bottom: 8px;" data-en="Dr. Ali Hussein">د. علي حسين</h3>
        <p style="color: var(--primary); font-weight: 600; font-size: 14px; margin-bottom: 16px;" data-en="Mathematics">الرياضيات</p>
        <div style="display: flex; justify-content: space-around; font-size: 13px; color: var(--muted); margin-bottom: 20px;">
          <div><b style="display:block; color:var(--ink); font-size:16px;">12</b><span data-en="Years">سنة خبرة</span></div>
          <div><b style="display:block; color:var(--ink); font-size:16px;">8.4k</b><span data-en="Students">طالب</span></div>
        </div>
        <button class="btn btn-ghost" style="width: 100%; justify-content: center;" data-en="Profile">عرض الملف</button>
      </article>

      <!-- Teacher 2 -->
      <article style="background: var(--n50); border-radius: 24px; padding: 24px; text-align: center; transition: 0.3s;" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform='none'">
        <div style="width: 100px; height: 100px; margin: 0 auto 20px; border-radius: 50%; background: linear-gradient(120deg, var(--secondary), #e85d00); padding: 4px;">
          <div style="width: 100%; height: 100%; background: #fff; border-radius: 50%; display: grid; place-items: center; overflow: hidden;">
            <svg viewBox="0 0 130 150" fill="none" style="width: 80%; transform: translateY(10px);"><ellipse cx="65" cy="150" rx="55" ry="45" fill="#f0f0f0"/><circle cx="65" cy="70" r="34" fill="#ffd9b8"/><path d="M31 64a34 34 0 0168 0v-8a34 34 0 00-68 0z" fill="#ff6700"/><circle cx="53" cy="72" r="3.5" fill="#161616"/><circle cx="77" cy="72" r="3.5" fill="#161616"/><path d="M56 86q9 7 18 0" stroke="#161616" stroke-width="3" stroke-linecap="round" fill="none"/></svg>
          </div>
        </div>
        <h3 style="margin-bottom: 8px;" data-en="T. Zainab Kadhim">أ. زينب كاظم</h3>
        <p style="color: var(--secondary); font-weight: 600; font-size: 14px; margin-bottom: 16px;" data-en="Chemistry">الكيمياء</p>
        <div style="display: flex; justify-content: space-around; font-size: 13px; color: var(--muted); margin-bottom: 20px;">
          <div><b style="display:block; color:var(--ink); font-size:16px;">9</b><span data-en="Years">سنوات خبرة</span></div>
          <div><b style="display:block; color:var(--ink); font-size:16px;">6.1k</b><span data-en="Students">طالب</span></div>
        </div>
        <button class="btn btn-ghost" style="width: 100%; justify-content: center;" data-en="Profile">عرض الملف</button>
      </article>

      <!-- Generate more teachers as needed -->
    </div>
  </div>
</section>

<!-- ============ JOIN CTA ============ -->
<section style="padding: 80px 0; background: linear-gradient(135deg, var(--primary), var(--primary-dark)); color: #fff; text-align: center;">
  <div class="wrap">
    <h2 style="font-size: 36px; margin-bottom: 20px;" data-en="Join as a Teacher">انضم إلى كادرنا التدريسي</h2>
    <p style="max-width: 600px; margin: 0 auto 30px; opacity: 0.9;" data-en="Are you an experienced educator? Join Mirmaz Academy and reach thousands of students across Iraq.">هل أنت أستاذ ذو خبرة وكفاءة؟ انضم إلى منصة مرماز أكاديمي وشارك في تعليم آلاف الطلبة في جميع أنحاء العراق.</p>
    <button class="btn" style="background: #fff; color: var(--primary);" data-en="Apply Now">قدم طلب انضمام</button>
  </div>
</section>
"""

sections_body = """
<!-- ============ HERO ============ -->
<section class="hero" style="min-height: 40vh; padding-top: 150px; padding-bottom: 50px;">
  <div class="wrap" style="position:relative; z-index:2; text-align:center;">
    <h1 data-en="Educational Sections">الأقسام <span class="accent" data-en="Educational">الدراسية</span></h1>
    <p class="hero-sub" style="margin: 0 auto 30px;" data-en="Explore our academic stages and specialized courses.">رحلتك التعليمية متكاملة معنا، من الابتدائية وحتى الجامعة.</p>
  </div>
  <div class="hero-bg"><div class="hero-grid"></div></div>
</section>

<!-- ============ ACADEMIC STAGES ============ -->
<section style="padding: 80px 0; background: var(--n50);">
  <div class="wrap">
    <div class="sec-head">
      <h2 data-en="Academic Stages">المراحل الأكاديمية</h2>
      <p data-en="Choose your stage to see available courses.">اختر مرحلتك الدراسية للوصول إلى الدورات المناسبة لك.</p>
    </div>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px;">
      <!-- Stage 1 -->
      <div style="background: #fff; border-radius: 24px; padding: 30px; text-align: center; box-shadow: var(--shadow-sm); transition: 0.3s;" onmouseover="this.style.transform='translateY(-10px)'" onmouseout="this.style.transform='none'">
        <div style="width: 80px; height: 80px; background: var(--primary-soft); color: var(--primary); border-radius: 20px; display: grid; place-items: center; margin: 0 auto 20px;">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
        </div>
        <h3 style="font-size: 24px; margin-bottom: 10px;" data-en="Primary School">الابتدائي</h3>
        <p style="color: var(--muted); margin-bottom: 20px;" data-en="From 1st to 6th grade">من الأول وحتى السادس الابتدائي</p>
        <button class="btn btn-ghost" data-en="View Courses">عرض الدورات</button>
      </div>

      <!-- Stage 2 -->
      <div style="background: #fff; border-radius: 24px; padding: 30px; text-align: center; box-shadow: var(--shadow-sm); transition: 0.3s;" onmouseover="this.style.transform='translateY(-10px)'" onmouseout="this.style.transform='none'">
        <div style="width: 80px; height: 80px; background: var(--secondary-soft); color: var(--secondary); border-radius: 20px; display: grid; place-items: center; margin: 0 auto 20px;">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
        </div>
        <h3 style="font-size: 24px; margin-bottom: 10px;" data-en="Middle School">المتوسط</h3>
        <p style="color: var(--muted); margin-bottom: 20px;" data-en="From 1st to 3rd middle grade">من الأول وحتى الثالث المتوسط</p>
        <button class="btn btn-ghost" data-en="View Courses">عرض الدورات</button>
      </div>

      <!-- Stage 3 -->
      <div style="background: #fff; border-radius: 24px; padding: 30px; text-align: center; box-shadow: var(--shadow-sm); transition: 0.3s;" onmouseover="this.style.transform='translateY(-10px)'" onmouseout="this.style.transform='none'">
        <div style="width: 80px; height: 80px; background: #e6f7f0; color: #0ea672; border-radius: 20px; display: grid; place-items: center; margin: 0 auto 20px;">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
        </div>
        <h3 style="font-size: 24px; margin-bottom: 10px;" data-en="High School">الإعدادي</h3>
        <p style="color: var(--muted); margin-bottom: 20px;" data-en="From 4th to 6th grade">الرابع، الخامس، والسادس الإعدادي</p>
        <button class="btn btn-ghost" data-en="View Courses">عرض الدورات</button>
      </div>
      
      <!-- Stage 4 -->
      <div style="background: #fff; border-radius: 24px; padding: 30px; text-align: center; box-shadow: var(--shadow-sm); transition: 0.3s;" onmouseover="this.style.transform='translateY(-10px)'" onmouseout="this.style.transform='none'">
        <div style="width: 80px; height: 80px; background: #f3ebff; color: #7b3ff2; border-radius: 20px; display: grid; place-items: center; margin: 0 auto 20px;">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
        </div>
        <h3 style="font-size: 24px; margin-bottom: 10px;" data-en="University">الجامعي</h3>
        <p style="color: var(--muted); margin-bottom: 20px;" data-en="Specialized university courses">كورسات جامعية متخصصة</p>
        <button class="btn btn-ghost" data-en="View Courses">عرض الدورات</button>
      </div>
    </div>
  </div>
</section>
"""

offers_body = """
<!-- ============ HERO ============ -->
<section class="hero" style="min-height: 40vh; padding-top: 150px; padding-bottom: 50px;">
  <div class="wrap" style="position:relative; z-index:2; text-align:center;">
    <h1 data-en="Offers & Discounts">العروض <span class="accent" data-en="Special">الخاصة</span></h1>
    <p class="hero-sub" style="margin: 0 auto 30px;" data-en="Don't miss our latest offers and community campaigns.">لا تفوت أحدث عروضنا وحملاتنا لخدمة المجتمع العراقي.</p>
  </div>
  <div class="hero-bg"><div class="hero-grid"></div></div>
</section>

<!-- ============ CURRENT OFFERS ============ -->
<section style="padding: 80px 0; background: var(--white);">
  <div class="wrap">
    <div style="background: linear-gradient(135deg, var(--secondary), #e85d00); border-radius: 30px; padding: 50px; color: #fff; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 30px;">
      <div style="max-width: 500px;">
        <span class="eyebrow" style="background: rgba(255,255,255,0.2); color:#fff; margin-bottom: 15px;" data-en="Limited Time">لفترة محدودة</span>
        <h2 style="font-size: 40px; margin-bottom: 15px;" data-en="Back to School Offer">عرض العودة للمدارس!</h2>
        <p style="font-size: 18px; opacity: 0.9; margin-bottom: 25px;" data-en="Get 50% off on all annual subscriptions. Offer ends soon.">احصل على خصم 50% على جميع الاشتراكات السنوية للمراحل المنتهية.</p>
        <button class="btn" style="background: #fff; color: var(--secondary);" data-en="Get Offer Now">احصل على العرض الآن</button>
      </div>
      <div style="background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); padding: 30px; border-radius: 20px; text-align: center; min-width: 250px;">
        <p style="font-size: 18px; margin-bottom: 15px;" data-en="Offer ends in:">ينتهي العرض خلال:</p>
        <div style="display: flex; gap: 15px; justify-content: center;">
          <div><b style="font-size: 32px; line-height: 1;">03</b><span style="display:block; font-size: 12px; opacity: 0.8;" data-en="Days">أيام</span></div>
          <b style="font-size: 32px; line-height: 1;">:</b>
          <div><b style="font-size: 32px; line-height: 1;">14</b><span style="display:block; font-size: 12px; opacity: 0.8;" data-en="Hours">ساعة</span></div>
          <b style="font-size: 32px; line-height: 1;">:</b>
          <div><b style="font-size: 32px; line-height: 1;">45</b><span style="display:block; font-size: 12px; opacity: 0.8;" data-en="Mins">دقيقة</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============ CAMPAIGNS TIMELINE ============ -->
<section style="padding: 80px 0; background: var(--n50);">
  <div class="wrap">
    <div class="sec-head">
      <h2 data-en="Community Campaigns">حملاتنا المجتمعية</h2>
      <p data-en="A history of giving back to our community.">تاريخ من العطاء والمبادرات لدعم الطلبة في كل مكان.</p>
    </div>
    
    <div style="max-width: 800px; margin: 0 auto;">
      <!-- Timeline Item -->
      <div style="display: flex; gap: 20px; margin-bottom: 40px;">
        <div style="flex: none; width: 60px; height: 60px; background: var(--primary); color: #fff; border-radius: 50%; display: grid; place-items: center; font-weight: bold; font-size: 18px;">2024</div>
        <div style="background: #fff; padding: 30px; border-radius: 20px; box-shadow: var(--shadow-sm); flex: 1;">
          <h3 style="font-size: 22px; margin-bottom: 10px; color: var(--primary);" data-en="Free Subscriptions for Orphans">اشتراكات مجانية للأيتام</h3>
          <p style="color: var(--muted); line-height: 1.8;" data-en="We distributed over 10,000 free subscriptions to orphans across Iraq to support their education.">توزيع أكثر من 10,000 اشتراك مجاني للطلبة الأيتام في مختلف محافظات العراق دعماً لمسيرتهم التعليمية.</p>
        </div>
      </div>
      <!-- Timeline Item -->
      <div style="display: flex; gap: 20px; margin-bottom: 40px;">
        <div style="flex: none; width: 60px; height: 60px; background: var(--secondary); color: #fff; border-radius: 50%; display: grid; place-items: center; font-weight: bold; font-size: 18px;">2023</div>
        <div style="background: #fff; padding: 30px; border-radius: 20px; box-shadow: var(--shadow-sm); flex: 1;">
          <h3 style="font-size: 22px; margin-bottom: 10px; color: var(--secondary);" data-en="Top Students Rewards">تكريم الأوائل</h3>
          <p style="color: var(--muted); line-height: 1.8;" data-en="A huge event rewarding top students of Mirmaz Academy with valuable prizes.">حفل تكريم ضخم لطلبة مرماز الأوائل على العراق وتوزيع جوائز قيمة تقديراً لجهودهم وتفوقهم.</p>
        </div>
      </div>
    </div>
  </div>
</section>
"""

write_page("courses.html", "الدورات", courses_body)
write_page("teachers.html", "الأساتذة", teachers_body)
write_page("sections.html", "الأقسام", sections_body)
write_page("offers.html", "العروض", offers_body)
