import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import MembershipPlans from './components/MembershipPlans';
import Trainers from './components/Trainers';
import Testimonials from './components/Testimonials';
import Map from './components/Map';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <main className="bg-primary min-h-screen text-white selection:bg-secondary selection:text-black">
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Gallery />
            <MembershipPlans />
            <Trainers />
            <Testimonials />
            <Map />
            <Contact />
            <Footer />
        </main>
    );
}

export default App;
