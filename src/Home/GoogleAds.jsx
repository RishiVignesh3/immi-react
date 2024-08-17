import { Box, Container, Typography } from '@mui/material';
import { FcGoogle } from 'react-icons/fc';
import StarIcon from '@mui/icons-material/Star';
import React from 'react';
import { FlexBox } from '../Components/FlexBox';

const GoogleAds = ({ className }) => {

  return (
    <Box
      className={className}
      sx={{
        borderRadius: '24px',
        width: '180px',
        height: '200px',
        background:
          'linear-gradient(135deg, rgba(169,186,189,1) 0%, rgba(200,207,196,1) 60%, rgba(224,222,203,1) 100%)',
        textAlign: 'left',
        pt: 4,
        boxSizing: 'border-box',
      }}
    >
      <Container>
        <FcGoogle fontSize={'40px'} />
        <Typography variant="h6" fontWeight={600}>
          Google
        </Typography>
        <Typography variant="h6" fontWeight={600}>
          Ads
        </Typography>
        <FlexBox styles={{ justifyContent: 'flex-start', color: '#fff', gap: 0.5 }}>
          <StarIcon fontSize="24px" />
          <Typography>4.9</Typography>
        </FlexBox>
        <Typography sx={{ color: 'gray' }}>247 reviews</Typography>
      </Container>
    </Box>
  );
};

export { GoogleAds };
