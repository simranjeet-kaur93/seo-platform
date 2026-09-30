"use client";

import { ThemeProvider as NextThemeProvider } from 'next-themes';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem>
      {children}
    </NextThemeProvider>
  );
}
