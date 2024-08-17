import { Box } from '@mui/material';
import React from 'react';
import { Navigation } from './Navigation';
import { BannerText } from './BannerText';
import { FlexBox } from '../Components/FlexBox';
import { BannerImageContent } from './BannerImageContent';
import { SideChips } from './SideChips';
import { MainChip } from './MainChip';
import { AboutUsChip } from './AboutUsChip';

export const HomeBoard = () => {
  return (
    <Box sx={{ p: 8, pb: 0, backgroundColor: '#ccc0bd' }}>
      <Box sx={{ height: 'calc(100vh - 64px)', backgroundColor: '#fbf7f2', borderRadius: '20px 20px 0 0' }}>
        <Navigation />
        <FlexBox styles={{ height: '50%' }}>
          <BannerText />
          <BannerImageContent />
        </FlexBox>
        <FlexBox>
        <FlexBox styles={{gap: '16px', padding: '24px', pb: 0, ml: 10}}>
          <MainChip />
          <FlexBox styles={{ flexDirection: 'column', gap: '8px' }}>
            <SideChips mainText="2M+" subText="Trusted Users" chipColor="#faa15b"/>
            <SideChips mainText="95%" subText="Return Customers" chipColor="#ad9fa6"/>
          </FlexBox>
          <Box sx={{flex: 1}}></Box>
        </FlexBox>
        <AboutUsChip />
        </FlexBox>
      </Box>
    </Box>
  );
};
