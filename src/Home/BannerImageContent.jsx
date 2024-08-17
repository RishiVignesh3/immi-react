import { Box } from '@mui/material';
import React from 'react';
import AvatarMale from '../Assets/Images/HatMen.png';
import LinkedIn from '../Assets/Images/linkedin.png';
import Instagram from '../Assets/Images/instagram.png';
import { GoogleAds } from './GoogleAds';
import { Chart } from './Chart';

const BannerImageContent = () => {
  return (
    <Box
      sx={{
        height: '400px',
        width: '400px',
        borderRadius: '50%',
        m: 4,
        mr: 12,
        position: 'relative',
        background:
          'linear-gradient(-90deg, rgba(169,186,189,1) 0%, rgba(200,207,196,1) 60%, rgba(224,222,203,1) 100%)',
      }}
    >
      <img src={LinkedIn} alt={''} className="linkedIn-logo" />
      <img src={Instagram} alt={''} className="insta-logo" />
      <img src={AvatarMale} alt={''} className="image" />
      <GoogleAds className="google-ads" />
      <Chart className="banner-chart" />
    </Box>
  );
};

export { BannerImageContent };
