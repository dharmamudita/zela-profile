'use client';

import React, { useEffect, useRef } from 'react';

const GalaxyBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', resize);
        resize();

        // Star Class for 3D Projection
        class Star {
            x: number;
            y: number;
            z: number;
            px: number; // Previous x (for trails)
            py: number; // Previous y (for trails)

            constructor() {
                this.x = Math.random() * width - width / 2;
                this.y = Math.random() * height - height / 2;
                this.z = Math.random() * width; // Depth
                this.px = 0;
                this.py = 0;
            }

            update() {
                // Move star closer (decrease Z)
                this.z -= 2; // Speed of movement

                // Reset if it hits screen or goes behind
                if (this.z <= 0) {
                    this.z = width;
                    this.x = Math.random() * width - width / 2;
                    this.y = Math.random() * height - height / 2;
                    this.px = this.x;
                    this.py = this.y;
                }
            }

            show() {
                // Project 3D coordinates to 2D
                // Perspective formula: scree_x = x / z * distance_to_screen
                const dx = width / 2;
                const dy = height / 2;
                const sx = (this.x / this.z) * width + dx;
                const sy = (this.y / this.z) * width + dy;

                // Calculate size based on proximity (closer = bigger)
                const size = (1 - this.z / width) * 3;

                // Draw star
                ctx!.fillStyle = '#ffffff';
                ctx!.beginPath();
                // ctx.arc(sx, sy, size, 0, Math.PI * 2);
                // ctx.fill();

                // Draw trails (Warp effect)
                // Calculate previous position for line drawing
                const px = (this.x / (this.z + 10)) * width + dx;
                const py = (this.y / (this.z + 10)) * width + dy;

                ctx!.strokeStyle = `rgba(255, 255, 255, ${1 - this.z / width})`;
                ctx!.lineWidth = size;
                ctx!.beginPath();
                ctx!.moveTo(px, py);
                ctx!.lineTo(sx, sy);
                ctx!.stroke();
            }
        }

        const stars: Star[] = [];
        const starCount = 800;

        for (let i = 0; i < starCount; i++) {
            stars.push(new Star());
        }

        // Nebula/Gas (Static visuals to give color depth)
        // We create a gradient overlay approach for performance

        const animate = () => {
            // Clear screen with slight fade for trail enhancement (optional, but black is cleaner for warp)
            ctx.fillStyle = '#020008';
            ctx.fillRect(0, 0, width, height);

            // Draw centered subtle galaxy gradient
            const cx = width / 2;
            const cy = height / 2;

            const gradient = ctx.createRadialGradient(cx, cy, 100, cx, cy, width);
            gradient.addColorStop(0, 'rgba(20, 0, 50, 0.3)'); // Deep purple center
            gradient.addColorStop(0.5, 'rgba(0, 0, 0, 0)');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);

            // Stars
            for (let star of stars) {
                star.update();
                star.show();
            }

            requestAnimationFrame(animate);
        };

        const animationId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: -1,
                width: '100vw',
                height: '100vh',
            }}
        />
    );
};

export default GalaxyBackground;
