import { Fragment, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { Box, Button, CssBaseline, Paper } from '@mui/material';

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <CssBaseline />

      <Paper>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione eos, temporibus repellat quisquam numquam
        minima blanditiis consectetur iusto impedit officiis excepturi non eveniet tenetur? Voluptatum quisquam nostrum
        placeat dicta quos.
      </Paper>

      <Button
        onClick={() => {
          navigate('/Dashboard');
        }}
      >
        Dashboard
      </Button>

      <Button
        onClick={() => {
          navigate('/SSOAuthentication');
        }}
      >
        Login
      </Button>

      <Button
        onClick={() => {
          localStorage.removeItem('accessToken');
        }}
      >
        Logout
      </Button>
    </>
  );
}

export default Home;
