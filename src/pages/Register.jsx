import React from 'react';
import '../styles/register.css';
import { FormControl, Button, Paper, TextField, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const Register = () => {
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
    paddingTop: '15px',
    paddingBottom: '15px',
  };
  return (
    <Paper
      sx={{
        borderRadius: '32px',
        boxShadow: 'none',
        paddingTop: '20px',
        paddingBottom: '45px',
      }}
      className='container'
    >
      <h1>ElevateMe</h1>
      <Box>
        <h2></h2>
      </Box>
      <FormControl>
        <Box sx={inputFieldContainer}>
          <TextField
            InputProps={inputProps}
            placeholder='Username'
            type='text'
            name='username'
            id='username'
          />
        </Box>
        <Box sx={inputFieldContainer}>
          <TextField
            InputProps={inputProps}
            placeholder='Email'
            type='email'
            name='email'
            id='email'
          />
        </Box>
        <Box sx={inputFieldContainer}>
          <TextField
            InputProps={inputProps}
            placeholder='Password'
            type='password'
            name='password'
            id='password'
          />
        </Box>
        <Box sx={inputFieldContainer}>
          <TextField
            InputProps={inputProps}
            placeholder='Confirm password'
            type='password'
            name='confirm-password'
            id='confirm-password'
          />
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
        Already have an account?{' '}
        <Link
          to='/login'
          style={{
            color: theme.palette.primary.main,
            textDecoration: 'none',
          }}
        >
          Log in
        </Link>
      </Box>
    </Paper>
  );
};

export default Register;
