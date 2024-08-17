import { Backdrop, Menu, MenuItem } from '@mui/material';
import React from 'react';

const MenuWithBackDrop = (props) => {
  const { anchorEl, handleClose, isOpenMenu, options } = props;

  if(!options) {
    return null
  }
  return (
    <>
      <Menu anchorEl={anchorEl} open={isOpenMenu} onClose={handleClose}>
        {options.map((item, index) => (
          <MenuItem key={index} onClick={handleClose}>{item}</MenuItem>
        ))}
      </Menu>

      <Backdrop sx={{ color: '#fff' }} open={isOpenMenu} onClick={handleClose} />
    </>
  );
};

export default MenuWithBackDrop;
