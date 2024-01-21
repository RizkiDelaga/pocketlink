import React, { useState } from 'react';
import ThemeModeContext from '../contexts/ThemeMode';

export default function ThemeModeComponent({ children }) {
  const [themeMode, setThemeMode] = useState('light');

  // Fungsi untuk mengubah nilai tema
  const toggleThemeMode = () => {
    setThemeMode((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Menyediakan nilai dan fungsi untuk diakses oleh konsumen
  const themeContextValue = { themeMode, toggleThemeMode };


  return (
    <ThemeModeContext.Provider value={themeContextValue}>
      {children}
    </ThemeModeContext.Provider>
  );
}
