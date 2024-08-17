import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography, styled } from '@mui/material';

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

const SelectStyled = styled(Select)({
  height: '40px'
});

export const DropDown = ({ label, options, filterName, Icon }) => {
  const customNames = options ?? names;
  const [option, setAOption] = React.useState(label);

  const handleChange = (event) => {
    setAOption(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120, width: '100%', textAlign: 'left' }}>
      <Typography variant="subtitle2">{filterName}</Typography>
      <SelectStyled
        value={option}
        onChange={handleChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem value={option}>{option}</MenuItem>
        {customNames.map((item) => (
          <MenuItem value={item}>{item}</MenuItem>
        ))}
      </SelectStyled>
    </FormControl>
  );
};
