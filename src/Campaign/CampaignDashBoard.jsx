import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import { MainPage } from './MainPage';
import { SideBar } from './SideBar';
import { Box } from '@mui/material';

export const CampaignDashBoard = () => {
  return (
    <Box sx={{ display: 'flex', backgroundColor: '#f9fcfb', height: '100vh' }}>
      <CssBaseline />
      <SideBar />
      <MainPage />
    </Box>
  );
};
