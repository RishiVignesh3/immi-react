import React from 'react';
import HeaderNav from './HeaderNav';
import SecondaryNav from './SecondaryNav';
import { Banner } from './Banner';
import { CommerceCards } from './CommerceCards';
import { FlexBox } from '../Components/FlexBox';
import { Container } from '@mui/material';

const fourCards = Array.from({ length: 4 });

const ECommerce = () => {

  return (
    <div style={{ backgroundColor: '#e3e6e5', minHeight: '100vh', position: 'relative', overflowY: 'hidden' }}>
      <HeaderNav />
      <SecondaryNav />
      <Container sx={{ display: 'flex', justifyContent: 'space-between' }} maxWidth="xl">
        <Banner />
        <div        
          style={{
            position: 'absolute',
            top: '20%', // Adjust the top positioning as needed
            width: '90%',
            height: '90%',
            zIndex: 1, // Ensures it overlaps the Banner
            left: '5%'
          }}
        >
          <FlexBox styles={{ justifyContent: 'space-evenly', height: '100%' }}>
            {fourCards.map(() => (
              <CommerceCards />
            ))}
          </FlexBox>
        </div>
      </Container>
    </div>
  );
};

export { ECommerce };
