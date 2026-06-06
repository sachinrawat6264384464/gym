import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-primary relative overflow-hidden">
            {/* Decorative pulse element */}
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] heartbeat-pulse"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-secondary font-bebas text-2xl tracking-[0.3em] mb-4">Get In Touch</h2>
                        <h3 className="text-6xl font-black uppercase mb-8">Ready to <span className="text-secondary">Transform?</span></h3>
                        <p className="text-white/60 mb-12 text-lg">
                            Don't wait for Monday. Start today. Send us a message or visit our battleground to start your journey.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group">
                                <div className="bg-secondary/10 p-4 border border-secondary/20 group-hover:bg-secondary group-hover:text-black transition-all">
                                    <Phone />
                                </div>
                                <div>
                                    <p className="text-white/40 uppercase font-bold text-xs tracking-widest mb-1">Call Us Now</p>
                                    <p className="text-xl font-bebas text-white tracking-widest">+91 98765 43210</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 group">
                                <div className="bg-secondary/10 p-4 border border-secondary/20 group-hover:bg-secondary group-hover:text-black transition-all">
                                    <Mail />
                                </div>
                                <div>
                                    <p className="text-white/40 uppercase font-bold text-xs tracking-widest mb-1">Email Support</p>
                                    <p className="text-xl font-bebas text-white tracking-widest">JOIN@HULKGYM.FIT</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 group">
                                <div className="bg-secondary/10 p-4 border border-secondary/20 group-hover:bg-secondary group-hover:text-black transition-all">
                                    <MapPin />
                                </div>
                                <div>
                                    <p className="text-white/40 uppercase font-bold text-xs tracking-widest mb-1">Location</p>
                                    <p className="text-xl font-bebas text-white tracking-widest">77 IRON STREET, METAL DISTRICT, MUMBAI</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-10"
                    >
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-white/50">Full Name</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-secondary transition-colors text-white" placeholder="JOHN DOE" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-white/50">Phone Number</label>
                                    <input type="tel" className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-secondary transition-colors text-white" placeholder="+91 XXXX XXXX" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-white/50">Fitness Goal</label>
                                <select className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-secondary transition-colors text-white appearance-none">
                                    <option className="bg-primary">Muscle Building</option>
                                    <option className="bg-primary">Fat Loss</option>
                                    <option className="bg-primary">Power Lifting</option>
                                    <option className="bg-primary">General Fitness</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-white/50">Message</label>
                                <textarea className="w-full bg-white/5 border border-white/10 p-4 h-32 outline-none focus:border-secondary transition-colors text-white resize-none" placeholder="TELL US YOUR STORY..."></textarea>
                            </div>
                            <button className="btn-neon w-full flex items-center justify-center gap-3">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Floating WhatsApp Button */}
            <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all animate-bounce"
            >
                <MessageCircle size={32} />
            </a>
        </section>
    );
};

export default Contact;
