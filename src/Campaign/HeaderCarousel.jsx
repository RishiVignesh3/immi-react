import React from 'react';
import CarouselImage from '../Assets/Images/Carousel.jpeg';
import { Box, Button, Card, CardContent, Typography, styled } from '@mui/material';

const StyledButton = styled(Button)({
  color: '#624bf7',
  backgroundColor: 'white',
  border: '1px solid rgba(98, 75, 247, 0.5)',
  height: '40px',
  margin: '2px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: 'white',
  },
});

const CarouselBtnCtn = styled(Box)({
  color: '#624bf7',
  backgroundColor: 'white',
  borderRadius: '5px',
});

const HeaderCarousel = () => {
  return (
    <Card sx={{ margin: '12px 0', borderRadius: '12px' }}>
      <CardContent
        sx={{
          backgroundImage: `url(${CarouselImage})`,
          borderRadius: '10px',
          height: '100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ textAlign: 'start' }}>
          <Typography variant="button" display="block" color="white">
            Unlock the Power of Our New Campaign Management Dashbaord!
          </Typography>
          <Typography variant="caption" display="block" color="white">
            Introducing our latest innovation - a revolutionary dashbaord designed to elevate your
            campaign management
          </Typography>
        </Box>
        <CarouselBtnCtn>
          <StyledButton>Try the New Features Now!</StyledButton>
        </CarouselBtnCtn>
      </CardContent>
    </Card>
  );
};

export default HeaderCarousel;
