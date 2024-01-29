import { Box, LinearProgress } from '@mui/material';
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';

export default function SSOProcess() {
  const navigate = useNavigate();
  const location = useLocation();
  const [progress, setProgress] = React.useState(0);
  const routerParams_token = new URLSearchParams(location.search).get('token');

  useEffect(() => {
    localStorage.setItem('accessToken', routerParams_token);
    setTimeout(() => navigate('/Dashboard'), 3000);

    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return Math.min(oldProgress + 100 / (3000 / 50), 100);
      });
    }, 50);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50% , -50%)' }}>
      <LinearProgress variant="determinate" value={progress} />
      <h2 style={{ textAlign: 'center' }}>Single Sign-On Process</h2>
    </Box>
  );
}
