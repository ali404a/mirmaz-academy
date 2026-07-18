import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-grid">
          
          {/* Form */}
          <motion.div
            className="contact-form-box"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="contact-form-title">اتصل بنا</h3>
            <div className="form-field">
              <input type="text" placeholder="الاسم الكامل" />
            </div>
            <div className="form-field">
              <input type="email" placeholder="البريد الإلكتروني" />
            </div>
            <div className="form-field">
              <input type="tel" placeholder="رقم الهاتف" />
            </div>
            <div className="form-field">
              <textarea placeholder="رسالتك..."></textarea>
            </div>
            <button className="btn-pill btn-pill-primary" style={{ width: '100%', justifyContent: 'center' }}>
              <Send size={16} />
              إرسال
            </button>
          </motion.div>

          {/* Thank You Box */}
          <motion.div
            className="thankyou-box"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="thankyou-title">شكراً لكم!</h3>
            <p className="thankyou-desc">
              نحن نعمل بجد لخدمتكم على مدار الساعة.
              <br />
              فريق مرماز سيتواصل معكم في أقرب وقت ممكن.
            </p>
          </motion.div>
        </div>

        {/* Background watermark text */}
        <div className="bg-watermark" style={{ marginTop: '3rem' }}>
          تواصل معنا
        </div>
      </div>
    </section>
  );
};

export default Contact;
