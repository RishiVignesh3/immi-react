import { Avatar, AvatarGroup, Typography, styled } from '@mui/material';
import AvatarFemale from '../Assets/Images/AvatarFemale.jpg';
import AvatarMale from '../Assets/Images/AvatarMale.jpg';
import React from 'react';
import { FlexBox } from '../Components/FlexBox';

const StyledAvatarGroup = styled(AvatarGroup)({
  '.MuiAvatar-root': {
    height: '30px',
    width: '30px',
  },
  padding: '8px',
});

export const SideChips = ({ mainText, subText, chipColor }) => {
  return (
    <FlexBox
      styles={{
        height: '150px',
        width: '150px',
        borderRadius: '20px',
        backgroundColor: chipColor,
        flexDirection: 'column',
        alignItems: 'unset',
      }}
    >
      <StyledAvatarGroup max={3}>
        <Avatar alt="Remy Sharp" src={AvatarFemale} />
        <Avatar alt="Travis Howard" src={AvatarMale} />
        <Avatar alt="Cindy Baker" src={AvatarFemale} />
        <Avatar alt="Cindy Baker" src={AvatarFemale} />
        <Avatar alt="Cindy Baker" src={AvatarFemale} />
      </StyledAvatarGroup>
      <Typography
        variant="h4"
        sx={{ fontWeight: 600, textAlign: 'left', color: '#fff', paddingLeft: '8px' }}
        gutterBottom
      >
        {mainText}
      </Typography>
      <Typography
        variant="p"
        gutterBottom
        sx={{ textAlign: 'left', color: '#fff', paddingLeft: '8px' }}
      >
        {subText}
      </Typography>
    </FlexBox>
  );
};
