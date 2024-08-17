import React from 'react';
import { FlexBox } from '../Components/FlexBox';
import { Box, Divider, Typography } from '@mui/material';

export const CampaignDetails = ({ details }) => {
  if (!details) {
    return null;
  }

  const detailsArr = Object.entries(details);
  const totLen = detailsArr.length - 1;

  return (
    <FlexBox styles={{ margin: '16px', marginBottom: '0', justifyContent: 'space-evenly' }}>
      {detailsArr.map((item, index) => (
        <>
          <Box>
            <Typography variant="h6">
              {item[1]}
              {item[0] === 'delivered' ? 'K' : '%'}
            </Typography>
            <Typography variant="caption" sx={{ textTransform: 'capitalize' }}>
              {item[0]}
            </Typography>
          </Box>
          {index !== totLen && (
            <Divider orientation="vertical" variant="fullWidth" sx={{ height: '54px' }} />
          )}
        </>
      ))}
    </FlexBox>
  );
};
