'use client';
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useRef, MouseEvent } from 'react';

const projects = [
    { title: "Project Alpha", desc: "Next Gen Dashboard", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" },
    { title: "Neon Verse", desc: "3D Virtual Event", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop" },
    { title: "Cyber Core", desc: "AI Infrastructure", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop" }
];

const ParallaxGallery = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetRef });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);

    return (
        <section ref={targetRef} className="h-[300vh] relative">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-20 pl-20 pr-20">
                    {/* Title Card */}
                    <div className="flex-shrink-0 w-[40vw] h-[60vh] flex flex-col justify-center">
                        <h2 className="text-8xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-800 leading-[0.9]">
                            Selected <br /> Works
                        </h2>
                        <div className="w-24 h-2 bg-primary mt-8"></div>
                    </div>

                    {projects.map((proj, i) => (
                        <GalleryItem key={i} project={proj} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

const GalleryItem = ({ project }: { project: any }) => {
    return (
        <div className="group relative h-[60vh] w-[40vw] flex-shrink-0 overflow-hidden rounded-3xl border border-white/10 bg-gray-900/50 backdrop-blur-sm cursor-none">

            <img
                src={project.img}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-125 group-hover:grayscale-0 grayscale"
                alt={project.title}
            />

            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>

            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black via-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <h3 className="text-4xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-xl text-primary font-mono">{project.desc}</p>
            </div>

            {/* Hover Reveal Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-difference">
                <span className="text-6xl font-black text-white uppercase tracking-widest">View</span>
            </div>
        </div>
    )
}

export default ParallaxGallery;
