'use client';
import { ThemeProvider } from 'next-themes';

export default function HandleThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider enableSystem={false} attribute='class'>
      {children}
    </ThemeProvider>
  );
}
