import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Collection from '../components/Collection';
import Roadmap from '../components/Roadmap';
import Team from '../components/Team';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

function Home() {
    return (
        <div>
            <Hero />
            <About />
            <Collection />
            <Roadmap />
            <Team />
            <FAQ />
            <Footer />
        </div>
    );
}

export default Home;