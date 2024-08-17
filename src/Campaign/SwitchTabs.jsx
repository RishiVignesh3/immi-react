import { Box, Chip, Tab, Tabs, Typography, styled } from '@mui/material';
import React from 'react';

const StyledChip = styled(Chip)({
  fontSize: '12px',
  borderRadius: '6px',
  height: '24px',
});

const tabStyles = { fontSize: '12px', fontWeight: 'bold', textTransform: 'none' };

export const SwitchTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: '#FFF' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            {[
                { label: 'Active', count: '24' },
                { label: 'Completed', count: '179' },
                { label: 'Draft', count: '3' },
            ].map((tab, index) => (
                <Tab
                    key={tab.label}
                    label={
                        <Typography sx={tabStyles} color={value === index ? '#1776ce' : 'black'}>
                            {tab.label}
                        </Typography>
                    }
                    icon={<StyledChip label={tab.count} />}
                    iconPosition="end"
                />
            ))}
        </Tabs>
    </Box>
);
};
