import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Appbar = () => {
  return (
    <>
      <AppBar
        position='static'
        elevation={0}
        sx={{
          background: 'transparent',
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
        <Typography variant={'h4'} fontWeight={'bold'} color='primary.main'>
          ElevateMe
        </Typography>
      </AppBar>
      <Outlet />
    </>
  );
};

export default Appbar;
