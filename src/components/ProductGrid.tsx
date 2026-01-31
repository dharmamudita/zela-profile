'use client';
import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, ShoppingCart } from 'lucide-react';
import { MouseEvent, useRef, useState, useEffect } from 'react';

const products = [
    {
        id: 1,
        title: 'Zela First Set',
        category: 'Tokopedia',
        price: 'Shop Now',
        images: ['/photocard1.webp', '/photocard2.webp'], // 2 images that rotate
        color: 'from-green-400 to-green-600',
        link: 'https://tk.tokopedia.com/ZSfNnbcTm/',
        delay: 0 // Start immediately
    },
    {
        id: 2,
        title: 'Exclusive Card',
        category: 'TikTok Shop',
        price: 'Get Yours',
        images: ['/photocard2.webp', '/photocard1.webp'], // Reversed order so they don't sync
        color: 'from-gray-100 to-black',
        link: 'https://vt.tokopedia.com/t/ZSH3bnge2tfW6-ndX81/',
        delay: 1000 // 1 second offset
    },
    {
        id: 3,
        title: 'Limited Zela',
        category: 'Shopee',
        price: 'Order',
        images: ['/photocard1.webp', '/photocard2.webp'],
        color: 'from-orange-400 to-orange-600',
        link: 'https://id.shp.ee/2wprMLj',
        delay: 2000 // 2 second offset
    }
];

// Auto-rotating Image Component
function RotatingImage({ images, delay }: { images: string[], delay: number }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        let intervalId: NodeJS.Timeout | null = null;

        // Initial delay before starting rotation
        const startTimeout = setTimeout(() => {
            intervalId = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % images.length);
            }, 3000); // Change every 3 seconds
        }, delay);

        return () => {
            clearTimeout(startTimeout);
            if (intervalId) clearInterval(intervalId);
        };
    }, [images.length, delay]);

    return (
        <div className="relative w-full h-full">
            <AnimatePresence mode="wait">
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt="Photocard"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover absolute inset-0"
                />
            </AnimatePresence>
        </div>
    );
}

// Reusable Card with Spotlight Effect
function SpotlightCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className={`group relative border border-white/10 bg-gray-900/40 overflow-hidden rounded-xl ${className}`}
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                        650px circle at ${mouseX}px ${mouseY}px,
                        rgba(236, 72, 153, 0.15),
                        transparent 80%
                        )
                    `,
                }}
            />
            {children}
        </div>
    );
}

const ProductGrid = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

    return (
        <section ref={ref} className="py-32 px-4 max-w-7xl mx-auto relative z-10">
            <motion.div style={{ scale, opacity }}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-6xl font-black text-center mb-16"
                >
                    Photocard <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500">Collection</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <SpotlightCard key={product.id} className="h-full flex flex-col">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="h-full flex flex-col"
                            >
                                {/* Image Area with Auto-Rotation */}
                                <div className="relative h-96 overflow-hidden group-hover:opacity-90 transition-opacity">
                                    <RotatingImage images={product.images} delay={product.delay} />
                                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white border border-white/10 flex items-center gap-1 z-10">
                                        <Sparkles size={10} /> {product.category}
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-bold text-white">{product.title}</h3>
                                        <span className={`text-md font-bold bg-clip-text text-transparent bg-gradient-to-r ${product.color}`}>
                                            {product.price}
                                        </span>
                                    </div>

                                    <div className="w-full h-px bg-white/10 my-4 group-hover:bg-white/20 transition-colors"></div>

                                    <a
                                        href={product.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-auto w-full py-3 rounded-lg border border-pink-500/30 hover:bg-pink-500/20 transition-colors flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider group/btn text-pink-200"
                                    >
                                        Buy Card <ShoppingCart size={16} className="group-hover/btn:scale-110 transition-transform fill-pink-500/50" />
                                    </a>
                                </div>
                            </motion.div>
                        </SpotlightCard>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default ProductGrid;
