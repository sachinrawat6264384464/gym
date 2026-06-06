import React from 'react';
import { motion } from 'framer-motion';

const Map = () => {
    return (
        <section id="location" className="py-24 bg-black relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-secondary font-bebas text-2xl tracking-[0.3em] mb-4">Our Battleground</h2>
                    <h3 className="text-6xl font-black uppercase">Find <span className="text-secondary">Us</span></h3>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative w-full h-[500px] border-2 border-secondary/20 grayscale hover:grayscale-0 transition-all duration-700"
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15082.903828345714!2d72.8687391!3d19.0713894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c87029519197%3A0xe543fa0a38d82136!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1703954000000!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="filter invert-[90%] hue-rotate-180 contrast-125"
                    ></iframe>

                    {/* Decorative frame overlay */}
                    <div className="absolute inset-0 pointer-events-none border-[20px] border-primary/40"></div>
                    <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-secondary -translate-x-2 -translate-y-2"></div>
                    <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-secondary translate-x-2 translate-y-2"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Map;
