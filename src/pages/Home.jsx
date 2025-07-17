import React from 'react';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';

const Home = () => {
    return (
        <div>
            <Hero/>
            <HowItWorks/>
            <Features/>
        </div>
    );
};

export default Home;