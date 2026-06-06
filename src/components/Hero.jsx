import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Image with Parallax effect */}
            <div
                className="absolute inset-0 z-0 brightness-50"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1920')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
            />

            {/* Hulk Model Blend (Realistic Fitness) */}
            <div className="absolute inset-0 z-10 opacity-30 mix-blend-overlay">
                {/* Placeholder for Hulk Image */}
                <div className="w-full h-full bg-gradient-to-t from-primary via-transparent to-primary"></div>
            </div>

            <div className="container mx-auto px-6 relative z-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-secondary font-bold tracking-[0.5em] uppercase text-xl mb-4 text-glow">
                        Unleash the Beast
                    </h2>
                    <h1 className="text-7xl md:text-9xl font-black uppercase mb-6 leading-tight">
                        NO PAIN. <br />
                        <span className="text-secondary">NO GAIN.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-10 font-bold uppercase tracking-wider">
                        TRANSFORM YOUR BODY. TRANSFORM YOUR LIFE.
                    </p>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <button className="btn-neon text-lg px-12 py-4">Join Now</button>
                        <button className="btn-outline text-lg px-12 py-4">Get Free Trial</button>
                    </div>
                </motion.div>
            </div>

            {/* Heartbeat pulse effect element */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
                <div className="w-[2px] h-20 bg-gradient-to-t from-secondary to-transparent"></div>
                <p className="text-secondary font-bebas tracking-widest text-sm animate-pulse-slow">Scroll Move</p>
            </div>
        </section>
    );
};

export default Hero;
