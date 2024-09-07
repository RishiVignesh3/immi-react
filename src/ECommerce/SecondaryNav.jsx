import React from 'react';
import { AppBar, IconButton, styled, Typography } from '@mui/material';
import { FaHamburger } from 'react-icons/fa';
import { FlexBox } from '../Components/FlexBox';

const StyledTypo = styled(Typography)({
  fontWeight: 600,
});

const SecondaryNav = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#232f3f' }}>
      <FlexBox>
        <FlexBox styles={{ gap: '24px' }}>
          <IconButton sx={{ color: '#FFF', fontSize: '16px', display: 'flex', gap: '5px' }}>
            <FaHamburger />
            <StyledTypo>All</StyledTypo>
          </IconButton>
          <StyledTypo>Today's Deals</StyledTypo>
          <StyledTypo>Customer Service</StyledTypo>

          <StyledTypo>Registry</StyledTypo>

          <StyledTypo>Gift Card's</StyledTypo>

          <StyledTypo>Sell</StyledTypo>
        </FlexBox>
      </FlexBox>
    </AppBar>
  );
};

export default SecondaryNav;
