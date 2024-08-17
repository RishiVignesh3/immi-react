import React from 'react';
import { Box, Typography } from '@mui/material';
import MultiTask from '../Assets/Images/MultiTask.png';
import { MdSecurity } from 'react-icons/md';

const MainChip = ({ mainText, subText }) => {
  return (
    <Box
      sx={{
        height: '308px',
        width: '300px',
        borderRadius: '20px',
        alignItems: 'unset',
        backgroundImage: `
        url(${MultiTask}),
          linear-gradient(90deg, rgba(239,218,167,1) 0%, rgba(230,225,180,1) 50%, rgba(217,214,206,1) 100%)
          
        `,
        backgroundPosition: 'top right, center', // Adjust as needed
        backgroundRepeat: 'no-repeat, no-repeat', // Prevent repeating of both layers
        backgroundSize: '60%, cover', // Ensure the gradient and the image cover the element
      }}
    >
      <Box sx={{ marginY: '30%', marginX: '10%' }}>
        <Box
          sx={{
            backgroundColor: '#fff',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            marginBottom: '16px',
          }}
        >
          <MdSecurity style={{ fontSize: '36px', padding: '2px' }} />
        </Box>
        <Typography variant="h5" sx={{ fontWeight: 600, textAlign: 'left' }} gutterBottom>
          What We Do
        </Typography>
        <Typography sx={{ textAlign: 'left' }}>We create customer</Typography>{' '}
        <Typography sx={{ textAlign: 'left' }}>relationships that last forever</Typography>
      </Box>
    </Box>
  );
};

export { MainChip };
