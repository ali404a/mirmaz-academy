import React from 'react';
import Header from '../sections/Header';
import Hero from '../sections/Hero';
import StoryCards from '../sections/StoryCards';
import Stats from '../sections/Stats';
import WhyMirmaz from '../sections/WhyMirmaz';
import Campaigns from '../sections/Campaigns';
import EducationalMap from '../sections/EducationalMap';
import Departments from '../sections/Departments';
import Teachers from '../sections/Teachers';
import Footer from '../sections/Footer';

const Home = () => {
  return (
    <div className="page-wrapper">
      <Header />
      <main>
        <Hero />
        <StoryCards />
        <Stats />
        <Campaigns />
        <WhyMirmaz />
        <EducationalMap />
        <Departments />
        <Teachers />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
