import React from 'react';
import Header from '../sections/Header';
import Hero from '../sections/Hero';
import Ticker from '../components/Ticker';
import Stats from '../sections/Stats';
import Identity from '../sections/Identity';
import Statement from '../sections/Statement';
import Departments from '../sections/Departments';
import AdBanners from '../sections/AdBanners';
import Campaigns from '../sections/Campaigns';
import Teachers from '../sections/Teachers';
import Partners from '../sections/Partners';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        {/* 2. Hero */}
        <Hero />
        
        {/* 3. Stats */}
        <div className="section-light">
          <Stats />
        </div>
        
        {/* 4. Identity */}
        <Identity />
        
        {/* 5. Statement */}
        <Statement />
        
        {/* 6. Ticker */}
        <Ticker />
        
        {/* 7. Departments */}
        <div className="section-light">
          <Departments />
        </div>
        
        {/* 8. AdBanners */}
        <AdBanners />
        
        {/* 9. Campaigns */}
        <div className="section-light">
          <Campaigns />
        </div>
        
        {/* 10. Teachers */}
        <Teachers />
        
        {/* 11. Partners */}
        <div className="section-light">
          <Partners />
        </div>
        
        {/* 12. Ticker */}
        <Ticker />
        
        {/* 13. Contact */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
