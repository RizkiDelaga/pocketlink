import React, { useState } from 'react';
import ThemeModeContext from '../contexts/ThemeMode';
import { Paper } from '@mui/material';

export default function ThemeModeComponent({ children }) {
  const [themeMode, setThemeMode] = useState(localStorage.getItem('themeMode') || 'light');

  // Fungsi untuk mengubah nilai tema
  const toggleThemeMode = () => {
    setThemeMode((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('themeMode', newTheme);
      return newTheme;
    });
  };

  // Menyediakan nilai dan fungsi untuk diakses oleh konsumen
  const themeContextValue = { themeMode, toggleThemeMode };

  return <ThemeModeContext.Provider value={themeContextValue}>{children}</ThemeModeContext.Provider>;
}
