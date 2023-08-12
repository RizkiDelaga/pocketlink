import { Button, TextField } from '@mui/material';
import axios from 'axios';
import { Fragment, useState } from 'react';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router';

function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formRegister, setFormRegister] = useState({
    userName: '',
    phone: null,
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleRegister = async () => {
    try {
      const res = await axios({
        method: 'POST',
        url: `${process.env.REACT_APP_ACCOUNT_API_KEY}/api/v1/user/register`,
        data: {
          username: formRegister.userName,
          phone: formRegister.phone,
          email: formRegister.email,
          password: formRegister.password,
        },
      });

      navigate('/Login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (formRegister.password === formRegister.confirmPassword) {
              handleRegister();
            } else {
              alert("Password don't match!");
            }
          }}
        >
          <TextField
            required
            variant="standard"
            label="Username"
            type="text"
            value={formRegister.userName}
            onChange={(e) => {
              setFormRegister({ ...formRegister, userName: e.target.value });
            }}
            autoComplete="off"
            sx={{ width: '100%' }}
          />

          <TextField
            required
            variant="standard"
            label="Phone"
            type="number"
            value={formRegister.phone}
            onChange={(e) => {
              setFormRegister({ ...formRegister, phone: e.target.value });
            }}
            autoComplete="off"
            sx={{ width: '100%' }}
          />

          <TextField
            required
            variant="standard"
            label="Email"
            type="text"
            value={formRegister.email}
            onChange={(e) => {
              setFormRegister({ ...formRegister, email: e.target.value });
            }}
            autoComplete="off"
            sx={{ width: '100%' }}
          />

          <TextField
            required
            variant="standard"
            label="Password"
            type="text"
            value={formRegister.password}
            onChange={(e) => {
              setFormRegister({ ...formRegister, password: e.target.value });
            }}
            autoComplete="off"
            sx={{ width: '100%' }}
          />

          <TextField
            required
            variant="standard"
            label="Confirm Password"
            type="text"
            value={formRegister.confirmPassword}
            onChange={(e) => {
              setFormRegister({ ...formRegister, confirmPassword: e.target.value });
            }}
            autoComplete="off"
            sx={{ width: '100%' }}
          />

          <Button variant="contained" size="large" type="submit" sx={{ width: '100%', fontWeight: 'bold' }}>
            Register
          </Button>
        </form>
      </div>
    </Fragment>
  );
}

export default Register;
