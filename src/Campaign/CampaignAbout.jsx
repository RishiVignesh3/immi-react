import { HelpRounded } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import React from 'react';
import { FlexBox } from '../Components/FlexBox';

export const CampaignAbout = () => {
  return (
    <FlexBox styles={{padding: '12px'}}>
      <Typography varaint="h4" sx={{fontWeight: 'bold'}}>24 Campaingns</Typography>
      <Box>
        <FlexBox styles={{color:"rgba(0,0,0,0.6)"}}>
          <Typography >Matrics Definitions</Typography>
          <HelpRounded />
        </FlexBox>
      </Box>
    </FlexBox>
  );
};
