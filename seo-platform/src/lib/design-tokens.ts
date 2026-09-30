export const colors = {
  brand: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },
  background: '#020617',
  surface: '#111827',
  surfaceStrong: '#1f2937',
  text: '#e2e8f0',
  muted: '#94a3b8',
  border: '#334155',
  accent: '#3b82f6',
};

export const typography = {
  fontFamily: {
    sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
  },
  fontSize: {
    base: ['1rem', { lineHeight: '1.75rem' }],
    lg: ['1.125rem', { lineHeight: '1.875rem' }],
    xl: ['1.25rem', { lineHeight: '2rem' }],
    '2xl': ['1.5rem', { lineHeight: '2.25rem' }],
    '3xl': ['1.875rem', { lineHeight: '2.5rem' }],
    '4xl': ['2.25rem', { lineHeight: '2.75rem' }],
    '5xl': ['3rem', { lineHeight: '1' }],
  },
};

export const spacing = {
  xs: '0.5rem',
  sm: '0.75rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '2.5rem',
};

export const radii = {
  sm: '0.75rem',
  md: '1.25rem',
  lg: '2rem',
};

export const shadows = {
  soft: '0 20px 80px var(--shadow-soft)',
};

export const designTokens = {
  colors,
  typography,
  spacing,
  radii,
  shadows,
};
