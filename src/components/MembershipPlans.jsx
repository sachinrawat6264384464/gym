import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
    {
        name: 'Basic',
        price: '29',
        period: 'monthly',
        features: ['Unlimited Gym Access', 'Locker Room Facility', 'Free Orientation', 'Basic Fitness Assessment'],
        recommended: false
    },
    {
        name: 'Pro',
        price: '79',
        period: 'quarterly',
        features: ['Everything in Basic', 'Personal Trainer Support', 'Customized Diet Plan', 'Supplement Discounts', 'Group Classes'],
        recommended: true
    },
    {
        name: 'Elite',
        price: '249',
        period: 'yearly',
        features: ['Everything in Pro', 'Unlimited PT Sessions', 'Recovery Suite Access', 'Guest Passes', 'Merchandise Pack'],
        recommended: false
    },
];

const MembershipPlans = () => {
    return (
        <section id="membership" className="py-24 bg-black relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-secondary font-bebas text-2xl tracking-[0.3em] mb-4">Pricing Plans</h2>
                    <h3 className="text-6xl font-black uppercase">Choose Your <span className="text-secondary">Path</span></h3>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`relative glass-card p-10 flex flex-col ${plan.recommended ? 'border-2 border-secondary scale-105 z-10' : 'border border-white/10 opacity-80 hover:opacity-100 transition-opacity'}`}
                        >
                            {plan.recommended && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary text-black font-bold uppercase tracking-widest text-xs px-6 py-2">
                                    Best Value
                                </div>
                            )}

                            <h4 className="text-3xl font-bebas mb-2 text-white">{plan.name}</h4>
                            <div className="flex items-baseline gap-1 mb-8">
                                <span className="text-5xl font-black text-white">$</span>
                                <span className="text-7xl font-black text-secondary">{plan.price}</span>
                                <span className="text-white/50 uppercase font-bold text-sm">/ {plan.period}</span>
                            </div>

                            <div className="space-y-4 mb-10 flex-grow">
                                {plan.features.map((feature, fidx) => (
                                    <div key={fidx} className="flex items-center gap-3">
                                        <Check className="text-secondary w-5 h-5 flex-shrink-0" />
                                        <span className="text-white/70 text-sm font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button className={`${plan.recommended ? 'btn-neon shadow-[0_0_20px_rgba(57,255,20,0.5)]' : 'btn-outline'} w-full`}>
                                Select Plan
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MembershipPlans;
