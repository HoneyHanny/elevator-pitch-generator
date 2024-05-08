import React from 'react';
import useTheme from '@mui/material/styles/useTheme';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const FiveWhys = () => {
  const theme = useTheme();
  return (
    <Box
      paddingTop='3rem'
      paddingBottom='3rem'
      paddingLeft='8rem'
      paddingRight='8rem'
      sx={{ userSelect: 'none' }}
    >
      <h1 style={{ color: theme.palette.primary.main }}>
        Selected Problem Statement
      </h1>
      <Box
        sx={{
          padding: '48px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'end',
        }}
      >
        <Box>
          <h3>Problem</h3>
          Inefficient waste collection
        </Box>
        <Box>
          <Button
            variant='contained'
            sx={{
              paddingTop: '10px',
              paddingBottom: '10px',
              paddingLeft: '30px',
              paddingRight: '30px',
              borderRadius: '32px',
              fontWeight: 'normal',
            }}
          >
            Show
          </Button>
        </Box>
      </Box>
      <Box paddingRight={'48px'} paddingLeft={'48px'}>
        <Button
          variant='contained'
          sx={{
            paddingTop: '10px',
            paddingBottom: '10px',
            paddingLeft: '30px',
            paddingRight: '30px',
            borderRadius: '32px',
            fontWeight: 'normal',
            float: 'right',
          }}
        >
          Generate 5 Whys
        </Button>
      </Box>
      <Box>
        <h1 style={{ color: theme.palette.primary.main }}>Generate 5 Whys</h1>
      </Box>
      Enumerate 5 HMW statement(s) by specifying an ACTION (what you want to
      achieve), a SUBJECT (to be influenced or affected), and a WHAT (outcome or
      what you like to achieve).
      <Box>{/* TODO: Add checkboxes and one big gray box */}</Box>
    </Box>
  );
};

export default FiveWhys;
