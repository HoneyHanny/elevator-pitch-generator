import React from 'react';
import AppBar from '@mui/material/AppBar';
import useTheme from '@mui/material/styles/useTheme';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Home = () => {
  var theme = useTheme();

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
      <Box
        sx={{
          paddingTop: '3rem',
          paddingBottom: '3rem',
          paddingLeft: '8rem',
          paddingRight: '8rem',
          userSelect: 'none',
        }}
      >
        {/* The div that holds the two div side by side */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          {/* left side */}
          <Box>
            <h1 style={{ color: theme.palette.primary.main }}>
              Problem Statement
              <br />
              Generator
            </h1>

            <Box paddingTop={10} paddingBottom={15}>
              <p>
                Specify first the number of Venn Diagram and
                <br />
                input the scopes of your problem statement
                <br />
                you want to be generated
              </p>
            </Box>

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
              Generate
            </Button>
          </Box>
          {/* right side */}
          <Box>
            {/* TODO(hans): Add actual venn diagram */}
            <h1 style={{ color: theme.palette.primary.main }}>Venn Diagram</h1>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          userSelect: 'none',
          textAlign: 'center',
        }}
      >
        <h1 style={{ color: theme.palette.primary.main }}>Problem Statement</h1>
      </Box>
      <Box
        sx={{
          userSelect: 'none',
          backgroundColor: 'gray.main',
          paddingTop: '3rem',
          paddingBottom: '3rem',
          paddingLeft: '10rem',
          paddingRight: '10rem',
        }}
      >
        <bold
          style={{ fontWeight: 'bold', color: 'black', fontSize: '1.2rem' }}
        >
          Problem
        </bold>
        <FormGroup>
          {/* NOTE(hans): Use array.map later */}
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label='Inefficient waste collection'
          />
          <FormControlLabel
            control={<Checkbox />}
            label='Limited availability of recycled products'
          />
          <FormControlLabel
            control={<Checkbox />}
            label='Limited access to recycling'
          />
          <FormControlLabel
            control={<Checkbox />}
            label='Accumulation of waste'
          />
          <FormControlLabel control={<Checkbox />} label='Resource depletion' />
        </FormGroup>
      </Box>
    </>
  );
};

export default Home;
