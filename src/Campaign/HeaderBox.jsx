import { InputAdornment, TextField, styled } from '@mui/material';
import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import { FlexBox } from '../Components/FlexBox';


const StyledTextField = styled(TextField)({
  width: '14.875rem',
    '& .MuiInputBase-input': {
      padding: '0.375rem',
      textOverflow: 'ellipsis',
      fontSize: '0.875rem'
    },
    '& .MuiOutlinedInput-root': {
      paddingLeft: '0.25rem',
    }
  });

const HeaderBox = () => {
    return (
      <FlexBox styles={{backgroundColor: '#FFF'}}>
        <StyledTextField
          id="outlined-basic"
          variant="outlined"
          placeholder="Filter by name or description hello"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={{margin: 0}}>
                <SearchOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />
        <NotificationsNoneOutlinedIcon />
        </FlexBox>
    );
};

export default HeaderBox;