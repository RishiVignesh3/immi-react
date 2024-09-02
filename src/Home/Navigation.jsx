import { Box, Button, Container, Toolbar, Typography } from '@mui/material';
import React from 'react';
import FiberSmartRecordIcon from '@mui/icons-material/FiberSmartRecord';
import { FlexBox } from '../Components/FlexBox';
import { Link } from 'react-router-dom';

const pages = ['Campaign', 'Tree', 'Windowing', 'Search', 'MCQ', 'ECommerce'];

export const Navigation = () => {
  return (
    <Toolbar sx={{ position: 'static' }}>
      <Container sx={{ display: 'flex', justifyContent: 'space-between' }} maxWidth="xl">
        <FlexBox styles={{ flex: 1 }}>
          <FlexBox>
            <FiberSmartRecordIcon sx={{ mr: 1 }} />
            <Typography>Pro</Typography>
          </FlexBox>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, color: '#000', gap: '50px', mr: 8 }}>
            {pages.map((page) => (
              <Link
                to={page}
                key={page}
                style={{ my: 2, display: 'block', color: 'inherit', textDecoration: 'none' }}
              >
                {page}
              </Link>
            ))}
          </Box>
        </FlexBox>
        <FlexBox>
          <Button sx={{ borderRadius: '20px', border: '1px solid', color: 'inherit' }}>
            Contact Us
          </Button>
          <Box></Box>
        </FlexBox>
      </Container>
    </Toolbar>
  );
};
