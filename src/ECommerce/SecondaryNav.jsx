import React from 'react';
import { AppBar, Toolbar } from '@mui/material';

const SecondaryNav = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#232f3f' }}>
      <Toolbar variant="dense" sx={{ gap: '20px' }}></Toolbar>
    </AppBar>
  );
};

export default SecondaryNav;
