import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
    {
        name: 'Jonah Miller',
        role: 'Member since 2022',
        text: 'HULK GYM changed my life. The intensity here is unmatched. I gained 10kg of pure muscle in 6 months using their Pro plan and PT guidance.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
    },
    {
        name: 'Rebecca Thorne',
        role: 'Elite Athlete',
        text: 'As a competitive CrossFit athlete, I need equipment that can handle the abuse. HULK GYM has the best gear in the city and acommunity that pushes you.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
    },
    {
        name: 'David Chen',
        role: 'Weight Loss Journey',
        text: 'Lost 15kg in 4 months. The nutrition plans are actually sustainable and the trainers actually care about your progress. Best investment ever.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-24 bg-black relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-secondary font-bebas text-2xl tracking-[0.3em] mb-4">Success Stories</h2>
                    <h3 className="text-6xl font-black uppercase">Member <span className="text-secondary">Feedback</span></h3>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass-card relative flex flex-col items-center text-center pt-16"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="relative">
                                    <img src={item.image} alt={item.name} className="w-24 h-24 rounded-full border-4 border-secondary object-cover" />
                                    <div className="absolute -bottom-2 -right-2 bg-secondary p-2 rounded-full text-black">
                                        <Quote size={16} />
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-1 mb-6">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} className="text-secondary fill-secondary w-4 h-4" />
                                ))}
                            </div>

                            <p className="text-white/70 italic mb-8 leading-relaxed">"{item.text}"</p>

                            <div className="mt-auto">
                                <h4 className="text-xl font-bebas tracking-wider text-white">{item.name}</h4>
                                <p className="text-secondary/60 uppercase font-bold text-xs tracking-widest">{item.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
