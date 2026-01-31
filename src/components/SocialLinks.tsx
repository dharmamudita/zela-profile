'use client';
import { motion } from 'framer-motion';
import { Instagram, Coffee, Heart } from 'lucide-react';

const socials = [
    {
        icon: <Instagram size={24} />,
        href: 'https://www.instagram.com/_.zeeelaa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
        label: 'Instagram',
        color: 'hover:text-pink-500 hover:border-pink-500/50 hover:bg-pink-500/10'
    },
    {
        // TikTok Icon (Custom SVG since it might be missing in basic icon sets)
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
            </svg>
        ),
        href: 'https://www.tiktok.com/@zelaeira?_r=1&_t=ZS-93XZnUC10xG',
        label: 'TikTok',
        color: 'hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-400/10'
    },
    {
        icon: <Coffee size={24} />,
        href: 'https://trakteer.id/zelaeiira',
        label: 'Trakteer',
        color: 'hover:text-red-500 hover:border-red-500/50 hover:bg-red-500/10'
    },
];

const SocialLinks = () => {
    return (
        <section className="py-12 flex flex-col items-center z-10 relative">
            <h3 className="text-xl font-bold text-gray-400 mb-6 tracking-widest uppercase">Follow My Journey</h3>
            <div className="flex gap-6 flex-wrap justify-center bg-black/40 backdrop-blur-xl p-6 rounded-full border border-white/5 shadow-2xl">
                {socials.map((social, index) => (
                    <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`
                            p-4 rounded-full border border-white/5 bg-white/5 text-gray-300 transition-all duration-300
                            ${social.color} group relative
                        `}
                    >
                        {social.icon}
                        <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 px-2 py-1 rounded text-white whitespace-nowrap pointer-events-none">
                            {social.label}
                        </span>
                    </motion.a>
                ))}
            </div>
        </section>
    );
};

export default SocialLinks;
