/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'pat-blue': '#1e40af',
                'pat-dark': '#1e293b',
                'pat-light': '#f8fafc',
                'pat-accent': '#6366f1',
            }
        },
    },
    plugins: [],
}
