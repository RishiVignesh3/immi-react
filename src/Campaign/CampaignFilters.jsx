import { Button, Typography, styled } from '@mui/material';
import React from 'react';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { FlexBox } from '../Components/FlexBox';
import { DropDown } from '../Components/DropDown';
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';

const CreateCampaignButton = styled(Button)({
  backgroundColor: '#4f3ef2',
  color: 'white',
  border: '2px solid lightgrey',
  borderRadius: '10px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#4f3ef2',
  },
});

const CampaignFilters = () => {
  return (
    <>
      <FlexBox styles={{margin: '16px 0 '}}>
        <Typography variant="h6" sx={{fontWeight: 600}}>Campaigns</Typography>
        <CreateCampaignButton startIcon={<AddOutlinedIcon />}>Create Campaign</CreateCampaignButton>
      </FlexBox>
      <FlexBox>
        <DropDown label="All" filterName="Triggered by" Icon={<DataSaverOffIcon/>}/>
        <DropDown label="Campaign tatus" filterName="Status" />
        <DropDown label="Filters by tags..." filterName="Tags" />
        <DropDown label="All" filterName="Sort By" />
      </FlexBox>
    </>
  );
};

export default CampaignFilters;
