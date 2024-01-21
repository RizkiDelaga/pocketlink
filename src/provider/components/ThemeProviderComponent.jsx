import React, { useContext } from 'react';
import ThemeModeContext from '../contexts/ThemeMode';
import { ThemeProvider, createTheme } from '@mui/material';

export default function ThemeProviderComponent({ children }) {
  const { themeMode, toggleThemeMode } = useContext(ThemeModeContext);

  const theme = createTheme({
    palette: {
      mode: themeMode,
      primary: {
        main: '#4CAF50',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            // Default styles
            borderWidth: '2px',
            borderColor: 'theme.palette.primary.main',

            // Hover styles
            '&:hover': {
              borderWidth: '2px',
              borderColor: 'theme.palette.primary.main',
            },

            // Active styles
            '&:active': {
              borderWidth: '2px',
              borderColor: 'theme.palette.primary.main',
            },

            // Focus styles
            '&:focus': {
              borderWidth: '2px',
              borderColor: 'theme.palette.primary.main',
            },

            // Add other styles as needed
          },
        },
      },
    },
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
