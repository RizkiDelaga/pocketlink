import { Fragment, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { Box, CssBaseline, Paper } from '@mui/material';

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

      <button
        onClick={() => {
          navigate('Dashboard');
        }}
      >
        Dashboard
      </button>
    </>
  );
}

export default Home;
