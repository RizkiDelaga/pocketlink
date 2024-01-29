import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogTitle,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Switch,
  Toolbar,
} from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemIcon from '@mui/material/ListItemIcon';
import { useNavigate } from 'react-router-dom';
import ThemeModeContext from '../../provider/contexts/ThemeMode';
import CloseIcon from '@mui/icons-material/Close';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import LanguageIcon from '@mui/icons-material/Language';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

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
}));

export default function DefaultNavBar() {
  const navigate = useNavigate();
  const theme = useTheme();
  const { themeMode, toggleThemeMode } = useContext(ThemeModeContext);
  const [scrollPosition, setScrollPosition] = useState(window.screenY);
  const [openMobileMenu, setOpenMobileMenu] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Set initial scroll position
    setScrollPosition(window.scrollY);
    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        color="primary"
        sx={{
          bgcolor: scrollPosition >= 70 ? null : 'rgba(0, 0, 0, 0)',
          boxShadow: scrollPosition >= 70 ? null : '0 0 0 rgba(0, 0, 0, 0)',
        }}
      >
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* Open Mobile Menu Icon */}
            <IconButton
              edge="start"
              onClick={() => setOpenMobileMenu(true)}
              sx={{
                display: { xs: 'flex', md: 'none' },
                color: scrollPosition >= 70 ? (themeMode === 'light' ? 'inherit' : 'primary.main') : 'primary.main',
                marginRight: 2,
              }}
            >
              <MenuIcon fontSize="large" />
            </IconButton>

            {/* Logo */}
            <img
              height={30}
              src={'https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg'}
              style={{ marginRight: '24px' }}
              alt="Logo"
            />

            {/* Header Navigation */}
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                color: scrollPosition >= 70 ? (themeMode === 'light' ? 'inherit' : 'primary.main') : 'primary.main',
                fontWeight: 'bold',
              }}
            >
              <Box sx={{ mx: 1 }}>Feature</Box>
              <Box sx={{ mx: 1 }}>Pricing</Box>
              <Box sx={{ mx: 1 }}>About Us</Box>
            </Box>
          </div>

          <Box sx={{ display: 'flex' }}>
            {/* Change Default System Configuration */}
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {/* Change Language */}
              <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
                <LanguageIcon
                  fontSize="large"
                  color={scrollPosition >= 70 ? (themeMode === 'light' ? 'light' : 'primary') : 'primary'}
                />
              </Box>
              {/* Change Theme Mode */}
              <Switch
                checked={themeMode === 'light' ? true : false}
                icon={<LightModeIcon fontSize="small" color="primary" sx={{ bgcolor: 'white', borderRadius: 100 }} />}
                checkedIcon={
                  <DarkModeIcon fontSize="small" color="primary" sx={{ bgcolor: 'white', borderRadius: 100 }} />
                }
                onChange={toggleThemeMode}
                name="themeSwitch"
              />
            </Box>

            {!localStorage.getItem('accessToken') ? (
              <>
                {/* Direct Login */}
                <Button
                  variant="outlined"
                  size="small"
                  color={scrollPosition >= 70 ? (themeMode === 'light' ? 'inherit' : 'primary') : 'primary'}
                  onClick={() => navigate('/SSOAuthentication')}
                  sx={{ ml: 2 }}
                >
                  Login
                </Button>
              </>
            ) : (
              <>
                {/* Open Notification Icon */}
                <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
                  <CircleNotificationsIcon
                    fontSize="large"
                    color={scrollPosition >= 70 ? (themeMode === 'light' ? 'light' : 'primary') : 'primary'}
                  />
                </Box>

                {/* Open Profile Menu Icon */}
                <ProfileMenu />
              </>
            )}
          </Box>
        </Toolbar>

        {/* Mobile Menu - Dialog Component */}
        <Dialog
          fullScreen="xs"
          open={openMobileMenu}
          onClose={() => setOpenMobileMenu(false)}
          sx={{ backgroundImage: 'none' }}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {/* Header Logo */}
            <img
              height={40}
              src={'https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg'}
              alt="Logo"
            />
            {/* Close Dialog */}
            <IconButton color="primary" onClick={() => setOpenMobileMenu(false)}>
              <CloseIcon sx={{ fontSize: '30px' }} />
            </IconButton>
          </DialogTitle>

          {/* List of Navigation Menu */}
          <List>
            <ListItem disablePadding onClick={() => setTimeout(() => setOpenMobileMenu(false), 500)}>
              <ListItemButton sx={{ px: 3 }}>
                <ListItemText
                  primary="Feature"
                  primaryTypographyProps={{
                    color: 'primary',
                    fontWeight: 'bold',
                  }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding onClick={() => setTimeout(() => setOpenMobileMenu(false), 500)}>
              <ListItemButton sx={{ px: 3 }}>
                <ListItemText
                  primary="Pricing"
                  primaryTypographyProps={{
                    color: 'primary',
                    fontWeight: 'bold',
                  }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding onClick={() => setTimeout(() => setOpenMobileMenu(false), 500)}>
              <ListItemButton sx={{ px: 3 }}>
                <ListItemText
                  primary="About Us"
                  primaryTypographyProps={{
                    color: 'primary',
                    fontWeight: 'bold',
                  }}
                />
              </ListItemButton>
            </ListItem>

            <Divider variant="middle" />

            {/* Change Default System Configuration */}
            {/* Change Theme Mode */}
            <ListItem disablePadding>
              <ListItemButton sx={{ px: 3 }}>
                <ListItemText
                  primary="Theme Mode"
                  primaryTypographyProps={{
                    color: 'primary',
                    fontWeight: 'bold',
                  }}
                />
                <ListItemIcon sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Switch
                    checked={themeMode === 'light' ? true : false}
                    icon={
                      <LightModeIcon fontSize="small" color="primary" sx={{ bgcolor: 'white', borderRadius: 100 }} />
                    }
                    checkedIcon={
                      <DarkModeIcon fontSize="small" color="primary" sx={{ bgcolor: 'white', borderRadius: 100 }} />
                    }
                    onChange={toggleThemeMode}
                    name="themeSwitch"
                  />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            {/* Change Language */}
            <ListItem disablePadding>
              <ListItemButton sx={{ px: 3 }}>
                <ListItemText
                  primary="Language"
                  primaryTypographyProps={{
                    color: 'primary',
                    fontWeight: 'bold',
                  }}
                />
                <ListItemIcon sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Avatar
                    src={'https://img.freepik.com/free-vector/superhero-character-with-pop-art-style_197582-180.jpg'}
                    sx={{ width: 32, height: 32 }}
                  />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>

          <Box sx={{ display: localStorage.getItem('accessToken') ? 'none' : 'flex', mx: 3 }}>
            {/* Direct Login */}
            <Button variant="outlined" size="medium" color="primary" sx={{ width: '100%' }}>
              Login
            </Button>
          </Box>
        </Dialog>
      </AppBar>
    </>
  );
}
