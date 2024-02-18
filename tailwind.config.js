/** @type {import('tailwindcss').Config} */
import scrollbarPlugin from "tailwind-scrollbar";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: { scrollbar: {
            // Apply overflow hidden to hide the scrollbar
            'hide': { 'overflow': 'hidden' }
          }},
        screens: {
            phone: {max: "480px"},
            tab: {max: "991px"},
            laptop: {max: "1200px"},
            smPh: {max: "351px"},
        },
    },
    plugins: [scrollbarPlugin({ nocompatible: true }),],
};
