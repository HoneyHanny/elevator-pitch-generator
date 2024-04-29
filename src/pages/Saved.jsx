import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useTheme from '@mui/material/styles/useTheme';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';

const Saved = () => {
  const theme = useTheme();

  const buttons = [];
  for (let i = 0; i < 5; i++) {
    buttons.push(
      <Button
        variant='contained'
        sx={{
          borderRadius: '32px',
        }}
      >
        Show
      </Button>
    );
  }

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
      {/* TODO(hans): Add each venn diagram to it's own component */}
      <Box
        sx={{
          padding: '1rem',
        }}
      >
        <h1 style={{ color: theme.palette.primary.main }}>
          2 Venn diagram list
        </h1>
      </Box>
      <Box
        sx={{
          padding: '64px',
          borderRadius: '64px',
          backgroundColor: 'gray.main',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        {/* Left (checkboxes) */}
        <Box>
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
            <FormControlLabel
              control={<Checkbox />}
              label='Resource depletion'
            />
          </FormGroup>
        </Box>
        {/* Right (buttons) */}
        <Box flexDirection={'column'} display={'flex'} gap={'10px'}>
          {buttons}
        </Box>
      </Box>
      <Box
        sx={{
          padding: '1rem',
        }}
      >
        <h1 style={{ color: theme.palette.primary.main }}>
          3 Venn diagram list
        </h1>
      </Box>
      <Box
        sx={{
          padding: '64px',
          borderRadius: '64px',
          backgroundColor: 'gray.main',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        {/* Left (checkboxes) */}
        <Box>
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
            <FormControlLabel
              control={<Checkbox />}
              label='Resource depletion'
            />
          </FormGroup>
        </Box>
        {/* Right (buttons) */}
        <Box flexDirection={'column'} display={'flex'} gap={'10px'}>
          {buttons}
        </Box>
      </Box>
    </Box>
  );
};

export default Saved;
