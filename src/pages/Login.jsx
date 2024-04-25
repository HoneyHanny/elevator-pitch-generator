import React from 'react';
import '../styles/login.css';
import {
  FormLabel,
  FormControl,
  Button,
  InputLabel,
  Paper,
  TextField,
  Box,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const Login = () => {
  var theme = useTheme();

  const formLabel = {
    color: theme.palette.text.main,
    marginLeft: '1.5rem',
  };

  const inputProps = {
    sx: {
      borderRadius: '50px',
      width: '31rem',
      '& fieldset': { borderColor: theme.palette.stroke.main },
    },
  };

  const inputFieldContainer = {
    paddingTop: '25px',
    paddingBottom: '25px',
  };

  return (
    <Paper
      sx={{
        borderRadius: '32px',
        boxShadow: 'none',
      }}
      className='container'
    >
      <h1>ElevateMe</h1>
      <FormControl>
        <Box sx={inputFieldContainer}>
          <Box align='left'>
            <FormLabel sx={formLabel}>Username</FormLabel>
          </Box>
          <TextField InputProps={inputProps} />
        </Box>
        <Box sx={inputFieldContainer}>
          <Box align='left'>
            <FormLabel sx={formLabel}>Password</FormLabel>
          </Box>
          <TextField InputProps={inputProps} />
        </Box>
        <Button
          variant='contained'
          sx={{
            borderRadius: '50rem',
            width: '31rem',
            height: '4rem',
            marginTop: '3rem',
            fontSize: '1.2rem',
            fontWeight: 'bold',
          }}
        >
          Sign in
        </Button>
      </FormControl>
      <Box sx={{ marginTop: '1rem' }}>
        Don't have an account?{' '}
        <Link
          style={{
            color: theme.palette.primary.main,
            textDecoration: 'none',
          }}
        >
          Sign up
        </Link>
      </Box>
    </Paper>
  );
};

export default Login;
