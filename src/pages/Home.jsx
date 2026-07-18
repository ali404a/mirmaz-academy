import React from 'react';
import Header from '../sections/Header';
import Hero from '../sections/Hero';
import Stats from '../sections/Stats';
import Identity from '../sections/Identity';
import AdBanners from '../sections/AdBanners';
import Campaigns from '../sections/Campaigns';
import EducationalMap from '../sections/EducationalMap';
import Departments from '../sections/Departments';
import Teachers from '../sections/Teachers';
import Partners from '../sections/Partners';
import Footer from '../sections/Footer';

const Home = () => {
  return (
    <div className="page-wrapper">
      <Header />
      <main>
        <Hero />
        {/* Stats placed right above Identity as requested */}
        <Stats />
        {/* Unified Identity section replacing WhyMirmaz and StoryCards */}
        <Identity />
        {/* New Ads Banner section */}
        <AdBanners />
        {/* Existing Campaigns (أحدث الكامبينات والعروض) */}
        <Campaigns />
        <EducationalMap />
        <Departments />
        <Teachers />
        {/* Partners Marquee below Teachers */}
        <Partners />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
