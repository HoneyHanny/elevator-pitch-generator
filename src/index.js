import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: '"Lexend Deca", "Lexend", sans-serif',
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    primary: {
      main: '#186F65',
    },
    secondary: {
      main: '#C5DCC2',
    },
    text: {
      main: '#071C29',
    },
    stroke: {
      main: '#035082',
    },
    gray: {
      main: '#DADADA',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();