import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1a1712',
        paper: '#f7f2e6',
        panel: '#efe4cc',
        panel2: '#e6d8b8',
        pine: '#122c22',
        pine2: '#1d4436',
        pine3: '#2a5c48',
        brass: '#a97a2c',
        brasslight: '#e2c98c',
        oxblood: '#54151f',
        rust: '#8a4526',
        line: 'rgba(26,23,18,0.14)',
        lineSoft: 'rgba(26,23,18,0.08)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      maxWidth: {
        wrap: '1240px',
      },
      letterSpacing: {
        widest2: '0.18em',
      },
      boxShadow: {
        panel: '0 30px 60px -30px rgba(18,44,34,0.35)',
        card: '0 20px 45px -25px rgba(26,23,18,0.28)',
      },
      backgroundImage: {
        grain: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
export default config;
