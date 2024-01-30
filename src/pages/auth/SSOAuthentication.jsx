import { Box, Button, Container, Divider, Grid, Paper } from '@mui/material';
import { Fragment, useState } from 'react';

function SSOAuthentication() {
  return (
    <Fragment>
      <Box
        sx={{
          position: { xs: 'relative', md: 'absolute' },
          top: { xs: 'none', md: '50%' },
          left: { xs: 'none', md: '50%' },
          transform: { xs: 'none', md: 'translate(-50% , -50%)' },
        }}
      >
        <Paper
          elevation={0}
          sx={{
            borderRadius: { xs: 0, md: 4 },
            height: { xs: '100%', md: '90vh' },
            width: { xs: '100%', md: '95vw' },
            overflowY: 'auto',
          }}
        >
          <Grid
            container
            sx={{
              height: { xs: 'none', md: '100%' },
              display: 'flex',
              flexDirection: { xs: 'column-reverse', md: 'row' },
            }}
          >
            <Grid
              item
              xs={12}
              md={4}
              lg={3}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                bgcolor: 'primary.main',
                p: 2,
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'start' }}>
                <img
                  src="https://images.unsplash.com/photo-1618768400447-a4dc4a2c64bb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  style={{ width: '80px', height: '100%', maxHeight: '35px', objectFit: 'cover' }}
                  alt=""
                />
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                <Box>
                  <h2 style={{ m: 0, marginTop: '4px', marginBottom: '4px' }}>One account for all Awevers products!</h2>
                  <div>Users only need to login once to access various application services on our platform</div>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                  &#169;2024 <strong>Pocketlink</strong> - <span style={{ fontSize: '14px' }}>Powered by</span>{' '}
                  <strong>Awevers</strong>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={8}
              lg={9}
              sx={{
                px: 2,
                py: 4,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', mb: 6 }}>
                <img
                  src="https://images.unsplash.com/photo-1618768400447-a4dc4a2c64bb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  style={{ width: '80px', height: '100%', maxHeight: '35px', objectFit: 'cover' }}
                  alt=""
                />
                <h1 style={{ marginTop: '8px', marginBottom: '8px' }}>Sigle Sign-On Authentication</h1>
                <div>You will be directed to the Awevers.tech website to carry out Authentication</div>
              </Box>

              <Container maxWidth="sm">
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => {
                    window.location.href = 'http://localhost:3000/SSOValidation?directTo=http://localhost:3001';
                  }}
                  sx={{ width: '100%' }}
                >
                  Login Now
                </Button>
                <Box sx={{ display: 'flex', alignItems: 'center', my: 4 }}>
                  <Divider variant="middle" sx={{ flexGrow: 1 }} />
                  <div>OR</div>
                  <Divider variant="middle" sx={{ flexGrow: 1 }} />
                </Box>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => {
                    window.location.href = 'http://localhost:3000/Register?directTo=http://localhost:3001';
                  }}
                  sx={{ width: '100%' }}
                >
                  Register For Free Now
                </Button>
              </Container>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Fragment>
  );
}

export default SSOAuthentication;
