import { Button, styled } from '@mui/material';
import React from 'react';

const StyledButton = styled(Button)({
  color: '#000',
  border: '1px solid',
  fontWeight: 'bold',
  '&:hover': {
    opacity: '0.8',
  },
});

export const DefaultButton = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};
