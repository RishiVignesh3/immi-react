import { Button, styled } from '@mui/material';
import React from 'react';

const StyledButton = styled(Button)({
  color: '#FFF',
  backgroundColor: '#000',
  fontWeight: 'bold',
  '&:hover': {
    color: '#FFF',
    backgroundColor: '#000',
    opacity: '0.8',
  },
});

export const PrimaryButton = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};
