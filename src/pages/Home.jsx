import React from 'react';
import AppBar from '@mui/material/AppBar';
import useTheme from '@mui/material/styles/useTheme';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Home = () => {
  var theme = useTheme();
  return (
    <>
      <AppBar
        elevation={0}
        sx={{
          backgroundColor: 'white',
          paddingTop: '3rem',
          paddingLeft: '5rem',
          paddingRight: '5rem',
          paddingBottom: '1rem',
          userSelect: 'none',
          display: 'flexbox',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <h2 style={{ color: theme.palette.primary.main }}>ElevateMe</h2>
        </Box>
        <Box
          sx={{
            alignContent: 'center',
            alignItems: 'center',
            display: 'flex',
            gap: '2rem',
          }}
        >
          <Button
            variant='contained'
            sx={{
              width: '5.5rem',
              height: '2.5rem',
              borderRadius: '32px',
            }}
          >
            Home
          </Button>
          <Button>Saved</Button>
          <Button>List</Button>
          <Button>5-Whys</Button>
          <Button>HMW</Button>
          <Button>Log out</Button>
        </Box>
      </AppBar>
      <Box>
        <h1 style={{ color: theme.palette.primary.main }}>
          Problem Statement Generator
        </h1>
      </Box>
    </>
  );
};

export default Home;
