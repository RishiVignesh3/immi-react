import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { DialogActions, DialogContent, Divider, styled } from '@mui/material';
import { PrimaryButton } from './PrimaryButton';
import { DefaultButton } from './DefaultButton';

/**
 * A simple dialog component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Function} props.onClose - The function to call when the dialog is closed.
 * @param {string} props.selectedValue - The selected value.
 * @param {boolean} props.open - Whether the dialog is open or not.
 * @returns {JSX.Element} The rendered SimpleDialog component.
 */
const UiDialog = (props) => {
  const { onClose, selectedValue, open, title } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const StyledDialog = styled(Dialog)({
    '& .MuiPaper-root': {
      minWidth: '500px',
      minHeight: '300px',
      position: 'relative',
    },
  });

  return (
    <StyledDialog onClose={handleClose} open={open} maxWidth="lg">
      <DialogTitle>{title}</DialogTitle>
      <Divider />
      <DialogContent>{props.children}</DialogContent>
      <Divider />
      <div>
        <DialogActions>
          <DefaultButton onClick={handleClose}>Cancel</DefaultButton>
          <PrimaryButton onClick={handleClose}>Okay</PrimaryButton>
        </DialogActions>
      </div>
    </StyledDialog>
  );
};

export { UiDialog };
