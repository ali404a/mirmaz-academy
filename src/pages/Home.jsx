import React from 'react';
import Header from '../sections/Header';
import Hero from '../sections/Hero';

const Home = () => {
  return (
    <div className="page-wrapper">
      <Header />
      <main>
        <Hero />
        {/* Placeholder for next sections */}
        <section className="section section-bg-light" style={{ minHeight: '50vh' }}>
          <div className="container">
            <h2 className="section-title text-center">من هي مرماز؟</h2>
            <p className="text-center text-muted">جاري العمل على هذا القسم...</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
