import { Avatar, Box, Button, Typography } from '@mui/material';
import React from 'react';
import { FlexBox } from '../Components/FlexBox';
import AvatarFemale from '../Assets/Images/AvatarFemale.jpg';

const BannerText = () => {
  return (
    <Box maxWidth={500} sx={{ textAlign: 'start', mx: 15 }}>
      <Box>
        <Typography variant="h2" fontWeight={600} sx={{ mb: 2 }}>
          For Your{' '}
          <Typography component="span" variant="h2" fontWeight="inherit" sx={{ color: '#ff556f' }}>
            Pro
          </Typography>{' '}
          Social Manager
        </Typography>
        <FlexBox styles={{ mb: 2, gap: '16px' }}>
          <Avatar src={AvatarFemale} />
          <Typography>
            We blend insights and strategy to creat digital for forward thinking organizations
          </Typography>
        </FlexBox>
      </Box>
      <Button sx={{ color: '#000', borderRadius: '30px', p: 2, backgroundColor: '#fff' }}>
        Get Started Now
      </Button>
    </Box>
  );
};

export { BannerText };
