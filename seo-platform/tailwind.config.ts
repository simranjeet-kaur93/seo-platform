import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: 'var(--accent)',
        foreground: 'var(--foreground)',
        muted: 'var(--muted)',
        page: 'var(--page)',
        panel: 'var(--panel)',
        border: 'var(--border)',
        landing: {
          base: 'var(--landing-base)',
          card: 'var(--landing-card)',
          soft: 'var(--landing-soft)',
          nav: 'var(--landing-nav)',
          'nav-icon': 'var(--landing-nav-icon)',
          'nav-border': 'var(--landing-nav-border)',
          'badge-text': 'var(--landing-badge-text)',
          brand: 'var(--landing-brand)',
          'brand-40': 'var(--landing-brand-40)',
          'quote-from': 'var(--landing-quote-from)',
          'quote-to': 'var(--landing-quote-to)',
          'cta-via': 'var(--landing-cta-via)',
          'cta-border': 'var(--landing-cta-border)',
        },

        purple: {
          50: 'var(--color-purple-50)',
          100: 'var(--color-purple-100)',
          200: 'var(--color-purple-200)',
          300: 'var(--color-purple-300)',
          400: 'var(--color-purple-400)',
          500: 'var(--color-purple-500)',
          600: 'var(--color-purple-600)',
          700: 'var(--color-purple-700)',
          800: 'var(--color-purple-800)',
          900: 'var(--color-purple-900)',
        },
        gray: {
          50: 'var(--color-gray-50)',
          100: 'var(--color-gray-100)',
          200: 'var(--color-gray-200)',
          300: 'var(--color-gray-300)',
          400: 'var(--color-gray-400)',
          500: 'var(--color-gray-500)',
          600: 'var(--color-gray-600)',
          700: 'var(--color-gray-700)',
          800: 'var(--color-gray-800)',
          900: 'var(--color-gray-900)',
        },
        slateBrand: {
          300: 'var(--color-slate-300)',
          400: 'var(--color-slate-400)',
          500: 'var(--color-slate-500)',
          600: 'var(--color-slate-600)',
          700: 'var(--color-slate-700)',
          800: 'var(--color-slate-800)',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'heading-1': [
          'var(--text-heading-1)',
          {
            lineHeight: 'var(--text-heading-1--line-height)',
            letterSpacing: 'var(--text-heading-1--letter-spacing)',
            fontWeight: '500',
          },
        ],
        'heading-1-sm': [
          'var(--text-heading-1-sm)',
          {
            lineHeight: 'var(--text-heading-1-sm--line-height)',
            letterSpacing: 'var(--text-heading-1--letter-spacing)',
            fontWeight: '500',
          },
        ],
        'heading-2': ['var(--text-heading-2)', { lineHeight: 'var(--text-heading-2--line-height)', fontWeight: '500' }],
        'heading-3': ['var(--text-heading-3)', { lineHeight: 'var(--text-heading-3--line-height)', fontWeight: '500' }],
        'heading-4': ['var(--text-heading-4)', { lineHeight: 'var(--text-heading-4--line-height)', fontWeight: '500' }],
        'heading-5': ['var(--text-heading-5)', { lineHeight: 'var(--text-heading-5--line-height)', fontWeight: '500' }],
        'heading-6': ['var(--text-heading-6)', { lineHeight: 'var(--text-heading-6--line-height)', fontWeight: '500' }],
        'body-2xs': ['var(--text-body-2xs)', { lineHeight: 'var(--text-body-2xs--line-height)' }],
        'body-xs': ['var(--text-body-xs)', { lineHeight: 'var(--text-body-xs--line-height)' }],
        'body-sm': ['var(--text-body-s)', { lineHeight: 'var(--text-body-s--line-height)' }],
        'body-md': ['var(--text-body-m)', { lineHeight: 'var(--text-body-m--line-height)' }],
        'body-lg': ['var(--text-body-l)', { lineHeight: 'var(--text-body-l--line-height)' }],
        'body-xl': ['var(--text-body-xl)', { lineHeight: 'var(--text-body-xl--line-height)' }],
        quote: ['var(--text-quote)', { lineHeight: 'var(--text-quote--line-height)' }],
      },
      boxShadow: {
        panel: '0 25px 90px var(--shadow-panel)',
        'landing-nav': '0 8px 26px var(--shadow-landing-nav)',
        'landing-cta':
          '0 10px 18px var(--shadow-landing-cta-outer), inset 0 1px 0 var(--shadow-landing-cta-highlight), inset 0 -6px 10px var(--shadow-landing-cta-depth)',
        'landing-soft': '0 0 70px var(--shadow-landing-soft)',
      },
      borderRadius: {
        xl: '1.75rem',
        shell: 'var(--radius-shell)',
        surface: 'var(--radius-surface)',
        control: 'var(--radius-control)',
        avatar: 'var(--radius-avatar)',
      },
      minWidth: {
        pricing: 'var(--layout-pricing-table-min)',
      },
      maxWidth: {
        layout: 'var(--layout-max-width)',
        content: 'var(--layout-content-width)',
        nav: 'var(--layout-nav-width)',
        narrow: 'var(--layout-narrow-width)',
        hero: 'var(--layout-hero-width)',
        copy: 'var(--layout-copy-width)',
        form: 'var(--layout-form-width)',
        'pricing-copy': 'var(--layout-pricing-copy-width)',
        cta: 'var(--layout-cta-width)',
        'cta-copy': 'var(--layout-cta-copy-width)',
      },
      height: {
        nav: 'var(--size-nav-height)',
        'hero-art': 'var(--size-hero-art-height)',
        'hero-glow': 'var(--size-hero-glow-height)',
      },
      width: {
        'hero-glow': 'var(--size-hero-glow-width)',
      },
      gridTemplateColumns: {
        'landing-hero': '1fr 0.95fr',
        'landing-quote': '110px 1fr',
      },
      screens: {
        'tree-panel': '820px',
      },
      backgroundImage: {
        grid:
          'linear-gradient(var(--grid-line-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line-color) 1px, transparent 1px)',
        glow: 'radial-gradient(circle, var(--glow-color) 0%, var(--glow-color-transparent) 70%)',
      },
      backgroundSize: {
        'landing-grid': '50px 50px',
      },
    },
  },
  plugins: [],
};

export default config;
