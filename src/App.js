import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';
import CssBaseline from '@mui/material/CssBaseline';

// This is the theme for the web app
const theme = createTheme({
  typography: {
    fontFamily: '"Lexend Deca", "Lexend", sans-serif',
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    // background: {
    //   default: '#c5dcc2',
    // },
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to='login' />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='home' element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
