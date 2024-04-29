import React from 'react';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import useTheme from '@mui/material/styles/useTheme';
import { Link } from 'react-router-dom';

const Register = () => {
  var theme = useTheme();

  const inputProps = {
    sx: {
      borderRadius: '50px',
      '& fieldset': { borderColor: 'stroke.main' },
    },
  };

  const inputSx = {
    boxSizing: 'border-box',
    width: '100%',
  };

  const inputFieldContainer = {
    paddingTop: '15px',
    paddingBottom: '15px',
  };

  return (
    <Grid
      container
      spacing={0}
      direction='row'
      alignItems='center'
      justifyContent='center'
      sx={{ minHeight: '100vh' }}
    >
      <Grid item xs={11} md={5} xl={5}>
        <Paper
          elevation={0}
          sx={{
            borderRadius: '32px',
            paddingTop: '50px',
            paddingBottom: '50px',
            userSelect: 'none',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              margin: 0,
              color: theme.palette.primary.main,
            }}
          >
            ElevateMe
          </h1>
          <FormControl
            sx={{
              width: '100%',
              boxSizing: 'border-box',
              paddingLeft: '5rem',
              paddingRight: '5rem',
            }}
          >
            <Box sx={inputFieldContainer}>
              <TextField
                InputProps={inputProps}
                sx={inputSx}
                placeholder='Username'
                type='text'
                name='username'
                id='username'
              />
            </Box>
            <Box sx={inputFieldContainer}>
              <TextField
                InputProps={inputProps}
                sx={inputSx}
                placeholder='Email'
                type='email'
                name='email'
                id='email'
              />
            </Box>
            <Box sx={inputFieldContainer}>
              <TextField
                InputProps={inputProps}
                sx={inputSx}
                placeholder='Password'
                type='password'
                name='password'
                id='password'
              />
            </Box>
            <Box sx={inputFieldContainer}>
              <TextField
                InputProps={inputProps}
                sx={inputSx}
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
                width: '100%',
                boxSizing: 'border-box',
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
                color: 'primary.main',
                textDecoration: 'none',
              }}
            >
              Log in
            </Link>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Register;
