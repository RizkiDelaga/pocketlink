import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';

export default function LoginProcess() {
  const navigate = useNavigate();
  const location = useLocation();
  const routerParams_token = new URLSearchParams(location.search).get('token');

  useEffect(() => {
    localStorage.setItem('accessToken', routerParams_token);
    navigate('/Dashboard');
  }, [routerParams_token]);

  return null;
}
