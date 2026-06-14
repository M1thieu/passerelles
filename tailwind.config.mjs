/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue:  '#1a3a5c',
          navy:  '#0f2340',
          gold:  '#d4a843',
          amber: '#e8b84b',
          cream: '#fdf8f0',
          warm:  '#f5efe3',
          terra: '#c17b3e',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'dots-world': "radial-gradient(circle, #d4a84340 1px, transparent 1px)",
      },
      backgroundSize: {
        'dots-world': '28px 28px',
      },
    },
  },
  plugins: [],
};
