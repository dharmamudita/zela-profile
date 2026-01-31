'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Star, Sparkles, Camera, Heart, Zap, Skull } from 'lucide-react';

const DocumentationSection = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section id="gallery" ref={ref} className="py-32 px-8 relative z-10 overflow-hidden">
            <motion.div style={{ scale, opacity, y }} className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">
                        My <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-purple-400">Gallery</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        A glimpse into my cosplay journey — from Teyvat to your heart
                    </p>
                </div>

                {/* Content Grid - 2x2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Block 1 - Phoebe Wuthering Waves */}
                    <motion.div className="group">
                        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black/50 backdrop-blur-sm transition-transform duration-500 group-hover:-translate-y-2">
                            <img
                                src="/1.jpg"
                                alt="Phoebe Cosplay"
                                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end">
                                <h3 className="text-3xl font-bold mb-2">Phoebe</h3>
                                <p className="text-gray-300">Wuthering Waves</p>
                            </div>
                        </div>

                        <div className="flex gap-4 mt-6 flex-wrap">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-amber-300">
                                <Star size={16} /> <span>5 Star</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-cyan-300">
                                <Zap size={16} /> <span>Resonator</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Block 2 - Furina Maid Ver */}
                    <motion.div className="group">
                        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black/50 backdrop-blur-sm transition-transform duration-500 group-hover:-translate-y-2">
                            <img
                                src="/2.jpeg"
                                alt="Furina Maid Cosplay"
                                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end">
                                <h3 className="text-3xl font-bold mb-2">Furina Maid Ver.</h3>
                                <p className="text-gray-300">Genshin Impact</p>
                            </div>
                        </div>
                        <div className="flex gap-4 mt-6 flex-wrap">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-blue-300">
                                <Heart size={16} /> <span>Hydro Archon</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white">
                                <Camera size={16} /> <span>Maid Concept</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Block 3 - Osaragi */}
                    <motion.div className="group">
                        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black/50 backdrop-blur-sm transition-transform duration-500 group-hover:-translate-y-2">
                            <img
                                src="/3.jpg"
                                alt="Osaragi Cosplay"
                                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end">
                                <h3 className="text-3xl font-bold mb-2">Osaragi</h3>
                                <p className="text-gray-300">Sakamoto Days</p>
                            </div>
                        </div>
                        <div className="flex gap-4 mt-6 flex-wrap">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-red-300">
                                <Skull size={16} /> <span>Assassin</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300">
                                <Sparkles size={16} /> <span>Bridal Veil</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Block 4 - Reze Chainsaw Man */}
                    <motion.div className="group">
                        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black/50 backdrop-blur-sm transition-transform duration-500 group-hover:-translate-y-2">
                            <img
                                src="/4.jpg"
                                alt="Reze Cosplay"
                                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end">
                                <h3 className="text-3xl font-bold mb-2">Reze</h3>
                                <p className="text-gray-300">Chainsaw Man</p>
                            </div>
                        </div>
                        <div className="flex gap-4 mt-6 flex-wrap">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-orange-300">
                                <Skull size={16} /> <span>Bomb Devil</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-pink-300">
                                <Heart size={16} /> <span>Hybrid</span>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </motion.div>
        </section>
    );
};

export default DocumentationSection;
