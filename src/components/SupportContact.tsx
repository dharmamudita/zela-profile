'use client';
import { motion } from 'framer-motion';
import { Send, Heart } from 'lucide-react';

const SupportContact = () => {
    return (
        <section className="py-24 px-6 relative z-10 w-full max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-b from-pink-900/10 to-transparent rounded-full blur-3xl -z-10" />

            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden group">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-50"></div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-pink-400">
                        <Heart fill="currentColor" size={32} />
                    </div>

                    <h2 className="text-3xl md:text-5xl font-black mb-4">
                        Send Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Support</span>
                    </h2>

                    <p className="text-gray-400 mb-10 max-w-lg mx-auto">
                        Want to send a fan letter, request a specific cosplay, or just say hi?
                        Messages will be sent directly to <strong>zelaeiraaa@gmail.com</strong>
                    </p>

                    {/* FormSubmit.co Configuration */}
                    <form
                        action="https://formsubmit.co/zelaeiraaa@gmail.com"
                        method="POST"
                        className="max-w-md mx-auto space-y-4 text-left"
                    >
                        <input type="hidden" name="_subject" value="New Fan Message for Zela!" />
                        <input type="hidden" name="_template" value="box" />
                        <input type="hidden" name="_captcha" value="false" />

                        <div>
                            <label htmlFor="name-input" className="block text-sm font-bold text-gray-500 mb-2 uppercase tracking-wider">Your Name</label>
                            <input
                                id="name-input"
                                type="text"
                                name="name"
                                placeholder="Zela Fan"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email-input" className="block text-sm font-bold text-gray-500 mb-2 uppercase tracking-wider">Your Email</label>
                            <input
                                id="email-input"
                                type="email"
                                name="email"
                                placeholder="youremail@example.com"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="message-input" className="block text-sm font-bold text-gray-500 mb-2 uppercase tracking-wider">Message</label>
                            <textarea
                                id="message-input"
                                name="message"
                                placeholder="Keep up the great work, Zela!"
                                rows={4}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all resize-none"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:shadow-[0_0_40px_rgba(236,72,153,0.5)]"
                        >
                            <span>Send Message</span>
                            <Send size={18} />
                        </button>
                    </form>

                </motion.div>
            </div>
        </section>
    );
};

export default SupportContact;
