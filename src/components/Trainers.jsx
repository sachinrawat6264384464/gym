import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const trainers = [
    {
        name: 'Marcus "Hulk" Stone',
        role: 'Head Bodybuilder',
        experience: '12 Years',
        image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fe?auto=format&fit=crop&q=80&w=800'
    },
    {
        name: 'Sarah "The Shield" Vance',
        role: 'CrossFit Specialist',
        experience: '8 Years',
        image: 'https://images.unsplash.com/photo-1548690312-e3b507d17a4d?auto=format&fit=crop&q=80&w=800'
    },
    {
        name: 'Leon "Titan" Rossi',
        role: 'Strength Coach',
        experience: '15 Years',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800'
    }
];

const Trainers = () => {
    return (
        <section id="trainers" className="py-24 bg-primary relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-secondary font-bebas text-2xl tracking-[0.3em] mb-4">The Council</h2>
                    <h3 className="text-6xl font-black uppercase">Expert <span className="text-secondary">Trainers</span></h3>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {trainers.map((trainer, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative"
                        >
                            <div className="relative overflow-hidden aspect-[3/4]">
                                <img
                                    src={trainer.image}
                                    alt={trainer.name}
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>

                                {/* Social Floating Icons */}
                                <div className="absolute top-6 right-6 flex flex-col gap-4 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                                    <a href="#" className="bg-secondary p-2 rounded-full text-black hover:bg-white transition-colors"><Instagram size={20} /></a>
                                    <a href="#" className="bg-secondary p-2 rounded-full text-black hover:bg-white transition-colors"><Twitter size={20} /></a>
                                    <a href="#" className="bg-secondary p-2 rounded-full text-black hover:bg-white transition-colors"><Facebook size={20} /></a>
                                </div>
                            </div>

                            <div className="absolute -bottom-6 left-6 right-6 bg-black p-6 border-b-4 border-secondary shadow-2xl">
                                <h4 className="text-2xl font-bebas text-white mb-1 tracking-wider">{trainer.name}</h4>
                                <div className="flex justify-between items-center text-sm font-bold uppercase tracking-widest">
                                    <span className="text-secondary">{trainer.role}</span>
                                    <span className="text-white/40">{trainer.experience}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Trainers;
