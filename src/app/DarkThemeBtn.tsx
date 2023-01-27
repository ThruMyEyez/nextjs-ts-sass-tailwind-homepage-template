'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function DarkThemeBtn() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    console.log(`The current theme is: ${theme}`);
  }, [theme]);

  if (!mounted) {
    return null;
  }

  return (
    <select value={theme} onChange={e => setTheme(e.target.value)}>
      <option value='dark'>Dark</option>
      <option value='light'>Light</option>
    </select>
  );
}
