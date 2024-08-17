import { Badge, Box, Chip, Divider, Typography, styled } from '@mui/material';
import React from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { flexStyles } from '../Utils/constants';
import { FlexBox } from '../Components/FlexBox';
import { CampaignDetails } from './CampaignDetails';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

const StyledBox = styled(Box)({
  ...flexStyles,
  textAlign: 'left',
  justifyContent: 'space-between',
  marginBottom: '12px',
});

const CardsContainer = styled(Box)({
  border: '1px solid rgba(0,0,0,0.3)',
  borderRadius: '10px',
  margin: '10px',
  padding: '20px',
});

const StyledDiv =  styled('div')({
...flexStyles, color: 'rgba(0,0,0, 0.6)', gap: '4px'
})

const details = {
  delivered: 50,
  opened: 30,
  clicked: 20,
  converted: 10,
};

export const CampaignCards = () => {
  return (
    <CardsContainer sx={{backgroundColor: '#FFF'}}>
      <StyledBox>
        <FlexBox styles={{ gap: '10px' }}>
          <Box
            sx={{
              height: '40px',
              width: '40px',
              borderRadius: '4px',
              ...flexStyles,
              justifyContent: 'center',
              backgroundColor: '#4d3bf6',
            }}
          >
            <ReceiptLongIcon sx={{ color: 'white' }} />
          </Box>
          <Box>
            <Typography variant="subtitle1" fontWeight="bold">
              Special Offers for Loyal Customers
            </Typography>
            <Typography variant="subtitle2">
              Thank you for being our loyal customer! As a token of our appreciation, we...
            </Typography>
          </Box>
        </FlexBox>
        <FlexBox styles={{ gap: '16px' }}>
          <StyledDiv>
            <MailOutlineIcon sx={{ fontSize: '20px' }} />
            <Typography fontSize="16px">2</Typography>
          </StyledDiv>
          <StyledDiv>
            <AccessTimeIcon sx={{ fontSize: '20px' }} />
            <Typography fontSize="16px">4</Typography>
          </StyledDiv>
          <StyledDiv>
            <Chip
              sx={{
                backgroundColor: 'rgba(0, 255, 0, 0.1)',
                border: '1px solid rgba(0, 200, 0, 0.9)',
              }}
              label={
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'green' }}>
                  <Badge color="success" variant="dot" />
                  <span>Running</span>
                </div>
              }
            />

            <MoreHorizIcon />
          </StyledDiv>
        </FlexBox>
      </StyledBox>
      <Divider />
      <CampaignDetails details={details} />
    </CardsContainer>
  );
};
