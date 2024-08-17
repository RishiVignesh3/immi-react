import React from 'react';
import { Box, Divider, styled } from '@mui/material';
import { drawerWidth } from '../Utils/constants';
import HeaderBox from './HeaderBox';
import HeaderCarousel from './HeaderCarousel';
import CampaignFilters from './CampaignFilters';
import { SwitchTabs } from './SwitchTabs';
import { CampaignCards } from './CampaignCards';
import { CampaignAbout } from './CampaignAbout';

const ContainerWithPadding = styled(Box)(({ needsTopPad }) => ({
  padding: `${needsTopPad ? '12px' : 0} 10px`,
  paddingBottom: '0',
  borderRadius: '12px 12px',
  backgroundColor: '#FFF',
}));

export const MainPage = () => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        border: '1px solid rgba(0, 0, 0, 0.2)',
        margin: '20px',
        borderRadius: '10px',
        overflowY: 'scroll',
      }}
    >
      <ContainerWithPadding needsTopPad={true}>
        <HeaderBox />
        <HeaderCarousel />
      </ContainerWithPadding>
      <ContainerWithPadding>
        <CampaignFilters />
      </ContainerWithPadding>
      <Divider sx={{ width: '100%' }} />
      <SwitchTabs />
      <CampaignAbout />
      <CampaignCards />
      <CampaignCards />
      <CampaignCards />
    </Box>
  );
};
