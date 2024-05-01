import React from 'react';
import useTheme from '@mui/material/styles/useTheme';
import Box from '@mui/material/Box';

const List = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        paddingTop: '3rem',
        paddingBottom: '3rem',
        paddingLeft: '4rem',
        paddingRight: '4rem',
        userSelect: 'none',
      }}
    >
      <h1 style={{ color: theme.palette.primary.main }}>
        Problem Statement List
      </h1>
    </Box>
  );
};

export default List;
