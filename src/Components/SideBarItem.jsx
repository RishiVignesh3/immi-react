import React from 'react';
import { ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, styled } from '@mui/material';

const StyledListItemButton = styled(ListItemButton)(({ className }) => ({
  ...(className === 'selectedItem' && {
    background: 'linear-gradient(to right, #f5f3ff 0%, #f5f3ff 100%)',
    color: 'rgba(120, 100, 242, 1)',
    margin: '8px 16px',
    padding: '4px 0',
    fontSize: '10px',
    '&:hover': {
      background: 'linear-gradient(to right, #f5f3ff 0%, #f5f3ff 100%)',
    },
  }),
  '&.MuiListItemButton-root': {
    borderRadius: '5px',
    border: className === 'selectedItem' ? '1px solid rgba(120, 100, 242, 0.3)' : '',
  },
}));

const StyledListItemIcon = styled(ListItemIcon)(({ theme, className }) => ({
  '&.MuiListItemIcon-root': {
    minWidth: '0',
    color: className === 'selectedItem' ? 'rgba(120, 100, 242, 1)' : 'black',
    padding: '0 8px',
  },
}));


const SideBarItem = (props) => {
  const { text, icon, className, sideIcon } = props;

  return (
    <ListItem key={text} disablePadding>
      <StyledListItemButton className={className}>
        <StyledListItemIcon className={className}>
          {icon}
        </StyledListItemIcon>
        <ListItemText primary={<Typography sx={{fontSize: '12px'}}>{text}</Typography>} />
      </StyledListItemButton>
      {sideIcon}
    </ListItem>
  );
};

export default SideBarItem;
