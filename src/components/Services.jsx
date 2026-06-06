import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Flame, Trophy, HeartPulse, Apple } from 'lucide-react';

const programs = [
    {
        icon: <Zap className="w-10 h-10" />,
        title: 'Bodybuilding',
        desc: 'Hypertrophy focused training for massive muscle growth.',
        image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2adfcd?auto=format&fit=crop&q=80&w=800'
    },
    {
        icon: <ShieldCheck className="w-10 h-10" />,
        title: 'Strength Training',
        desc: 'Master the big lifts and build explosive raw power.',
        image: 'https://images.unsplash.com/photo-1541534741688-6078c64b5903?auto=format&fit=crop&q=80&w=800'
    },
    {
        icon: <Flame className="w-10 h-10" />,
        title: 'Fat Loss',
        desc: 'High-intensity conditioning to incinerate body fat.',
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800'
    },
    {
        icon: <Trophy className="w-10 h-10" />,
        title: 'MMA / CrossFit',
        desc: 'Functional combat and endurance training for peak performance.',
        image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&q=80&w=800'
    },
    {
        icon: <HeartPulse className="w-10 h-10" />,
        title: 'Personal Training',
        desc: '1-on-1 coaching tailored to your specific goals.',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800'
    },
    {
        icon: <Apple className="w-10 h-10" />,
        title: 'Diet & Nutrition',
        desc: 'Customized fuel plans to maximize your gains.',
        image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=800'
    },
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-black relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-secondary font-bebas text-2xl tracking-[0.3em] mb-4">Master Your Craft</h2>
                    <h3 className="text-6xl font-black uppercase">Our <span className="text-secondary">Programs</span></h3>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {programs.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative overflow-hidden glass-card p-0"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 brightness-50 group-hover:brightness-75"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-60"></div>
                                <div className="absolute top-6 left-6 text-secondary bg-black/50 p-3 backdrop-blur-sm rounded-full">
                                    {item.icon}
                                </div>
                            </div>
                            <div className="p-8">
                                <h4 className="text-3xl font-bebas tracking-wide mb-4 text-white group-hover:text-secondary transition-colors">
                                    {item.title}
                                </h4>
                                <p className="text-white/60 mb-6 font-medium">
                                    {item.desc}
                                </p>
                                <a href="#" className="text-secondary font-bold uppercase tracking-widest text-sm flex items-center gap-2 hover:gap-4 transition-all">
                                    Learn More <span className="text-xl">→</span>
                                </a>
                            </div>
                            {/* Glow effect on hover */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-secondary transition-all duration-500 pointer-events-none opacity-0 group-hover:opacity-100 shadow-[inset_0_0_30px_rgba(57,255,20,0.2)]"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
