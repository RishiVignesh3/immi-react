import { Box } from '@mui/material';
import React from 'react';

export const FlexBox = (props) => {
    const { children, styles } = props;
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', ...styles }} {...props}>
            {children}
        </Box>
    );
};
