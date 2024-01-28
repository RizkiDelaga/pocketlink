import React, { useContext } from 'react';
import ThemeModeContext from '../contexts/ThemeMode';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

export default function ThemeProviderComponent({ children }) {
  const { themeMode } = useContext(ThemeModeContext);

  const theme = createTheme({
    palette: {
      mode: themeMode,
      primary: {
        main: '#AA77FF',
      },
      secondary: {
        main: '#62CDFF',
      },
      alternative: {
        main: '#C9EEFF',
      },
      light: {
        main: '#FFFFFF',
      },
      dark: {
        main: '#000000',
      },
      ...(themeMode === 'light'
        ? {
            background: {
              default: '#F1F6F9',
              paper: '#FFFFFF',
            },
            text: {
              primary: '#000000',
            },
          }
        : {
            background: {
              default: '#000000',
              paper: '#272727',
            },
            text: {
              primary: '#ffffff',
            },
          }),
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: { backgroundImage: 'none' },
        },
      },
      MuiDialog: {
        styleOverrides: {
          paper: { backgroundImage: 'none' },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            backgroundColor: '#AA77FF',
            height: '1px',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            // Default styles
            borderWidth: '2px',
            fontWeight: 'bold',

            // Hover styles
            '&:hover': {
              borderWidth: '2px',
            },

            // Active styles
            '&:active': {
              borderWidth: '2px',
            },

            // Focus styles
            '&:focus': {
              borderWidth: '2px',
            },
          },
        },
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {children}
    </ThemeProvider>
  );
}
