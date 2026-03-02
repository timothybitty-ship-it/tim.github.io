import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-charcoal': '#121212',
        'neon-volt': '#CEFF00',
        'glass-white': 'rgba(255, 255, 255, 0.1)',
        'glass-border': 'rgba(255, 255, 255, 0.15)',
      },
      backdropBlur: {
        'glass': '20px',
      },
      fontFamily: {
        'sans': ['Founders Grotesk', 'system-ui', 'sans-serif'],
        'display': ['Founders Grotesk', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      boxShadow: {
        'glow': '0 0 30px rgba(206, 255, 0, 0.3)',
        'glow-intense': '0 0 60px rgba(206, 255, 0, 0.5)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(206, 255, 0, 0.3)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 40px rgba(206, 255, 0, 0.6)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: 'calc(200% + 1px) 0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;