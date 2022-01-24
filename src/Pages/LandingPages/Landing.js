import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Achivement from './Achivement';
import Hero from './Hero';
import Portfolio from './Portfolio';
import Service from './Service';
import Testimonials from './Testimonials';

const Landing = () => {
  return <div>
      <Navbar />
      <Hero />
      <Service />
      <Achivement />
      <Portfolio />
      <Testimonials />
      <Footer />
  </div>;
};

export default Landing;
