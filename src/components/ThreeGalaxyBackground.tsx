'use client';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

// Meteor Component based on UI Bits / Aceternity
const Meteors = ({ number = 20 }: { number?: number }) => {
    const [meteors, setMeteors] = useState<number[]>([]);

    useEffect(() => {
        const meteorStyles = new Array(number).fill(true).map(() => Math.floor(Math.random() * 100)); // Generate IDs
        setMeteors(meteorStyles);
    }, [number]);

    return (
        <>
            {meteors.map((el, idx) => (
                <span
                    key={"meteor" + idx}
                    style={{
                        top: Math.floor(Math.random() * 100) + "%", // Random top position
                        left: Math.floor(Math.random() * 100) + "%", // Random left position
                        animationDelay: Math.random() * 2 + 0.2 + "s",
                        animationDuration: Math.floor(Math.random() * 10 + 20) + "s",
                    }}
                    className={cn(
                        "animate-meteor absolute h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
                        "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
                        "z-0"
                    )}
                />
            ))}
        </>
    );
};

const ThreeGalaxyBackground = () => {
    // Generate static stars for background depth
    const [starStyles, setStarStyles] = useState<{ small: string, medium: string, large: string } | null>(null);

    useEffect(() => {
        const generateBoxShadow = (n: number) => {
            let value = `${Math.random() * 2000}px ${Math.random() * 2000}px #FFF`;
            for (let i = 2; i <= n; i++) {
                value += `, ${Math.random() * 2000}px ${Math.random() * 2000}px #FFF`;
            }
            return value;
        };
        setStarStyles({
            small: generateBoxShadow(700),
            medium: generateBoxShadow(200),
            large: generateBoxShadow(100)
        });
    }, []);

    if (!starStyles) return <div className="fixed inset-0 bg-slate-950 -z-10" />;

    return (
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden bg-slate-950 -z-10">
            {/* Gradient Overlay for "Premium" Deep Space look */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#030014] to-black opacity-80 z-0" />

            {/* Static Stars Parallax */}
            <div className="stars opacity-30" style={{ boxShadow: starStyles.small }}></div>
            <div className="stars2 opacity-40" style={{ boxShadow: starStyles.medium }}></div>

            {/* Premium Meteors */}
            <Meteors number={15} />

            {/* CSS for Stars Only */}
            <style jsx global>{`
                .stars { width: 1px; height: 1px; background: transparent; animation: animStar 100s linear infinite; }
                .stars:after { content: " "; position: absolute; top: 2000px; width: 1px; height: 1px; background: transparent; box-shadow: inherit; }
                .stars2 { width: 2px; height: 2px; background: transparent; animation: animStar 150s linear infinite; }
                .stars2:after { content: " "; position: absolute; top: 2000px; width: 2px; height: 2px; background: transparent; box-shadow: inherit; }
                @keyframes animStar { from { transform: translateY(0px); } to { transform: translateY(-2000px); } }
            `}</style>
        </div>
    );
};

export default ThreeGalaxyBackground;
