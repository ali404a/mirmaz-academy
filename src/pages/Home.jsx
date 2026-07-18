import React from 'react';
import Header from '../sections/Header';
import Hero from '../sections/Hero';
import Ticker from '../components/Ticker';
import Departments from '../sections/Departments';
import Statement from '../sections/Statement';
import Stats from '../sections/Stats';
import Identity from '../sections/Identity';
import Campaigns from '../sections/Campaigns';
import AdBanners from '../sections/AdBanners';
import Teachers from '../sections/Teachers';
import Partners from '../sections/Partners';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* Departments Tabs + Carousel */}
        <Departments />
        
        {/* Big Statement with diagonal stripe */}
        <Statement />
        
        {/* Marquee Ticker */}
        <Ticker />
        
        {/* Stats */}
        <Stats />
        
        {/* Identity (About + Why Mirmaz) */}
        <Identity />
        
        {/* Ad Banners Slider */}
        <AdBanners />
        
        {/* Campaigns (Popular Grid) */}
        <Campaigns />
        
        {/* Teachers */}
        <Teachers />
        
        {/* Partners (Branches style) */}
        <Partners />
        
        {/* Ticker Strip */}
        <Ticker />
        
        {/* Contact Form */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
