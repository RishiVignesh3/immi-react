import React, { useState } from 'react';
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Toolbar,
  Typography,
  styled,
} from '@mui/material';
import { FlexBox } from '../Components/FlexBox';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { flexStyles } from '../Utils/constants';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { UiDialog } from '../Components/Modals';
import { LiaFlagUsaSolid } from 'react-icons/lia';
import MenuWithBackDrop from '../Components/MenuWithBackDrop';
import { BsCart4 } from 'react-icons/bs';

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-input': {
    padding: '10px',
  },
  '& .MuiOutlinedInput-root': {
    padding: 0,
  },
});
const StyledIconButton = styled(IconButton)({
  '& .MuiIconButton-root': {},
});

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    top: 4,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const HeaderNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpenMenu = Boolean(anchorEl);
  const [hovering, setHovering] = useState(false);

  const handleClick = (event) => {
    setHovering(true);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setHovering(false);
    // Delay closing to allow the mouse to enter the Menu
    setTimeout(() => {
      if (!hovering) {
        setAnchorEl(null);
      }
    }, 150);
  };

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: 'black'}}>
        <Toolbar sx={{ gap: '20px' }}>
          <FlexBox styles={{ flex: 1 }}>
            <Typography>Amazon</Typography>
            <FlexBox onClick={() => setIsOpen(true)}>
              <LocationOnIcon />
              <Box sx={{ lineHeight: 0 }}>
                <Typography
                  variant="caption"
                  sx={{ lineHeight: 1, color: 'grey', display: 'block' }}
                >
                  Deliver to
                </Typography>
                <Typography variant="button" sx={{ fontWeight: 'bold' }}>
                  India
                </Typography>
              </Box>
            </FlexBox>
          </FlexBox>
          <FlexBox styles={{ flex: 4 }}>
            <StyledTextField
              fullWidth
              sx={{ backgroundColor: 'white', height: '80%' }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <StyledIconButton sx={{ backgroundColor: '#fdbd68', borderRadius: 0 }}>
                      <SearchIcon />
                    </StyledIconButton>
                  </InputAdornment>
                ),
                startAdornment: (
                  <InputAdornment position="start">
                    <StyledIconButton
                      sx={{ ...flexStyles, backgroundColor: 'lightgrey', borderRadius: 0 }}
                      onClick={handleClick}
                    >
                      <Typography> All </Typography>
                      <ArrowDropDownIcon />
                    </StyledIconButton>
                  </InputAdornment>
                ),
              }}
            />
          </FlexBox>
          <FlexBox styles={{ flex: 2 }}>
            <Typography
              onMouseEnter={handleClick}
              onMouseLeave={handleClose}
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <LiaFlagUsaSolid style={{ fontSize: '24px' }} />
              EN <ArrowDropDownIcon />
            </Typography>
            <Box onMouseEnter={handleClick} onMouseLeave={handleClose}>
              <Typography variant="caption" sx={{ lineHeight: 1 }}>
                Hello, Sign in
              </Typography>
              <Typography sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
                Account & Lists <ArrowDropDownIcon />
              </Typography>
            </Box>
            <Box>
              <Typography variant="caption" sx={{ lineHeight: 1 }}>
                Returns
              </Typography>
              <Typography sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
                & Orders
              </Typography>
            </Box>
            <FlexBox>
              <StyledBadge badgeContent={4} color="primary">
                <BsCart4 style={{ fontSize: '30px' }} />
              </StyledBadge>
              <Typography sx={{ paddingTop: '16px', fontWeight: 'bold' }}> Cart</Typography>
            </FlexBox>
          </FlexBox>
        </Toolbar>
      </AppBar>
      <UiDialog open={isOpen} onClose={() => setIsOpen(false)} title="Location">
        <Typography>Please select either okay or cancel to close this</Typography>
      </UiDialog>

      <MenuWithBackDrop
        anchorEl={anchorEl}
        handleClose={handleClose}
        isOpenMenu={isOpenMenu}
        options={['option 7', ' option 2', 'option 3']}
      />
    </div>
  );
};

export default HeaderNav;
