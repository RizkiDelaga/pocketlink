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
  Menu,
  MenuItem,
  Switch,
  Toolbar,
} from '@mui/material';
import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemIcon from '@mui/material/ListItemIcon';
import { useNavigate } from 'react-router-dom';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PasswordIcon from '@mui/icons-material/Password';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ThemeModeContext from '../../provider/contexts/ThemeMode';
import CloseIcon from '@mui/icons-material/Close';

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

  // Open Account Menu
  const [openMyAccount, setOpenMyAccount] = React.useState(false);
  const handleCloseAccountMenu = (linkDirection) => {
    if (linkDirection) {
      navigate(linkDirection);
    }
    setOpenMyAccount(null);
  };

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
            {/* Icon Mobile Menu */}
            <IconButton
              edge="start"
              onClick={() => setOpenMobileMenu(true)}
              sx={{
                display: { xs: 'flex', md: 'none' },
                color: scrollPosition >= 70 ? (themeMode === 'light' ? 'inherit' : 'primary.main') : 'primary.main',
                marginRight: 2,
              }}
            >
              <MenuIcon sx={{ fontSize: 32 }} />
            </IconButton>

            <img
              height={30}
              src={'https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg'}
              style={{ marginRight: '24px' }}
              alt="Logo"
            />

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
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Switch onChange={toggleThemeMode} color="primary" />
              <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
                <Avatar
                  src={'https://img.freepik.com/free-vector/superhero-character-with-pop-art-style_197582-180.jpg'}
                  sx={{ width: 32, height: 32 }}
                />
              </Box>
            </Box>

            {!localStorage.getItem('accessToken') ? (
              <Button
                variant="outlined"
                size="small"
                color={scrollPosition >= 70 ? (themeMode === 'light' ? 'inherit' : 'primary') : 'primary'}
                sx={{ ml: 2 }}
              >
                Login
              </Button>
            ) : (
              <>
                <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
                  <Avatar
                    src={'https://img.freepik.com/free-vector/superhero-character-with-pop-art-style_197582-180.jpg'}
                    sx={{ width: 32, height: 32 }}
                  />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
                  {/* Account Menu */}
                  <IconButton
                    color="inherit"
                    onClick={(event) => {
                      setOpenMyAccount(event.currentTarget);
                    }}
                    sx={{ padding: 0 }}
                  >
                    <Avatar
                      src={'https://img.freepik.com/free-vector/superhero-character-with-pop-art-style_197582-180.jpg'}
                      sx={{ width: 32, height: 32 }}
                    />
                  </IconButton>

                  <Menu
                    anchorEl={openMyAccount}
                    open={openMyAccount}
                    onClose={() => handleCloseAccountMenu()}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        minWidth: '280px',
                        maxWidth: '300px',
                        borderRadius: '16px',
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 0.5,
                      },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginLeft: '16px',
                        marginRight: '16px',
                      }}
                    >
                      <Avatar
                        src={
                          'https://img.freepik.com/free-vector/superhero-character-with-pop-art-style_197582-180.jpg'
                        }
                        sx={{ marginRight: 1.5 }}
                      />
                      <div style={{ width: 'fit-content' }}>
                        <div style={{ fontWeight: 'bold', wordWrap: 'break-word', whiteSpace: 'pre-wrap' }}>asd</div>
                      </div>
                    </div>

                    <MenuItem onClick={() => handleCloseAccountMenu('/Dashboard')}>
                      <ListItemIcon>
                        <DashboardOutlinedIcon />
                      </ListItemIcon>
                      Dashboard Admin
                    </MenuItem>
                    <MenuItem onClick={() => handleCloseAccountMenu('/Dashboard/EditProfil')}>
                      <ListItemIcon>
                        <ManageAccountsIcon />
                      </ListItemIcon>
                      Edit Profil
                    </MenuItem>
                    <MenuItem onClick={() => handleCloseAccountMenu('Dashboard/UbahPassword')}>
                      <ListItemIcon>
                        <PasswordIcon />
                      </ListItemIcon>
                      Ubah Password
                    </MenuItem>

                    <Divider />
                    <MenuItem
                      onClick={() => {
                        localStorage.removeItem('access_token');
                        handleCloseAccountMenu('/');
                      }}
                    >
                      <ListItemIcon>
                        <ExitToAppIcon />
                      </ListItemIcon>
                      Keluar
                    </MenuItem>
                  </Menu>
                </Box>
              </>
            )}
          </Box>
        </Toolbar>

        {/* Mobile Menu */}
        <Dialog
          fullScreen="xs"
          open={openMobileMenu}
          onClose={() => setOpenMobileMenu(false)}
          sx={{ backgroundImage: 'none' }}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <img
              height={40}
              src={'https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg'}
              alt="Logo"
            />
            <IconButton color="primary" onClick={() => setOpenMobileMenu(false)}>
              <CloseIcon sx={{ fontSize: '30px' }} />
            </IconButton>
          </DialogTitle>

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
                  <Switch onChange={toggleThemeMode} color="primary" />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
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
            <Button variant="outlined" size="medium" color="primary" sx={{ width: '100%' }}>
              Login
            </Button>
          </Box>
        </Dialog>
      </AppBar>
    </>
  );
}
