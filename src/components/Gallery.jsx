import React from 'react';
import { motion } from 'framer-motion';

const images = [
    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1541534741688-6078c64b5903?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1583454110551-21f2fa2adfcd?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1574673003875-4a2503a5b1f5?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&q=80&w=800',
];

const Gallery = () => {
    return (
        <section id="gallery" className="py-24 bg-primary relative overflow-hidden">
            {/* Parallax Background Element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 -skew-x-12 transform translate-x-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-secondary font-bebas text-2xl tracking-[0.3em] mb-4">The Grind</h2>
                        <h3 className="text-6xl font-black uppercase">Battleground <span className="text-secondary">Gallery</span></h3>
                    </div>
                    <p className="text-white/50 max-w-sm text-right font-medium uppercase tracking-widest text-sm">
                        Witness the sweat, the blood, and the final victory. Join the elite.
                    </p>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {images.map((img, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.4 }}
                            className="relative group overflow-hidden break-inside-avoid shadow-2xl"
                        >
                            <img
                                src={img}
                                alt={`Gym image ${idx + 1}`}
                                className="w-full grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/10 transition-colors pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black to-transparent">
                                <p className="text-secondary font-bebas text-xl">HULK INSPIRATION</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
