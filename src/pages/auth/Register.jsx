import { Button } from '@mui/material';
import { Fragment, useState } from 'react';

function Register() {
  return (
    <Fragment>
      <h1>Single Sign-On (SSO)</h1>
      <Button
        onClick={() => {
          window.location.href = 'http://localhost:3001/Register?directTo=pocketlink.com';
        }}
      >
        Register
      </Button>
    </Fragment>
  );
}

export default Register;
