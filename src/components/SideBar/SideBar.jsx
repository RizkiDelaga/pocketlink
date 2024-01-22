import { Box, Divider, IconButton, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import React, { createContext, useContext } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Link, useNavigate } from 'react-router-dom';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AddToPhotosOutlinedIcon from '@mui/icons-material/AddToPhotosOutlined';
import CloseIcon from '@mui/icons-material/Close';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LinkIcon from '@mui/icons-material/Link';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import ViewDayIcon from '@mui/icons-material/ViewDay';

const drawerWidth = 300;

const openedMixin = (theme) => ({
  [theme.breakpoints.down('md')]: {
    width: '100vw',
  },
  [theme.breakpoints.up('md')]: {
    width: drawerWidth,
  },
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  zIndex: 10000,
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  zIndex: 10000,
  width: `calc(${theme.spacing(8)} + 1px)`,
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export default function SideBar(props) {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <>
      <Drawer variant="permanent" open={props.openSidebar} style={{ backgroundColor: theme.palette.primary.main }}>
        <DrawerHeader sx={{ border: 'none', display: 'flex', justifyContent: 'center' }}>
          <img
            src={'https://img.freepik.com/free-vector/superhero-character-with-pop-art-style_197582-180.jpg'}
            alt="Logo"
            style={{ width: '30px' }}
          />

          <IconButton
            onClick={props.handleSidebar}
            sx={{
              position: 'absolute',
              right: 0,
              marginRight: 1,
              color: 'primary.main',
              [theme.breakpoints.up('md')]: {
                display: 'none',
              },
            }}
          >
            <CloseIcon />
          </IconButton>
        </DrawerHeader>
        <Divider variant="middle" />
        <List sx={{ p: 0 }}>
          {[
            { title: 'Dashboard', icon: <DashboardIcon />, link: '/Dashboard' },
            { title: 'Short Link', icon: <LinkIcon />, link: '/Dashboard/ShortLink' },
            { title: 'QR Code', icon: <QrCode2Icon />, link: '/Dashboard/QRCode' },
            { title: 'Link Page', icon: <ViewDayIcon />, link: '/Dashboard/LinkPage' },
          ].map((listNavbar, index) => {
            return (
              <>
                <Link to={listNavbar.link} onClick={window.innerWidth <= 900 ? props.handleSidebar : null}>
                  <ListItem
                    key={listNavbar.title}
                    disablePadding
                    sx={{
                      display: 'block',
                      fontWeight: 'bold',
                      color: 'primary.main',
                    }}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: props.openSidebar ? 'initial' : 'center',
                        px: 2.5,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: props.openSidebar ? 3 : 'auto',
                          justifyContent: 'center',
                          color: 'primary.main',
                        }}
                      >
                        {listNavbar.icon}
                      </ListItemIcon>
                      <ListItemText primary={listNavbar.title} sx={{ opacity: props.openSidebar ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                </Link>
                <Divider variant="middle" />
              </>
            );
          })}
        </List>
      </Drawer>
    </>
  );
}
