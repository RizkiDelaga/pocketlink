// 404Page.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Container } from '@mui/material';

function PageNotFound404() {
  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Typography variant="h1" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" paragraph>
        Oops! Page not found
      </Typography>
      <Typography variant="body1" paragraph>
        The page you are looking for might be in another galaxy
      </Typography>
      <Link to="/">
        <Button variant="contained" color="primary">
          Go back home
        </Button>
      </Link>
    </Container>
  );
}

export default PageNotFound404;
