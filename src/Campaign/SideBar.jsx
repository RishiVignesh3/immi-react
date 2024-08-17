import React from 'react';
import { drawerWidth } from '../Utils/constants';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import GridViewIcon from '@mui/icons-material/GridView';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import SideBarItem from '../Components/SideBarItem';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import SettingsVoiceOutlinedIcon from '@mui/icons-material/SettingsVoiceOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import Groups3OutlinedIcon from '@mui/icons-material/Groups3Outlined';
import AutoModeOutlinedIcon from '@mui/icons-material/AutoModeOutlined';
import PersonPinOutlinedIcon from '@mui/icons-material/PersonPinOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import UsbOutlinedIcon from '@mui/icons-material/UsbOutlined';
import WebOutlinedIcon from '@mui/icons-material/WebOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { styled } from '@mui/material';

const StyledDivider = styled(Divider)({
  marginLeft: '20px',
});

export const SideBar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  const drawer = (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        backgroundColor: '#f9fcfb',
      }}
    >
      <Box>
        <Toolbar
          disableGutters
          variant="dense"
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', padding: '10px', gap: '10px' }}>
            <ArrowCircleUpIcon sx={{ fontSize: '32px', marginLeft: '10px', color: 'darkgreen' }} />
            <Typography component="h2" variant="h6" sx={{ fontWeight: 'bold' }}>
              Level Up
            </Typography>
          </Box>
          <UnfoldMoreIcon />
        </Toolbar>
        <List>
          {[
            { text: 'Dashboard', icon: <GridViewIcon /> },
            { text: 'Analysis', icon: <BarChartOutlinedIcon /> },
          ].map((item) => (
            <SideBarItem text={item.text} icon={item.icon} />
          ))}
        </List>
        <StyledDivider />
        <List>
          {[
            { text: 'Campaigns', icon: <CampaignOutlinedIcon /> },
            { text: 'BroadCast', icon: <SettingsVoiceOutlinedIcon /> },
            { text: 'Transactional', icon: <PaidOutlinedIcon /> },
            { text: 'Deliveries & Drafts', icon: <LocalShippingOutlinedIcon /> },
          ].map((item) => (
            <SideBarItem
              text={item.text}
              icon={item.icon}
              className={`${item.text === 'Campaigns' ? 'selectedItem' : ''}`}
            />
          ))}
        </List>
        <StyledDivider />
        <List>
          {[
            { text: 'People', icon: <Groups3OutlinedIcon /> },
            { text: 'Custom Objects', icon: <AutoModeOutlinedIcon /> },
            { text: 'Segments', icon: <PersonPinOutlinedIcon /> },
            { text: 'Activity Logs', icon: <TrendingUpOutlinedIcon /> },
            {
              text: 'Data and Integrations',
              icon: <UsbOutlinedIcon />,
              sideIcon: <ArrowDropDownOutlinedIcon />,
            },
          ].map((item) => (
            <SideBarItem text={item.text} icon={item.icon} sideIcon={item.sideIcon} />
          ))}
        </List>
        <StyledDivider />
        <SideBarItem
          text={'Content'}
          icon={<WebOutlinedIcon />}
          sideIcon={<ArrowDropDownOutlinedIcon />}
        />
      </Box>
      <SideBarItem text={'Settings'} icon={<WebOutlinedIcon />} />
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, border: 'none' },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'flex', justifyContent: 'space-between' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, border: 'none' },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};
