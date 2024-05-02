import React from 'react';
import useTheme from '@mui/material/styles/useTheme';
import Box from '@mui/material/Box';
import ProblemStatementList from '../components/ProblemStatementList';

/*
  +---------------------------------------------------------------------+
  |                                Appbar                               |
  +---------------------------------------------------------------------+
  |                                                                     |
  | Problem Statement List                                              |
  | +-----------------------------------------------------------------+ |
  | | [] +-1. Inneficient waste collection--------------------------+ | |
  | | [] +-2. Limited avaialability of recycled products------------+ | |
  | | [] +-3. Limited Access to recycling---------------------------+ | |
  | | [] +-4. Accumulation of waste---------------------------------+ | |
  | |                                                           Add   | |
  | +-----------------------------------------------------------------+ |

*/

const List = () => {
  const theme = useTheme();
  const test = [
    '1. Inneficient waste collection',
    '2. Limited availability of recycled products',
    '3. Limited Access to recycling',
    '4. Accumulation of waste',
  ];

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
      <ProblemStatementList list={test} />
    </Box>
  );
};

export default List;
