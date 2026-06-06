import React from 'react';
import { Dumbbell, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black py-20 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-2">
                        <div className="flex items-center gap-2 mb-8">
                            <Dumbbell className="text-secondary w-10 h-10" />
                            <span className="text-4xl font-bebas tracking-tighter text-white">
                                HULK<span className="text-secondary">GYM</span>
                            </span>
                        </div>
                        <p className="text-white/40 max-w-sm mb-8 leading-relaxed">
                            The ultimate destination for those who seek power, discipline, and absolute transformation. Join the elite ranks of HULK GYM.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="h-12 w-12 border border-white/10 flex items-center justify-center text-white/50 hover:bg-secondary hover:text-black hover:border-secondary transition-all">
                                <Instagram />
                            </a>
                            <a href="#" className="h-12 w-12 border border-white/10 flex items-center justify-center text-white/50 hover:bg-secondary hover:text-black hover:border-secondary transition-all">
                                <Twitter />
                            </a>
                            <a href="#" className="h-12 w-12 border border-white/10 flex items-center justify-center text-white/50 hover:bg-secondary hover:text-black hover:border-secondary transition-all">
                                <Facebook />
                            </a>
                            <a href="#" className="h-12 w-12 border border-white/10 flex items-center justify-center text-white/50 hover:bg-secondary hover:text-black hover:border-secondary transition-all">
                                <Youtube />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xl font-bebas text-white mb-8 tracking-widest">Opening Hours</h4>
                        <ul className="space-y-4 text-white/40 uppercase font-bold text-xs tracking-widest">
                            <li className="flex justify-between">
                                <span>Monday - Friday</span>
                                <span className="text-secondary">05:00 - 23:00</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Saturday</span>
                                <span className="text-secondary">06:00 - 20:00</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Sunday</span>
                                <span className="text-red-500">CLOSED</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-bebas text-white mb-8 tracking-widest">Newsletter</h4>
                        <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-6">Receive training tips & news</p>
                        <div className="flex h-12">
                            <input type="email" placeholder="EMAIL ADDRESS" className="bg-white/5 border border-white/10 px-4 outline-none flex-grow text-white text-xs" />
                            <button className="bg-secondary text-black font-black px-4 hover:bg-white transition-colors">OK</button>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/20 text-[10px] font-bold uppercase tracking-[0.3em]">
                    <p>© 2024 HULK GYM. ALL RIGHTS RESERVED.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-secondary">Privacy Policy</a>
                        <a href="#" className="hover:text-secondary">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
