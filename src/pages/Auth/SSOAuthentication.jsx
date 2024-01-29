import { Button } from '@mui/material';
import { Fragment, useState } from 'react';

function SSOAuthentication() {
  return (
    <Fragment>
      <h1>Single Sign-On (SSO)</h1>
      <Button
        onClick={() => {
          window.location.href = 'http://localhost:3000/SSOValidation?directTo=http://localhost:3001';
        }}
      >
        Login
      </Button>

      <Button
        onClick={() => {
          window.location.href = 'http://localhost:3000/Register?directTo=http://localhost:3001';
        }}
      >
        Register
      </Button>
    </Fragment>
  );
}

export default SSOAuthentication;
