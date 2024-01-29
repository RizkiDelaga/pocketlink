import { Box, IconButton, Toolbar } from '@mui/material';
import React, { useContext } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import ThemeModeContext from '../../provider/contexts/ThemeMode';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ProfileMenu from '../ProfileMenu/ProfileMenu';

const drawerWidth = 300;

// Navbar configuration
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  height: '64px',
  justifyContent: 'center',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function DashboardNavbar(props) {
  const navigate = useNavigate();
  const theme = useTheme();
  const { themeMode } = useContext(ThemeModeContext);

  return (
    <>
      <AppBar position="fixed" open={props.openSidebar} color="primary">
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Open Menu Icon For Sidebar */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              aria-label="open drawer"
              onClick={props.handleSidebar}
              edge="start"
              sx={{
                marginRight: 1,
                color: themeMode === 'light' ? '#ffffff' : 'primary.main',
                marginLeft: props.openSidebar ? 'none' : 6,
                [theme.breakpoints.down('md')]: {
                  marginLeft: '0 !important',
                },
              }}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          </Box>

          <Box sx={{ display: 'flex' }}>
            {/* Open Notification Icon */}
            <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
              <CircleNotificationsIcon fontSize="large" color={themeMode === 'light' ? 'light' : 'primary'} />
            </Box>

            {/* Open Profile Menu Icon */}
            <ProfileMenu />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
