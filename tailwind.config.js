/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '420px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          red: '#C41E3A',
          'red-deep': '#8B0000',
          'red-light': '#E53E3E',
          black: '#0A0A0A',
          dark: '#111111',
          'dark-2': '#1A1A1A',
          'dark-3': '#242424',
          gold: '#B8860B',
          'gold-light': '#D4AF37',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-right': 'slideRight 0.7s ease-out forwards',
        'slide-left': 'slideLeft 0.7s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        'icon-pulse': 'iconPulse 2s ease-in-out infinite',
        'icon-bounce': 'iconBounce 1.5s ease-in-out infinite',
        'icon-spin-slow': 'iconSpinSlow 8s linear infinite',
        'icon-float': 'iconFloat 3s ease-in-out infinite',
        'border-glow': 'borderGlow 2s ease-in-out infinite',
        'text-reveal': 'textReveal 0.8s ease-out forwards',
        'text-slide-up': 'textSlideUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'slide-in-bottom': 'slideInBottom 0.6s ease-out forwards',
        'carousel-ken-burns': 'carouselKenBurns 8s ease-in-out forwards',
        shimmer: 'shimmer 2s linear infinite',
        'badge-slide': 'badgeSlide 0.5s ease-out forwards',
        'video-fade': 'videoFade 1s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        iconPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.15)', opacity: '0.85' },
        },
        iconBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        iconSpinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        iconFloat: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-3px) rotate(2deg)' },
          '75%': { transform: 'translateY(2px) rotate(-2deg)' },
        },
        borderGlow: {
          '0%, 100%': { borderColor: 'rgba(196, 30, 58, 0.3)', boxShadow: '0 0 5px rgba(196, 30, 58, 0.1)' },
          '50%': { borderColor: 'rgba(196, 30, 58, 0.7)', boxShadow: '0 0 20px rgba(196, 30, 58, 0.3)' },
        },
        textReveal: {
          '0%': { clipPath: 'inset(0 100% 0 0)', opacity: '0' },
          '100%': { clipPath: 'inset(0 0 0 0)', opacity: '1' },
        },
        textSlideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        slideInBottom: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        carouselKenBurns: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.12)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        badgeSlide: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        videoFade: {
          '0%': { opacity: '0', transform: 'scale(1.02)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        mapZoom: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.08)' },
        },
      },
    },
  },
  plugins: [],
};
