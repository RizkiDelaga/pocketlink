import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Button, Paper, ThemeProvider, createTheme } from '@mui/material';



const theme = createTheme({
  palette: {
    mode: 'dark',
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <React.StrictMode> */}
        <App />
    {/* </React.StrictMode> */}
  </>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
