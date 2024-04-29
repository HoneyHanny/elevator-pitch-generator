import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import useTheme from '@mui/material/styles/useTheme';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const UserAppbar = () => {
  const navs = ['Home', 'Saved', 'List', '5-Whys', 'HMW', 'Log out'];
  const links = ['home', 'saved', 'list', '5-whys', 'hmw', 'log-out'];

  var outlet = <Outlet />;
  var currentLink = '';
  const location = useLocation();
  location.pathname.split('/');
  console.log(location.pathname.split('/'));
  const pathname = location.pathname.split('/').filter((crumb) => crumb !== '');
  currentLink = pathname[pathname.length - 1];
  const currentPage = currentLink[0].toUpperCase() + currentLink.slice(1);

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
          {navs.map((value, index) => {
            return value === currentPage ? (
              <Link key={index} to={currentLink}>
                <Button
                  variant='contained'
                  sx={{
                    width: '5.5rem',
                    height: '2.5rem',
                    borderRadius: '32px',
                  }}
                >
                  {value}
                </Button>
              </Link>
            ) : (
              <Link key={index} to={links[index]}>
                <Button>{value}</Button>
              </Link>
            );
          })}
        </Box>
      </AppBar>

      {outlet}
    </>
  );
};

export default UserAppbar;
