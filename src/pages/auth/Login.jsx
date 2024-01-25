import { Button } from '@mui/material';
import { Fragment, useState } from 'react';

function Login() {
  return (
    <Fragment>
      <h1>Single Sign-On (SSO)</h1>
      <Button
        onClick={() => {
          window.location.href = 'http://localhost:3001/Login?directTo=pocketlink.com';
        }}
      >
        Login
      </Button>
    </Fragment>
  );
}

export default Login;
