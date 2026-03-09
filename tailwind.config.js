/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#D4AF37",
                "background-light": "#f8f6f6",
                "background-dark": "#0B0B0B",
                gold: '#d4af37',
                goldlight: '#f4d068',
                golddark: '#aa8828',
                finance: {
                    black: '#0a0a0a',
                    dark: '#141414',
                    gray: '#2a2a2a',
                    light: '#f5f5f5',
                }
            },
            fontFamily: {
                display: ["Public Sans", "sans-serif"],
                sans: ['Inter', 'sans-serif'],
                heading: ['Playfair Display', 'serif']
            }
        },
    },
    plugins: [],
}
