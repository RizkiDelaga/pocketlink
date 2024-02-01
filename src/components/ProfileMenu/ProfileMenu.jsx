import { Avatar, Box, Divider, IconButton, ListItemIcon, Menu, MenuItem } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

import CardMembershipOutlinedIcon from '@mui/icons-material/CardMembershipOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';

import HelpCenterOutlinedIcon from '@mui/icons-material/HelpCenterOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import LocalPoliceOutlinedIcon from '@mui/icons-material/LocalPoliceOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';

import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';

export default function ProfileMenu() {
  const navigate = useNavigate();

  // Open Profile Menu
  const [openProfileMenu, setOpenProfileMenu] = React.useState(false);
  const handleCloseAccountMenu = (linkDirection) => {
    if (linkDirection) {
      navigate(linkDirection);
    }
    setOpenProfileMenu(null);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
      <IconButton
        color="inherit"
        onClick={(event) => {
          setOpenProfileMenu(event.currentTarget);
        }}
        sx={{ padding: 0 }}
      >
        <Avatar
          src={'https://img.freepik.com/free-vector/superhero-character-with-pop-art-style_197582-180.jpg'}
          sx={{ width: 32, height: 32 }}
        />
      </IconButton>

      {/* List Profile Menu */}
      <Menu
        id="profileMenu"
        anchorEl={openProfileMenu}
        open={openProfileMenu}
        onClose={() => handleCloseAccountMenu()}
        PaperProps={{
          elevation: 0,
          sx: {
            minWidth: '280px',
            maxWidth: '300px',
            overflowY: 'auto',
            borderRadius: '16px',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 0.5,
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mx: 2,
            my: 1,
          }}
        >
          <Avatar
            src={'https://img.freepik.com/free-vector/superhero-character-with-pop-art-style_197582-180.jpg'}
            sx={{ marginRight: 1.5 }}
          />
          <Box
            sx={{
              fontWeight: 'bold',
              overflowWrap: 'break-word',
              whiteSpace: 'pre-wrap',
            }}
          >
            Rizki Delaga Prasetya
          </Box>
        </Box>

        {/* First Menu Section */}
        <MenuItem onClick={() => handleCloseAccountMenu('/Dashboard')} sx={{ color: 'primary.main' }}>
          <ListItemIcon sx={{ color: 'primary.main' }}>
            <DashboardOutlinedIcon />
          </ListItemIcon>
          Dashboard
        </MenuItem>

        <MenuItem onClick={() => handleCloseAccountMenu('/Dashboard/Profile')} sx={{ color: 'primary.main' }}>
          <ListItemIcon sx={{ color: 'primary.main' }}>
            <PortraitOutlinedIcon />
          </ListItemIcon>
          Update Profile
        </MenuItem>

        <MenuItem
          onClick={() => handleCloseAccountMenu('/Dashboard/ActiveSubscription')}
          sx={{ color: 'primary.main' }}
        >
          <ListItemIcon sx={{ color: 'primary.main' }}>
            <CardMembershipOutlinedIcon />
          </ListItemIcon>
          Active Subscription
        </MenuItem>

        <MenuItem onClick={() => handleCloseAccountMenu('/Dashboard/Settings')} sx={{ color: 'primary.main' }}>
          <ListItemIcon sx={{ color: 'primary.main' }}>
            <SettingsApplicationsOutlinedIcon />
          </ListItemIcon>
          Settings
        </MenuItem>

        {/* Second Menu Section */}
        <Divider variant="middle" />
        <MenuItem onClick={() => handleCloseAccountMenu('/HelpCenter')} sx={{ color: 'primary.main' }}>
          <ListItemIcon sx={{ color: 'primary.main' }}>
            <HelpCenterOutlinedIcon />
          </ListItemIcon>
          Help Center
        </MenuItem>

        <MenuItem onClick={() => handleCloseAccountMenu('/TermsOfUse')} sx={{ color: 'primary.main' }}>
          <ListItemIcon sx={{ color: 'primary.main' }}>
            <GavelOutlinedIcon />
          </ListItemIcon>
          Terms of Use
        </MenuItem>

        <MenuItem onClick={() => handleCloseAccountMenu('/PrivacyPolicy')} sx={{ color: 'primary.main' }}>
          <ListItemIcon sx={{ color: 'primary.main' }}>
            <LocalPoliceOutlinedIcon />
          </ListItemIcon>
          Privacy Policy
        </MenuItem>

        <MenuItem onClick={() => handleCloseAccountMenu('/Feedback')} sx={{ color: 'primary.main' }}>
          <ListItemIcon sx={{ color: 'primary.main' }}>
            <FeedbackOutlinedIcon />
          </ListItemIcon>
          Feedback
        </MenuItem>

        {/* Third Menu Section */}
        <Divider variant="middle" />
        <MenuItem
          onClick={() => {
            localStorage.removeItem('accessToken');
            handleCloseAccountMenu('/');
          }}
          sx={{ color: 'primary.main' }}
        >
          <ListItemIcon sx={{ color: 'primary.main' }}>
            <ExitToAppIcon />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
}
