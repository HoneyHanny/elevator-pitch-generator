import React from 'react';
import Box from '@mui/material/Box';
import useTheme from '@mui/material/styles/useTheme';

const Saved = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        paddingTop: '3rem',
        paddingBottom: '3rem',
        paddingLeft: '8rem',
        paddingRight: '8rem',
        userSelect: 'none',
      }}
    >
      <h1 style={{ color: theme.palette.primary.main }}>Saved List</h1>
      <Box
        sx={{
          padding: '1rem',
        }}
      >
        <h1 style={{ color: theme.palette.primary.main }}>
          2 Venn diagram list
        </h1>
      </Box>
    </Box>
  );
};

export default Saved;
