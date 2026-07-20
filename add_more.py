import os
import re

# Update courses.html
with open('courses.html', 'r', encoding='utf-8') as f:
    courses = f.read()

courses_card = """
        <div style="background: #fff; border-radius: 20px; overflow: hidden; box-shadow: var(--shadow-sm); transition: 0.3s;" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform='none'">
          <div style="height: 160px; background: linear-gradient(120deg, var(--primary), var(--primary-dark)); display: flex; align-items: center; justify-content: center; color: #fff;">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
          </div>
          <div style="padding: 20px;">
            <span class="eyebrow" data-en="Math">رياضيات</span>
            <h3 style="margin: 12px 0 8px; font-size: 18px;" data-en="Math - {grade} Grade">رياضيات {grade_ar}</h3>
            <p style="color: var(--muted); font-size: 14px; margin-bottom: 16px;" data-en="Comprehensive course for {grade} grade.">دورة متكاملة لتغطية منهج {grade_ar} بالكامل مع اختبارات دورية.</p>
            <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--n100); padding-top: 16px;">
              <span style="font-weight: 600; color: var(--primary);">IQD 50,000</span>
              <a href="#" class="btn btn-primary" style="padding: 8px 16px; font-size: 13px;" data-en="Enroll">اشترك الآن</a>
            </div>
          </div>
        </div>
"""
grid_html = "".join([courses_card.format(grade=i, grade_ar=f"الصف {i}") for i in range(1, 13)])
courses = re.sub(r'<!-- Grid -->.*?<!-- Generate more cards for aesthetics -->', f'<!-- Grid --><div><div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px;">\n{grid_html}\n</div></div>', courses, flags=re.DOTALL)
with open('courses.html', 'w', encoding='utf-8') as f:
    f.write(courses)


# Update teachers.html
with open('teachers.html', 'r', encoding='utf-8') as f:
    teachers = f.read()

teacher_card = """
      <article style="background: var(--n50); border-radius: 24px; padding: 24px; text-align: center; transition: 0.3s;" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform='none'">
        <div style="width: 100px; height: 100px; margin: 0 auto 20px; border-radius: 50%; background: linear-gradient(120deg, var(--primary), var(--primary-dark)); padding: 4px;">
          <div style="width: 100%; height: 100%; background: #fff; border-radius: 50%; display: grid; place-items: center; overflow: hidden;">
            <svg viewBox="0 0 130 150" fill="none" style="width: 80%; transform: translateY(10px);"><ellipse cx="65" cy="150" rx="55" ry="45" fill="#f0f0f0"/><circle cx="65" cy="70" r="34" fill="#ffd9b8"/><path d="M31 64a34 34 0 0168 0v-8a34 34 0 00-68 0z" fill="#161616"/><circle cx="53" cy="72" r="3.5" fill="#161616"/><circle cx="77" cy="72" r="3.5" fill="#161616"/><path d="M56 86q9 7 18 0" stroke="#161616" stroke-width="3" stroke-linecap="round" fill="none"/></svg>
          </div>
        </div>
        <h3 style="margin-bottom: 8px;" data-en="Teacher {i}">أستاذ {i}</h3>
        <p style="color: var(--primary); font-weight: 600; font-size: 14px; margin-bottom: 16px;" data-en="Subject">المادة</p>
        <div style="display: flex; justify-content: space-around; font-size: 13px; color: var(--muted); margin-bottom: 20px;">
          <div><b style="display:block; color:var(--ink); font-size:16px;">{y}</b><span data-en="Years">سنة خبرة</span></div>
          <div><b style="display:block; color:var(--ink); font-size:16px;">{s}k</b><span data-en="Students">طالب</span></div>
        </div>
        <button class="btn btn-ghost" style="width: 100%; justify-content: center;" data-en="Profile">عرض الملف</button>
      </article>
"""
teachers_html = "".join([teacher_card.format(i=i, y=i+2, s=i*2) for i in range(1, 13)])
teachers = re.sub(r'<!-- Grid -->.*?<!-- Generate more teachers as needed -->', f'<!-- Grid --><div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 30px;">\n{teachers_html}\n</div>', teachers, flags=re.DOTALL)
with open('teachers.html', 'w', encoding='utf-8') as f:
    f.write(teachers)
