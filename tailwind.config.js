/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                galaxy: {
                    900: '#030014',
                    800: '#0b001a',
                },
                primary: {
                    DEFAULT: '#bb86fc',
                    neon: '#ff00ff'
                }
            },
            animation: {
                'meteor': 'meteor 5s linear infinite',
                'spin-slow': 'spin 10s linear infinite',
                'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                meteor: {
                    "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
                    "70%": { opacity: "1" },
                    "100%": {
                        transform: "rotate(215deg) translateX(-500px)",
                        opacity: "0",
                    },
                },
            },
        },
    },
    plugins: [],
}
