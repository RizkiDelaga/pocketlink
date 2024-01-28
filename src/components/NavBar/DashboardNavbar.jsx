import { Avatar, Box, Divider, IconButton, Menu, MenuItem, Switch, Toolbar } from '@mui/material';
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
  const { themeMode, toggleThemeMode } = useContext(ThemeModeContext);

  // Open Account Menu
  const [openMyAccount, setOpenMyAccount] = React.useState(false);
  const handleCloseAccountMenu = (linkDirection) => {
    if (linkDirection) {
      navigate(linkDirection);
    }
    setOpenMyAccount(null);
  };

  return (
    <>
      <AppBar position="fixed" open={props.openSidebar} color="primary">
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
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
              <MenuIcon />
            </IconButton>
          </div>
          <Box sx={{ display: 'flex' }}>
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
                    src={'https://img.freepik.com/free-vector/superhero-character-with-pop-art-style_197582-180.jpg'}
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
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
