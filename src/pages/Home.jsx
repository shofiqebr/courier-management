import React from 'react';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Pricing from '../components/Pricing';
import CTA from '../components/CTA';
import Newsletter from '../components/Newsletter';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <div>
           <Hero />
      <HowItWorks />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Newsletter />
      <Blog />
      <CTA/>
      <Contact />

        </div>
    );
};

export default Home;