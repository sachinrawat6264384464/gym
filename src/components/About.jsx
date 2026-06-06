import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-primary relative overflow-hidden">
            {/* Background Decorative Text */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none select-none">
                <h2 className="text-[20rem] font-black text-white leading-none -ml-20">DISCIPLINE</h2>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative z-10 border-4 border-secondary p-4">
                            <img
                                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800"
                                alt="Gym Story"
                                className="w-full grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-secondary/30 -z-10"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-secondary font-bebas text-2xl tracking-[0.3em] mb-4">Our Story</h2>
                        <h3 className="text-5xl font-black uppercase mb-8 leading-tight">
                            We Build <span className="text-secondary">Monsters</span> Not Just Athletes
                        </h3>
                        <p className="text-white/60 text-lg mb-8 leading-relaxed">
                            Founded on the principles of raw power and unrelenting discipline, HULK GYM is more than just a fitness center. It's a sanctuary for those who refuse to settle for average. Our mission is to push you beyond your limits, to break your barriers, and to forge a version of you that is truly unstoppable.
                        </p>

                        <div className="glass-card mb-10 border-l-4 border-l-secondary">
                            <Quote className="text-secondary w-10 h-10 mb-4" />
                            <p className="text-2xl font-bebas italic tracking-wide text-white">
                                "Weakness is a choice. Every rep you skip is a step towards failure."
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-4xl font-black text-secondary mb-2">10+</h4>
                                <p className="text-white/50 uppercase tracking-widest text-sm font-bold">Years Experience</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-black text-secondary mb-2">500+</h4>
                                <p className="text-white/50 uppercase tracking-widest text-sm font-bold">Transformations</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
