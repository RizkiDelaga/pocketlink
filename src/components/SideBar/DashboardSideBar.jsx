import {
  Avatar,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Switch,
  Tooltip,
  Zoom,
} from '@mui/material';
import React, { useContext } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Link, useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LinkIcon from '@mui/icons-material/Link';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import ViewDayIcon from '@mui/icons-material/ViewDay';
import ThemeModeContext from '../../provider/contexts/ThemeMode';
import LanguageIcon from '@mui/icons-material/Language';

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

export default function DashboardSideBar(props) {
  const navigate = useNavigate();
  const theme = useTheme();
  const { themeMode, toggleThemeMode } = useContext(ThemeModeContext);

  return (
    <>
      <Drawer variant="permanent" open={props.openSidebar} style={{ backgroundColor: theme.palette.primary.main }}>
        {/* Header Logo */}
        <DrawerHeader sx={{ border: 'none', display: 'flex', justifyContent: 'center' }}>
          <img
            src={'https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg'}
            alt="Logo"
            style={{ height: '30px', width: '100%' }}
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
            <CloseIcon sx={{ fontSize: 32 }} />
          </IconButton>
        </DrawerHeader>

        {/* List of Sidebar Menu */}
        <List
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
            p: 0,
            pb: 1,
          }}
        >
          <Box>
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
                      <Tooltip
                        title={listNavbar.title}
                        placement="right"
                        color="primary.main"
                        TransitionComponent={Zoom}
                        disableHoverListener={props.openSidebar}
                        arrow
                      >
                        <ListItemButton
                          sx={{
                            minHeight: 48,
                            px: 2.5,
                          }}
                        >
                          <ListItemIcon
                            sx={{
                              minWidth: 0,
                              mr: props.openSidebar ? 3 : 'auto',
                              color: 'primary.main',
                            }}
                          >
                            {listNavbar.icon}
                          </ListItemIcon>
                          <ListItemText primary={listNavbar.title} sx={{ opacity: props.openSidebar ? 1 : 0 }} />
                        </ListItemButton>
                      </Tooltip>
                    </ListItem>
                  </Link>
                </>
              );
            })}
          </Box>

          {/* Change Default System Configuration */}
          <Box>
            <Divider variant="middle" />

            {/* Change Theme Mode */}
            <ListItem
              disablePadding
              sx={{
                display: 'block',
                color: 'primary.main',
              }}
            >
              <Tooltip
                title="Theme Mode"
                placement="right"
                color="primary.main"
                TransitionComponent={Zoom}
                disableHoverListener={props.openSidebar}
                arrow
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: props.openSidebar ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemText primary={'Theme Mode'} sx={{ opacity: props.openSidebar ? 1 : 0 }} />
                  <ListItemIcon
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      minWidth: 0,
                      color: 'primary.main',
                    }}
                  >
                    <Switch onChange={toggleThemeMode} />
                  </ListItemIcon>
                </ListItemButton>
              </Tooltip>
            </ListItem>

            {/* Change Language */}
            <ListItem
              disablePadding
              sx={{
                display: 'block',
                color: 'primary.main',
              }}
            >
              <Tooltip
                title="Language"
                placement="right"
                color="primary.main"
                TransitionComponent={Zoom}
                disableHoverListener={props.openSidebar}
                arrow
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: props.openSidebar ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemText primary={'Language'} sx={{ opacity: props.openSidebar ? 1 : 0 }} />
                  <ListItemIcon
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      color: 'primary.main',
                    }}
                  >
                    <LanguageIcon />
                  </ListItemIcon>
                </ListItemButton>
              </Tooltip>
            </ListItem>
          </Box>
        </List>
      </Drawer>
    </>
  );
}
