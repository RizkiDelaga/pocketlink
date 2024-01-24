import { Box, CssBaseline } from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Outlet, useNavigate } from 'react-router-dom';
import SideBar from '../components/SideBar/SideBar';
import NavBar from '../components/NavBar/NavBar';

export default function DashboardLayout() {
  const navigate = useNavigate();
  const theme = useTheme();
  const [openSidebar, setOpenSidebar] = React.useState(false);
  const handleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <>
      <CssBaseline />
      <NavBar openSidebar={openSidebar} handleSidebar={handleSidebar} />
      <SideBar openSidebar={openSidebar} handleSidebar={handleSidebar} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          paddingTop: `calc(64px + 24px)`,
          paddingBottom: `24px`,
          paddingX: '24px',
          marginLeft: openSidebar ? '300px' : '64.2px',
          [theme.breakpoints.down('md')]: {
            paddingX: '8px',
            marginLeft: '0 !important',
          },
        }}
      >
        <Outlet />
      </Box>
    </>
  );
}
