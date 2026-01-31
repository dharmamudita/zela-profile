'use client';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
    const ref = useRef(null);

    // Updated stats based on the new bio
    const stats = [
        { label: "Height", value: "162 cm" },
        { label: "Weight", value: "55 kg" },
        { label: "Active Since", value: "2023" },
    ];

    // Updated skills/interests to match Cosplayer persona
    const interests = [
        "Cosplay", "Makeup", "Solo Traveling", "Fashion", "Content Creation", "Modeling"
    ];

    return (
        <section ref={ref} className="py-24 relative z-10 overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <span className="h-px w-10 bg-primary"></span>
                        <span className="text-primary tracking-widest uppercase text-sm font-bold">About Me</span>
                        <span className="h-px w-10 bg-primary"></span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                        Hi, nice to meet you! <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300">I’m Zela.</span>
                    </h2>

                    <div className="text-gray-300 text-lg leading-relaxed mb-10 max-w-2xl mx-auto space-y-6 font-light">
                        <p>
                            I’m a cosplayer from <strong className="text-white">Tasikmalaya, West Java</strong>, and I’m 162 cm tall with a weight of 55 kg.
                        </p>
                        <p>
                            I started actively cosplaying in 2023, though my interest actually began back in 2019. At that time, I was still figuring things out like where to get costumes and wigs, how to do makeup, and all the other technical details.
                        </p>
                        <p>
                            Besides cosplay, I also enjoy <strong className="text-white">solo traveling</strong>. I love visiting big cities because traveling gives me fresh inspiration and helps me grow through new experiences.
                        </p>
                        <p className="text-pink-300 italic">
                            Thank you for supporting me all this time. Please don’t get tired of supporting Zela, okay? {">"} _ {"<"} 💗
                        </p>
                    </div>

                    {/* Interests Tags */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {interests.map((item, i) => (
                            <span key={i} className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-sm hover:bg-pink-500/20 hover:border-pink-500/50 transition-colors cursor-default">
                                {item}
                            </span>
                        ))}
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-10 max-w-xl mx-auto">
                        {stats.map((stat, i) => (
                            <div key={i}>
                                <h4 className="text-2xl md:text-3xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-pink-200">{stat.value}</h4>
                                <p className="text-xs md:text-sm text-gray-500 uppercase tracking-widest">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default AboutSection;
