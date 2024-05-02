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

  const terms = [
    {
      term: 'Impact-',
      description:
        'The problem has a significant impact on various stakeholders, such as individuals, groups, organizations, and the environment.',
    },
    {
      term: 'Capability-',
      description:
        'The problem solver has the ability to effectively address and solve this problem based on your skills, resources, and expertise.',
    },
    {
      term: 'Development Cost-',
      description:
        'The potential solution is feasible to develop considering potential costs, investments, and financial resources required.',
    },
    {
      term: 'Urgency-',
      description:
        'It is urgent to find a solution for this problem in terms of time constraints, market demands, or immediate needs.',
    },
    {
      term: 'Innovation Opportunity-',
      description:
        'The problem has the potential to present innovative solutions or new approaches that could lead to unique outcomes or competitive advantages.',
    },
    {
      term: 'Market Size-',
      description:
        'Potential market is large enough to make the solution a viable business.',
    },
  ];

  return (
    <>
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
      <Box
        sx={{
          paddingBottom: '3rem',
          paddingLeft: '4rem',
          paddingRight: '4rem',
          userSelect: 'none',
        }}
      >
        <h1 style={{ color: theme.palette.primary.main }}>
          Problem Statement Ranking
        </h1>
        {terms.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <Box
              sx={{
                width: '16rem',
              }}
            >
              <strong>{item.term}</strong>
            </Box>
            <Box>{item.description}</Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default List;
