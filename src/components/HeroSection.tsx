'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Mail, Sparkles, Camera } from 'lucide-react';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

// Stagger letter effect
const StaggerText = ({ text, className = "" }: { text: string; className?: string }) => {
    return (
        <motion.span
            className={cn("inline-block", className)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
        >
            {text.split("").map((char, i) => (
                <motion.span
                    key={i}
                    variants={{
                        hidden: { opacity: 0, y: 50, rotateX: 90 },
                        visible: { opacity: 1, y: 0, rotateX: 0 }
                    }}
                    transition={{ type: "spring", damping: 10, stiffness: 100 }}
                    className="inline-block"
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </motion.span>
    )
}

const HeroSection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={containerRef} className="min-h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden perspective-1000">

            {/* Background Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/20 blur-[150px] rounded-full pointer-events-none opacity-40 z-0 animate-pulse-slow"></div>

            <motion.div
                style={{ y, opacity }}
                className="text-center z-10 relative"
            >
                <motion.div
                    initial={{ rotateY: 90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    transition={{ duration: 1.5, type: "spring" }}
                    className="mb-10 perspective-1000"
                >
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-white/20 shadow-[0_0_80px_rgba(236,72,153,0.6)] hover:scale-110 transition-transform duration-500 cursor-pointer group">
                        <img
                            src="/profil.jpg"
                            alt="Zela Profile"
                            className="w-full h-full object-cover group-hover:rotate-12 transition-transform duration-700"
                        />
                    </div>
                </motion.div>

                <h1 className="text-7xl md:text-9xl font-black mb-6 tracking-tighter uppercase leading-none mix-blend-overlay opacity-90">
                    <StaggerText text="ZELA" className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400" />
                </h1>

                <motion.p
                    initial={{ opacity: 0, letterSpacing: "0px" }}
                    animate={{ opacity: 1, letterSpacing: "5px" }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="text-lg md:text-xl text-pink-200 font-light tracking-[5px] uppercase mb-10 text-shadow-glow"
                >
                    Welcome to My Universe
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2 }}
                    className="flex gap-8 justify-center text-sm font-bold text-gray-400 mb-16"
                >
                    <span className="flex items-center gap-2 hover:text-white transition-colors duration-300 hover:scale-110 cursor-default"><MapPin size={14} className="text-pink-500" /> TASIKMALAYA</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 my-auto"></span>
                    <span className="flex items-center gap-2 hover:text-white transition-colors duration-300 hover:scale-110 cursor-default"><Mail size={14} className="text-pink-500" /> EST. 2023</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.2, type: "spring" }}
                    className="flex flex-col md:flex-row gap-6 justify-center items-center"
                >
                    {/* Premium Button 1 */}
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=zelaeiraaa@gmail.com" target="_blank" rel="noopener noreferrer" className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-tilt"></div>
                        <div className="relative relative px-8 py-4 bg-black rounded-full leading-none flex items-center gap-2 border border-white/10 group-hover:border-white/30 transition-colors">
                            <span className="text-white font-bold tracking-wider uppercase">Contact Me</span>
                            <Mail size={16} className="text-pink-400 group-hover:text-white transition-colors" />
                        </div>
                    </a>

                    {/* Premium Button 2 */}
                    <a href="#gallery" className="relative px-8 py-4 rounded-full bg-white/5 border border-white/10 overflow-hidden group hover:bg-white/10 transition-all duration-300">
                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
                        <span className="relative flex items-center gap-2 text-gray-300 font-bold tracking-wider uppercase group-hover:text-black transition-colors">
                            My Gallery <Camera size={16} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </a>
                </motion.div>

            </motion.div>

            <motion.div
                className="absolute bottom-10"
                animate={{ y: [0, 15, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-pink-400 to-transparent"></div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
